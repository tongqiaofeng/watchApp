(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["watch-stockNumber"],{"1d7e":function(t,n,e){"use strict";e.r(n);var a=e("7c3c"),r=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=r.a},"372f":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var a={uniTable:e("93db").default,uniTr:e("37f5").default,uniTh:e("d411").default,uniTd:e("f08e").default},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"stock-number-container"},[e("uni-table",{attrs:{border:!0,stripe:!0,emptyText:"暂无更多数据"}},[e("uni-tr",[e("uni-th",{attrs:{align:"center"}},[t._v("机芯号")]),e("uni-th",{attrs:{align:"center"}},[t._v("保卡时间")]),e("uni-th",{attrs:{align:"center"}},[t._v("库存地")])],1),t._l(t.stockMsgList,(function(n,a){return e("uni-tr",{key:a},[e("uni-td",{attrs:{align:"center"}},[t._v(t._s(n.buyWatchSn))]),e("uni-td",{attrs:{align:"center"}},[t._v(t._s(n.buyWatchCard))]),e("uni-td",{attrs:{align:"center"}},[t._v(t._s(n.warehouseName))])],1)}))],2)],1)},u=[]},"672c":function(t,n,e){"use strict";var a=e("c4e1"),r=e.n(a);r.a},"7c3c":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{stockMsgList:null}},onLoad:function(t){this.stockMsgList=JSON.parse(decodeURIComponent(t.stockMsgList)),console.log(this.stockMsgList)},methods:{}};n.default=a},"8a02":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.stock-number-container[data-v-7b6bdab1]{min-height:100vh;padding:%?24?% %?24?% %?30?%;background-color:#f4f8fb}',""]),t.exports=n},abe3:function(t,n,e){"use strict";e.r(n);var a=e("372f"),r=e("1d7e");for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e("672c");var c,i=e("f0c5"),s=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"7b6bdab1",null,!1,a["a"],c);n["default"]=s.exports},c4e1:function(t,n,e){var a=e("8a02");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("b0b9fd86",a,!0,{sourceMap:!1,shadowMode:!1})}}]);