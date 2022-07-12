
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index","common/startPage","pages/classify","pages/chatList","pages/recycle","pages/mine","common/search","common/login","common/service","my/collectGoods","my/footprint","my/register","my/password","my/updateMyMsg","my/updatePhone","my/share","watch/newsList","watch/detail","watch/inventoryCheck","watch/saleReport","watch/saleProduct","watch/updateSale","watch/checkSalesReceipts","watch/addSale","watch/stockNumber","watch/priceHistory","watch/newsDetail","watch/newReco","chat/chat"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#F4F8FB","backgroundColor":"#F4F8FB"},"tabBar":{"color":"#9BA0A9","selectedColor":"#03314B","backgroundColor":"#FFFFFF","borderStyle":"black","list":[{"pagePath":"pages/index","text":"首页","iconPath":"static/imgs/tabBar/index.png","selectedIconPath":"static/imgs/tabBar/index01.png"},{"pagePath":"pages/classify","text":"分类","iconPath":"static/imgs/tabBar/classify.png","selectedIconPath":"static/imgs/tabBar/classify01.png"},{"pagePath":"pages/chatList","text":"消息","iconPath":"static/imgs/tabBar/message.png","selectedIconPath":"static/imgs/tabBar/message01.png"},{"pagePath":"pages/recycle","text":"回收","iconPath":"static/imgs/tabBar/recycle.png","selectedIconPath":"static/imgs/tabBar/recycle01.png"},{"pagePath":"pages/mine","text":"我的","iconPath":"static/imgs/tabBar/mine.png","selectedIconPath":"static/imgs/tabBar/mine01.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"TopTime","compilerVersion":"3.4.18","entryPagePath":"pages/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"精品腕表，尽在TopTime","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#85dbd0","enablePullDownRefresh":true,"navigationStyle":"custom","titleView":false,"bounce":"none"}},{"path":"/common/startPage","meta":{},"window":{"navigationBarTitleText":"精品腕表，尽在TopTime","navigationStyle":"custom","titleView":false,"bounce":"none"}},{"path":"/pages/classify","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"分类","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F4F8FB","enablePullDownRefresh":true}},{"path":"/pages/chatList","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"消息"}},{"path":"/pages/recycle","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"回收","navigationStyle":"custom"}},{"path":"/pages/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","navigationStyle":"custom","titleView":false}},{"path":"/common/search","meta":{},"window":{"navigationBarTitleText":"商品搜索","navigationBarBackgroundColor":"#fff","navigationStyle":"custom","enablePullDownRefresh":true,"titleView":false}},{"path":"/common/login","meta":{},"window":{"navigationBarTitleText":"登录","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F4F8FB","navigationStyle":"custom","titleView":false}},{"path":"/common/service","meta":{},"window":{"navigationBarTitleText":"联系客服","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F4F8FB","titleView":false}},{"path":"/my/collectGoods","meta":{},"window":{"navigationBarTitleText":"商品收藏","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","enablePullDownRefresh":true}},{"path":"/my/footprint","meta":{},"window":{"navigationBarTitleText":"浏览记录","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","enablePullDownRefresh":true}},{"path":"/my/register","meta":{},"window":{"navigationBarTitleText":"注册","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#fff","navigationStyle":"custom","titleView":false}},{"path":"/my/password","meta":{},"window":{"navigationBarTitleText":"重置密码","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F4F8FB","navigationStyle":"custom","titleView":false}},{"path":"/my/updateMyMsg","meta":{},"window":{"navigationBarTitleText":"个人信息","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F4F8FB","titleView":false}},{"path":"/my/updatePhone","meta":{},"window":{"navigationBarTitleText":"修改邮箱","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F4F8FB","titleView":false}},{"path":"/my/share","meta":{},"window":{"navigationBarTitleText":"邀请客户","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F4F8FB","titleView":false}},{"path":"/watch/newsList","meta":{},"window":{"navigationBarTitleText":"新闻资讯","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F4F8FB","enablePullDownRefresh":true,"titleView":false}},{"path":"/watch/detail","meta":{},"window":{"navigationBarTitleText":"详情","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#fff","enablePullDownRefresh":true,"titleView":false}},{"path":"/watch/inventoryCheck","meta":{},"window":{"navigationBarTitleText":"库存查询","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#fff","enablePullDownRefresh":true}},{"path":"/watch/saleReport","meta":{},"window":{"navigationBarTitleText":"销售单管理","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F4F8FB","enablePullDownRefresh":true,"navigationStyle":"custom","titleView":false}},{"path":"/watch/saleProduct","meta":{},"window":{"navigationBarTitleText":"出售商品","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F4F8FB","titleView":false}},{"path":"/watch/updateSale","meta":{},"window":{"navigationBarTitleText":"修改销售单","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F4F8FB","titleView":false}},{"path":"/watch/checkSalesReceipts","meta":{},"window":{"navigationBarTitleText":"销售单凭证","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F4F8FB","titleNView":{"buttons":[{"width":"80rpx","text":"","fontSrc":"/static/font/uni.ttf","fontSize":"44rpx","fontWeight":"bold","color":"#03314B"}]}}},{"path":"/watch/addSale","meta":{},"window":{"navigationBarTitleText":"出售商品","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F4F8FB","titleView":false}},{"path":"/watch/stockNumber","meta":{},"window":{"navigationBarTitleText":"库存点手表数量","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F4F8FB","titleView":false}},{"path":"/watch/priceHistory","meta":{},"window":{"navigationBarTitleText":"历史行情价","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F4F8FB","titleView":false}},{"path":"/watch/newsDetail","meta":{},"window":{"navigationBarTitleText":"TopTime","enablePullDownRefresh":true,"titleNView":{"buttons":[{"width":"80rpx","text":"","fontSrc":"/static/font/uni.ttf","fontSize":"44rpx","fontWeight":"bold","color":"#03314B"}]}}},{"path":"/watch/newReco","meta":{},"window":{"navigationBarTitleText":"上新推荐","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F4F8FB","titleView":false}},{"path":"/chat/chat","meta":{},"window":{"navigationBarTitleText":"聊天"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});