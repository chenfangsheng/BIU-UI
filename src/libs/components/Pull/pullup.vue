<template>
  <div>
    <slot name="list"></slot>

    <div ref="tag" style="height: 0;"></div>

    <div class="biu-pullup-type">
      <div class="biu-list-loading" v-show="!isDone">
        <!-- <div v-show="isLoading"> -->
        <div>
          <slot name="loadingTip">
            <loading></loading>
          </slot>
        </div>
      </div>

      <div class="biu-list-donetip" v-show="!isLoading && isDone">
        <slot name="doneTip">没有更多数据了</slot>
      </div>
    </div>
    
  </div>
</template>

<script type="text/babel">
import Loading from "./loading.vue";
import { getScrollview } from "../../../utils";

export default {
  name: "biu-pullup",
  components: { Loading },
  data() {
    return {
      isLoading: false,
      isDone: false,
      num: 1
    };
  },
  props: {
    callback: {
      type: Function
    },
    distance: {
      default: 0,
      validator(val) {
        return /^\d*$/.test(val);
      }
    },
    scrollTop: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    init() {
      this.scrollview = getScrollview(this.$el);

      if (this.scrollTop) {
        if (this.scrollview === window) {
          window.scrollTo(0, 0);
        } else {
          this.scrollview.scrollTop = 0;
        }
      }

      this.scrollview.addEventListener("scroll", this.throttledCheck, false);

      this.$on("pullup.loadedDone", () => {
        this.isLoading = false;
        this.isDone = true;
      });

      this.$on("pullup.finishLoad", ret => {
        this.isLoading = false;
      });

      this.$on("pullup.reInit", () => {
        this.isLoading = false;
        this.isDone = false;
      });
    },
    scrollHandler() {
      if (this.isLoading || this.isDone) return;

      const scrollview = this.scrollview;
      const contentHeight = document.body.offsetHeight;
      const isWindow = scrollview === window;
      const offsetTop = isWindow ? 0 : scrollview.getBoundingClientRect().top;
      const scrollviewHeight = isWindow
        ? contentHeight
        : scrollview.offsetHeight;

      if (!scrollview) {
        console.warn("Can't find the scrollview!");
        return;
      }

      if (!this.$refs.tag) {
        console.warn("Can't find the refs.tag!");
        return;
      }

      const tagOffsetTop =
        Math.floor(this.$refs.tag.getBoundingClientRect().top) - 1;
      const distance =
        !!this.distance && this.distance > 0
          ? ~~this.distance
          : Math.floor(contentHeight / 10);

      if (
        tagOffsetTop > offsetTop &&
        tagOffsetTop - (distance + offsetTop) * this.num <= contentHeight &&
        this.$el.offsetHeight > scrollviewHeight
      ) {
        this.isLoading = true;
        this.callback && this.callback();
        this.num++;
      }
    },
    throttle(method, context) {
      clearTimeout(method.tId);
      method.tId = setTimeout(() => {
        method.call(context);
      }, 30);
    },
    throttledCheck() {
      this.throttle(this.scrollHandler);
    }
  },
  mounted() {
    this.$nextTick(this.init);
  },
  beforeDestroy() {
    this.scrollview.removeEventListener("scroll", this.throttledCheck);
  }
};
</script>
