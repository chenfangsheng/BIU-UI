webpackJsonp([9],{i49J:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("IHPB"),n=e.n(s),r={data:function(){return{list:[],size:10,page:1}},computed:{imgList:function(){return this.list.map(function(t){return{src:t.url}})}},mounted:function(){this.loadList()},methods:{loadList:function(){var t=this;this.$http.get("https://gank.io/api/data/福利/"+t.size+"/"+t.page).then(function(i){var e=i.data;t.list=[].concat(n()(e.results),n()(t.list)),t.$refs.pulldown.$emit("pulldown.finishLoad"),t.page++})},show:function(t){this.$refs.previewer.show(t)}}},o={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("biu-layout",[e("biu-body",{attrs:{slot:"body",bg:"#fff"},slot:"body"},[e("biu-pulldown",{ref:"pulldown",attrs:{callback:t.loadList}},[e("biu-grid-wrap",{attrs:{rows:2,height:"50vw"}},t._l(t.list,function(i,s){return e("biu-grid-item",{key:s},[e("img",{staticClass:"biu-preview-img",attrs:{src:i.url,alt:""},on:{click:function(i){t.show(s)}}})])}))],1),t._v(" "),e("biu-backtop",{attrs:{iconColor:"#19be6b"}}),t._v(" "),e("biu-preview",{ref:"previewer",attrs:{list:t.imgList}})],1)],1)},staticRenderFns:[]};var u=e("C7Lr")(r,o,!1,function(t){e("sfig")},null,null);i.default=u.exports},sfig:function(t,i){}});