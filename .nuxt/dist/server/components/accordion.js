exports.ids = [1];
exports.modules = {

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("57c0689d", content, true, context)
};

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_16d6fb68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_16d6fb68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_16d6fb68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_16d6fb68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_16d6fb68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapCollapse dt a.active[data-v-16d6fb68]{color:#0b63e5}.wrapCollapse dt a.active path[data-v-16d6fb68]{stroke:#0b63e5}.wrapCollapse ul[data-v-16d6fb68]{height:0;transition:all .5s ease;overflow:hidden;opacity:0}.wrapCollapse ul li[data-v-16d6fb68]{position:relative;padding-left:10px}.wrapCollapse ul li[data-v-16d6fb68]:before{content:\"\";left:0;top:7px;width:4px;height:4px;border-radius:50%;position:absolute;background-color:#061c3d}.wrapCollapse ul.active[data-v-16d6fb68]{height:auto;opacity:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Accordion.vue?vue&type=template&id=16d6fb68&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapCollapse"},[_vm._ssrNode((_vm._ssrList((_vm.faqs),function(faq,i){return ("<div data-v-16d6fb68><dt data-v-16d6fb68><a href=\"javascript:void(0)\""+(_vm._ssrClass("flex py-3 text-dark-06 text-base font-medium",{ active: _vm.currentFaq == i }))+" data-v-16d6fb68><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"mr-3.5\" data-v-16d6fb68><path opacity=\"0.2\" d=\"M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z\" fill=\"#061C3D\" data-v-16d6fb68></path> <path d=\"M3 16.5L12 21.75L21 16.5\" stroke=\"#061C3D\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-16d6fb68></path> <path d=\"M3 12L12 17.25L21 12\" stroke=\"#061C3D\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-16d6fb68></path> <path d=\"M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z\" stroke=\"#061C3D\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-16d6fb68></path></svg>"+_vm._ssrEscape("\n\n        "+_vm._s(faq.title))+"</a></dt> <ul"+(_vm._ssrClass("pl-10",{ active: _vm.currentFaq == i }))+" data-v-16d6fb68>"+(_vm._ssrList((_vm.faqBody),function(item,indexIteam){return ("<li class=\"text-dark-42 text-sm mb-1.5\" data-v-16d6fb68>"+_vm._ssrEscape("\n        "+_vm._s(item.bodyText)+"\n      ")+"</li>")}))+"</ul></div>")}))+" <div data-v-16d6fb68></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Accordion.vue?vue&type=template&id=16d6fb68&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Accordion.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Accordionvue_type_script_lang_js_ = ({
  name: "Accordion",

  data() {
    return {
      currentFaq: 0,
      faqs: [{
        title: "Version 1.3 (12th November, 2021)"
      }, {
        title: "Version 1.2 (8th November, 2021)"
      }, {
        title: "Version 1.1 (9th July, 2021)"
      }, {
        title: "Version 1.1 (9th July, 2021)"
      }],
      faqBody: [{
        bodyText: "Bug resolved in email page button down"
      }, {
        bodyText: "Bug resolved of Landing Page main banner image overlapping in Safari"
      }, {
        bodyText: "Bug resolved of Landing Page main banner image overlapping in Safari"
      }, {
        bodyText: "Bug resolved of Left sidebar menu (icon and text) alignment"
      }]
    };
  },

  methods: {
    open(i) {
      this.currentFaq = i;
    }

  }
});
// CONCATENATED MODULE: ./components/Accordion.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Accordionvue_type_script_lang_js_ = (Accordionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Accordion.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Accordionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "16d6fb68",
  "a591e3c6"
  
)

/* harmony default export */ var Accordion = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accordion.js.map