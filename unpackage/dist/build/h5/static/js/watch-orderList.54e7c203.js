(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["watch-orderList"],{"80a5":function(t,e,n){var i=n("c2a4");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("8af2d67e",i,!0,{sourceMap:!1,shadowMode:!1})},"8b1e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{imgUrl:this.$baseUrl+"/watch/api",saleList:[]}},onLoad:function(){this.saleSearch()},onPullDownRefresh:function(){uni.showLoading({title:"正在刷新"}),this.saleList=[],this.saleSearch(),uni.stopPullDownRefresh()},methods:{checkSalesReceipts:function(t){uni.navigateTo({url:"./order?id="+t.sellOrderNo})},saleSearch:function(){var t=this;uni.showLoading({title:"加载中..."}),this.soldNum=0,this.reserveNum=0;var e={};e={page:this.page,pageNum:10},uni.request({url:this.$baseUrl+"/newWatch/api/customerSellOrderList",method:"POST",header:{"content-type":"application/json",token:uni.getStorageSync("token")},data:e,complete:function(e){uni.hideLoading(),0!=t.checkBack(e)&&(t.saleList=e.data,0==t.saleList.length&&uni.showToast({icon:"none",title:"暂无数据"}))}})}}};e.default=i},ab08:function(t,e,n){"use strict";n.r(e);var i=n("d9b8"),a=n("d92f");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("dfdb");var o,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"0c2067c8",null,!1,i["a"],o);e["default"]=c.exports},bfa2:function(t,e,n){t.exports=n.p+"static/img/no.ada49a16.png"},c2a4:function(t,e,n){var i=n("24fb"),a=n("1de5"),s=n("ea8e");e=i(!1);var o=a(s);e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */@font-face{font-family:iconFont;src:url('+o+")}.content[data-v-0c2067c8]{min-height:100vh;padding:%?30?% 0;background-color:#f9f9f9}.content .inventory-main[data-v-0c2067c8]{padding:0 %?24?%}.content .inventory-main .inventory-num[data-v-0c2067c8]{margin-bottom:%?20?%;font-size:%?22?%;color:#aaa}.content .inventory-main .sale-list-container .list-every[data-v-0c2067c8]{margin-bottom:%?30?%;padding:%?20?% %?24?% %?30?%;border-radius:%?30?%;position:relative;background-color:#fff}.content .inventory-main .sale-list-container .list-every .every-top[data-v-0c2067c8]{display:flex;justify-content:space-between;align-items:center;font-size:%?26?%}.content .inventory-main .sale-list-container .list-every .every-top .top-right[data-v-0c2067c8]{font-size:%?24?%;color:#1ecc99}.content .inventory-main .sale-list-container .list-every .row[data-v-0c2067c8]{margin-top:%?30?%;display:flex;align-items:center;color:#999;font-size:%?26?%}.content .inventory-main .sale-list-container .list-every .row .img[data-v-0c2067c8]{width:%?166?%;height:%?168?%;margin-right:%?20?%;border-radius:%?20?%}.content .inventory-main .sale-list-container .list-every .row .every-name[data-v-0c2067c8]{width:100%;display:flex;justify-content:space-between}.content .inventory-main .sale-list-container .list-every .row .every-name .bh[data-v-0c2067c8]{width:%?350?%;flex:1;overflow:hidden;word-break:keep-all;white-space:nowrap;text-overflow:ellipsis;font-size:%?28?%;color:#03314b}.content .inventory-main .sale-list-container .list-every .row .every-main .cs[data-v-0c2067c8]{margin-top:%?10?%;font-size:%?22?%}.content .inventory-main .sale-list-container .list-every .line[data-v-0c2067c8]{width:100%;height:%?2?%;margin:%?30?% 0;background-color:#f9f9f9}.content .inventory-main .sale-list-container .list-every .price[data-v-0c2067c8]{display:flex;justify-content:space-between;flex-wrap:wrap;font-size:%?26?%}.content .inventory-main .sale-list-container .list-every .price .price-every[data-v-0c2067c8]{margin-top:%?20?%}",""]),t.exports=e},d92f:function(t,e,n){"use strict";n.r(e);var i=n("8b1e"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},d9b8:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[0==t.saleList.length?i("v-uni-view",{staticClass:"no-data"},[i("v-uni-image",{attrs:{src:n("bfa2"),mode:"aspectFill"}}),i("v-uni-text",{staticStyle:{"font-size":"30rpx"}},[t._v("暂无数据~")])],1):i("v-uni-view",{staticClass:"inventory-main"},[i("v-uni-view",{staticClass:"sale-list-container"},t._l(t.saleList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"list-every",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.checkSalesReceipts(e)}}},[i("v-uni-view",{staticClass:"every-top",staticStyle:{"margin-top":"20rpx"}},[i("v-uni-view",{staticClass:"top-left"},[i("v-uni-text",[t._v("订单号："+t._s(e.sellOrderNo))])],1),i("v-uni-view",{staticClass:"top-right",staticStyle:{color:"#000"}},[i("v-uni-text",[t._v(t._s(e.sellTime))])],1)],1),t._l(e.watchList,(function(e){return i("v-uni-view",{key:e.stockId,staticClass:"row"},[i("v-uni-view",{staticClass:"img"},[e.pic?i("v-uni-image",{staticClass:"img",attrs:{src:t.imgUrl+e.pic.replace("\\","/"),mode:"aspectFill"}}):t._e()],1),i("v-uni-view",{staticStyle:{flex:"1"}},[i("v-uni-view",{staticClass:"every-name"},[i("v-uni-view",{staticClass:"bh"},[t._v(t._s(e.brand+" - "+e.series))])],1),i("v-uni-view",{staticClass:"every-name",staticStyle:{"margin-top":"20rpx"}},[i("v-uni-view",{staticClass:"bh"},[t._v(t._s(e.model))])],1)],1)],1)}))],2)})),1)],1)],1)},s=[]},dfdb:function(t,e,n){"use strict";var i=n("80a5"),a=n.n(i);a.a}}]);