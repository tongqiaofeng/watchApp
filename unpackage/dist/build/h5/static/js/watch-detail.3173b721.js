(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["watch-detail"],{"02b4":function(t,e,i){var r=i("24fb"),n=i("1de5"),o=i("ea8e");e=r(!1);var a=n(o);e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */@font-face{font-family:iconFont;src:url('+a+")}.uni-swiper__warp[data-v-71539c7b]{display:flex;flex:1;flex-direction:column;position:relative;overflow:hidden}.uni-swiper__dots-box[data-v-71539c7b]{position:absolute;bottom:10px;left:0;right:0;display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center}.uni-swiper__dots-item[data-v-71539c7b]{width:8px;border-radius:100px;margin-left:6px;background-color:rgba(0,0,0,.4);cursor:pointer}.uni-swiper__dots-item[data-v-71539c7b]:first-child{margin:0}.uni-swiper__dots-default[data-v-71539c7b]{border-radius:100px}.uni-swiper__dots-long[data-v-71539c7b]{border-radius:50px}.uni-swiper__dots-bar[data-v-71539c7b]{border-radius:50px}.uni-swiper__dots-nav[data-v-71539c7b]{bottom:0;padding:8px 0;display:flex;flex:1;flex-direction:row;justify-content:flex-start;align-items:center;background-color:rgba(0,0,0,.2)}.uni-swiper__dots-nav-item[data-v-71539c7b]{\n  /* overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; */font-size:14px;color:#fff;margin:0 15px}.uni-swiper__dots-indexes[data-v-71539c7b]{display:flex;justify-content:center;align-items:center}.uni-swiper__dots-indexes-text[data-v-71539c7b]{color:#fff;font-size:12px;line-height:14px}",""]),t.exports=e},"02f1":function(t,e,i){"use strict";var r=i("4ea4");i("ac1f"),i("1276"),i("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=r(i("1da1")),o={data:function(){return{role:"",token:"",currency:"",detail:{},imgSrc:[],dotsStyles:{width:6,height:6,backgroundColor:"#fff",border:"#fff",selectedBackgroundColor:"#b0edd5",selectedBorder:"#b0edd5"},current:0,current2:0,collect1:i("2e99"),collect2:i("5eee"),tabItems:["参数"],tabCurrent:0,tabSelType:0,isShow:!1,detailId:null,share:{title:"精品腕表，尽在TopTime",path:"/watch/detail?id="+this.detailId,imageUrl:"",desc:"",content:""}}},onLoad:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$onLaunched;case 2:e.role=uni.getStorageSync("role"),e.token=uni.getStorageSync("token"),e.currency=getApp().globalData.userInfo.currency,e.detailId=t.id,e.getDetails(t.id);case 7:case"end":return i.stop()}}),i)})))()},onReady:function(){this.hidePageNavInWechatBrowser()},onPullDownRefresh:function(){uni.showLoading({title:"正在刷新"}),this.getDetails(this.detailId),uni.stopPullDownRefresh()},onShareAppMessage:function(t){return this.share.path="/watch/detail?id="+this.detailId,{title:this.share.title,path:this.share.path,imageUrl:this.share.imageUrl,desc:this.share.desc,content:this.share.content,success:function(t){uni.showToast({title:"分享成功",icon:"none"})},fail:function(t){uni.showToast({title:"分享失败",icon:"none"})}}},onShareTimeline:function(t){return this.share.path="/watch/detail?id="+this.detailId,{title:this.share.title,path:this.share.path,imageUrl:this.share.imageUrl,desc:this.share.desc,content:this.share.content,success:function(t){uni.showToast({title:"分享成功",icon:"none"})},fail:function(t){uni.showToast({title:"分享失败",icon:"none"})}}},methods:{checkPrice:function(){"admin"!=this.role&&"seller"!=this.role||(0==this.detail.marketPriceList.length?uni.showToast({icon:"none",title:"暂无价格历史记录"}):uni.navigateTo({url:"./priceHistory?marketPriceList="+encodeURIComponent(JSON.stringify(this.detail.marketPriceList))}))},checkStockNum:function(){0==this.detail.stockMsgList.length?uni.showToast({icon:"none",title:"暂无库存"}):uni.navigateTo({url:"./stockNumber?stockMsgList="+encodeURIComponent(JSON.stringify(this.detail.stockMsgList))})},onClickTabItem:function(t){this.tabCurrent!=t.currentIndex&&(this.tabCurrent=t.currentIndex,"参数"==this.tabItems[this.tabCurrent]?this.tabSelType=0:"价格"==this.tabItems[this.tabCurrent]?this.tabSelType=1:"销售"==this.tabItems[this.tabCurrent]?this.tabSelType=2:this.tabSelType=0)},swiperChange:function(t){this.current=t.detail.current},imagePreview:function(t){uni.previewImage({current:t,urls:this.imgSrc})},getDetails:function(t){var e=this;console.log(t),uni.showLoading({title:"加载中......"}),uni.request({url:this.$baseUrl+"/newWatch/api/watchInfo?id="+t,header:{"content-type":"application/json",token:uni.getStorageSync("token")},success:function(t){if(uni.hideLoading(),e.detail=t.data,uni.setNavigationBarTitle({title:e.detail.brand+" - "+e.detail.model}),e.imgSrc=[],""!=e.detail.pics&&null!=e.detail.pics)for(var i=e.detail.pics.split("|"),r=0;r<i.length-1;r++)i[r].trim().length>0&&(e.imgSrc.push(e.$baseUrl+"/watch/api"+i[r].trim()),e.detail.pic2||(e.detail.pic2=e.$baseUrl+"/watch/api"+i[r].trim()));e.setTabItem(),e.isShow=!0},fail:function(t){uni.hideLoading(),console.log(t)}})},setTabItem:function(){this.tabItems=["参数"],(this.detail.createTime||this.detail.cost||this.detail.pricePeer||this.detail.note)&&this.tabItems.push("价格"),(this.detail.soldTime||this.detail.saleTotalHkPrice||this.detail.customer)&&this.tabItems.push("销售")},goIndex:function(){uni.switchTab({url:"../pages/index"})},isCollectChange:function(){var t=this;if(0==uni.getStorageSync("token").length)uni.showToast({title:"请登录",icon:"none",success:function(){uni.switchTab({url:"../pages/mine"})}});else{console.log("添加与取消收藏");var e=[];e.push(this.detail.id),uni.request({method:"POST",url:this.$baseUrl+"/newWatch/api/favoriteSave",data:{watchIdList:e},header:{token:uni.getStorageSync("token")},complete:function(e){console.log("添加与取消收藏"),console.log(e),0!=t.checkBack(e,!0)&&t.getDetails(t.detail.id)}})}},serviceClick:function(){var t={type:"watch"};t.id=this.detail.id,t.pic=this.detail.pic2,t.title=this.detail.brand,t.subTitle=this.detail.model,getApp().globalData.pageInItem=t,uni.navigateTo({url:"../common/service"})}}};e.default=o},"0c43":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABK9JREFUWEftWF8I3lMYfp4iVruYstrFNMtkQrZQlsnKhBCyiymyZaLswoWLFbLVSrtYiKJMyGQLbWVly1aETFm2tpplatqEmhCyi9WjZ70/nd/5zu/f97Vay3v19f3O+57nvOf987yHOMOFZzg+nN0AJZ0D4GoA1wOYA2AmAP93AsBxAN8C+BrAHpInx7mtsTwoyWAeBbA0QHXtbbAbAbxJcl/X4vT7IICSLgTwHIBl4akhe1VrNwF4guQvfZR7A5R0hz0AwCAr+R3AVgDbAewFcIzk35LOC8/OA7AIwBIAMzK9FSQ/6ALZC6CkpwCsTYwdA/A0gM0kHW+tIul8ALeGjSuTxatJrmlT7gQo6VkAqxMjGwA8SfKPLmD59wDqw65KQmQtyWeabLUClPQwAAOyOAsfI/n6UGAFoPamQ8OetTgmXyzZbQQo6YooEZWRpSQ3Twqu0peUgvThF5L8KrffBvDLqG/Wab2GcUFnN+R6uSCvl0WAku6OK/Dezk4rdibDOEAlfQjgztBdRvKt1E4TwNR715LcM87mfXQkXRIdxx1oL8n5rQAlXRYKXvc5yRv7bDTJGklvA3ggbNQcMuLBrOaNuHwSIE260QS2xfdabSwB/AjAbbF4Rt+WNAnwIB1/RtnZSfKWyl4J4NFoU0dIzp5k4yG6kj5zqYl2eVEbQMXH2kmGbDbOWknvBjuy+rlVual5UNI0AL/FBltJ3jvOZuPoSHreHSV0p1WtNAc4FYBjwVIEGIe4GcAukmYzvSTi7BoA+0o1VdIrbqVhbKpZkX+XYvCfCNbdJBfku0t6L+jTdpK390IHIAGwjeRdLXZPkJzSFoPfBX0/TnJ6wVBVxM39/gvmLqCSDgKYC+AwyUsLdvcDMBU7QPKqNoBpsM4h+X1qTNJrAFbEf3NJHuoBzrOKq0MxdLLY30Ty/jaAKcUy71ufATSzrorqRpIP9gD4EoCVsc5MukbZJD0UbN1Lat9LMWhK/1MQysMALk8ZRgS7r8uDk6WVhgWt8khg+RnA7DxJJH0DwOOBCclMkr82etAfspo00u4k3QDgk4QVv2rWnXaduDazZ5cOEwHLknwOyZjTSOVoYjM3BQAbrcVEdTJJjwN4Oblen/6AO0EMVp6VK2BeNjJ/xAjg27g47MzLx9ImgPcBeD+UVpFcV4qzuD5PeunEli91rVxJ8p38Q3ZTnpmX52uaAHr29WBjWUTy06ZECC84sUw6HUcG60Hd3nQybSgNWNkwdgTAdSStV5MmgB8DWByD0gUk/2oCOPT/SDK3tSqrHRqLSX5RstUE0O3Oba9WNCOBHFemYY61QSLJhfqNZNYxuHtI7mgyVCoznuZ8PRZfzyOSXGg9hdmr5oomFX7CeKE0iRVizT3YHjNrrhLHsems3tV2yhLAtGjujr7s2GoSx8/O6ukDgDe29x2L1vOBqppZ2bBdg/ux6wpKANOqX9L3lGcA+aZde/m7C79H2NrkNtSDWxwXiZI94qLsjDSDOXXqKDF+fnP2pg9K+X7OTHvYz287hr4TljzoQPZ7jK/OzxOdj4+SZgUTMVDHp4PfSeQHzB+GgkpP2Pl41OfeTuea/wFO6t1/AQyh0Tg8Poz3AAAAAElFTkSuQmCC"},"1da1":function(t,e,i){"use strict";function r(t,e,i,r,n,o,a){try{var s=t[o](a),c=s.value}catch(l){return void i(l)}s.done?e(c):Promise.resolve(c).then(r,n)}function n(t){return function(){var e=this,i=arguments;return new Promise((function(n,o){var a=t.apply(e,i);function s(t){r(a,n,o,s,c,"next",t)}function c(t){r(a,n,o,s,c,"throw",t)}s(void 0)}))}}i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},2457:function(t,e,i){"use strict";i.r(e);var r=i("02f1"),n=i.n(r);for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);e["default"]=n.a},"28e7":function(t,e,i){"use strict";var r=i("d262"),n=i.n(r);n.a},"2e99":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA/dJREFUWEftmF/oX3Mcxl9PudiFFUVRymRqZWJxQSmTC5aJxUImLpQpoqZsTZlaocjN1CQ1sUzISjJREheK4mKLMsWFIoqLFUo9etb7rLPz+36/53z/sF3sXb++vz7nnPd5Pu8/z/v5HHGSm05yfJwCOG+GFhZB29cBu4DTgAclfTAvuDy/EIC2Twe+A84pUL8BF0n6Y16QiwL4PPBIB8zTkradcIC2VwDfAMuAz4G/gLX1u1rS9/OAnDuCtt8EbisQl7WAZuk1SXefMIC2Lwe+LAD7JN2Z/22/Cmyq9bWSPpkV5FwRtP0VkKglrSsk/VIAzwe+baIp6ar/HaDt24F99eIlDWH7CWBHXd8kae8sIGeKYNFKGuM84GfgAkmJ4jGzfUY1T6jnB2DNLLQzCKDtkO+FwBXAlcD6pLTQ3Cfp5VHRsX0PsKeuZSOJeGr2a0mHhkR0JEDbK4E0QOoroPKXiHTtLUkbJ73I9uvAHSPuCYkfBVv0FNBLKOk4gLZvBXYDZ014aVIZp7slvTIkCrbvr67ORsOX4yygk5G3mxuOAaw0/g5kbDX2D3CwdhoSzo4PScr61FbvuLhVKgG8uuZ34y8gz27e0QX4a6UyAO4FksK/p0YyxQO2E9GbW4yQDC1fAjA+KxVJcSydd62k/P5nVqPy41bTbZb04pIUNwsd/joMXN0Q8KJR2g4FfQqkKWM7JD3Zfs+4Ln4K2Fo3fgask3RkkQArtR8mAOV3pPoZy4MdejgAbOiS8ayAC9w7wA3lY6yomAQw5Pxuy8l+YOOsHdwqofiNArql1iZufuIkqZ2+X/ou/rZKembWyFUjbgd2lo+PgJsmZaZ31NXc/QJYBRzHUdMCLR5sqCwNmPk8sbZ7Adau2zM1KnnQHO1uwHY2GZERGzvDe7t4hOO7oo5rfeWsMr4DcJAEGxrBdt0sm3W6VE3/WRsdVM9DAb6UlET7STp32tpr3287NRgxErHxQJ+voQDTyeGsSKI1fU4nXbedhotIOCBpXZ+voQBT2Cnw/ZI2jKjRDPwcAZqpEOWzdxR92A5BhwMPSrpkUQAjwyJYd0l6qEW6WXu4Du1dQRsFHeGRVB49TBUjNIf8I5KWzw2wzhYBGHtU0nOluB8rEdoWoPnkEWsL3sinAH1B0mHbW4Bn674z+84pvSm2HYEZ0RqL4yiQSPiMrMaS0nw4eqMWbqwTXY4Mbcu4jK/Ha7GXU4cAvD4FPSYVWY8KGXkwt31Npb+Zu1036yW9NynNQwDmEJ6x1EQsajukvXMoYdu+NJ/kOiWR1K+S9ONcAKuw8+1vc30tSNH/1Ffco66XQE1T5ci6Z8g3xN4IzgJkkc+cAjhvNP8FMmVwOM21I+wAAAAASUVORK5CYII="},"45dd":function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"segmented-control",class:["text"===t.styleType?"segmented-control--text":"segmented-control--button"],style:{borderColor:"text"===t.styleType?"":t.activeColor}},t._l(t.values,(function(e,r){return i("v-uni-view",{key:r,staticClass:"segmented-control__item",class:["text"===t.styleType?"":"segmented-control__item--button",r===t.currentIndex&&"button"===t.styleType?"segmented-control__item--button--active":"",0===r&&"button"===t.styleType?"segmented-control__item--button--first":"",r===t.values.length-1&&"button"===t.styleType?"segmented-control__item--button--last":""],style:{backgroundColor:r===t.currentIndex&&"button"===t.styleType?t.activeColor:"",borderColor:r===t.currentIndex&&"text"===t.styleType||"button"===t.styleType?t.activeColor:"transparent"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick(r)}}},[i("v-uni-view",[i("v-uni-text",{staticClass:"segmented-control__text",class:"text"===t.styleType&&r===t.currentIndex?"segmented-control__item--text":"",style:{color:r===t.currentIndex?"text"===t.styleType?t.activeColor:"#fff":"text"===t.styleType?"#000":t.activeColor}},[t._v(t._s(e))])],1)],1)})),1)},o=[]},"464d":function(t,e,i){"use strict";i.r(e);var r=i("45dd"),n=i("473d");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("c222");var a,s=i("f0c5"),c=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"1c64cd4e",null,!1,r["a"],a);e["default"]=c.exports},"473d":function(t,e,i){"use strict";i.r(e);var r=i("7ed3"),n=i.n(r);for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);e["default"]=n.a},"4e21":function(t,e,i){var r=i("02b4");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("60e49d0c",r,!0,{sourceMap:!1,shadowMode:!1})},"5eee":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAArNJREFUWEflmEGIjVEUx3//srCgKAsLC4UihNiIMksyiihTRs1iSmqUnRFl1MhY2VBTslAjJCtkFoTdFGUWIwuUBUUpFrOwUH+d8T2Z57333fe+782bcuv1en3n3vN797vnnP+5Yp4PzXM+/i9A2wfjjUi6V9abKW0HbR8DRjOwfknXy4AsBdD2IuAtsDyD+gqskfS9KGRZgJeBk1UwI5JOdxzQ9krgDbCwCuYHsEHS+yKQhXfQ9l3gUB2IMUlHOwZoeyvwMgegS9LzViEL7aDtV8DmHOcTkrbPOaDtw8DtRMe9km4m2s4ya2kHbUdARFpZkej0A7BOUgROUyMJ0PYCYBWwLft0A6ub8gRTwOPszE5Kep0yvyag7XAeARDnqwK1JGXBJmwiiUeATQIT8V0rJf0BtB1V4BqwEygbJpU7oJ8BJyR9nKnrlZm2TwEjqSu12e6spAvVgDsy+jhvnRw/gd2SnswCjB9ViqRTkAOSrlac/xMkts8BQx2iG5J0/m/f9aL4IjA4x5A11U/dPGj7FtAzR5B1RUUjwAiW+3Fg2ww5DhyoV2UaVpKspD0CutoEGZVlX6MSmFvqMjn/AlhbMuQ7YIuk6Ubr5gJm6acZ5ZL6P3ok3ckzTgU8AozlLdbk8yQJlgp4BhhuEiDPfFDSpTyjVMAQEf15izX5fFTS8bw5qYARyWWnm3FJe8oCjLay7CiekrSxLMBvbdCI05IWFwa0HeI1AFPGjMhsoldZmnc9knsGba/ndz/RaIRkvwJU8treTBHltaRx89CwN0kBDGcP6tBFHQ0VUrMxt70ru7PZX2d+t6SHhSqJ7eokHYo3kvZw6r2L7U3AANBbdYfTJ+lGUcDofZ8Cy7LXGPnrU8qBrLbJGrPoffqAzyFCJH0pBNgKSJlzcs9gmc5aWWveA/4CH6zRKUT7JNcAAAAASUVORK5CYII="},"6b31":function(t,e,i){"use strict";i.r(e);var r=i("ad9c"),n=i("2457");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("28e7");var a,s=i("f0c5"),c=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"cf623fd6",null,!1,r["a"],a);e["default"]=c.exports},"6e64":function(t,e,i){"use strict";i.r(e);var r=i("baca"),n=i.n(r);for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);e["default"]=n.a},"7ed3":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"UniSegmentedControl",emits:["clickItem"],props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#2979FF"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{_onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",{currentIndex:t}))}}};e.default=r},9551:function(t,e,i){var r=i("24fb"),n=i("1de5"),o=i("ea8e");e=r(!1);var a=n(o);e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */@font-face{font-family:iconFont;src:url('+a+")}.segmented-control[data-v-1c64cd4e]{display:flex;box-sizing:border-box;flex-direction:row;height:36px;overflow:hidden;cursor:pointer}.segmented-control__item[data-v-1c64cd4e]{display:inline-flex;box-sizing:border-box;position:relative;flex:1;justify-content:center;align-items:center}.segmented-control__item--button[data-v-1c64cd4e]{border-style:solid;border-top-width:1px;border-bottom-width:1px;border-right-width:1px;border-left-width:0}.segmented-control__item--button--first[data-v-1c64cd4e]{border-left-width:1px;border-top-left-radius:5px;border-bottom-left-radius:5px}.segmented-control__item--button--last[data-v-1c64cd4e]{border-top-right-radius:5px;border-bottom-right-radius:5px}.segmented-control__item--text[data-v-1c64cd4e]{border-bottom-style:solid;border-bottom-width:2px;padding:6px 0}.segmented-control__text[data-v-1c64cd4e]{font-size:14px;line-height:20px;text-align:center}",""]),t.exports=e},"96cf":function(t,e){!function(e){"use strict";var i,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",l="object"===typeof t,d=e.regeneratorRuntime;if(d)l&&(t.exports=d);else{d=e.regeneratorRuntime=l?t.exports:{},d.wrap=y;var u="suspendedStart",f="suspendedYield",h="executing",p="completed",v={},g={};g[a]=function(){return this};var m=Object.getPrototypeOf,b=m&&m(m(P([])));b&&b!==r&&n.call(b,a)&&(g=b);var w=k.prototype=A.prototype=Object.create(g);C.prototype=w.constructor=k,k.constructor=C,k[c]=C.displayName="GeneratorFunction",d.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===C||"GeneratorFunction"===(e.displayName||e.name))},d.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},d.awrap=function(t){return{__await:t}},_(I.prototype),I.prototype[s]=function(){return this},d.AsyncIterator=I,d.async=function(t,e,i,r){var n=new I(y(t,e,i,r));return d.isGeneratorFunction(e)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},_(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},d.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){while(e.length){var r=e.pop();if(r in t)return i.value=r,i.done=!1,i}return i.done=!0,i}},d.values=P,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(B),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=i)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return s.type="throw",s.arg=t,e.next=r,n&&(e.method="next",e.arg=i),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),B(i),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var r=i.completion;if("throw"===r.type){var n=r.arg;B(i)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=i),v}}}function y(t,e,i,r){var n=e&&e.prototype instanceof A?e:A,o=Object.create(n.prototype),a=new E(r||[]);return o._invoke=S(t,i,a),o}function x(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(r){return{type:"throw",arg:r}}}function A(){}function C(){}function k(){}function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function I(t){function e(i,r,o,a){var s=x(t[i],t,r);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(l).then((function(t){c.value=t,o(c)}),(function(t){return e("throw",t,o,a)}))}a(s.arg)}var i;function r(t,r){function n(){return new Promise((function(i,n){e(t,r,i,n)}))}return i=i?i.then(n,n):n()}this._invoke=r}function S(t,e,i){var r=u;return function(n,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===n)throw o;return O()}i.method=n,i.arg=o;while(1){var a=i.delegate;if(a){var s=T(a,i);if(s){if(s===v)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(r===u)throw r=p,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r=h;var c=x(t,e,i);if("normal"===c.type){if(r=i.done?p:f,c.arg===v)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(r=p,i.method="throw",i.arg=c.arg)}}}function T(t,e){var r=t.iterator[e.method];if(r===i){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=i,T(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=x(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,v;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=i),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function B(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=i,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:i,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},9940:function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-swiper__warp"},[t._t("default"),"default"===t.mode?i("v-uni-view",{key:"default",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,r){return i("v-uni-view",{key:r,staticClass:"uni-swiper__dots-item uni-swiper__dots-bar",style:{width:(r===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.width/2+"px","background-color":r!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,"border-radius":"0px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(r)}}})})),1):t._e(),"dot"===t.mode?i("v-uni-view",{key:"dot",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,r){return i("v-uni-view",{key:r,staticClass:"uni-swiper__dots-item",style:{width:t.dots.width+"px",height:t.dots.height+"px","background-color":r!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:r!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(r)}}})})),1):t._e(),"round"===t.mode?i("v-uni-view",{key:"round",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,r){return i("v-uni-view",{key:r,staticClass:"uni-swiper__dots-item ",class:[r===t.current&&"uni-swiper__dots-long"],style:{width:(r===t.current?3*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":r!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:r!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(r)}}})})),1):t._e(),"nav"===t.mode?i("v-uni-view",{key:"nav",staticClass:"uni-swiper__dots-box uni-swiper__dots-nav",style:{"background-color":t.dotsStyles.backgroundColor,bottom:"0"}},[i("v-uni-text",{staticClass:"uni-swiper__dots-nav-item",style:{color:t.dotsStyles.color}},[t._v(t._s(t.current+1+"/"+t.info.length+" "+t.info[t.current][t.field]))])],1):t._e(),"indexes"===t.mode?i("v-uni-view",{key:"indexes",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,r){return i("v-uni-view",{key:r,staticClass:"uni-swiper__dots-item uni-swiper__dots-indexes",style:{width:t.dots.width+"px",height:t.dots.height+"px",color:r===t.current?t.dots.selectedColor:t.dots.color,"background-color":r!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:r!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(r)}}},[i("v-uni-text",{staticClass:"uni-swiper__dots-indexes-text"},[t._v(t._s(r+1))])],1)})),1):t._e()],2)},o=[]},a9ee:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAYAAABHomvIAAAAAXNSR0IArs4c6QAABNJJREFUWEftmHtsU1Ucx7+/08cGOIyCMLa2LmCIGpOxtWOiBt2yKJKYGGP4x0cYbrsd4+U/BoPRGjXREBJdnLt36CBR/lETQ4gyCAmPSICtl+EramIE2zv2gGiE4ejae3+mt+0sow+2dssSd/7rPef8fp/f+T3O75QwwwfNcD78vwCLT7TeFfXIwOotl/LlmbydoMMvbxaMXSCyGaBtmqfpg3xA5g7ob7K5yP02GK8kA+nArj5VfRVSRzgX0JwASw745lpLijvA9FwUghkaCAYBrhgU7xsp1L2XHmgZnizkpAFLjioLrUU4BKDSRAGrVy0jdQVDkbB9QdFxArlj0PyjPkw1F2uky5OBnBSg068sA9BFwD1xuMPB3weewjrfqAnxuc/uXLrkAAGPx+bxm27Yai+u3BCcKOSEAUvPyuXCwLcEui2qzAA+1jxSYyrFzh7lEyJsiBsxzKCHNI/0w0QgJwTo6JHXCqKv4/GmM/EOzeN9L5NCZ0/7y4DYSQSLaZBuPKNVN391q5C3Bsggh6q8JIDd8bgaAcSmYFVT560oKlHleouBNiKaY0IK0aBVNHaCot7PPLIDHvVZnfOXvE+MlnhmXgmTUdvv3qhmE54871I/cjOLY4nQYEZb8PyRrVj3hZ5JTmbAb1oLHIvsnwnQs3G4IcPKldqK5r6JwCXWLvIrywoZJ0FYHItf/lK7OvACanzX08lLC7j40M559gVFRwj0YHzzL8NDoeo/1265Mhm4xJ47T7fOn2e19xJoaTx5To/a5tYNlr94LZXclICLv2tfVBAW3wMxSwEcDXik2lzAxu919sgHiWiN+Z3xd8huLB8sbx4av+4mwLvVtvvYsJ4FoZDN+st7g1Ves1Tkezh75E4QrSeY6XI9ZIzeP1i9+XyynhsAHaq8RjAdjBkFgw3s0FZK7+YbLFmew69sJ+AdAoQZlwY/qa30diXWjAG6VEUCQ05MsEU8Haxo3D+VcAnZTrXjCWIegwJoe8DTZNZXE7C0u22FRVh7x+BAMkg/E/0dHsWxgVXNF6YCtKy7rVi3CDMOCaIcjG0JPRGbfu/F8o2/moAOv1ItgNPpIAyCT3NLb+YT0qUqb4DhS6tT0GNaZdPxhIvJpSqHwahLuYG5N1DlNbuWfA2XX4kW+pQymXAk6JaijQYnJwmVnd9TEOn/a+ybsM3tANHzYJwLVEkV+YKLynH5lWhIrTAInyJ0TUrItobu4As19aFYnsZjMJ1il1/eA9D6TIBm68WoB3HBDXKYQhER2dfvbvk5lfwEIIP3Bj3e+nQMGa+6bIClZ+RVQuAEEVlTKWCGbgj9kT73xpvie1oAnX75NQK9lcn1DLwe9Eg3rZkWwORMDNnmmA1sYhSER2LvEIIvkKICTDtgwCPdEC4uvxLr9WYBM2RxsotnTzB1rcpcB2dPMNebZPYEJ3CCP0XCo/GX3X/RarHZW4iwKfolXRYz40M9PNo2PsYtNvt+IizP7S7ubt8NIRqydzF8JeDx3p68ztkj/5N4qGe+CnNoFpzd8moQurIpMoBWzSNtTQZx+TtaAd6cxbiwrvOjfdXeU5PqZqKbik+1l9msVJ5eAF8OVDWfTDVf0tv+sCVCC9PtjVis5/orG/7IZET2vz6y+3dKV8x4wH8B77qWSPnwZewAAAAASUVORK5CYII="},ad9c:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return r}));var r={uniSwiperDot:i("d122").default,uniSegmentedControl:i("464d").default},n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isShow?r("v-uni-view",{staticClass:"detail"},[r("v-uni-view",{staticStyle:{"background-color":"#fff"}},[r("uni-swiper-dot",{attrs:{info:t.imgSrc,current:t.current,mode:"dot",dotsStyles:t.dotsStyles}},[r("v-uni-swiper",{staticClass:"swiper-box",staticStyle:{height:"700rpx"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.imgSrc,(function(e,i){return r("v-uni-swiper-item",{key:i},[r("v-uni-view",{staticClass:"swiper-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.imagePreview(i)}}},[r("v-uni-image",{staticStyle:{width:"100%",height:"700rpx"},attrs:{src:e,mode:"aspectFill"}})],1)],1)})),1)],1)],1),r("v-uni-view",{staticClass:"detail-top"},[r("v-uni-view",{staticClass:"price"},[r("v-uni-view",{staticClass:"price-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkPrice.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"left-hkd",style:{"letter-spacing":0==t.detail.marketHkPrice?"2rpx":0}},[t.detail.marketHkPrice?r("v-uni-text",{staticStyle:{"font-size":"28rpx"}},[t._v("HKD")]):t._e(),r("v-uni-text",[t._v(t._s(t.getPrice(t.detail.marketHkPrice,"")))])],1),r("v-uni-text",{staticStyle:{margin:"0 14rpx","font-size":"28rpx"}},[t._v("/")]),r("v-uni-text",{staticClass:"left-usd",style:{"letter-spacing":0==t.detail.marketUsPrice?"2rpx":0}},[t._v(t._s(t.getPrice(t.detail.marketUsPrice,"USD")))])],1),"admin"==t.role||"seller"==t.role?r("v-uni-view",{staticClass:"price-right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkStockNum.apply(void 0,arguments)}}},[t._v("库存："+t._s(t.detail.stockInNum))]):t._e()],1),r("v-uni-view",{staticClass:"name"},[t._v(t._s(t.detail.model))]),r("v-uni-view",{staticClass:"note"},[r("v-uni-view",{staticClass:"publicPrice"},[t._v("公价："+t._s(t.getPrice(t.detail.publicPrice,"","暂无")))])],1)],1),t.tabItems.length>1?r("uni-segmented-control",{staticStyle:{"background-color":"#ffffff"},attrs:{current:t.tabCurrent,values:t.tabItems,styleType:"text",activeColor:"#85dbd0"},on:{clickItem:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickTabItem.apply(void 0,arguments)}}}):t._e(),0==t.tabSelType?r("v-uni-view",{staticClass:"product-parameter"},[1==t.tabItems.length?r("v-uni-view",[r("v-uni-view",{staticClass:"parameter"},[t._v("参数")])],1):t._e(),r("v-uni-view",{staticClass:"parameter-main"},[r("v-uni-view",{staticClass:"parameter-every"},[r("v-uni-text",{staticClass:"title"},[t._v("品牌")]),r("v-uni-text",{staticClass:"container"},[t._v(t._s(t.detail.brand))])],1),t.detail.series?r("v-uni-view",{staticClass:"parameter-every"},[r("v-uni-text",{staticClass:"title"},[t._v("系列")]),r("v-uni-text",{staticClass:"container"},[t._v(t._s(t.detail.series))])],1):t._e(),t.detail.model?r("v-uni-view",{staticClass:"parameter-every"},[r("v-uni-text",{staticClass:"title"},[t._v("型号")]),r("v-uni-text",{staticClass:"container"},[t._v(t._s(t.detail.model))])],1):t._e(),t.detail.movementType?r("v-uni-view",{staticClass:"parameter-every"},[r("v-uni-text",{staticClass:"title"},[t._v("机芯类型")]),r("v-uni-text",{staticClass:"container"},[t._v(t._s(t.detail.movementType))])],1):t._e(),t.detail.dialSize?r("v-uni-view",{staticClass:"parameter-every"},[r("v-uni-text",{staticClass:"title"},[t._v("表盘大小")]),r("v-uni-text",{staticClass:"container"},[t._v(t._s(t.detail.dialSize))])],1):t._e(),t.detail.crownMaterial?r("v-uni-view",{staticClass:"parameter-every"},[r("v-uni-text",{staticClass:"title"},[t._v("表壳材质")]),r("v-uni-text",{staticClass:"container"},[t._v(t._s(t.detail.crownMaterial))])],1):t._e(),t.detail.waterproof?r("v-uni-view",{staticClass:"parameter-every"},[r("v-uni-text",{staticClass:"title"},[t._v("防水深度")]),r("v-uni-text",{staticClass:"container"},[t._v(t._s(t.detail.waterproof)+"米")])],1):t._e(),t.detail.func?r("v-uni-view",{staticClass:"parameter-every"},[r("v-uni-text",{staticClass:"title"},[t._v("功能")]),r("v-uni-text",{staticClass:"container"},[t._v(t._s(t.detail.func))])],1):t._e(),t.detail.startYear?r("v-uni-view",{staticClass:"parameter-every"},[r("v-uni-text",{staticClass:"title"},[t._v("上市时间")]),r("v-uni-text",{staticClass:"container"},[t._v(t._s(t.detail.startYear))])],1):t._e()],1)],1):t._e(),r("v-uni-view",{staticClass:"product-bottom"},[r("v-uni-view",{staticClass:"bottom-left"},[r("v-uni-view",{staticClass:"left-index",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goIndex.apply(void 0,arguments)}}},[r("v-uni-image",{staticClass:"index-img",attrs:{src:i("a9ee"),mode:"aspectFit"}}),r("v-uni-view",{staticClass:"index-font"},[t._v("首页")])],1)],1),r("v-uni-view",{staticClass:"bottom-right"},[r("v-uni-view",{staticClass:"right-collect",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isCollectChange.apply(void 0,arguments)}}},[r("v-uni-image",{staticClass:"index-img",attrs:{src:t.detail.isCollect?t.collect2:t.collect1,mode:"aspectFit"}}),r("v-uni-view",{staticClass:"index-font"},[t._v(t._s(0==t.detail.isCollect?"收藏":"已收藏"))])],1),r("v-uni-view",{staticClass:"right-service",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.serviceClick.apply(void 0,arguments)}}},[r("v-uni-image",{staticClass:"index-img",attrs:{src:i("0c43"),mode:"aspectFit"}}),r("v-uni-view",{staticClass:"index-font"},[t._v("联系客服")])],1)],1)],1)],1):t._e()},o=[]},baca:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"UniSwiperDot",emits:["clickItem"],props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:6,height:6,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=14,this.dots.height=14):(this.dots.width=6,this.dots.height=6)}},created:function(){"indexes"===this.mode&&(this.dots.width=12,this.dots.height=12),this.dots=Object.assign(this.dots,this.dotsStyles)},methods:{clickItem:function(t){this.$emit("clickItem",t)}}};e.default=r},c222:function(t,e,i){"use strict";var r=i("cb36"),n=i.n(r);n.a},cb36:function(t,e,i){var r=i("9551");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("1c5e70a2",r,!0,{sourceMap:!1,shadowMode:!1})},cefc:function(t,e,i){var r=i("24fb"),n=i("1de5"),o=i("ea8e");e=r(!1);var a=n(o);e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */@font-face{font-family:iconFont;src:url('+a+")}.detail[data-v-cf623fd6]{width:100%;padding-bottom:%?150?%;background-color:#f4f8fb}.detail .uni-swiper__dots-nav[data-v-cf623fd6]{justify-content:flex-end}.detail .detail-top[data-v-cf623fd6]{margin:%?20?% %?24?% 0;padding:%?20?% %?19?% %?38?%;background-color:#fff;border-radius:%?20?%}.detail .detail-top .price[data-v-cf623fd6]{display:flex;align-items:center;justify-content:space-between;font-size:%?30?%;color:#000}.detail .detail-top .price .price-left[data-v-cf623fd6]{height:-webkit-fit-content;height:fit-content;display:flex;align-items:center}.detail .detail-top .price .price-left .left-hkd[data-v-cf623fd6]{font-size:%?48?%;color:#1ecc99;font-weight:700}.detail .detail-top .price .price-left .left-usd[data-v-cf623fd6]{color:#4d555a;font-weight:700;font-size:%?28?%}.detail .detail-top .price .price-right[data-v-cf623fd6]{font-size:%?26?%;color:#03314b;cursor:pointer}.detail .detail-top .name[data-v-cf623fd6]{padding:%?16?% 0;background-color:#fff;font-size:%?32?%;color:#03314b}.detail .detail-top .note[data-v-cf623fd6]{background-color:#fff;display:flex;justify-content:space-between}.detail .detail-top .note .publicPrice[data-v-cf623fd6]{color:#b6bac9;font-size:%?20?%}.detail .product-parameter[data-v-cf623fd6]{margin:%?20?% %?24?% 0;padding:%?40?% %?20?%;background-color:#fff;text-align:left;border-radius:%?20?%}.detail .product-parameter .parameter[data-v-cf623fd6]{font-size:%?32?%;font-weight:700;color:#03314b}.detail .product-parameter .parameter-line[data-v-cf623fd6]{height:%?4?%;margin-top:%?30?%;background-color:#f9f9f9;border-radius:5px}.detail .product-parameter .parameter-main[data-v-cf623fd6]{margin-top:%?39?%;border:%?2?% solid #c7cfd3;border-top:none}.detail .product-parameter .parameter-main .parameter-every[data-v-cf623fd6]{height:%?70?%;display:flex;justify-content:space-between;align-items:center;font-size:%?24?%;border-top:%?2?% solid #c7cfd3;background-color:#f4f8fb;box-sizing:border-box}.detail .product-parameter .parameter-main .parameter-every .title[data-v-cf623fd6]{width:%?180?%;height:100%;padding-left:%?20?%;line-height:%?70?%;color:#54626a;border-right:%?2?% solid #c7cfd3;box-sizing:border-box}.detail .product-parameter .parameter-main .parameter-every .container[data-v-cf623fd6]{height:100%;padding-left:%?22?%;line-height:%?70?%;flex:1;color:#03314b;background-color:#fff}.detail .product-comment[data-v-cf623fd6]{margin-top:%?20?%;padding-bottom:%?160?%;background-color:#fff}.detail .step[data-v-cf623fd6]{padding:%?30?% %?30?% %?10?% %?30?%;background-color:#fff}.detail .step .steptitle[data-v-cf623fd6]{font-size:%?28?%;margin-bottom:%?20?%}.detail .step .row[data-v-cf623fd6]{display:flex}.detail .step .item[data-v-cf623fd6]{margin-bottom:%?60?%;color:#666;align-items:flex-start}.detail .step .item .dot[data-v-cf623fd6]{width:%?20?%;height:%?20?%;background-color:#85dbd0;border-radius:%?30?%;margin-right:%?20?%}.detail .step .item .time[data-v-cf623fd6]{font-size:%?24?%}.detail .step .item .desc[data-v-cf623fd6]{font-size:%?24?%;word-break:break-all;word-wrap:break-word}.detail .step .line[data-v-cf623fd6]{margin:%?10?% %?16?%;border-left:%?1?% solid #e2ebfd;height:%?56?%;line-height:%?56?%;padding-left:%?46?%;font-size:%?22?%}.detail .step .line .yesName[data-v-cf623fd6]{color:#b6bac9}.detail .step .line .noName[data-v-cf623fd6]{color:#b6bac9}.detail .product-bottom[data-v-cf623fd6]{position:fixed;bottom:0;left:0;right:0;padding:%?20?% %?24?%;display:flex;justify-content:space-between;align-items:center;background-color:#fff;border-top:1px solid #f9f9f9}.detail .product-bottom .bottom-left .left-index[data-v-cf623fd6]{margin-right:%?40?%;display:flex;flex-direction:column;align-items:center;cursor:pointer}.detail .product-bottom .bottom-left .index-img[data-v-cf623fd6]{width:%?40?%;height:%?41?%}.detail .product-bottom .bottom-left .index-font[data-v-cf623fd6]{margin-top:%?8?%;font-size:%?20?%;color:#757980}.detail .product-bottom .bottom-right[data-v-cf623fd6]{display:flex}.detail .product-bottom .bottom-right .right-collect[data-v-cf623fd6],\n.detail .product-bottom .bottom-right .right-service[data-v-cf623fd6]{display:flex;justify-content:center;align-items:center;font-size:%?28?%;color:#fff;border-radius:%?60?%}.detail .product-bottom .bottom-right .right-collect .index-img[data-v-cf623fd6],\n.detail .product-bottom .bottom-right .right-service .index-img[data-v-cf623fd6]{width:%?40?%;height:%?40?%;margin-right:%?6?%}.detail .product-bottom .bottom-right .right-collect[data-v-cf623fd6]{width:%?236?%;height:%?80?%;margin-right:%?16?%;background-color:#03314b}.detail .product-bottom .bottom-right .right-service[data-v-cf623fd6]{width:%?343?%;height:%?80?%;background-color:#1ecc99}",""]),t.exports=e},d122:function(t,e,i){"use strict";i.r(e);var r=i("9940"),n=i("6e64");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("e5fc");var a,s=i("f0c5"),c=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"71539c7b",null,!1,r["a"],a);e["default"]=c.exports},d262:function(t,e,i){var r=i("cefc");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("063dd5c0",r,!0,{sourceMap:!1,shadowMode:!1})},e5fc:function(t,e,i){"use strict";var r=i("4e21"),n=i.n(r);n.a}}]);