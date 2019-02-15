require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonp([3],{

/***/ "CUzp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "uqEP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/mpvue/index.js
var mpvue = __webpack_require__("5nAL");
var mpvue_default = /*#__PURE__*/__webpack_require__.n(mpvue);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/mpvue-loader/lib/selector.js?type=script&index=0!./node_modules/mpvue-config-loader??ref--2!./src/views/util/publicweb/index-mp.vue
//
//
//
//

/* harmony default export */ var index_mp = ({
  name: "publicweb",
  onLoad: function onLoad(options) {
    this.url = options.url;

    if (options.title) {
      wx.setNavigationBarTitle({
        title: options.title
      });
    }
  },

  mounted: function mounted() {},


  components: {},
  computed: {},

  data: function data() {
    return {
      url: null
    };
  },


  methods: {}
});
// CONCATENATED MODULE: ./node_modules/mpvue-loader/lib/template-compiler?{"id":"data-v-0b2e75cc","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"}}!./node_modules/mpvue-loader/lib/selector.js?type=template&index=0!./node_modules/mpvue-config-loader??ref--2!./src/views/util/publicweb/index-mp.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('web-view', {
    attrs: {
      "src": _vm.url,
      "mpcomid": '0'
    }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var publicweb_index_mp = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0b2e75cc", esExports)
  }
}
// CONCATENATED MODULE: ./src/views/util/publicweb/index-mp.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("CUzp")
}
var normalizeComponent = __webpack_require__("ybqe")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  index_mp,
  publicweb_index_mp,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\util\\publicweb\\index-mp.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index-mp.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b2e75cc", Component.options)
  } else {
    hotAPI.reload("data-v-0b2e75cc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var util_publicweb_index_mp = (Component.exports);

// CONCATENATED MODULE: ./src/views/util/publicweb/main.js




mpvue_default.a.config.productionTip = false;
var app = new mpvue_default.a(extends_default()({
  mpType: 'page'
}, util_publicweb_index_mp));
app.$mount();

/***/ })

},["uqEP"]);