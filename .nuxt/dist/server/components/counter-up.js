exports.ids = [4];
exports.modules = {

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/trophy.a05311b.svg";

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CounterUp.vue?vue&type=template&id=6000559c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex"},[_vm._ssrNode("<div class=\"flex-shrink-0 mr-5\"><img"+(_vm._ssrAttr("src",__webpack_require__(141)))+" alt></div> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h4 class=\"text-dark-06 text-2xl font-medium tracking-ls03 mb-2\">","</h4>",[_c('ICountUp',{attrs:{"delay":_vm.delay,"endVal":_vm.endVal,"options":_vm.options}}),_vm._ssrNode("\n        +")],2),_vm._ssrNode(" <p class=\"text-dark-42 text-sm tracking-ls04 uppercase\">"+_vm._ssrEscape(_vm._s(_vm.text))+"</p>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CounterUp.vue?vue&type=template&id=6000559c&

// EXTERNAL MODULE: external "vue-countup-v2"
var external_vue_countup_v2_ = __webpack_require__(51);
var external_vue_countup_v2_default = /*#__PURE__*/__webpack_require__.n(external_vue_countup_v2_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CounterUp.vue?vue&type=script&lang=js&
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

/* harmony default export */ var CounterUpvue_type_script_lang_js_ = ({
  name: "CounterUp",
  components: {
    ICountUp: external_vue_countup_v2_default.a
  },

  data() {
    return {
      delay: 1000,
      endVal: 17,
      options: {
        useEasing: true,
        useGrouping: true
      }
    };
  },

  props: {
    title: {
      type: String,
      requied: true
    },
    text: {
      type: String,
      requied: true
    }
  } // methods: {
  //   onReady: function(instance, CountUp) {
  //     const that = this;
  //     instance.update(that.endVal + 0);
  //   }
  // }

});
// CONCATENATED MODULE: ./components/CounterUp.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CounterUpvue_type_script_lang_js_ = (CounterUpvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/CounterUp.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CounterUpvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "aac769e8"
  
)

/* harmony default export */ var CounterUp = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=counter-up.js.map