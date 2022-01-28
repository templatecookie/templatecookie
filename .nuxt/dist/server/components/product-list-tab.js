exports.ids = [11];
exports.modules = {

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product-list/Tab.vue?vue&type=template&id=94b27176&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}]},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/product-list/Tab.vue?vue&type=template&id=94b27176&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product-list/Tab.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var Tabvue_type_script_lang_js_ = ({
  props: {
    name: {
      required: true
    },
    selected: {
      default: false
    },
    icon: {
      required: true
    }
  },

  data() {
    return {
      isActive: false
    };
  },

  mounted() {
    this.isActive = this.selected;
  }

});
// CONCATENATED MODULE: ./components/product-list/Tab.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_list_Tabvue_type_script_lang_js_ = (Tabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/product-list/Tab.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_list_Tabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2df47e3d"
  
)

/* harmony default export */ var Tab = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-list-tab.js.map