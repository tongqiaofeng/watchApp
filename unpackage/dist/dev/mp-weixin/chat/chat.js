(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["chat/chat"],{

/***/ 256:
/*!*************************************************************************!*\
  !*** G:/aa-tong/my-project/watchApp_Web/main.js?{"page":"chat%2Fchat"} ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./chat/chat.vue */ 257));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 257:
/*!********************************************************!*\
  !*** G:/aa-tong/my-project/watchApp_Web/chat/chat.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_vue_vue_type_template_id_60a4fe91_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=60a4fe91&scoped=true& */ 258);
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ 260);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_vue_vue_type_style_index_0_id_60a4fe91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.vue?vue&type=style&index=0&id=60a4fe91&lang=scss&scoped=true& */ 262);
/* harmony import */ var _Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_vue_vue_type_template_id_60a4fe91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_vue_vue_type_template_id_60a4fe91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "60a4fe91",
  null,
  false,
  _chat_vue_vue_type_template_id_60a4fe91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "chat/chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 258:
/*!***************************************************************************************************!*\
  !*** G:/aa-tong/my-project/watchApp_Web/chat/chat.vue?vue&type=template&id=60a4fe91&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_60a4fe91_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=template&id=60a4fe91&scoped=true& */ 259);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_60a4fe91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_60a4fe91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_60a4fe91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_60a4fe91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 259:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/aa-tong/my-project/watchApp_Web/chat/chat.vue?vue&type=template&id=60a4fe91&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniLink: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-link/components/uni-link/uni-link */ "uni_modules/uni-link/components/uni-link/uni-link").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-link/components/uni-link/uni-link.vue */ 400))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.msgList, function(msg, index) {
    var $orig = _vm.__get_orig(msg)

    var m0 = _vm.isSelf(msg.sender)
    var m1 = m0 ? _vm.getUserHead(msg.sender) : null
    var m2 = !m0 ? _vm.getUserHead(msg.sender) : null
    return {
      $orig: $orig,
      m0: m0,
      m1: m1,
      m2: m2
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 260:
/*!*********************************************************************************!*\
  !*** G:/aa-tong/my-project/watchApp_Web/chat/chat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=script&lang=js& */ 261);
/* harmony import */ var _Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 261:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/aa-tong/my-project/watchApp_Web/chat/chat.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 159));
























































































































var _time = _interopRequireDefault(__webpack_require__(/*! @/static/js/time.js */ 37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  data: function data() {
    return {
      baseFileUrl: this.$baseFileUrl,
      userId: "",
      content: "",
      flushCnt: 0,
      msgList: [],
      serviceTagTitle: '',
      serviceTag: '',
      serviceMsgId: -1,
      scrollHeight: 100,
      scrollIntoView: "",
      mode: 0,
      loadMore: true,

      detail: null,

      userNote: '',
      role: '',
      userName: '' };

  },
  onLoad: function onLoad(e) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var serviceTag;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (

                _this.$onLaunched);case 2:

              _this.userId = e.id;


              if (e.name) {
                uni.setNavigationBarTitle({
                  title: e.name });

                _this.userName = e.name;
              }

              uni.$on("user-msg-update", function (data) {
                _this.flushData();
                //alert('user-msg-update');
              });


              getApp().globalData.g_chat.setCurChatUserId(_this.userId);
              getApp().globalData.g_chat.updateUserMsg(_this.userId);
              _this.userNote = getApp().globalData.g_chat.getUserNote(_this.userId);
              _this.role = uni.getStorageSync("role");

              if (getApp().globalData.pageInItem) {
                _this.detail = getApp().globalData.pageInItem;
                getApp().globalData.pageInItem = '';
              }

              serviceTag = uni.getStorageSync('service_tag');
              if (serviceTag) {
                serviceTag = serviceTag.split("|");
                if (serviceTag.length == 2) {

                  uni.setStorageSync('service_tag', '');

                  setTimeout(function () {
                    _this.serviceTagTitle = serviceTag[0];
                    _this.serviceTag = serviceTag[1];
                  }, 1000);

                }
              }

              setTimeout(function () {
                _this.calcHeight();
              }, 500);case 13:case "end":return _context.stop();}}}, _callee);}))();
  },
  onShow: function onShow() {
    if (getApp().globalData.g_chat) {
      getApp().globalData.g_chat.updateUserMsg(this.userId);
    }
  },
  onReady: function onReady() {
    this.hidePageNavInWechatBrowser();
    this.calcHeight();
  },
  methods: {
    sendMsg: function sendMsg(txt, type) {
      if (getApp().globalData.g_chat) {
        getApp().globalData.g_chat.sendMsgToUserCmd(this.userId, txt, type);
        this.content = "";
        this.changeMode(0);
        this.detail = '';
      }
    },
    sendDetail: function sendDetail() {
      if (this.detail) {
        if (getApp().globalData.g_chat) {
          getApp().globalData.g_chat.sendMsgToUserCmd(this.userId, JSON.stringify(this.detail), 11);
          this.detail = '';
        }
      }
    },
    flushData: function flushData() {
      if (!getApp().globalData.g_chat)
      return;
      var userIdx = getApp().globalData.g_chat.findUser(this.userId);
      var userName = '';
      if (userIdx > -1) {

        var oldStartMsgId = 0;
        var oldEndMsgId = 0;
        if (this.msgList.length > 0) {
          oldStartMsgId = this.msgList[0].id;
          oldEndMsgId = this.msgList[this.msgList.length - 1].id;
        }
        this.msgList = [];
        this.msgPicList = [];
        var temp = {};
        var userList = getApp().globalData.g_chat.getUserList();
        for (var i = 0; i < userList[userIdx].msgList.length; ++i) {
          temp = this.deepClone(userList[userIdx].msgList[i]);

          if (temp.contentType == 1) {
            //处理图片
            temp.contentPic = this.baseFileUrl + "/file/" + temp.contentText;
            this.msgPicList.push(temp.contentPic);
          } else
          if (temp.contentType == 11) {
            //处理商品详情信息
            temp.contentText = JSON.parse(temp.contentText);
          } else
          {
            //处理消息中的url
            temp.contentTexts = this.getHref(temp.contentText);
          }

          this.msgList.push(temp);
          //处理时间
          this.msgList[i].showTime = this.getMsgTime(i);
        }


        if (this.msgList.length > 0) {
          var newStartMsgId = this.msgList[0].id;
          var newEndMsgId = this.msgList[this.msgList.length - 1].id;

          if (oldEndMsgId != newEndMsgId) this.scrollToMsg();

          if (this.msgList[0].isLastHistory) this.loadMore = false;else
          this.loadMore = true;
        } else {
          this.loadMore = false;
        }
      }

      this.flushCnt++;
    },
    getMsgTime: function getMsgTime(idx) {
      var time1 = 0;
      var time2 = _time.default.ISO8601DateStr2Date(this.msgList[idx].time);
      if (idx > 0) {
        time1 = _time.default.ISO8601DateStr2Date(this.msgList[idx - 1].time);
      }
      var ret = _time.default.getChatTime(time2, time1);
      return ret;
    },
    scrollToMsg: function scrollToMsg() {var _this2 = this;
      setTimeout(function () {
        _this2.scrollIntoView = "msg_" + (_this2.msgList.length - 1);
      }, 200);
    },
    loadMoreMsg: function loadMoreMsg() {
      if (getApp().globalData.g_chat)
      getApp().globalData.g_chat.getMsgHistoryCmd(this.userId, true);
    },
    calcHeight: function calcHeight() {
      var that = this;
      uni.getSystemInfo({
        success: function success(res) {
          var windownHeight = res.windowHeight; //windoHeight为窗口高度，主要使用的是这个
          var svTop = 0;
          var sv = uni.createSelectorQuery().select(".msgLst"); //想要获取高度的元素名（class/id）
          sv.boundingClientRect(function (data) {
            svTop = data.top;
          }).exec();

          var send = uni.createSelectorQuery().select(".send"); //想要获取高度的元素名（class/id）
          send.
          boundingClientRect(function (data) {
            that.scrollHeight = windownHeight - svTop - data.height;
          }).
          exec();

          console.log(that.scrollHeight);
        } });

    },
    isSelf: function isSelf(sender) {
      return getApp().globalData.g_chat.isSelf(sender);
    },
    getUserHead: function getUserHead(userId) {
      var headPic = "";
      if (getApp().globalData.g_chat.isSelf(userId)) {
        headPic = getApp().globalData.userInfo.userHeadPic;
      } else {
        var userList = getApp().globalData.g_chat.getUserList();
        for (var i = 0; i < userList.length; ++i) {
          if (userList[i].userId == userId) {
            headPic = userList[i].head_pic;
            break;
          }
        }
      }

      if (headPic) return this.$baseFileUrl + "/file/" + headPic;else
      return "../static/imgs/mine/avatar.png";
    },
    changeMode: function changeMode(mode) {
      if (mode == 0) {
        if (this.mode == 1) {
          this.mode = 0;
          this.scrollHeight += uni.upx2px(300);
        }
      } else if (this.mode == 0) {
        this.mode = 1;
        this.scrollHeight -= uni.upx2px(300);
      } else {
        this.mode = 0;
        this.scrollHeight += uni.upx2px(300);
      }
    },
    actionMode: function actionMode(type) {var _this3 = this;
      if (type == 0) {
        //图片
        uni.chooseImage({
          count: 9,
          sourceType: ["album"], //从相册选择
          success: function success(res) {
            console.log("图片选择成功", res);
            _this3.sendpic(res);
          } });

      } else if (type == 1) {
        //拍摄
        uni.chooseImage({
          count: 9,
          sourceType: ["camera"], //从选择
          success: function success(res) {
            _this3.sendpic(res);
          } });

      }
    },
    // 发送图片
    sendpic: function sendpic(res) {var _this4 = this;
      var tempFilePaths = res.tempFilePaths;
      var promiseWorkList = [];var _loop = function _loop(
      i) {
        promiseWorkList.push(
        new Promise(function (resolve, reject) {
          console.log("上传项", tempFilePaths[i]);
          uni.uploadFile({
            url: _this4.$baseFileUrl + "/upload",
            fileType: "image",
            filePath: tempFilePaths[i],
            name: "upload-images",
            success: function success(res) {
              console.log("上传成功", res);
              if (res.statusCode === 200) {
                console.log("图片信息", res.data);
                var pic = res.data.split("|")[0];
                _this4.sendMsg(pic, 1);
              } else {
                console.log()("failt to upload image:", res);
                uni.showToast({
                  title: "图片上传失败",
                  icon: "none",
                  duration: 2000 });

              }
            },
            fail: function fail(res) {
              console.log("failt to upload image:", res);
              uni.showToast({
                title: "网络连接失败",
                icon: "none",
                duration: 2000 });

            } });

        }));};for (var i = 0; i < tempFilePaths.length; i++) {_loop(i);

      }
    },
    // 预览图片
    previewImage: function previewImage(url) {
      uni.previewImage({
        current: url,
        urls: this.msgPicList,
        indicator: "default" });

    },
    copyItem: function copyItem(src) {
      uni.setClipboardData({
        data: src, //要被复制的内容
        success: function success() {
          //复制成功的回调函数
          uni.showToast({
            //提示
            title: "复制成功",
            icon: "none" });

        } });

    },
    getHref: function getHref(content) {
      if (!content) {
        return [];
      }
      var urlPattern = /(https?:\/\/|www\.)[a-zA-Z_0-9\-@]+(\.\w[a-zA-Z_0-9\-:]+)+(\/[\(\)~#&\-=?\+\%/\.\w]+)?/g;
      content = content.replace(urlPattern, function (match) {

        return "b6b675fZ-fc22-4947-b0e2-887adX93d23e" + "" + match + "b6b675fZ-fc22-4947-b0e2-887adX93d23e";
      });
      content = content.split("b6b675fZ-fc22-4947-b0e2-887adX93d23e");
      var ret = [];
      for (var i = 0; i < content.length; ++i) {
        if (content[i].length > 0) {
          if (content[i].search(urlPattern) == -1) {
            ret.push({ isUrl: false, text: content[i] });
          } else
          {
            var url = content[i];
            if (url.indexOf("http") == -1) url = "http://" + url;
            ret.push({ isUrl: true, text: content[i], url: url });
          }
        }
      }
      return ret;
    },
    gotoDetail: function gotoDetail(type, id) {
      if (type == "jewelry") {
        uni.navigateTo({
          url: "../jewelry/jewelryDetails?id=" + id });

      } else if (type == "hermes") {
        uni.navigateTo({
          url: "../hermes/details?id=" + id });

      } else if (type == "watch") {
        uni.navigateTo({
          url: "../watch/detail?id=" + id });

      }
    },
    showUserNote: function showUserNote() {
      if (this.userNote) {
        uni.setClipboardData({
          data: this.userNote, //要被复制的内容
          success: function success() {
            //复制成功的回调函数
            uni.showToast({
              //提示
              title: "复制推荐人成功",
              icon: "none" });

          } });

      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 262:
/*!******************************************************************************************************************!*\
  !*** G:/aa-tong/my-project/watchApp_Web/chat/chat.vue?vue&type=style&index=0&id=60a4fe91&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_60a4fe91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=style&index=0&id=60a4fe91&lang=scss&scoped=true& */ 263);
/* harmony import */ var _Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_60a4fe91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_60a4fe91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_60a4fe91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_60a4fe91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_60a4fe91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 263:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/aa-tong/my-project/watchApp_Web/chat/chat.vue?vue&type=style&index=0&id=60a4fe91&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[256,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/chat/chat.js.map