webpackJsonp([20],{"Zp+1":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("biu-layout",[t("biu-body",{attrs:{slot:"body"},slot:"body"},[t("h5",{staticClass:"biu-remarks"},[e._v("常用示例-结合swiper组件")]),e._v(" "),t("biu-tab",{attrs:{"active-color":"#ff9900"},model:{value:e.index,callback:function(i){e.index=i},expression:"index"}},e._l(5,function(i,s){return t("biu-tab-item",{key:s,staticClass:"biu-center"},[e._v(e._s("item"+(s+1)))])})),e._v(" "),t("biu-swiper",{attrs:{height:"3rem","show-dots":!1},model:{value:e.index,callback:function(i){e.index=i},expression:"index"}},e._l(5,function(i,s){return t("biu-swiper-item",{key:s},[t("div",{staticClass:"tab-swiper biu-center"},[e._v(e._s("item"+(s+1))+" Container")])])})),e._v(" "),t("h5",{staticClass:"biu-remarks"},[e._v("bar-position: top（bar位置）")]),e._v(" "),t("biu-tab",{attrs:{"active-color":"#8b78e2","bar-position":"top"},model:{value:e.index1,callback:function(i){e.index1=i},expression:"index1"}},e._l(6,function(i,s){return t("biu-tab-item",{key:s,staticClass:"biu-center"},[e._v(e._s("item"+(s+1)))])})),e._v(" "),t("biu-swiper",{attrs:{height:"3rem","show-dots":!1},model:{value:e.index1,callback:function(i){e.index1=i},expression:"index1"}},e._l(6,function(i,s){return t("biu-swiper-item",{key:s},[t("div",{staticClass:"tab-swiper biu-center"},[e._v(e._s("item"+(s+1))+" Container")])])})),e._v(" "),t("h5",{staticClass:"biu-remarks"},[e._v("scroll-threshold: 6（滚动阀值）")]),e._v(" "),t("biu-tab",{attrs:{"active-color":"#2db7f5","scroll-threshold":6},model:{value:e.index2,callback:function(i){e.index2=i},expression:"index2"}},e._l(6,function(i,s){return t("biu-tab-item",{key:s,staticClass:"biu-center"},[e._v(e._s("item"+(s+1)))])})),e._v(" "),t("biu-swiper",{attrs:{height:"3rem","show-dots":!1},model:{value:e.index2,callback:function(i){e.index2=i},expression:"index2"}},e._l(6,function(i,s){return t("biu-swiper-item",{key:s},[t("div",{staticClass:"tab-swiper biu-center"},[e._v(e._s("item"+(s+1))+" Container")])])})),e._v(" "),t("h5",{staticClass:"biu-remarks"},[e._v("line: true（显示分割线）")]),e._v(" "),t("biu-tab",{attrs:{"active-color":"#19be6b",line:""},model:{value:e.index3,callback:function(i){e.index3=i},expression:"index3"}},e._l(2,function(i,s){return t("biu-tab-item",{key:s,staticClass:"biu-center"},[e._v(e._s("item"+(s+1)))])})),e._v(" "),t("biu-swiper",{attrs:{height:"3rem","show-dots":!1},model:{value:e.index3,callback:function(i){e.index3=i},expression:"index3"}},e._l(2,function(i,s){return t("biu-swiper-item",{key:s},[t("div",{staticClass:"tab-swiper biu-center"},[e._v(e._s("item"+(s+1))+" Container")])])})),e._v(" "),t("h5",{staticClass:"biu-remarks"},[e._v("animate: false（bar无动画）")]),e._v(" "),t("biu-tab",{attrs:{"active-color":"#fc378c",animate:!1},model:{value:e.index4,callback:function(i){e.index4=i},expression:"index4"}},e._l(2,function(i,s){return t("biu-tab-item",{key:s,staticClass:"biu-center"},[e._v(e._s("item"+(s+1)))])})),e._v(" "),t("biu-swiper",{attrs:{height:"3rem","show-dots":!1},model:{value:e.index4,callback:function(i){e.index4=i},expression:"index4"}},e._l(2,function(i,s){return t("biu-swiper-item",{key:s},[t("div",{staticClass:"tab-swiper biu-center"},[e._v(e._s("item"+(s+1))+" Container")])])})),e._v(" "),t("h5",{staticClass:"biu-remarks"},[e._v("badge-label（角标）")]),e._v(" "),t("biu-tab",{attrs:{"active-color":"#ff9900",line:""},model:{value:e.index5,callback:function(i){e.index5=i},expression:"index5"}},[t("biu-tab-item",{staticClass:"biu-center"},[e._v("新闻列表"),t("biu-badge",{attrs:{scale:".8"}},[e._v("1")])],1),e._v(" "),t("biu-tab-item",{staticClass:"biu-center"},[e._v("我的消息"),t("biu-badge",{attrs:{scale:".8"}},[e._v("2")])],1)],1),e._v(" "),t("biu-swiper",{attrs:{height:"3rem","show-dots":!1},model:{value:e.index5,callback:function(i){e.index5=i},expression:"index5"}},e._l(2,function(i,s){return t("biu-swiper-item",{key:s},[t("div",{staticClass:"tab-swiper biu-center"},[e._v(e._s("item"+(s+1))+" Container")])])})),e._v(" "),t("h5",{staticClass:"biu-remarks"},[e._v("动态根据item文字长短获取bar宽度")]),e._v(" "),t("biu-tab",{attrs:{"active-color":"#2db7f5","custom-bar-width":e.getBarWidth(e.index6)},model:{value:e.index6,callback:function(i){e.index6=i},expression:"index6"}},e._l(e.list,function(i,s){return t("biu-tab-item",{key:s,staticClass:"biu-center"},[e._v(e._s(i))])})),e._v(" "),t("biu-swiper",{attrs:{height:"3rem","show-dots":!1},model:{value:e.index6,callback:function(i){e.index6=i},expression:"index6"}},e._l(e.list,function(i,s){return t("biu-swiper-item",{key:s},[t("div",{staticClass:"tab-swiper biu-center"},[e._v(e._s(i)+" Container")])])})),e._v(" "),t("h5",{staticClass:"biu-remarks"},[e._v("END")]),e._v(" "),t("biu-backtop")],1)],1)},staticRenderFns:[]};var n=t("C7Lr")({data:function(){return{index:0,index1:0,index2:0,index3:0,index4:0,index5:0,index6:0,list:["美食","美食杂志","最全美食杂志"]}},methods:{getBarWidth:function(e){return 16*this.list[e].length+"px"}}},s,!1,function(e){t("ydAM")},null,null);i.default=n.exports},ydAM:function(e,i){}});