(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/chat/chat"],{

/***/ 74:
/*!*****************************************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/main.js?{"page":"pages%2Fchat%2Fchat%2Fchat"} ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./pages/chat/chat/chat.nvue */ 75));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 75:
/*!*********************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/pages/chat/chat/chat.nvue ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_nvue_vue_type_template_id_411c1acd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.nvue?vue&type=template&id=411c1acd& */ 76);
/* harmony import */ var _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.nvue?vue&type=script&lang=js& */ 78);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.nvue?vue&type=style&index=0&lang=css& */ 80);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_nvue_vue_type_template_id_411c1acd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_nvue_vue_type_template_id_411c1acd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _chat_nvue_vue_type_template_id_411c1acd___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/chat/chat/chat.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/*!****************************************************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/pages/chat/chat/chat.nvue?vue&type=template&id=411c1acd& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_411c1acd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=template&id=411c1acd& */ 77);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_411c1acd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_411c1acd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_411c1acd___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_411c1acd___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 77:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/jhq/WeChatProjects/weixinApp/pages/chat/chat/chat.nvue?vue&type=template&id=411c1acd& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 78:
/*!**********************************************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/pages/chat/chat/chat.nvue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=script&lang=js& */ 79);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 79:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/jhq/WeChatProjects/weixinApp/pages/chat/chat/chat.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





























































































































































var _vuex = __webpack_require__(/*! vuex */ 13);




var _auth = _interopRequireDefault(__webpack_require__(/*! @/common/mixin/auth.js */ 47));
var _util = _interopRequireDefault(__webpack_require__(/*! @/common/free-lib/util.js */ 16));
var _request = _interopRequireDefault(__webpack_require__(/*! @/common/free-lib/request.js */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var freeMainButton = function freeMainButton() {__webpack_require__.e(/*! require.ensure | components/free-ui/free-main-button */ "components/free-ui/free-main-button").then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-main-button.vue */ 378));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var freePopup = function freePopup() {__webpack_require__.e(/*! require.ensure | components/free-ui/free-popup */ "components/free-ui/free-popup").then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-popup.vue */ 344));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var freeChatItem = function freeChatItem() {Promise.all(/*! require.ensure | components/free-ui/free-chat-item */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/free-ui/free-chat-item")]).then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-chat-item.vue */ 383));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var freeIconButton = function freeIconButton() {__webpack_require__.e(/*! require.ensure | components/free-ui/free-icon-button */ "components/free-ui/free-icon-button").then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-icon-button.vue */ 373));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var freeNavBar = function freeNavBar() {Promise.all(/*! require.ensure | components/free-ui/free-nav-bar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/free-ui/free-nav-bar")]).then((function () {return resolve(__webpack_require__(/*! @/components/free-ui/free-nav-bar.vue */ 333));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =






{
  mixins: [_auth.default],
  components: {
    freeNavBar: freeNavBar,
    freeIconButton: freeIconButton,
    freeChatItem: freeChatItem,
    freePopup: freePopup,
    freeMainButton: freeMainButton },

  data: function data() {
    return {
      scrollintoView: '',
      // 录音
      // 手指Y轴
      RecordingStartY: 0,
      // 是否取消录音
      unRecord: false,
      // 音频录制状态
      isRecording: false,

      // 模式
      mode: "text",
      // 输入文字
      text: '',
      // 键盘高度
      KeyboardHeight: 0,
      // 气泡索引
      propIndex: -1,
      navBarHeight: 0,
      statusBarHeight: 0,

      menusList: [],
      // list: [{
      // 		avatar: "/static/images/demo/demo6.jpg",
      // 		user_id: 1,
      // 		nickname: '昵称',
      // 		type: 'text',
      // 		data: 'hollowaddd阿达达萨达收到阿达ddddddddddddddddadadad',
      // 		create_time: 1651900088,
      // 		isremove: false
      // 	},
      // 扩展菜单列表
      list: [],
      actionList: [
      [{
        name: "相册",
        icon: "/static/images/extends/pic.png",
        event: "uploadImage" },

      {
        name: "拍摄",
        icon: "/static/images/extends/video.png",
        event: "uploadVideo" },

      {
        name: "语音通话",
        icon: "/static/images/extends/phone.png",
        event: "" },

      {
        name: "位置",
        icon: "/static/images/extends/path.png",
        event: "" },

      {
        name: "音频",
        icon: "/static/images/extends/audio.png",
        event: "" },

      {
        name: "收藏",
        icon: "/static/images/extends/shoucan.png",
        event: "openFava" },

      {
        name: "名片",
        icon: "/static/images/extends/man.png",
        event: "sendCard" }]],



      emoticonList: [],
      detail: {
        id: 0,
        name: "",
        avatar: "",
        chat_type: 'user' },

      isfocus: false };


  },

  onLoad: function onLoad(e) {
    if (!e.params) {
      return this.backToast();
    }
    this.detail = JSON.parse(decodeURIComponent(e.params));
    // 初始化
    this.__init();
    // 创建聊天对象
    this.chat.createChatObject(this.detail);
    // 获取历史记录
    this.list = this.chat.getChatDetail();
    // 监听接受聊天信息
    uni.$on('onMessage', this.onMessage);
    // 监听清除聊天记录
    uni.$on('updateHistory', this.updateHistory);
    // 监听发送收藏和名片
    uni.$on('sendItem', this.onSendItem);
  },

  destroyed: function destroyed() {
    // 销毁聊天对象
    this.chat.destoryChatObject();
    // 销毁监听接受聊天消息
    uni.$off('onMessage', this.onMessage);
    uni.$off('updateHistory', this.updateHistory);
    uni.$off('sendItem', this.onSendItem);
  },
  mounted: function mounted() {var _this = this;
    var statusBarHeight = 0;



    this.navBarHeight = statusBarHeight + uni.upx2px(90);
    // 监听键盘高度
    uni.onKeyboardHeightChange(function (res) {
      if (_this.mode !== 'action' && _this.mode !== 'emoticon') {

        // console.log(this.KeyboardHeight)
        _this.KeyboardHeight = res.height;
      }
      if (_this.KeyboardHeight > 0) {
        _this.pageToBottom();
      }

    });

    this.$watch('list', function (newVal, oldVal) {
      if (newVal) {
        if (_this.KeyboardHeight > 0) {
          _this.pageToBottom();
        }
      }
    });
    this.regSendVoiceEvent(function (url) {
      if (!_this.unRecord) {
        _this.send('audio', url, {
          time: _this.RecordTime });

      }
    });
    this.pageToBottom();
    // 注册发送音频事件

    // 录音开始
    // RECORD.onStart(() => {
    // 	this.RecordTime = 0
    // 	this.RECORDTIMER = setInterval(() => {
    // 		this.RecordTime++
    // 	}, 1000)

    // }),

    // // 监听录音结束
    // RECORD.onStop((e) => {
    // 	if (this.RECORDTIMER) {
    // 		clearInterval(this.RECORDTIMER)
    // 		this.RECORDTIMER = null
    // 	}
    // 	if (!this.unRecord) {
    // 		this.send('audio', e.tempFilePath, {
    // 			time: this.RecordTime
    // 		})
    // 	}
    // })
  },
  watch: {
    mode: function mode(newVal, oldVal) {
      if (newVal !== 'text') {
        this.isfocus = false;
        this.KeyboardHeight = 0;
        uni.hideKeyboard();
      }
    }
    // KeyboardH(newValue, oldValue){
    // 	this.KeyboardHeight = newValue
    // 	if(newValue > 0){
    // 		this.mode = 'text'
    // 	}
    // }
  },

  methods: _objectSpread(_objectSpread({},
  (0, _vuex.mapMutations)(['regSendVoiceEvent'])), {}, {
    onSendItem: function onSendItem(e) {
      // console.log(e);
      if (e.sendType === 'fava' || e.sendType === 'card') {
        // console.log(e);
        this.send(e.type, e.data, e.options);
      }
    },
    updateHistory: function updateHistory() {var isclear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (isclear) {
        this.list = [];
      } else {
        this.list = this.chat.getChatDetail();
      }
    },
    onMessage: function onMessage(message) {
      // console.log('[[[[ada]]]]', message);
      if (message.from_id === this.detail.id && message.chat_type === 'user' || message.chat_type ===
      'group' && message.to_id === this.detail.id) {
        if (message.isremove !== 1) {
          this.list.push(message);
          // 置于底部
          return this.pageToBottom();
        }
        // 撤回消息
        var index = this.list.findIndex(function (item) {return item.id === message.id;});
        if (index !== -1) {
          this.list[index].isremove = 1;
        }

      }
    },
    // 打开聊天菜单
    openChatSet: function openChatSet() {
      uni.navigateTo({
        url: '../chat-set/chat-set?params=' + JSON.stringify({
          id: this.detail.id,
          chat_type: this.detail.chat_type }) });


    },
    // 录音相关
    voiceTouchStart: function voiceTouchStart(e) {
      this.RecordingStartY = e.changedTouches[0].screenY;
      this.isRecording = true;
      this.unRecord = false;
      // 开始录音
      this.RECORD.start({
        format: "mp3" });

    },
    voiceTouchEnd: function voiceTouchEnd() {
      this.isRecording = false;

      // 停止录音
      this.RECORD.stop();
    },
    // 被打断
    voiceTouchCancel: function voiceTouchCancel() {
      this.isRecording = false;
      this.unRecord = true;
      // 停止录音
      this.RECORD.stop();
    },
    // 主动取消
    voiceTouchMove: function voiceTouchMove(e) {
      var Y = Math.abs(e.changedTouches[0].screenY - this.RecordingStartY);
      this.unRecord = Y >= 80;

    },
    // 切换音频录制和文本输入
    changeVoiceOrText: function changeVoiceOrText() {
      this.mode = this.mode !== 'audio' ? 'audio' : 'text';
      if (this.mode === 'audio') {
        uni.hideKeyboard();
      }

    },
    previewImage: function previewImage(url) {
      uni.previewImage({
        current: url,
        urls: this.imageList });

    },
    __init: function __init() {
      var total = 20;
      var page = Math.ceil(total / 8);
      var arr = [];
      for (var i = 0; i < page; i++) {
        var start = i * 8;
        arr[i] = [];
        for (var j = 0; j < 8; j++) {
          var no = start + j;
          if (no + 1 > total) {
            continue;
          }
          arr[i].push({
            name: "表情" + no,
            icon: "/static/images/emoticon/5497/" + no + ".gif",
            event: 'sendEmoiticon' });

        }
      }
      this.emoticonList = arr;
      // 初始化会话列表
      this.chat.initChatListItem({
        chat_type: this.detail.chat_type,
        to_id: this.detail.id,
        to_name: this.detail.name,
        to_avatar: this.detail.avatar,
        data: this.detail.chat_type === 'user' ? '你们已经是好友可以开始聊天了' : '你已加入群聊，可以开始聊天了' });

    },
    clickPage: function clickPage() {

      this.mode = '';
    },

    // 打开扩展菜单 ｜｜或者 表情包
    openActionOrEmoticon: function openActionOrEmoticon(mode) {
      this.mode = mode;
      // this.KeyboardHeight = uni.upx2px(650)
      uni.hideKeyboard();
      this.pageToBottom();
    },
    // 发送
    send: function send(type) {var _this2 = this;var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // 组织数据格式
      switch (type) {
        case 'text':
          data = data || this.text;
          break;}

      var message = this.chat.formatSendData({
        type: type,
        data: data,
        options: options });

      // console.log(options);
      // 渲染到页面
      var index = this.list.length;
      this.list.push(message);
      // 监听上传进度
      var onProgress = false;
      if (message.type !== 'text' && message.type !== 'emoticon' && message.type !==
      'card' && !message.data.startsWith('http://wechatjhq')) {
        onProgress = function onProgress(progress) {
          //console.log('上传进度', progress);
        };
      }

      // 发送到服务端
      this.chat.send(message, onProgress).then(function (res) {
        // 发送成功
        _this2.list = _this2.chat.getChatDetail();
        _this2.list[index].id = res.id;
        _this2.list[index].sendStatus = 'success';
        // console.log(res)
      }).catch(function (err) {
        //发送失败
        _this2.list[index].sendStatus = 'fail';
        // console.log(err)
      });
      // 文字发送成功，清空输入框
      if (type === 'text') {
        this.text = '';
      }
      // 置于底部
      this.pageToBottom();
      // let pageToBottomTimer = setTimeout(() => {
      // 	this.pageToBottom()
      // 	clearTimeout(pageToBottomTimer)
      // }, 200)


    },
    // 长按气泡事件
    long: function long(_ref)



    {var x = _ref.x,y = _ref.y,index = _ref.index;
      // 初始化 索引
      this.propIndex = index;
      // 组装菜单
      var menus = [{
        name: '发送给朋友',
        event: 'sendToChatItem' },

      {
        name: '收藏',
        event: 'fava' },

      {
        name: '删除',
        event: 'delete' }

      // {
      // 	name: '多选',
      // 	event: ''
      // },
      ];

      var item = this.list[this.propIndex];
      var isSelf = this.user.id === item.from_id;
      if (isSelf) {
        menus.push({

          name: '撤回',
          event: 'removeChatItem' });

      }

      if (item.type === 'text') {
        menus.unshift({
          name: '复制',
          event: 'copy' });

      }

      this.menusList = menus;
      // 显示扩展菜单
      this.$refs.extend.show(x, y);
    },
    // 弹出层
    clickEvent: function clickEvent(event) {var _this3 = this;
      var item = this.list[this.propIndex];
      var isSelf = this.user.id === item.from_id;
      switch (event) {
        case "removeChatItem": //撤回
          // 拿到当前被操作的信息
          this.chat.recall(item).then(function (res) {
            item.isremove = 1;
          });

          break;
        case "sendToChatItem": //转发
          uni.navigateTo({
            url: '../chat-list/chat-list?params=' + encodeURIComponent(JSON.stringify(item)) });

          break;
        case "copy": //复制
          uni.setClipboardData({
            data: item.data,
            success: function success() {
              uni.showToast({
                title: '复制成功',
                icon: 'none',
                position: "bottom" });

            } });

          break;
        case "delete": //删除
          uni.showModal({
            content: '确认删除？',
            success: function success(res) {
              if (!res.confirm) return;
              _this3.chat.deleteChatDetailIten(item, isSelf);
              _this3.list.splice(_this3.propIndex, 1);

              // 删除最后一条消息
              if (_this3.list.length === _this3.propIndex) {
                // console.log(this.list[this.propIndex - 1]);
                _this3.chat.updateChatItem({
                  id: _this3.detail.id,
                  chat_type: _this3.detail.chat_type },
                function (v) {
                  var o = _this3.list[_this3.propIndex - 1];
                  var data = '';
                  var create_time = '';
                  v.update_time = o.create_time;
                  if (o.isremove !== 1) {
                    data = _this3.chat.formatChatItemData(o, isSelf);
                  } else {
                    data = isSelf ? '你撤回了一条消息' : "\"".concat(o.from_name, "\" \u64A4\u56DE\u4E86\u4E00\u6761\u6D88\u606F");
                  }
                  v.data = data;
                  return v;
                });
              }

            } });

          break;
        case "fava": //加入收藏

          uni.showModal({
            content: "是否加入收藏？",
            success: function success(res) {
              if (res.confirm) {
                _request.default.post('/fava/create', {
                  type: item.type,
                  data: item.data,
                  options: JSON.stringify(item.options) }).
                then(function (res) {
                  uni.showToast({
                    title: '加入收藏成功',
                    icon: 'none' });

                });
              }
            } });

          break;}

      this.$refs.extend.hide();
    },
    // 回到底部

    pageToBottom: function pageToBottom() {var _this4 = this;
      setTimeout(function () {











        var lastIndex = _this4.list.length - 1;
        _this4.scrollintoView = 'chatItem_' + lastIndex;

      }, 300);

    },
    // 拓展菜单点击判断
    actionEvent: function actionEvent(e) {var _this5 = this;
      switch (e.event) {
        // 相册
        case "uploadImage":
          uni.chooseImage({
            count: 9,
            sourceType: ['album'],
            success: function success(res) {
              // 发送服务器
              // 渲染到页面
              res.tempFilePaths.forEach(function (item) {
                _this5.send('image', item);
              });
            } });

          break;
        //表情包
        case "sendEmoiticon":

          this.send('emoticon', e.icon);
          break;
        // 视频
        case "uploadVideo":
          uni.chooseVideo({
            success: function success(res) {
              // 发送服务器
              // 渲染到页面

              _this5.send('video', res.tempFilePath);
            } });

          break;
        case "openFava": //发送收藏
          uni.navigateTo({
            url: '../../my/fava/fava?type=send' });

          break;
        case "sendCard": //发送名片
          uni.navigateTo({
            url: '../../mail/mail/mail?type=sendCard&limit=1' });

          break;}


      // this.$refs.extend.hide()
    },
    focus: function focus(e) {
      this.mode = 'text';
      this.isfocus = true;
      this.KeyboardHeight = e.detail.height;
      this.pageToBottom();
    },
    blur: function blur(e) {
      this.isfocus = false;
      this.KeyboardHeight = 0;
    } }),



  computed: _objectSpread(_objectSpread({},
  (0, _vuex.mapState)({
    totalNoreadnum: function totalNoreadnum(state) {return state.user.totalNoreadnum;},
    chatList: function chatList(state) {return state.user.chatList;},
    RECORD: function RECORD(state) {return state.audio.RECORD;},
    RecordTime: function RecordTime(state) {return state.audio.RecordTime;},
    chat: function chat(state) {return state.user.chat;},
    user: function user(state) {return state.user.user;}
    // KeyboardH:state=>state.common.keyboardHeight
  })), {}, {
    // 当前会话配置信息
    currentChatItem: function currentChatItem() {var _this6 = this;
      var index = this.chatList.findIndex(function (item) {return item.id === _this6.detail.id && item.chat_type === _this6.detail.
        chat_type;});
      if (index !== -1) {
        return this.chatList[index];
      }
      return {};
    },
    // 所有信息图片地址
    imageList: function imageList() {
      var arr = [];
      this.list.forEach(function (item) {
        if (item.type === 'image' || item.type === 'emoticon') {
          arr.push(item.data);
        }
      });
      return arr;
    },
    // 动态获取菜单高度
    getMenusHeight: function getMenusHeight() {
      var H = 100;
      return this.menusList.length * H;
    },
    // 获取菜单样式
    getMenusStyle: function getMenusStyle() {
      return "height:".concat(this.getMenusHeight, "rpx");
    },
    // 判断是否操作本人信息
    isdeSelf: function isdeSelf() {
      var id = 1;
      var user_id = this.propIndex > -1 ? this.list[this.propIndex].user_id : 0;
      return user_id === id;
    },
    // 聊天区域bottom
    chatBodyBottom: function chatBodyBottom() {
      var h = this.mode === 'emoticon' || this.mode === 'action' ? uni.upx2px(755) : uni.upx2px(105);
      if (this.isfocus) {
        h = this.KeyboardHeight + uni.upx2px(105);
      }
      return "top:".concat(this.navBarHeight, "px; bottom:").concat(h, "px;");
    },
    // 动态获取蒙版位置
    MaskBottom: function MaskBottom() {
      var h = this.mode === 'emoticon' || this.mode === 'action' ? uni.upx2px(755) : uni.upx2px(105);
      if (this.isfocus) {
        h = this.KeyboardHeight + uni.upx2px(105);
      }
      return h;
    },
    // 获取操作表情列表
    emoticonOrActionList: function emoticonOrActionList() {
      return this.mode === 'emoticon' || this.mode === 'action' ? this[this.mode + 'List'] : [];

    } }) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 80:
/*!******************************************************************************************************!*\
  !*** /Users/jhq/WeChatProjects/weixinApp/pages/chat/chat/chat.nvue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=style&index=0&lang=css& */ 81);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 81:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/jhq/WeChatProjects/weixinApp/pages/chat/chat/chat.nvue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[74,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/chat/chat/chat.js.map