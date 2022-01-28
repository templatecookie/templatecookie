exports.ids = [10];
exports.modules = {

/***/ 55:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNSAyMS43NUM4LjMyODQzIDIxLjc1IDkgMjEuMDc4NCA5IDIwLjI1QzkgMTkuNDIxNiA4LjMyODQzIDE4Ljc1IDcuNSAxOC43NUM2LjY3MTU3IDE4Ljc1IDYgMTkuNDIxNiA2IDIwLjI1QzYgMjEuMDc4NCA2LjY3MTU3IDIxLjc1IDcuNSAyMS43NVoiIGZpbGw9IiMwNjFDM0QiLz4KPHBhdGggZD0iTTE3LjI1IDIxLjc1QzE4LjA3ODQgMjEuNzUgMTguNzUgMjEuMDc4NCAxOC43NSAyMC4yNUMxOC43NSAxOS40MjE2IDE4LjA3ODQgMTguNzUgMTcuMjUgMTguNzVDMTYuNDIxNiAxOC43NSAxNS43NSAxOS40MjE2IDE1Ljc1IDIwLjI1QzE1Ljc1IDIxLjA3ODQgMTYuNDIxNiAyMS43NSAxNy4yNSAyMS43NVoiIGZpbGw9IiMwNjFDM0QiLz4KPHBhdGggZD0iTTMuOTY0MjkgNi43NUgyMC43ODU3TDE4LjMxMDggMTUuNDEyMUMxOC4yMjEzIDE1LjcyNTUgMTguMDMyMSAxNi4wMDEyIDE3Ljc3MTggMTYuMTk3NUMxNy41MTE2IDE2LjM5MzggMTcuMTk0NSAxNi41IDE2Ljg2ODUgMTYuNUg3Ljg4MTQ1QzcuNTU1NDkgMTYuNSA3LjIzODM5IDE2LjM5MzggNi45NzgxNiAxNi4xOTc1QzYuNzE3OTIgMTYuMDAxMiA2LjUyODcyIDE1LjcyNTUgNi40MzkxNyAxNS40MTIxTDMuMDQ4MjcgMy41NDM5NkMzLjAwMzUgMy4zODcyNSAyLjkwODg5IDMuMjQ5MzkgMi43Nzg3OCAzLjE1MTI0QzIuNjQ4NjYgMy4wNTMwOSAyLjQ5MDExIDMgMi4zMjcxMyAzSDAuNzUiIHN0cm9rZT0iIzA2MUMzRCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("0ed61cad", content, true, context)
};

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=template&id=6fa41ce5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("relative overflow-hidden " + (_vm.className === 'product-card--lg' ? 'p-8' : 'p-6') + " border border-gray-e6 rounded-2xl product-card " + _vm.className + " ")},[_c('nuxt-link',{staticClass:"product-card__img relative inline-block overflow-hidden rounded-lg w-full product-card__img-wrapper mb-4",attrs:{"to":"#"}},[_c('img',{staticClass:"w-full h-full object-cover overflow-hidden",attrs:{"src":_vm.img,"alt":"product-img"}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product-card__text\" data-v-6fa41ce5>","</div>",[_vm._ssrNode("<h6"+(_vm._ssrClass(null,(" " + (_vm.className === 'product-card--lg' ? 'text-body-14' : 'text-body-12/12') + "  tracking-widest font-normal text-pink-75 uppercase m-0 mb-1")))+" data-v-6fa41ce5>"+_vm._ssrEscape("\n      "+_vm._s(_vm.tag)+"\n    ")+"</h6> <h2"+(_vm._ssrClass(null,(" " + (_vm.className === 'product-card--lg' ? 'text-body-24' : 'text-body-18') + "  text-dark-06 mb-3 font-normal")))+" data-v-6fa41ce5>"+_vm._ssrEscape("\n      "+_vm._s(_vm.title)+"\n    ")+"</h2> <p"+(_vm._ssrClass(null,(" " + (_vm.className === 'product-card--lg' ? 'text-body-16' : 'text-body-14/20') + " text-dark-42 font-light mb-6")))+" data-v-6fa41ce5>"+_vm._ssrEscape("\n      "+_vm._s(_vm.text)+"\n    ")+"</p> "),_vm._ssrNode("<div class=\"flex justify-between items-center sm:mt-0 mt-6  product-card__actions\" data-v-6fa41ce5>","</div>",[_vm._ssrNode("<div class=\"flex items-center  space-x-3 order-2 sm:order-1\" data-v-6fa41ce5>","</div>",[_vm._ssrNode("<div data-v-6fa41ce5>","</div>",[_c('nuxt-link',{staticClass:"flex items-center overflow-hidden border border-blue-0b text-blue-0b rounded-lg group py-3.5 px-9 whitespace-nowrap product-card__button",attrs:{"to":"#"}},[_vm._v("\n            Learn More\n            "),_c('span',{staticClass:"inline-block ml-2"},[_c('svg',{attrs:{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M3.75 12H20.25","stroke":"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),_vm._v(" "),_c('path',{attrs:{"d":"M13.5 5.25L20.25 12L13.5 18.75","stroke":"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])])],1),_vm._ssrNode(" <div class=\"flex-shrink-0\" data-v-6fa41ce5><button class=\"product-card__button-cart inline-block overflow-hidden bg-gray-f5 hover:bg-gray-200 transition-all rounded-lg\" data-v-6fa41ce5><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt=\"cart-icon\" data-v-6fa41ce5></button></div>")],2),_vm._ssrNode(" <div class=\" order-2\" data-v-6fa41ce5><h5"+(_vm._ssrClass(null,((_vm.className === 'product-card--lg' ? 'text-body-24' : 'text-body-20') + " font-normal uppercase text-pink-75")))+" data-v-6fa41ce5>"+_vm._ssrEscape("\n          $"+_vm._s(_vm.price)+"\n        ")+"</h5></div>")],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=template&id=6fa41ce5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ProductCardvue_type_script_lang_js_ = ({
  name: "ProductCard",
  props: {
    className: {
      type: String,
      required: true
    },
    buttonClass: {
      type: String,
      required: false
    },
    tag: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProductCardvue_type_script_lang_js_ = (ProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ProductCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6fa41ce5",
  "b2365298"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_6fa41ce5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_6fa41ce5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_6fa41ce5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_6fa41ce5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_6fa41ce5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(max-width:575px){.product-card--lg[data-v-6fa41ce5]{padding:24px}}.product-card--lg .product-card__img[data-v-6fa41ce5]{height:296px}@media(max-width:640px){.product-card--lg .product-card__img[data-v-6fa41ce5]{height:200px}}.product-card--lg .product-card__button[data-v-6fa41ce5]{height:56px;width:196px;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;justify-content:center}@media(max-width:640px){.product-card--lg .product-card__button[data-v-6fa41ce5]{height:45px;width:150px}}.product-card--lg .product-card__button span[data-v-6fa41ce5]{margin-left:12px}.product-card--lg .product-card__button-cart[data-v-6fa41ce5]{width:56px;height:56px;display:flex;align-items:center;justify-content:center}@media(max-width:640px){.product-card--lg .product-card__button-cart[data-v-6fa41ce5]{height:45px;width:45px}}.product-card--sm .product-card__img[data-v-6fa41ce5]{height:190px}.product-card--sm .product-card__button[data-v-6fa41ce5]{height:45px;width:150px;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;justify-content:center}.product-card--sm .product-card__button span[data-v-6fa41ce5]{margin-left:8px}.product-card--sm .product-card__button-cart[data-v-6fa41ce5]{width:44px;height:44px;display:flex;align-items:center;justify-content:center}.product-card__img img[data-v-6fa41ce5]{transform:scale(1);transition:all .4s linear}@media(max-width:640px){.product-card__text p[data-v-6fa41ce5]{margin-bottom:0}}.product-card__button[data-v-6fa41ce5]{transition:all .3s ease-in}.product-card__button[data-v-6fa41ce5]:hover{color:#fff;background-color:#0b63e5}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=product-card.js.map