exports.ids = [16,3,6,7,10];
exports.modules = {

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/HeroSection.vue?vue&type=template&id=4750f847&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"realtive overflow-hidden pb-14 lg:pb-124 pt-216 bg-no-repeat bg-center bg-cover",style:({ backgroundImage: ("url(" + _vm.bannerImg + ")") })},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"text-center\">","</div>",[_vm._ssrNode("<h1 class=\"text-4xl md:text-heading text-dark-06 mb-8 max-w-680 mx-auto font-semibold\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.data.title)+"\n      ")+"</h1> <p class=\"text-lg md:text-body-20 text-dark-06 mb-8 max-w-680 mx-auto\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.data.description)+"\n      ")+"</p> "),_vm._ssrNode("<div>","</div>",_vm._l((_vm.data.buttons),function(item,index){return _c('nuxt-link',{key:index,staticClass:"flex items-center bg-blue-0b hover:bg-dark-06 transition-all w-auto max-w-232 justify-center text-button-17 text-white rounded-lg overflow-hidden mx-auto",attrs:{"to":item.link.href}},[_vm._v("\n          "+_vm._s(item.label)+"\n          "),_vm._v(" "),_c('span',{staticClass:"inline-block ml-3"},[_c('svg',{attrs:{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M3.75 12H20.25","stroke":"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),_vm._v(" "),_c('path',{attrs:{"d":"M13.5 5.25L20.25 12L13.5 18.75","stroke":"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])])}),1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Home/HeroSection.vue?vue&type=template&id=4750f847&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/HeroSection.vue?vue&type=script&lang=js&
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
/* harmony default export */ var HeroSectionvue_type_script_lang_js_ = ({
  props: ['data', 'bannerImg']
});
// CONCATENATED MODULE: ./components/Home/HeroSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var Home_HeroSectionvue_type_script_lang_js_ = (HeroSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Home/HeroSection.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Home_HeroSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "73081f14"
  
)

/* harmony default export */ var HeroSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/WhyUs.vue?vue&type=template&id=9a3a558a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"relative overflow-hidden"},[_vm._ssrNode("<div class=\"flex flex-col lg:grid lg:grid-cols-16 px-3 lg:px-0\">","</div>",[_vm._ssrNode("<div class=\"lg:col-start-3 lg:col-end-9 lg:py-124 order-2 lg:order-1 pb-14 lg:pb-0\">","</div>",[_vm._ssrNode("<h1 class=\"text-4xl md:text-title text-dark-06 font-semibold capitalize tracking-1 mb-8\">\n        Why Tempalte Cookie is the Best in the world\n      </h1> <p class=\"text-body-16 font-light text-dark-06 mb-10\">\n        Cras at pellentesque eros. Nullam vitae sapien et felis eleifend\n        luctus. Nam ac dui cursus, efficitur ante sed, tempor sapien.\n        Praesent nec mattis enim. Mauris a laoreet purus.\n      </p> "),_vm._ssrNode("<div class=\"grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6\">","</div>",[_vm._l((_vm.data.counterNumbers),function(item,itemIndex){return _vm._ssrNode("<div"+(_vm._ssrClass(null,("flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:space-x-3 p-6 " + (item.bgColor) + "  rounded-xl overflow-hidden")))+">","</div>",[_vm._ssrNode("<div><span class=\"inline-block\"><img"+(_vm._ssrAttr("src",item.icon))+" alt></span></div> "),_vm._ssrNode("<div class=\"text-center sm:text-left\">","</div>",[_vm._ssrNode("<h2 class=\"text-body-24 font-medium text-dark-06 mb-2\">","</h2>",[_c('ICountUp',{attrs:{"delay":item.delay,"endVal":item.number,"options":_vm.options}}),_vm._ssrNode("\n              +\n            ")],2),_vm._ssrNode(" <p class=\"text-body-14 text-dark-42 uppercase whitespace-nowrap overflow-ellipsis\">"+_vm._ssrEscape("\n              "+_vm._s(item.title)+"\n            ")+"</p>")],2)],2)}),_vm._ssrNode(" <div class=\"hidden\">"+(_vm._ssrList((_vm.data.counterNumbers),function(item,index){return ("<div class=\"flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:space-x-3 p-6 bg-green-e7 rounded-xl overflow-hidden\"><div><span class=\"inline-block\"><svg width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path opacity=\"0.2\" d=\"M19.2501 35C25.5324 35 30.6251 29.9072 30.6251 23.625C30.6251 17.3428 25.5324 12.25 19.2501 12.25C12.9679 12.25 7.87512 17.3428 7.87512 23.625C7.87512 29.9072 12.9679 35 19.2501 35Z\" fill=\"#0F9918\"></path> <path d=\"M19.2501 35C25.5324 35 30.6251 29.9072 30.6251 23.625C30.6251 17.3428 25.5324 12.25 19.2501 12.25C12.9679 12.25 7.87512 17.3428 7.87512 23.625C7.87512 29.9072 12.9679 35 19.2501 35Z\" stroke=\"#0F9918\" stroke-width=\"3\" stroke-miterlimit=\"10\"></path> <path d=\"M33.9964 12.6739C35.5609 12.2331 37.2018 12.1327 38.8084 12.3794C40.415 12.6261 41.9501 13.2143 43.3103 14.1042C44.6705 14.9942 45.8241 16.1653 46.6936 17.5387C47.563 18.9121 48.1281 20.4558 48.3507 22.066C48.5733 23.6761 48.4482 25.3153 47.984 26.873C47.5198 28.4308 46.7271 29.8709 45.6594 31.0966C44.5917 32.3222 43.2737 33.3047 41.7943 33.9781C40.3149 34.6515 38.7083 35 37.0829 35.0002\" stroke=\"#0F9918\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M3.4989 43.1805C5.27544 40.6535 7.63392 38.5911 10.3752 37.1673C13.1165 35.7435 16.1601 35.0001 19.2491 35C22.3381 34.9999 25.3817 35.743 28.1231 37.1666C30.8645 38.5902 33.2232 40.6525 34.9999 43.1793\" stroke=\"#0F9918\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M37.0829 35C40.1722 34.9978 43.2165 35.74 45.9581 37.1637C48.6997 38.5875 51.0579 40.6509 52.833 43.1793\" stroke=\"#0F9918\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></span></div> <div class=\"text-center sm:text-left\"><h2 class=\"text-body-24 font-medium text-dark-06 mb-2\">"+_vm._ssrEscape("\n                "+_vm._s(item.number)+"+\n              ")+"</h2> <p class=\"text-body-14 text-dark-42 uppercase\">"+_vm._ssrEscape("\n                "+_vm._s(item.title)+"\n              ")+"</p></div></div>")}))+" <div class=\"flex flex-col sm:flex-row items-center justify-center sm:justify-start space-x-3 p-6 bg-yellow-ff rounded-xl\"><div><span><svg width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path opacity=\"0.2\" d=\"M28 49C39.598 49 49 39.598 49 28C49 16.402 39.598 7 28 7C16.402 7 7 16.402 7 28C7 39.598 16.402 49 28 49Z\" fill=\"#FF8800\"></path> <path d=\"M28 49C39.598 49 49 39.598 49 28C49 16.402 39.598 7 28 7C16.402 7 7 16.402 7 28C7 39.598 16.402 49 28 49Z\" stroke=\"#FF8800\" stroke-width=\"3\" stroke-miterlimit=\"10\"></path> <path d=\"M37.0952 33.249C36.1727 34.8446 34.8467 36.1695 33.2502 37.0905C31.6538 38.0116 29.8431 38.4965 28 38.4965C26.157 38.4965 24.3463 38.0117 22.7498 37.0906C21.1534 36.1696 19.8273 34.8448 18.9048 33.2492\" stroke=\"#FF8800\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M21.25 23.625C21.25 24.2463 20.7463 24.75 20.125 24.75C19.5037 24.75 19 24.2463 19 23.625C19 23.0037 19.5037 22.5 20.125 22.5C20.7463 22.5 21.25 23.0037 21.25 23.625Z\" fill=\"#FF8800\" stroke=\"#FF8800\" stroke-width=\"3\"></path> <path d=\"M37 23.625C37 24.2463 36.4963 24.75 35.875 24.75C35.2537 24.75 34.75 24.2463 34.75 23.625C34.75 23.0037 35.2537 22.5 35.875 22.5C36.4963 22.5 37 23.0037 37 23.625Z\" fill=\"#FF8800\" stroke=\"#FF8800\" stroke-width=\"3\"></path></svg></span></div> <div class=\"text-center sm:text-left\"><h2 class=\"text-body-24 font-medium text-dark-06 mb-2\">\n                183+\n              </h2> <p class=\"text-body-14 text-dark-42 uppercase\">\n                Happy Clients\n              </p></div></div> <div class=\"flex flex-col sm:flex-row justify-center sm:justify-start items-center space-x-3 p-6 bg-pink-fe rounded-xl\"><div><span><svg width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path opacity=\"0.2\" d=\"M28.0003 33.2498C20.628 33.2614 13.3837 31.3232 7.00201 27.6319V45.4998C7.00201 45.7296 7.04728 45.9571 7.13522 46.1695C7.22317 46.3818 7.35207 46.5747 7.51457 46.7372C7.67708 46.8997 7.87 47.0286 8.08232 47.1166C8.29464 47.2045 8.5222 47.2498 8.75201 47.2498H47.252C47.4818 47.2498 47.7094 47.2045 47.9217 47.1166C48.134 47.0286 48.327 46.8997 48.4895 46.7372C48.652 46.5747 48.7809 46.3818 48.8688 46.1695C48.9568 45.9571 49.002 45.7296 49.002 45.4998V27.6299C42.6196 31.3225 35.374 33.2614 28.0003 33.2498Z\" fill=\"#F249C8\"></path> <path d=\"M47.252 15.75H8.75201C7.78552 15.75 7.00201 16.5335 7.00201 17.5V45.5C7.00201 46.4665 7.78552 47.25 8.75201 47.25H47.252C48.2185 47.25 49.002 46.4665 49.002 45.5V17.5C49.002 16.5335 48.2185 15.75 47.252 15.75Z\" stroke=\"#F249C8\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M36.7488 15.75V12.25C36.7488 11.3217 36.3801 10.4315 35.7237 9.77513C35.0673 9.11875 34.1771 8.75 33.2488 8.75H22.7488C21.8206 8.75 20.9303 9.11875 20.274 9.77513C19.6176 10.4315 19.2488 11.3217 19.2488 12.25V15.75\" stroke=\"#F249C8\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M49.0023 27.6304C42.6199 31.323 35.3743 33.2618 28.0006 33.2502C20.6281 33.2618 13.3837 31.3236 7.00201 27.6322\" stroke=\"#F249C8\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M25.3767 26.25H30.6267\" stroke=\"#F249C8\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></span></div> <div class=\"text-center sm:text-left\"><h2 class=\"text-body-24 font-medium text-dark-06 mb-2\">\n                315+\n              </h2> <p class=\"text-body-14 text-dark-42 uppercase\">\n                Completed Project\n              </p></div></div></div>")],2)],2),_vm._ssrNode(" <div class=\"lg:col-start-10 lg:col-end-17 order-1 lg:order-2 mb-6 lg:mb-0 h-680 clip-thumb\"><img"+(_vm._ssrAttr("src",__webpack_require__(92)))+" alt class=\"w-full h-full object-cover lg:object-fill\"></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Home/WhyUs.vue?vue&type=template&id=9a3a558a&

// EXTERNAL MODULE: external "vue-countup-v2"
var external_vue_countup_v2_ = __webpack_require__(51);
var external_vue_countup_v2_default = /*#__PURE__*/__webpack_require__.n(external_vue_countup_v2_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/WhyUs.vue?vue&type=script&lang=js&
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

/* harmony default export */ var WhyUsvue_type_script_lang_js_ = ({
  props: ['data'],
  components: {
    ICountUp: external_vue_countup_v2_default.a
  },

  data() {
    return {
      options: {
        useEasing: true,
        useGrouping: true
      },
      achivementList: [{
        value: 17,
        delay: 1000,
        bgColor: "bg-pink-f1",
        designation: "Awards Rewarded",
        icon: "https://i.imgur.com/XHzKgiy.png"
      }, {
        value: 23,
        bgColor: " bg-green-e7",
        designation: "Years of Experience",
        icon: "https://i.imgur.com/RHw1fUb.png"
      }, {
        value: 23,
        bgColor: "bg-yellow-ff",
        designation: "Happy Clients",
        icon: "https://i.imgur.com/ddKeF4B.png"
      }, {
        value: 315,
        bgColor: "bg-pink-fe",
        designation: "COMPLETED PROJECT",
        icon: "https://i.imgur.com/h8K5qbt.png"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/Home/WhyUs.vue?vue&type=script&lang=js&
 /* harmony default export */ var Home_WhyUsvue_type_script_lang_js_ = (WhyUsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Home/WhyUs.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Home_WhyUsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "47633f9e"
  
)

/* harmony default export */ var WhyUs = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=dfb4f604&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.homepage && _vm.homepage.heroSection)?_c('HeroSection',{attrs:{"bannerImg":_vm.bannerImg,"data":_vm.homepage.heroSection}}):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"featured pt-14 md:pt-124\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"mb-72 text-center\"><h2 class=\"text-4xl md:text-title text-dark-06 font-semibold capitalize tracking-1\">\n          Featured Product\n        </h2></div> "),_vm._ssrNode("<div class=\"grid lg:grid-cols-2 gap-6\">","</div>",_vm._l((_vm.featuredList),function(item,itemIndex){return _vm._ssrNode("<div class=\"flex items-stretch\">","</div>",[_c('ProductCard',{attrs:{"img":item.img,"tag":item.tags,"title":item.title,"text":item.text,"price":item.price,"className":"product-card--lg"}})],1)}),0)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"latest py-14 md:py-124\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"mb-72 text-center\"><h2 class=\"text-4xl md:text-title text-dark-06 font-semibold capitalize tracking-1\">\n          Latest Product\n        </h2></div> "),_vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6\">","</div>",_vm._l((_vm.latestProduct),function(item,itemIndex){return _vm._ssrNode("<div class=\"flex items-stretch\">","</div>",[_c('ProductCard',{attrs:{"img":item.img,"tag":item.tags,"title":item.title,"text":item.text,"price":item.price,"className":"product-card--sm"}})],1)}),0)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"why-should bg-gray-f5 py-14 md:py-124\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"mb-72 text-center\"><h2 class=\"text-4xl md:text-title text-dark-06 font-semibold capitalize tracking-1 mb-8 max-w-md mx-auto\">\n          Why should you buy our product?\n        </h2> <p class=\"text-body-16 font-light max-w-lg mx-auto text-dark-06\">\n          Phasellus interdum sagittis magna. Donec varius ultricies diam sed\n          lacinia. Mauris porttitor. quis risus eget mattis Ut auctor.\n        </p></div> "),_vm._ssrNode("<div class=\"grid md:grid-cols-2 xl:grid-cols-3 gap-6\">","</div>",_vm._l((_vm.productList),function(item,itemIndex){return _vm._ssrNode("<div>","</div>",[_c('BusinessCard',{attrs:{"className":"text-center","classNameIcon":"m-auto","title":item.title,"text":item.text}})],1)}),0)],2)]),_vm._ssrNode(" "),_c('WhyUs',{attrs:{"data":_vm.homepage.whyUsSection}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=dfb4f604&

// EXTERNAL MODULE: ./assets/images/all-img/img-five.png
var img_five = __webpack_require__(68);
var img_five_default = /*#__PURE__*/__webpack_require__.n(img_five);

// EXTERNAL MODULE: ./components/ProductCard.vue + 4 modules
var ProductCard = __webpack_require__(57);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(22);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./graphql/homepage.js
 // export const global = gql`

/* harmony default export */ var graphql_homepage = (external_graphql_tag_default.a`
query {
  homepage {
    data {
      attributes {
        title,
        meta_data {
          title, 
          description
          og_image {
            data {
              attributes {
                url, 
                previewUrl, 
                ext, 
                name
              }
            }
          }
        }
        heroSection {
          id
          title
          subTitle
          description
          banner {
            data {
              attributes {
                name,
                url, 
                previewUrl, 
                ext, 
                formats
              }
            }
          }
          buttons {
            label
            theme
            width
            link {
              label
              href
              target
            }
          }
        }
        featuredProductSection {
          id
          title
          description
        }
        latestProductsSection {
          title,
          id
          description
          subTitle
          theme
          alignment
          background {
            data {
              attributes {
                name,
                url, 
                previewUrl, 
                ext, 
                formats
              }
            }
          }
        } 
        topFeaturesSection {
          id
          info {
            title
            description 
            subTitle
            theme
            alignment 
            background{
              data {
                attributes {
                  name,
                  url, 
                  previewUrl, 
                  ext, 
                  formats
                }
              }
            }
          }
        }
        whyUsSection {
          id,
          info  {
            id
            title
            description 
            subTitle
            theme 
          }
          counterNumbers {
            id
            title
            number
            theme
            icon {
              data {
                attributes {
                  name,
                  url, 
                  previewUrl, 
                  ext, 
                  formats
                }
              }
            }
          }
        }
      }
    }
  }
}
`);
// EXTERNAL MODULE: ./components/Home/HeroSection.vue + 4 modules
var HeroSection = __webpack_require__(107);

// EXTERNAL MODULE: ./components/Home/WhyUs.vue + 4 modules
var WhyUs = __webpack_require__(108);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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





/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "IndexPage",
  components: {
    ProductCard: ProductCard["default"],
    HeroSection: HeroSection["default"],
    WhyUs: WhyUs["default"]
  },

  async asyncData({
    app
  }) {
    const client = app.apolloProvider.defaultClient;
    const {
      data
    } = await client.query({
      query: graphql_homepage
    });
    const homepage = data.homepage.data.attributes;
    return {
      homepage
    };
  },

  data() {
    return {
      options: {
        useEasing: true,
        useGrouping: true
      },
      bannerImg: img_five_default.a,
      featuredList: [{
        img: "https://i.imgur.com/YD6WZwi.png",
        tags: "Figma,Html",
        title: "Onest - Classified Ad Listing ",
        text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
        price: 13
      }, {
        img: "https://i.imgur.com/IwfwAGA.png",
        tags: "Figma",
        title: "Relik - Admin Dashboard",
        text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
        price: 18
      }],
      latestProduct: [{
        price: 13,
        img: "https://i.imgur.com/0F0qE3V.png",
        tags: "Figma,Html",
        title: "Onest - Classified Ad Listing ",
        text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online."
      }, {
        img: "https://i.imgur.com/pFuvaJH.png",
        tags: "Figma",
        title: "Relik - Admin Dashboard",
        text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
        price: 18
      }, {
        img: "https://i.imgur.com/76niUXz.png",
        tags: "Figma,Html",
        title: "Onest - Classified Ad Listing ",
        text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
        price: 13
      }, {
        img: "https://i.imgur.com/YD6WZwi.png",
        tags: "Figma",
        title: "Relik - Admin Dashboard",
        text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
        price: 18
      }, {
        img: "https://i.imgur.com/IwfwAGA.png",
        tags: "Figma,Html",
        title: "Onest - Classified Ad Listing ",
        text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
        price: 13
      }, {
        img: "https://i.imgur.com/wGOemD7.png",
        tags: "Figma",
        title: "Relik - Admin Dashboard",
        text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
        price: 18
      }],
      productList: [{
        title: "Project Information",
        text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
      }, {
        title: "User Experience Design",
        text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
      }, {
        title: "Project Introduction",
        text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
      }, {
        title: "Front-end Development",
        text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
      }, {
        title: "Project Information",
        text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
      }, {
        title: "Delivery & Client Feedback",
        text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3924cf89"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProductCard: __webpack_require__(57).default,BusinessCard: __webpack_require__(59).default})


/***/ }),

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

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BusinessCard.vue?vue&type=template&id=1de5b141&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("bg-white rounded-lg p-8 business-card duration-300 hover:shadow-bs8 " + _vm.className)},[_vm._ssrNode("<div"+(_vm._ssrClass(null,("icon w-76 h-76 bg-gray-f0 rounded-lg flex items-center justify-center mb-7 duration-300 " + _vm.classNameIcon)))+"><svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path opacity=\"0.2\" d=\"M18 31.5C25.4558 31.5 31.5 25.4558 31.5 18C31.5 10.5442 25.4558 4.5 18 4.5C10.5442 4.5 4.5 10.5442 4.5 18C4.5 25.4558 10.5442 31.5 18 31.5Z\" fill=\"#0B63E5\"></path> <path d=\"M18 31.5C25.4558 31.5 31.5 25.4558 31.5 18C31.5 10.5442 25.4558 4.5 18 4.5C10.5442 4.5 4.5 10.5442 4.5 18C4.5 25.4558 10.5442 31.5 18 31.5Z\" stroke=\"#0B63E5\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M16.875 16.875H18V24.75H19.125\" stroke=\"#0B63E5\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M18.4375 11.8125C18.4375 12.0541 18.2416 12.25 18 12.25C17.7584 12.25 17.5625 12.0541 17.5625 11.8125C17.5625 11.5709 17.7584 11.375 18 11.375C18.2416 11.375 18.4375 11.5709 18.4375 11.8125Z\" fill=\"#0B63E5\" stroke=\"#0B63E5\" stroke-width=\"2.5\"></path></svg></div> <div><h3 class=\"text-dark-06 text-xl mb-3\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h3> <p class=\"text-dark-42 text-base font-light\">"+_vm._ssrEscape(_vm._s(_vm.text))+"</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BusinessCard.vue?vue&type=template&id=1de5b141&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BusinessCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var BusinessCardvue_type_script_lang_js_ = ({
  name: "BusinessCard",
  props: {
    title: {
      type: String,
      requied: true
    },
    text: {
      type: String,
      requied: true
    },
    className: {
      type: String,
      requied: true
    },
    classNameIcon: {
      type: String,
      requied: true
    }
  }
});
// CONCATENATED MODULE: ./components/BusinessCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BusinessCardvue_type_script_lang_js_ = (BusinessCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BusinessCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BusinessCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "54dc8a2b"
  
)

/* harmony default export */ var BusinessCard = __webpack_exports__["default"] = (component.exports);

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


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img-five.b02af96.png";

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img-four.b96f4fa.png";

/***/ })

};;
//# sourceMappingURL=index.js.map