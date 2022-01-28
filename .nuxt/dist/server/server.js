module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/accordion","2":"components/breadcrumb","3":"components/business-card","4":"components/counter-up","5":"components/fun","6":"components/home-hero-section","7":"components/home-why-us","8":"components/link-thumb","9":"components/pagination","10":"components/product-card","11":"components/product-list-tab","12":"components/product-list-tabs","13":"components/purchase-card","14":"components/solution-card","15":"pages/hire-us","16":"pages/index","17":"pages/product-demo","18":"pages/product-details","19":"pages/product-list","20":"pages/screenshort","21":"pages/sitemap"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  head() {},

  methods: {
    fixUrl(file) {
      return `https://api.templatecookie.com${file}`;
    }

  }
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header/Header.vue?vue&type=template&id=6bc30521&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"fixed w-full py-3 bg-white shadow-6xl z-50"},[_vm._ssrNode("<div class=\"container relative\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[(_vm.data.logo.data.attributes.url)?_c('img',{attrs:{"src":_vm.fixUrl(_vm.data.logo.data.attributes.url),"alt":"Templatecookie"}}):_c('img',{attrs:{"src":__webpack_require__(11),"alt":"Templatecookie "}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"hidden lg:block\">","</div>",[(_vm.data && _vm.data.menuItems)?_vm._ssrNode("<ul class=\"flex items-center space-x-5 nav-menu\">","</ul>",[_vm._l((_vm.data.menuItems),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("nav-menu__item ",{ 'dropdown' : item.menuSubItems.length }))+">","</li>",[_c('nuxt-link',{attrs:{"to":item.href}},[_vm._v(_vm._s(item.label))]),_vm._ssrNode(" "+((item.menuSubItems.length)?("<span class=\"dropdown-icon\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.625 6.75L9 12.375L3.375 6.75\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></span>"):"<!---->")+" "),(item.menuSubItems.length)?_vm._ssrNode("<ul class=\"nav-menu__dropdown\">","</ul>",_vm._l((item.menuSubItems),function(dropdownItem){return _vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":dropdownItem.href}},[_vm._v(" "+_vm._s(dropdownItem.label)+" ")])],1)}),0):_vm._e()],2)}),_vm._ssrNode(" <li><a"+(_vm._ssrAttr("href",_vm.data.profile.link.href))+(_vm._ssrAttr("target",{ '_blank' : _vm.data.profile.link.target }))+" class=\"text-white hover:text-white text-sm capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded inline-block px-5 py-4\">"+_vm._ssrEscape("\n              "+_vm._s(_vm.data.profile.link.label)+"\n            ")+"</a></li>")],2):_vm._e()]),_vm._ssrNode(" <div class=\"lg:hidden\"><div"+(_vm._ssrClass(null,("toggle " + (_vm.toggleStatus === true ? 'active' : '') + " ")))+"><span></span></div></div>")],2)]),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.sideBar)?_c('div',{staticClass:"sidebar absolute left-0 top-full w-full bg-white h-screen max-w-300 block lg:hidden z-50"},[_c('div',{staticClass:"py-6"},[_c('ul',{staticClass:"sidebar-menu"},[_c('li',{staticClass:"sidebar-menu__item"},[_c('div',{staticClass:"sidebar-menu__content"},[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Free Template")])],1)]),_vm._v(" "),_c('li',{staticClass:"sidebar-menu__item"},[_c('div',{staticClass:"sidebar-menu__content"},[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("UI template")]),_vm._v(" "),_c('span',{staticClass:"dropdown-icon"},[_c('svg',{attrs:{"width":"18","height":"18","viewBox":"0 0 18 18","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M14.625 6.75L9 12.375L3.375 6.75","stroke":"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1),_vm._v(" "),_c('div',{staticClass:"sidebar-menu__dropdown"},[_c('ul',[_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1)])])]),_vm._v(" "),_c('li',{staticClass:"sidebar-menu__item"},[_c('div',{staticClass:"sidebar-menu__content"},[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Html template")]),_vm._v(" "),_c('span',{staticClass:"dropdown-icon"},[_c('svg',{attrs:{"width":"18","height":"18","viewBox":"0 0 18 18","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M14.625 6.75L9 12.375L3.375 6.75","stroke":"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1),_vm._v(" "),_c('div',{staticClass:"sidebar-menu__dropdown"},[_c('ul',[_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1)])])]),_vm._v(" "),_c('li',{staticClass:"sidebar-menu__button"},[_c('nuxt-link',{staticClass:"text-white hover:text-white text-button capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded inline-block px-5 w-full text-center",attrs:{"to":"/"}},[_vm._v("\n              envato profile\n            ")])],1)])])]):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header/Header.vue?vue&type=template&id=6bc30521&

// EXTERNAL MODULE: ./mixin/global.js
var global = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  name: "Header",
  props: ['data'],
  mixins: [global["a" /* default */]],

  data() {
    return {
      toggleStatus: false,
      sideBar: false
    };
  },

  methods: {
    openSidebar() {
      this.toggleStatus = !this.toggleStatus;
      this.sideBar = !this.sideBar;
      document.body.classList.toggle("overlay");
    }

  }
});
// CONCATENATED MODULE: ./components/Header/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var Header_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Header/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Header_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d6138978"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(4).default})


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/Footer.vue?vue&type=template&id=0dc46bf5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"relative bg-dark-06 pt-40 lg:pt-200"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid xl:grid-cols-3 pb-12 md:pb-72\">","</div>",[_vm._ssrNode("<div class=\"mb-12\"><div class=\"mb-6\">"+((_vm.data.logo.data.attributes.url)?("<img"+(_vm._ssrAttr("src",_vm.fixUrl(_vm.data.logo.data.attributes.url)))+" alt=\"Templatecookie\">"):("<img"+(_vm._ssrAttr("src",__webpack_require__(11)))+" alt=\"Templatecookie \">"))+"</div> <p class=\"text-body-16 text-gray-b4 max-w-sm font-light\">"+_vm._ssrEscape("\n          "+_vm._s(_vm.data.description)+"\n        ")+"</p></div> "),(_vm.data && _vm.data.menuItems)?_vm._ssrNode("<div class=\"grid sm:grid-cols-2 gap-7 sm:gap-0 col-span-2\">","</div>",_vm._l((_vm.data.menuItems),function(item){return _vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h2 class=\"mb-7 text-body-16 leading-none tracking-widest uppercase text-white\">"+_vm._ssrEscape("\n            "+_vm._s(item.label)+"\n          ")+"</h2> "),_vm._ssrNode("<div>","</div>",[(item.menuSubItems.length)?_vm._ssrNode("<ul class=\"space-y-2 footer-menu\">","</ul>",_vm._l((item.menuSubItems),function(dropdownItem){return _vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"text-body-16 capitalize text-gray-83",attrs:{"to":dropdownItem.href}},[_vm._v("\n                  "+_vm._s(dropdownItem.label)+"\n                ")])],1)}),0):_vm._e()])],2)}),0):_vm._e()],2),_vm._ssrNode(" <div class=\"py-4 md:py-8 text-center border-t border-gray-24\"><p class=\"text-body-16 text-white font-light capitalize\">"+_vm._ssrEscape("\n        © "+_vm._s(new Date().getFullYear())+" All Rights Reserved -\n        Templatecookie\n      ")+"</p></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer/Footer.vue?vue&type=template&id=0dc46bf5&

// EXTERNAL MODULE: ./mixin/global.js
var global = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  name: "Footer",
  props: ['data'],
  mixins: [global["a" /* default */]]
});
// CONCATENATED MODULE: ./components/Footer/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var Footer_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Footer/Footer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Footer_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ac01a0f8"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(5).default})


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.e37aff2.svg";

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SocialLink.vue?vue&type=template&id=49d1c8fc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((_vm.social && _vm.social.data)?("<ul class=\"flex items-center space-x-3\">"+(_vm._ssrList((_vm.social.data),function(item){return ("<li><a"+(_vm._ssrAttr("href",item.attributes.name))+(_vm._ssrClass("flex items-center justify-center p-3 duration-300 rounded-md bg-blue-18  group",_vm.setThemeColor(item.attributes.theme)))+"><img"+(_vm._ssrAttr("src",_vm.fixUrl(item.attributes.icon.data.attributes.url)))+"></a></li>")}))+"</ul>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SocialLink.vue?vue&type=template&id=49d1c8fc&

// EXTERNAL MODULE: ./mixin/global.js
var global = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SocialLink.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SocialLinkvue_type_script_lang_js_ = ({
  name: "SocialLink",
  props: ['social'],
  mixins: [global["a" /* default */]],
  methods: {
    setThemeColor(theme) {
      switch (theme) {
        case "red":
          return 'hover:bg-dribble';

        case "blue":
          return 'hover:bg-facebook';

        default:
          return 'hover:bg-black';
      }
    }

  }
});
// CONCATENATED MODULE: ./components/SocialLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SocialLinkvue_type_script_lang_js_ = (SocialLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/SocialLink.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SocialLinkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "12bd3cfc"
  
)

/* harmony default export */ var SocialLink = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Newsletter.vue?vue&type=template&id=5816934b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"relative lg:pt-124 z-10"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"relative overflow-hidden bg-white border-gray-e6 border rounded-3xl p-6 md:p-12 -mb-16\">","</div>",[_vm._ssrNode("<div class=\"flex flex-col lg:flex-row lg:space-x-8\">","</div>",[_vm._ssrNode("<div class=\"border-t lg:border-t-0 lg:border-r border-dark-e6 w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left pt-6 lg:pt-0\">","</div>",[_vm._ssrNode("<h2 class=\"text-body-24 text-dark-06 capitalize mb-3\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.data.social_title)+"\n          ")+"</h2> <p class=\"font-light text-body-16 text-dark-42 mb-6 max-w-full lg:max-w-536\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.data.social_description)+"\n          ")+"</p> "),_vm._ssrNode("<div class=\"flex justify-center lg:justify-start\">","</div>",[(_vm.data && _vm.data.social_medias)?_c('SocialLink',{attrs:{"social":_vm.data.social_medias}}):_vm._e()],1)],2),_vm._ssrNode(" <div class=\"w-full lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0 text-center lg:text-left\"><h2 class=\"text-body-24 text-dark-06 capitalize mb-3\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.data.newsletter_title)+"\n          ")+"</h2> <p class=\"font-light text-body-16 text-dark-42 mb-6 max-w-536\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.data.newsletter_description)+"\n          ")+"</p> <form action=\"#\"><div class=\"relative overflow-hidden rounded-md border border-gray-e6 py-3 px-18 mb-3\"><span class=\"absolute top-1/2 left-[18px] transform -translate-y-1/2\"><img"+(_vm._ssrAttr("src",__webpack_require__(23)))+" alt=\"icon\"></span> <input type=\"email\" placeholder=\"Email Address\" class=\"outline-none focus:outline-none text-body-16 font-light placeholder-gray-83 text-dark-06 pl-9 w-full\"></div> <button type=\"submit\" class=\"inline-block text-center text-button bg-blue-0b hover:bg-dark-06 transition-all w-full rounded-md text-white font-medium\">\n              Subscribe\n            </button></form></div>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Newsletter.vue?vue&type=template&id=5816934b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Newsletter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Newslettervue_type_script_lang_js_ = ({
  props: ['data'],

  data() {
    return {};
  }

});
// CONCATENATED MODULE: ./components/Newsletter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Newslettervue_type_script_lang_js_ = (Newslettervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Newsletter.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Newslettervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "eb3cff98"
  
)

/* harmony default export */ var Newsletter = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SocialLink: __webpack_require__(12).default})


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header/HeaderTwo.vue?vue&type=template&id=447b2672&lang=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"fixed w-full py-3 z-50 bg-white shadow-6xl"},[_vm._ssrNode("<div class=\"container relative\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('nuxt-link',{attrs:{"to":"#"}},[_c('img',{attrs:{"src":__webpack_require__(11),"alt":"brand-logo"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"hidden lg:block\">","</div>",[_vm._ssrNode("<ul class=\"flex items-center space-x-5 nav-menu\">","</ul>",[_vm._ssrNode("<li class=\"nav-menu__item\">","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Demo")]),_vm._ssrNode(" <span class=\"dropdown-icon\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.625 6.75L9 12.375L3.375 6.75\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></span> "),_vm._ssrNode("<ul class=\"nav-menu__dropdown\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-menu__item\">","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Pages")]),_vm._ssrNode(" <span class=\"dropdown-icon\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.625 6.75L9 12.375L3.375 6.75\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></span> "),_vm._ssrNode("<ul class=\"nav-menu__dropdown\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-menu__item\">","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Components")]),_vm._ssrNode(" <span class=\"dropdown-icon\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.625 6.75L9 12.375L3.375 6.75\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></span> "),_vm._ssrNode("<ul class=\"nav-menu__dropdown\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-menu__item\">","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Support")]),_vm._ssrNode(" <span class=\"dropdown-icon\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.625 6.75L9 12.375L3.375 6.75\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></span> "),_vm._ssrNode("<ul class=\"nav-menu__dropdown\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"flex items-center space-x-3\">","</li>",[_c('nuxt-link',{staticClass:"flex items-center justify-center text-white hover:text-white text-button capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded px-5 w-full text-center",attrs:{"to":"#"}},[_vm._v("\n              Buy Now\n              "),_c('span',{staticClass:"inline-block ml-2"},[_c('svg',{attrs:{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M3.75 12H20.25","stroke":"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),_vm._v(" "),_c('path',{attrs:{"d":"M13.5 5.25L20.25 12L13.5 18.75","stroke":"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"flex items-center justify-center text-dark-06 hover:text-white text-button capitalize font-medium bg-gray-e6 hover:bg-dark-06 overflow-hidden rounded px-5 w-full text-center whitespace-nowrap",attrs:{"to":"#"}},[_c('span',{staticClass:"inline-block mr-2"},[_c('svg',{attrs:{"width":"20","height":"20","viewBox":"0 0 20 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M8.75 8.75H13.75","stroke":"currentColor","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}}),_vm._v(" "),_c('path',{attrs:{"d":"M8.75 11.25H13.75","stroke":"currentColor","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}}),_vm._v(" "),_c('path',{attrs:{"d":"M16.25 3.125H3.75C3.40482 3.125 3.125 3.40482 3.125 3.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V3.75C16.875 3.40482 16.5952 3.125 16.25 3.125Z","stroke":"currentColor","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}}),_vm._v(" "),_c('path',{attrs:{"d":"M6.25 3.125V16.875","stroke":"currentColor","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),_vm._v("\n              Docs v.5.0\n            ")])],2)],2)]),_vm._ssrNode(" <div class=\"lg:hidden\"><div"+(_vm._ssrClass(null,("toggle " + (_vm.toggleStatus === true ? 'active' : '') + " ")))+"><span></span> <span></span> <span></span></div></div>")],2)]),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.sideBar)?_c('div',{staticClass:"sidebar absolute left-0 top-full w-full bg-white h-screen max-w-300 block lg:hidden"},[_c('div',{staticClass:"py-6"},[_c('ul',{staticClass:"sidebar-menu"},[_c('li',{staticClass:"sidebar-menu__item"},[_c('div',{staticClass:"sidebar-menu__content"},[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Demo")]),_vm._v(" "),_c('span',{staticClass:"dropdown-icon"},[_c('svg',{attrs:{"width":"18","height":"18","viewBox":"0 0 18 18","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M14.625 6.75L9 12.375L3.375 6.75","stroke":"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1),_vm._v(" "),_c('div',{staticClass:"sidebar-menu__dropdown"},[_c('ul',[_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1)])])]),_vm._v(" "),_c('li',{staticClass:"sidebar-menu__item"},[_c('div',{staticClass:"sidebar-menu__content"},[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Pages")]),_vm._v(" "),_c('span',{staticClass:"dropdown-icon"},[_c('svg',{attrs:{"width":"18","height":"18","viewBox":"0 0 18 18","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M14.625 6.75L9 12.375L3.375 6.75","stroke":"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1),_vm._v(" "),_c('div',{staticClass:"sidebar-menu__dropdown"},[_c('ul',[_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1)])])]),_vm._v(" "),_c('li',{staticClass:"sidebar-menu__item"},[_c('div',{staticClass:"sidebar-menu__content"},[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Components")]),_vm._v(" "),_c('span',{staticClass:"dropdown-icon"},[_c('svg',{attrs:{"width":"18","height":"18","viewBox":"0 0 18 18","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M14.625 6.75L9 12.375L3.375 6.75","stroke":"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1),_vm._v(" "),_c('div',{staticClass:"sidebar-menu__dropdown"},[_c('ul',[_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1)])])]),_vm._v(" "),_c('li',{staticClass:"sidebar-menu__item"},[_c('div',{staticClass:"sidebar-menu__content"},[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Support")]),_vm._v(" "),_c('span',{staticClass:"dropdown-icon"},[_c('svg',{attrs:{"width":"18","height":"18","viewBox":"0 0 18 18","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M14.625 6.75L9 12.375L3.375 6.75","stroke":"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1),_vm._v(" "),_c('div',{staticClass:"sidebar-menu__dropdown"},[_c('ul',[_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Dropdown item ")])],1)])])]),_vm._v(" "),_c('li',{staticClass:"sidebar-menu__button"},[_c('nuxt-link',{staticClass:"flex items-center justify-center text-white hover:text-white text-button capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded px-5 w-full text-center",attrs:{"to":"#"}},[_vm._v("\n              Buy Now\n              "),_c('span',{staticClass:"inline-block ml-2"},[_c('svg',{attrs:{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M3.75 12H20.25","stroke":"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),_vm._v(" "),_c('path',{attrs:{"d":"M13.5 5.25L20.25 12L13.5 18.75","stroke":"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])])],1),_vm._v(" "),_c('li',{staticClass:"sidebar-menu__button"},[_c('nuxt-link',{staticClass:"flex items-center justify-center text-dark-06 hover:text-white text-button capitalize font-medium bg-gray-e6 hover:bg-dark-06 overflow-hidden rounded px-5 w-full text-center",attrs:{"to":"#"}},[_c('span',{staticClass:"inline-block mr-2"},[_c('svg',{attrs:{"width":"20","height":"20","viewBox":"0 0 20 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M8.75 8.75H13.75","stroke":"currentColor","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}}),_vm._v(" "),_c('path',{attrs:{"d":"M8.75 11.25H13.75","stroke":"currentColor","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}}),_vm._v(" "),_c('path',{attrs:{"d":"M16.25 3.125H3.75C3.40482 3.125 3.125 3.40482 3.125 3.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V3.75C16.875 3.40482 16.5952 3.125 16.25 3.125Z","stroke":"currentColor","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}}),_vm._v(" "),_c('path',{attrs:{"d":"M6.25 3.125V16.875","stroke":"currentColor","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),_vm._v("\n              Docs v5.0\n            ")])],1)])])]):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header/HeaderTwo.vue?vue&type=template&id=447b2672&lang=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header/HeaderTwo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeaderTwovue_type_script_lang_js_ = ({
  name: "HeaderTwo",

  data() {
    return {
      toggleStatus: false,
      sideBar: false
    };
  },

  methods: {
    openSidebar() {
      this.toggleStatus = !this.toggleStatus;
      this.sideBar = !this.sideBar;
      document.body.classList.toggle("overlay");
    }

  }
});
// CONCATENATED MODULE: ./components/Header/HeaderTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var Header_HeaderTwovue_type_script_lang_js_ = (HeaderTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Header/HeaderTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Header_HeaderTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "949ea2d0"
  
)

/* harmony default export */ var HeaderTwo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(4).default})


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterTwo.vue?vue&type=template&id=5d5ef6fa&lang=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"relative bg-dark-06 pt-124"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid xl:grid-cols-3 pb-12 md:pb-72\">","</div>",[_vm._ssrNode("<div class=\"mb-12 col-span-2 xl:col-span-1\"><div class=\"mb-6\"><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt=\"brand-logo\"></div> <p class=\"text-body-16 text-gray-b4 md:max-w-sm font-light\">\n          We build readymade websites, mobile applications, and elaborate\n          online business services.\n        </p></div> "),_vm._ssrNode("<div class=\"grid sm:grid-cols-4 gap-7 sm:gap-0 col-span-2\">","</div>",[_vm._ssrNode("<div class=\"col-span-2 lg:col-span-1\">","</div>",[_vm._ssrNode("<h2 class=\"mb-7 text-body-20 leading-none tracking-widest uppercase text-white\">\n            Quick Links\n          </h2> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<ul class=\"space-y-2 footer-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"text-body-16 capitalize text-gray-83",attrs:{"to":"/"}},[_vm._v("\n                  Product\n                ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"text-body-16 capitalize text-gray-83",attrs:{"to":"/"}},[_vm._v("\n                  Envato Profile\n                ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"text-body-16 capitalize text-gray-83",attrs:{"to":"/"}},[_vm._v("\n                  Contact us\n                ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"text-body-16 capitalize text-gray-83",attrs:{"to":"/"}},[_vm._v("\n                  About us\n                ")])],1)],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-span-2 lg:col-span-1\">","</div>",[_vm._ssrNode("<h2 class=\"mb-7 text-body-20 leading-none tracking-widest uppercase text-white\">\n            Services\n          </h2> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<ul class=\"space-y-2 footer-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"text-body-16 capitalize text-gray-83",attrs:{"to":"/"}},[_vm._v("\n                  Docs\n                ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"text-body-16 capitalize text-gray-83",attrs:{"to":"/"}},[_vm._v("\n                  Changelog\n                ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"text-body-16 capitalize text-gray-83",attrs:{"to":"/"}},[_vm._v("\n                  License\n                ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"text-body-16 capitalize text-gray-83",attrs:{"to":"/"}},[_vm._v("\n                  Support\n                ")])],1)],2)])],2),_vm._ssrNode(" <div class=\"col-span-full lg:col-span-2 mt-8 lg:mt-0\"><div><h2 class=\"text-body-20 text-white uppercase mb-3\">\n              Subscribe to our newsletter\n            </h2> <p class=\"font-light text-body-16 text-gray-9b mb-6\">\n              In tristique gravida libero sit amet ornare. Integer volutpat\n              ligula vitae consequat interdum. Pellentesque a vehicula ligula.\n            </p> <form action=\"#\"><div class=\"relative overflow-hidden rounded-md py-3 px-18 mb-3 bg-white\"><span class=\"absolute top-1/2 left-[18px] transform -translate-y-1/2\"><img"+(_vm._ssrAttr("src",__webpack_require__(23)))+" alt=\"icon\"></span> <input type=\"email\" placeholder=\"Email Address\" class=\"bg-transparent outline-none focus:outline-none text-body-16 font-light placeholder-gray-6a text-dark-06 pl-9 w-full\"></div> <button type=\"submit\" class=\"inline-block text-center text-button bg-blue-0b hover:bg-blue-800 transition-all w-full rounded-md text-white font-medium\">\n                Subscribe\n              </button></form></div></div>")],2)],2),_vm._ssrNode(" <div class=\"py-4 md:py-8 text-center border-t border-gray-24\"><p class=\"text-body-16 text-white font-light capitalize\">"+_vm._ssrEscape("\n        © "+_vm._s(new Date().getFullYear())+" All Rights Reserved -\n        Templatecookie\n      ")+"</p></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer/FooterTwo.vue?vue&type=template&id=5d5ef6fa&lang=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterTwo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FooterTwovue_type_script_lang_js_ = ({
  name: "FooterTwo"
});
// CONCATENATED MODULE: ./components/Footer/FooterTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var Footer_FooterTwovue_type_script_lang_js_ = (FooterTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Footer/FooterTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Footer_FooterTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "da9f5b50"
  
)

/* harmony default export */ var FooterTwo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(5).default})


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header/HeaderThree.vue?vue&type=template&id=606e5bda&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-col sm:flex-row items-center justify-between p-8 shadow-bs013 bg-gray-f5"},[_vm._ssrNode("<div class=\"mb-6 sm:mb-0\"><p class=\"text-body-18 capitalize text-dark-06\">\n      Relik - Admin Dashboard Figma Template\n    </p></div> "),_vm._ssrNode("<div>","</div>",[_c('nuxt-link',{staticClass:"flex items-center justify-center text-white hover:text-white text-button capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded px-5 w-full whitespace-nowrap text-center",attrs:{"to":"#"}},[_vm._v("\n      Buy Now\n      "),_c('span',{staticClass:"inline-block ml-2"},[_c('svg',{attrs:{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M3.75 12H20.25","stroke":"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),_vm._v(" "),_c('path',{attrs:{"d":"M13.5 5.25L20.25 12L13.5 18.75","stroke":"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header/HeaderThree.vue?vue&type=template&id=606e5bda&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header/HeaderThree.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeaderThreevue_type_script_lang_js_ = ({
  name: "HeaderThree"
});
// CONCATENATED MODULE: ./components/Header/HeaderThree.vue?vue&type=script&lang=js&
 /* harmony default export */ var Header_HeaderThreevue_type_script_lang_js_ = (HeaderThreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Header/HeaderThree.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Header_HeaderThreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1ce9082c"
  
)

/* harmony default export */ var HeaderThree = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("vue-apollo");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("162ac6c2", content, true, context)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("53f61d5f", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgOVYxOC43NUMzIDE4Ljk0ODkgMy4wNzkwMiAxOS4xMzk3IDMuMjE5NjcgMTkuMjgwM0MzLjM2MDMyIDE5LjQyMSAzLjU1MTA5IDE5LjUgMy43NSAxOS41SDIwLjI1QzIwLjQ0ODkgMTkuNSAyMC42Mzk3IDE5LjQyMSAyMC43ODAzIDE5LjI4MDNDMjAuOTIxIDE5LjEzOTcgMjEgMTguOTQ4OSAyMSAxOC43NVY5TDEyIDNMMyA5WiIgc3Ryb2tlPSIjMEI2M0U1IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMSA5TDEzLjYzNjQgMTQuMjVIMTAuMzYzNkwzIDkiIHN0cm9rZT0iIzBCNjNFNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("subscriptions-transport-ws");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("subscriptions-transport-ws/dist/message-types");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-ws");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-persisted-queries");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-state");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
module.exports = __webpack_require__(50);


/***/ }),
/* 38 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(8).default("54b08540", content, true)

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n \n:-moz-focusring {\n\toutline: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}*, ::before, ::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-border-opacity:1;border-color:rgba(229, 231, 235, var(--tw-border-opacity));--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.container{width:100%;}@media (min-width: 480px){.container{max-width:480px;}}@media (min-width: 640px){.container{max-width:640px;}}@media (min-width: 768px){.container{max-width:768px;}}@media (min-width: 1024px){.container{max-width:1024px;}}@media (min-width: 1280px){.container{max-width:1280px;}}@media (min-width: 1536px){.container{max-width:1536px;}}.fixed{position:fixed;}.absolute{position:absolute;}.relative{position:relative;}.sticky{position:-webkit-sticky;position:sticky;}.top-1\\/2{top:50%;}.left-1\\/2{left:50%;}.left-\\[18px\\]{left:18px;}.left-0{left:0px;}.top-full{top:100%;}.-bottom-44{bottom:-11rem;}.top-0{top:0px;}.z-10{z-index:10;}.z-50{z-index:50;}.order-2{order:2;}.order-1{order:1;}.col-span-2{grid-column:span 2 / span 2;}.col-span-full{grid-column:1 / -1;}.col-span-12{grid-column:span 12 / span 12;}.col-span-6{grid-column:span 6 / span 6;}.col-span-7{grid-column:span 7 / span 7;}.col-span-5{grid-column:span 5 / span 5;}.col-span-8{grid-column:span 8 / span 8;}.col-span-4{grid-column:span 4 / span 4;}.float-right{float:right;}.m-0{margin:0px;}.m-auto{margin:auto;}.mx-auto{margin-left:auto;margin-right:auto;}.my-8{margin-top:2rem;margin-bottom:2rem;}.my-2{margin-top:0.5rem;margin-bottom:0.5rem;}.mr-3\\.5{margin-right:0.875rem;}.mr-3{margin-right:0.75rem;}.mb-1\\.5{margin-bottom:0.375rem;}.mb-1{margin-bottom:0.25rem;}.mb-3{margin-bottom:0.75rem;}.mb-7{margin-bottom:1.75rem;}.mr-5{margin-right:1.25rem;}.mb-2{margin-bottom:0.5rem;}.ml-2{margin-left:0.5rem;}.-mb-16{margin-bottom:-4rem;}.mb-6{margin-bottom:1.5rem;}.mr-2{margin-right:0.5rem;}.mb-4{margin-bottom:1rem;}.mt-6{margin-top:1.5rem;}.mb-12{margin-bottom:3rem;}.mt-8{margin-top:2rem;}.mb-8{margin-bottom:2rem;}.ml-3{margin-left:0.75rem;}.mb-10{margin-bottom:2.5rem;}.mb-20{margin-bottom:5rem;}.mb-9{margin-bottom:2.25rem;}.mb-16{margin-bottom:4rem;}.mt-7{margin-top:1.75rem;}.mb-72{margin-bottom:72px;}.mr-4{margin-right:1rem;}.mb-24{margin-bottom:6rem;}.ml-6{margin-left:1.5rem;}.mr-6{margin-right:1.5rem;}.mr-1\\.5{margin-right:0.375rem;}.mr-1{margin-right:0.25rem;}.mb-5{margin-bottom:1.25rem;}.mr-2\\.5{margin-right:0.625rem;}.mt-20{margin-top:5rem;}.mr-0{margin-right:0px;}.mr-8{margin-right:2rem;}.ml-8{margin-left:2rem;}.block{display:block;}.inline-block{display:inline-block;}.inline{display:inline;}.flex{display:flex;}.grid{display:grid;}.hidden{display:none;}.h-76{height:76px;}.h-250{height:250px;}.h-full{height:100%;}.h-84{height:84px;}.h-16{height:4rem;}.h-screen{height:100vh;}.h-680{height:680px;}.h-48{height:48px;}.h-5{height:1.25rem;}.h-340{height:340px;}.h-12{height:3rem;}.h-364{height:364px;}.h-200{height:200px;}.h-900{height:900px;}.w-76{width:76px;}.w-full{width:100%;}.w-84{width:84px;}.w-16{width:4rem;}.w-auto{width:auto;}.w-200{width:200px;}.w-5{width:1.25rem;}.w-12{width:3rem;}.max-w-full{max-width:100%;}.max-w-536{max-width:536px;}.max-w-100{max-width:100px;}.max-w-sm{max-width:24rem;}.max-w-300{max-width:300px;}.max-w-680{max-width:680px;}.max-w-232{max-width:232px;}.max-w-4xl{max-width:56rem;}.max-w-xl{max-width:36rem;}.max-w-872{max-width:872px;}.max-w-md{max-width:28rem;}.max-w-lg{max-width:32rem;}.max-w-2xl{max-width:42rem;}.flex-shrink-0{flex-shrink:0;}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:var(--tw-transform);}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:var(--tw-transform);}.transform{transform:var(--tw-transform);}.cursor-pointer{cursor:pointer;}.list-disc{list-style-type:disc;}.grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr));}.grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr));}.grid-cols-12{grid-template-columns:repeat(12, minmax(0, 1fr));}.flex-col{flex-direction:column;}.flex-wrap{flex-wrap:wrap;}.items-end{align-items:flex-end;}.items-center{align-items:center;}.items-stretch{align-items:stretch;}.justify-center{justify-content:center;}.justify-between{justify-content:space-between;}.gap-7{gap:1.75rem;}.gap-6{gap:1.5rem;}.space-x-2 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));}.space-x-4 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)));}.space-x-3 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.75rem * var(--tw-space-x-reverse));margin-left:calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));}.space-y-2 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.5rem * var(--tw-space-y-reverse));}.space-x-5 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.25rem * var(--tw-space-x-reverse));margin-left:calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));}.space-y-3 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.75rem * var(--tw-space-y-reverse));}.overflow-hidden{overflow:hidden;}.overflow-x-scroll{overflow-x:scroll;}.overflow-y-scroll{overflow-y:scroll;}.overflow-ellipsis{text-overflow:ellipsis;}.whitespace-nowrap{white-space:nowrap;}.rounded-lg{border-radius:0.5rem;}.rounded-3xl{border-radius:1.5rem;}.rounded-md{border-radius:0.375rem;}.rounded-2xl{border-radius:1rem;}.rounded-full{border-radius:9999px;}.rounded-5{border-radius:5px;}.rounded{border-radius:0.25rem;}.rounded-xl{border-radius:0.75rem;}.rounded-7{border-radius:7px;}.rounded-20{border-radius:20px;}.border{border-width:1px;}.border-2{border-width:2px;}.border-1\\.5{border-width:1.5px;}.border-r{border-right-width:1px;}.border-b{border-bottom-width:1px;}.border-t{border-top-width:1px;}.border-gray-e6{--tw-border-opacity:1;border-color:rgba(230, 232, 236, var(--tw-border-opacity));}.border-dark-e6{border-color: #E6E8EC;}.border-blue-0b{--tw-border-opacity:1;border-color:rgba(11, 99, 229, var(--tw-border-opacity));}.border-blue-ce{--tw-border-opacity:1;border-color:rgba(206, 224, 250, var(--tw-border-opacity));}.border-gray-24{--tw-border-opacity:1;border-color:rgba(36, 55, 82, var(--tw-border-opacity));}.border-gray-cd{--tw-border-opacity:1;border-color:rgba(205, 210, 216, var(--tw-border-opacity));}.border-white{--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity));}.border-gray-f5{--tw-border-opacity:1;border-color:rgba(245, 246, 247, var(--tw-border-opacity));}.border-dark-06{--tw-border-opacity:1;border-color:rgba(6, 28, 61, var(--tw-border-opacity));}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));}.bg-gray-f0{--tw-bg-opacity:1;background-color:rgba(240, 245, 255, var(--tw-bg-opacity));}.bg-blue-0b{--tw-bg-opacity:1;background-color:rgba(11, 99, 229, var(--tw-bg-opacity));}.bg-gray-f5{--tw-bg-opacity:1;background-color:rgba(245, 246, 247, var(--tw-bg-opacity));}.bg-blue-18{background-color: #1877F214;}.bg-green-0e{background-color:#0E76A814;}.bg-pink-ea{background-color: #EA4C8914 ;}.bg-blue-05{background-color:#053EFF14;}.bg-gray-14{background-color:#00000014;}.bg-dark-06{--tw-bg-opacity:1;background-color:rgba(6, 28, 61, var(--tw-bg-opacity));}.bg-transparent{background-color:transparent;}.bg-gray-e6{--tw-bg-opacity:1;background-color:rgba(230, 232, 236, var(--tw-bg-opacity));}.bg-green-e7{--tw-bg-opacity:1;background-color:rgba(231, 245, 232, var(--tw-bg-opacity));}.bg-yellow-ff{--tw-bg-opacity:1;background-color:rgba(255, 249, 238, var(--tw-bg-opacity));}.bg-pink-fe{--tw-bg-opacity:1;background-color:rgba(254, 237, 250, var(--tw-bg-opacity));}.bg-pink-f1{--tw-bg-opacity:1;background-color:rgba(241, 235, 255, var(--tw-bg-opacity));}.bg-orange-ff{--tw-bg-opacity:1;background-color:rgba(255, 244, 222, var(--tw-bg-opacity));}.bg-black{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity));}.bg-blue-09{--tw-bg-opacity:1;background-color:rgba(9, 79, 183, var(--tw-bg-opacity));}.bg-white-12{--tw-bg-opacity:1;background-color:rgba(39, 100, 192, var(--tw-bg-opacity));}.bg-blue-500{--tw-bg-opacity:1;background-color:rgba(59, 130, 246, var(--tw-bg-opacity));}.bg-opacity-50{--tw-bg-opacity:0.5;}.bg-cover{background-size:cover;}.bg-center{background-position:center;}.bg-right-bottom{background-position:right bottom;}.bg-no-repeat{background-repeat:no-repeat;}.object-cover{-o-object-fit:cover;object-fit:cover;}.object-center{-o-object-position:center;object-position:center;}.p-8{padding:2rem;}.p-6{padding:1.5rem;}.p-3{padding:0.75rem;}.p-2\\.5{padding:0.625rem;}.p-2{padding:0.5rem;}.p-10{padding:2.5rem;}.p-4{padding:1rem;}.p-1{padding:0.25rem;}.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}.px-1{padding-left:0.25rem;padding-right:0.25rem;}.py-7{padding-top:1.75rem;padding-bottom:1.75rem;}.px-18{padding-left:18px;padding-right:18px;}.px-3\\.5{padding-left:0.875rem;padding-right:0.875rem;}.px-3{padding-left:0.75rem;padding-right:0.75rem;}.py-3\\.5{padding-top:0.875rem;padding-bottom:0.875rem;}.px-9{padding-left:2.25rem;padding-right:2.25rem;}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem;}.px-5{padding-left:1.25rem;padding-right:1.25rem;}.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.py-4{padding-top:1rem;padding-bottom:1rem;}.py-6{padding-top:1.5rem;padding-bottom:1.5rem;}.px-6{padding-left:1.5rem;padding-right:1.5rem;}.py-20{padding-top:5rem;padding-bottom:5rem;}.px-4{padding-left:1rem;padding-right:1rem;}.py-14{padding-top:3.5rem;padding-bottom:3.5rem;}.px-8{padding-left:2rem;padding-right:2rem;}.py-8{padding-top:2rem;padding-bottom:2rem;}.py-10{padding-top:2.5rem;padding-bottom:2.5rem;}.pl-10{padding-left:2.5rem;}.pb-10{padding-bottom:2.5rem;}.pt-36{padding-top:9rem;}.pt-6{padding-top:1.5rem;}.pl-9{padding-left:2.25rem;}.pt-40{padding-top:10rem;}.pb-12{padding-bottom:3rem;}.pt-124{padding-top:124px;}.pb-14{padding-bottom:3.5rem;}.pt-216{padding-top:216px;}.pt-156{padding-top:156px;}.pb-20{padding-bottom:5rem;}.pt-230{padding-top:230px;}.pt-4{padding-top:1rem;}.pl-4{padding-left:1rem;}.pt-20{padding-top:5rem;}.pt-14{padding-top:3.5rem;}.pb-36{padding-bottom:9rem;}.pt-56{padding-top:14rem;}.pb-0{padding-bottom:0px;}.pt-16{padding-top:4rem;}.pt-12{padding-top:3rem;}.pl-8{padding-left:2rem;}.pt-0{padding-top:0px;}.pb-4{padding-bottom:1rem;}.pt-24{padding-top:6rem;}.text-left{text-align:left;}.text-center{text-align:center;}.text-base{font-size:1rem;line-height:1.5rem;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-2xl{font-size:1.5rem;line-height:2rem;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.text-3xl{font-size:1.875rem;line-height:2.25rem;}.text-body-14{font-size:14px;line-height:14px;}.text-body-24{font-size:24px;line-height:32px;}.text-body-16{font-size:16px;line-height:24px;}.text-button{font-size:14px;line-height:44px;}.text-body-12\\/12{font-size:12px;line-height:12px;}.text-body-18{font-size:18px;line-height:26px;}.text-body-14\\/20{font-size:14px;line-height:20px;}.text-body-20{font-size:20px;line-height:28px;}.text-lg{font-size:1.125rem;line-height:1.75rem;}.text-4xl{font-size:2.25rem;line-height:2.5rem;}.text-button-17{font-size:17px;line-height:56px;}.text-body-17{font-size:17px;line-height:24px;}.text-body-32px{font-size:32px;line-height:46px;}.text-body-17\\/56px{font-size:17px;line-height:56px;}.text-body-14\\/24{font-size:14px;line-height:24px;}.text-xs{font-size:0.75rem;line-height:1rem;}.text-body-10{font-size:10px;line-height:10px;}.font-medium{font-weight:500;}.font-semibold{font-weight:600;}.font-light{font-weight:300;}.font-normal{font-weight:400;}.uppercase{text-transform:uppercase;}.capitalize{text-transform:capitalize;}.leading-3{line-height:.75rem;}.leading-none{line-height:1;}.leading-5{line-height:1.25rem;}.tracking-ls03{letter-spacing: 0.012em;}.tracking-ls04{letter-spacing: 0.01em;}.tracking-widest{letter-spacing:0.1em;}.tracking-1{letter-spacing: 0.015em;}.tracking-ls02{letter-spacing:0.02em;}.text-dark-06{--tw-text-opacity:1;color:rgba(6, 28, 61, var(--tw-text-opacity));}.text-dark-42{--tw-text-opacity:1;color:rgba(66, 82, 107, var(--tw-text-opacity));}.text-gray-6a{color: #6A778B;}.text-blue-0b{--tw-text-opacity:1;color:rgba(11, 99, 229, var(--tw-text-opacity));}.text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}.text-pink-75{--tw-text-opacity:1;color:rgba(117, 52, 255, var(--tw-text-opacity));}.text-linkedin{--tw-text-opacity:1;color:rgba(14, 118, 168, var(--tw-text-opacity));}.text-dribble{--tw-text-opacity:1;color:rgba(234, 76, 137, var(--tw-text-opacity));}.text-behance{--tw-text-opacity:1;color:rgba(5, 62, 255, var(--tw-text-opacity));}.text-black{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));}.text-gray-b4{--tw-text-opacity:1;color:rgba(180, 187, 197, var(--tw-text-opacity));}.text-gray-83{--tw-text-opacity:1;color:rgba(131, 142, 158, var(--tw-text-opacity));}.text-gray-9b{--tw-text-opacity:1;color:rgba(155, 164, 177, var(--tw-text-opacity));}.text-opacity-60{--tw-text-opacity:0.6;}.placeholder-gray-83::-moz-placeholder{--tw-placeholder-opacity:1;color:rgba(131, 142, 158, var(--tw-placeholder-opacity));}.placeholder-gray-83:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgba(131, 142, 158, var(--tw-placeholder-opacity));}.placeholder-gray-83::placeholder{--tw-placeholder-opacity:1;color:rgba(131, 142, 158, var(--tw-placeholder-opacity));}.placeholder-gray-6a::-moz-placeholder{color: #6A778B;}.placeholder-gray-6a:-ms-input-placeholder{color: #6A778B;}.placeholder-gray-6a::placeholder{color: #6A778B;}.opacity-0{opacity:0;}.shadow-bs12{--tw-shadow:0px 0px 24px rgba(6, 28, 61, 0.12);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow-bs013{--tw-shadow:0px -1px 0px 0px #E6E8EC inset;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow-bs8{--tw-shadow:0px 12px 32px rgba(6, 28, 61, 0.08);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow-bs08{--tw-shadow:0px 16px 72px rgba(6, 28, 61, 0.08);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow-bs012{--tw-shadow:0px 16px 88px rgba(0, 0, 0, 0.12);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.outline-none{outline:2px solid transparent;outline-offset:2px;}.filter{filter:var(--tw-filter);}.transition{transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.duration-300{transition-duration:300ms;}.duration-500{transition-duration:500ms;}.hover\\:bg-dark-06:hover{--tw-bg-opacity:1;background-color:rgba(6, 28, 61, var(--tw-bg-opacity));}.hover\\:bg-gray-f0:hover{--tw-bg-opacity:1;background-color:rgba(240, 245, 255, var(--tw-bg-opacity));}.hover\\:bg-gray-200:hover{--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity));}.hover\\:bg-black:hover{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity));}.hover\\:bg-linkedin:hover{--tw-bg-opacity:1;background-color:rgba(14, 118, 168, var(--tw-bg-opacity));}.hover\\:bg-dribble:hover{--tw-bg-opacity:1;background-color:rgba(234, 76, 137, var(--tw-bg-opacity));}.hover\\:bg-behance:hover{--tw-bg-opacity:1;background-color:rgba(5, 62, 255, var(--tw-bg-opacity));}.hover\\:bg-facebook:hover{--tw-bg-opacity:1;background-color:rgba(24, 119, 242, var(--tw-bg-opacity));}.hover\\:bg-blue-800:hover{--tw-bg-opacity:1;background-color:rgba(30, 64, 175, var(--tw-bg-opacity));}.hover\\:bg-blue-0b:hover{--tw-bg-opacity:1;background-color:rgba(11, 99, 229, var(--tw-bg-opacity));}.hover\\:text-blue-0b:hover{--tw-text-opacity:1;color:rgba(11, 99, 229, var(--tw-text-opacity));}.hover\\:text-white:hover{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}.hover\\:shadow-bs8:hover{--tw-shadow:0px 12px 32px rgba(6, 28, 61, 0.08);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px;}.group:hover .group-hover\\:text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}.group:hover .group-hover\\:text-dark-06{--tw-text-opacity:1;color:rgba(6, 28, 61, var(--tw-text-opacity));}@media (min-width: 640px){.sm\\:left-0{left:0px;}.sm\\:order-1{order:1;}.sm\\:order-2{order:2;}.sm\\:col-span-6{grid-column:span 6 / span 6;}.sm\\:mt-0{margin-top:0px;}.sm\\:mb-0{margin-bottom:0px;}.sm\\:mr-6{margin-right:1.5rem;}.sm\\:mr-3{margin-right:0.75rem;}.sm\\:inline-block{display:inline-block;}.sm\\:flex{display:flex;}.sm\\:w-auto{width:auto;}.sm\\:max-w-full{max-width:100%;}.sm\\:transform-none{transform:none;}.sm\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.sm\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr));}.sm\\:flex-row{flex-direction:row;}.sm\\:items-center{align-items:center;}.sm\\:justify-start{justify-content:flex-start;}.sm\\:justify-end{justify-content:flex-end;}.sm\\:justify-between{justify-content:space-between;}.sm\\:gap-0{gap:0px;}.sm\\:space-x-3 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.75rem * var(--tw-space-x-reverse));margin-left:calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));}.sm\\:overflow-x-hidden{overflow-x:hidden;}.sm\\:p-12{padding:3rem;}.sm\\:px-5{padding-left:1.25rem;padding-right:1.25rem;}.sm\\:text-left{text-align:left;}.sm\\:text-base{font-size:1rem;line-height:1.5rem;}.sm\\:text-xl{font-size:1.25rem;line-height:1.75rem;}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}.sm\\:text-lg{font-size:1.125rem;line-height:1.75rem;}.sm\\:text-body-18{font-size:18px;line-height:26px;}}@media (min-width: 768px){.md\\:col-span-6{grid-column:span 6 / span 6;}.md\\:mb-12{margin-bottom:3rem;}.md\\:mb-0{margin-bottom:0px;}.md\\:grid{display:grid;}.md\\:h-470{height:470px;}.md\\:h-650{height:650px;}.md\\:h-600{height:600px;}.md\\:max-w-sm{max-width:24rem;}.md\\:max-w-536{max-width:536px;}.md\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.md\\:p-12{padding:3rem;}.md\\:p-8{padding:2rem;}.md\\:px-8{padding-left:2rem;padding-right:2rem;}.md\\:py-10{padding-top:2.5rem;padding-bottom:2.5rem;}.md\\:py-8{padding-top:2rem;padding-bottom:2rem;}.md\\:py-124{padding-top:124px;padding-bottom:124px;}.md\\:pb-72{padding-bottom:72px;}.md\\:pb-0{padding-bottom:0px;}.md\\:pt-124{padding-top:124px;}.md\\:text-3xl{font-size:1.875rem;line-height:2.25rem;}.md\\:text-heading{font-size:72px;line-height:80px;}.md\\:text-body-20{font-size:20px;line-height:28px;}.md\\:text-title{font-size:48px;line-height:56px;}.md\\:text-heading-40{font-size:40px;line-height:48px;}.md\\:text-body-18{font-size:18px;line-height:26px;}.md\\:text-5xl{font-size:3rem;line-height:1;}.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem;}}@media (min-width: 1024px){.lg\\:-bottom-64{bottom:-16rem;}.lg\\:order-1{order:1;}.lg\\:order-2{order:2;}.lg\\:col-span-1{grid-column:span 1 / span 1;}.lg\\:col-span-2{grid-column:span 2 / span 2;}.lg\\:col-span-6{grid-column:span 6 / span 6;}.lg\\:col-span-3{grid-column:span 3 / span 3;}.lg\\:col-start-3{grid-column-start:3;}.lg\\:col-start-10{grid-column-start:10;}.lg\\:col-end-9{grid-column-end:9;}.lg\\:col-end-17{grid-column-end:17;}.lg\\:mb-0{margin-bottom:0px;}.lg\\:mt-0{margin-top:0px;}.lg\\:mb-28{margin-bottom:7rem;}.lg\\:mb-9{margin-bottom:2.25rem;}.lg\\:mb-16{margin-bottom:4rem;}.lg\\:mr-20{margin-right:5rem;}.lg\\:mb-12{margin-bottom:3rem;}.lg\\:mb-8{margin-bottom:2rem;}.lg\\:block{display:block;}.lg\\:flex{display:flex;}.lg\\:grid{display:grid;}.lg\\:hidden{display:none;}.lg\\:w-1\\/2{width:50%;}.lg\\:w-40{width:10rem;}.lg\\:max-w-536{max-width:536px;}.lg\\:max-w-680{max-width:680px;}.lg\\:max-w-3xl{max-width:48rem;}.lg\\:grid-cols-16{grid-template-columns:repeat(16, minmax(0,1fr));}.lg\\:grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr));}.lg\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr));}.lg\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.lg\\:flex-row{flex-direction:row;}.lg\\:justify-start{justify-content:flex-start;}.lg\\:justify-end{justify-content:flex-end;}.lg\\:space-x-8 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(2rem * var(--tw-space-x-reverse));margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)));}.lg\\:overflow-y-scroll{overflow-y:scroll;}.lg\\:border-t-0{border-top-width:0px;}.lg\\:border-r{border-right-width:1px;}.lg\\:object-fill{-o-object-fit:fill;object-fit:fill;}.lg\\:px-0{padding-left:0px;padding-right:0px;}.lg\\:py-124{padding-top:124px;padding-bottom:124px;}.lg\\:py-0{padding-top:0px;padding-bottom:0px;}.lg\\:pt-124{padding-top:124px;}.lg\\:pt-0{padding-top:0px;}.lg\\:pt-200{padding-top:200px;}.lg\\:pb-124{padding-bottom:124px;}.lg\\:pb-0{padding-bottom:0px;}.lg\\:pb-72{padding-bottom:72px;}.lg\\:pb-222{padding-bottom:222px;}.lg\\:pt-300{padding-top:300px;}.lg\\:pl-6{padding-left:1.5rem;}.lg\\:pr-20{padding-right:5rem;}.lg\\:text-left{text-align:left;}.lg\\:text-heading-40{font-size:40px;line-height:48px;}.lg\\:text-6xl{font-size:3.75rem;line-height:1;}.lg\\:text-5xl{font-size:3rem;line-height:1;}.lg\\:text-title{font-size:48px;line-height:56px;}}@media (min-width: 1280px){.xl\\:col-span-1{grid-column:span 1 / span 1;}.xl\\:col-span-4{grid-column:span 4 / span 4;}.xl\\:col-span-3{grid-column:span 3 / span 3;}.xl\\:grid{display:grid;}.xl\\:max-w-536{max-width:536px;}.xl\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr));}.xl\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.xl\\:p-0{padding:0px;}.xl\\:py-16{padding-top:4rem;padding-bottom:4rem;}.xl\\:pr-24{padding-right:6rem;}.xl\\:pl-14{padding-left:3.5rem;}.xl\\:text-left{text-align:left;}.xl\\:text-heading-80{font-size:80px;line-height:88px;}.xl\\:text-heading-56{font-size:56px;line-height:60px;}.xl\\:text-title{font-size:48px;line-height:56px;}}@media (min-width: 480px){.ex-small\\:col-span-2{grid-column:span 2 / span 2;}.ex-small\\:mr-5{margin-right:1.25rem;}.ex-small\\:grid{display:grid;}.ex-small\\:flex-row{flex-direction:row;}.ex-small\\:overflow-auto{overflow:auto;}.ex-small\\:text-left{text-align:left;}@media (min-width: 1024px){.ex-small\\:lg\\:col-span-1{grid-column:span 1 / span 1;}}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(8).default("54c2559c", content, true)

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize *//*\nDocument\n========\n*//**\nUse a better box model (opinionated).\n*/*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}/**\nUse a more readable tab size (opinionated).\n*/html {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/html {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}/*\nSections\n========\n*//**\nRemove the margin in all browsers.\n*/body {\n\tmargin: 0;\n}/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/body {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}/*\nGrouping content\n================\n*//**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/hr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}/*\nText-level semantics\n====================\n*//**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/abbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}/**\nAdd the correct font weight in Edge and Safari.\n*/b,\nstrong {\n\tfont-weight: bolder;\n}/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/code,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}/**\nAdd the correct font size in all browsers.\n*/small {\n\tfont-size: 80%;\n}/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/sub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}sub {\n\tbottom: -0.25em;\n}sup {\n\ttop: -0.5em;\n}/*\nTabular data\n============\n*//**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/table {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}/*\nForms\n=====\n*//**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/button,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/button,\nselect { /* 1 */\n\ttext-transform: none;\n}/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/button,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}/**\nRemove the inner border and padding in Firefox.\n*/::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}/**\nRestore the focus styles unset by the previous rule.\n*/:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/:-moz-ui-invalid {\n\tbox-shadow: none;\n}/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/legend {\n\tpadding: 0;\n}/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/progress {\n\tvertical-align: baseline;\n}/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}/*\nInteractive\n===========\n*//*\nAdd the correct display in Chrome and Safari.\n*/summary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n *//**\n * Removes the default spacing and border for appropriate elements.\n */blockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}button {\n  background-color: transparent;\n  background-image: none;\n}fieldset {\n  margin: 0;\n  padding: 0;\n}ol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}/**\n * Tailwind custom reset styles\n *//**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */html {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */body {\n  font-family: inherit;\n  line-height: inherit;\n}/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}/*\n * Ensure horizontal rules are visible by default\n */hr {\n  border-top-width: 1px;\n}/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */img {\n  border-style: solid;\n}textarea {\n  resize: vertical;\n}input::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}input:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}input::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}button,\n[role=\"button\"] {\n  cursor: pointer;\n}/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */:-moz-focusring {\n\toutline: auto;\n}table {\n  border-collapse: collapse;\n}h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */a {\n  color: inherit;\n  text-decoration: inherit;\n}/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */button,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */pre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */img,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */img,\nvideo {\n  max-width: 100%;\n  height: auto;\n}/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */[hidden] {\n  display: none;\n}*, ::before, ::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-border-opacity:1;border-color:rgba(229, 231, 235, var(--tw-border-opacity));--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.container{width:100%;}@media (min-width: 480px){.container{max-width:480px;}}@media (min-width: 640px){.container{max-width:640px;}}@media (min-width: 768px){.container{max-width:768px;}}@media (min-width: 1024px){.container{max-width:1024px;}}@media (min-width: 1280px){.container{max-width:1280px;}}@media (min-width: 1536px){.container{max-width:1536px;}}.button{display:inline-block;overflow:hidden;border-radius:0.25rem;--tw-bg-opacity:1;background-color:rgba(11, 99, 229, var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;font-size:14px;line-height:44px;font-weight:500;text-transform:capitalize;}.fixed{position:fixed;}.absolute{position:absolute;}.relative{position:relative;}.sticky{position:-webkit-sticky;position:sticky;}.top-1\\/2{top:50%;}.left-1\\/2{left:50%;}.left-\\[18px\\]{left:18px;}.left-0{left:0px;}.top-full{top:100%;}.-bottom-44{bottom:-11rem;}.top-0{top:0px;}.z-10{z-index:10;}.z-50{z-index:50;}.order-2{order:2;}.order-1{order:1;}.col-span-2{grid-column:span 2 / span 2;}.col-span-full{grid-column:1 / -1;}.col-span-12{grid-column:span 12 / span 12;}.col-span-6{grid-column:span 6 / span 6;}.col-span-7{grid-column:span 7 / span 7;}.col-span-5{grid-column:span 5 / span 5;}.col-span-8{grid-column:span 8 / span 8;}.col-span-4{grid-column:span 4 / span 4;}.float-right{float:right;}.m-0{margin:0px;}.m-auto{margin:auto;}.mx-auto{margin-left:auto;margin-right:auto;}.my-8{margin-top:2rem;margin-bottom:2rem;}.my-2{margin-top:0.5rem;margin-bottom:0.5rem;}.mr-3\\.5{margin-right:0.875rem;}.mr-3{margin-right:0.75rem;}.mb-1\\.5{margin-bottom:0.375rem;}.mb-1{margin-bottom:0.25rem;}.mb-3{margin-bottom:0.75rem;}.mb-7{margin-bottom:1.75rem;}.mr-5{margin-right:1.25rem;}.mb-2{margin-bottom:0.5rem;}.ml-2{margin-left:0.5rem;}.-mb-16{margin-bottom:-4rem;}.mb-6{margin-bottom:1.5rem;}.mr-2{margin-right:0.5rem;}.mb-4{margin-bottom:1rem;}.mt-6{margin-top:1.5rem;}.mb-12{margin-bottom:3rem;}.mt-8{margin-top:2rem;}.mb-8{margin-bottom:2rem;}.ml-3{margin-left:0.75rem;}.mb-10{margin-bottom:2.5rem;}.mb-20{margin-bottom:5rem;}.mb-9{margin-bottom:2.25rem;}.mb-16{margin-bottom:4rem;}.mt-7{margin-top:1.75rem;}.mb-72{margin-bottom:72px;}.mr-4{margin-right:1rem;}.mb-24{margin-bottom:6rem;}.ml-6{margin-left:1.5rem;}.mr-6{margin-right:1.5rem;}.mr-1\\.5{margin-right:0.375rem;}.mr-1{margin-right:0.25rem;}.mb-5{margin-bottom:1.25rem;}.mr-2\\.5{margin-right:0.625rem;}.mt-20{margin-top:5rem;}.mr-0{margin-right:0px;}.mr-8{margin-right:2rem;}.ml-8{margin-left:2rem;}.block{display:block;}.inline-block{display:inline-block;}.inline{display:inline;}.flex{display:flex;}.grid{display:grid;}.hidden{display:none;}.h-76{height:76px;}.h-250{height:250px;}.h-full{height:100%;}.h-84{height:84px;}.h-16{height:4rem;}.h-screen{height:100vh;}.h-680{height:680px;}.h-48{height:48px;}.h-5{height:1.25rem;}.h-340{height:340px;}.h-12{height:3rem;}.h-364{height:364px;}.h-200{height:200px;}.h-900{height:900px;}.w-76{width:76px;}.w-full{width:100%;}.w-84{width:84px;}.w-16{width:4rem;}.w-auto{width:auto;}.w-200{width:200px;}.w-5{width:1.25rem;}.w-12{width:3rem;}.max-w-full{max-width:100%;}.max-w-536{max-width:536px;}.max-w-100{max-width:100px;}.max-w-sm{max-width:24rem;}.max-w-300{max-width:300px;}.max-w-680{max-width:680px;}.max-w-232{max-width:232px;}.max-w-4xl{max-width:56rem;}.max-w-xl{max-width:36rem;}.max-w-872{max-width:872px;}.max-w-md{max-width:28rem;}.max-w-lg{max-width:32rem;}.max-w-2xl{max-width:42rem;}.flex-shrink-0{flex-shrink:0;}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:var(--tw-transform);}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:var(--tw-transform);}.transform{transform:var(--tw-transform);}.cursor-pointer{cursor:pointer;}.list-disc{list-style-type:disc;}.grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr));}.grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr));}.grid-cols-12{grid-template-columns:repeat(12, minmax(0, 1fr));}.flex-col{flex-direction:column;}.flex-wrap{flex-wrap:wrap;}.items-end{align-items:flex-end;}.items-center{align-items:center;}.items-stretch{align-items:stretch;}.justify-center{justify-content:center;}.justify-between{justify-content:space-between;}.gap-7{gap:1.75rem;}.gap-6{gap:1.5rem;}.space-x-2 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));}.space-x-4 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)));}.space-x-3 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.75rem * var(--tw-space-x-reverse));margin-left:calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));}.space-y-2 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.5rem * var(--tw-space-y-reverse));}.space-x-5 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.25rem * var(--tw-space-x-reverse));margin-left:calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));}.space-y-3 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.75rem * var(--tw-space-y-reverse));}.overflow-hidden{overflow:hidden;}.overflow-x-scroll{overflow-x:scroll;}.overflow-y-scroll{overflow-y:scroll;}.overflow-ellipsis{text-overflow:ellipsis;}.whitespace-nowrap{white-space:nowrap;}.rounded-lg{border-radius:0.5rem;}.rounded-3xl{border-radius:1.5rem;}.rounded-md{border-radius:0.375rem;}.rounded-2xl{border-radius:1rem;}.rounded-full{border-radius:9999px;}.rounded-5{border-radius:5px;}.rounded{border-radius:0.25rem;}.rounded-xl{border-radius:0.75rem;}.rounded-7{border-radius:7px;}.rounded-20{border-radius:20px;}.border{border-width:1px;}.border-2{border-width:2px;}.border-1\\.5{border-width:1.5px;}.border-r{border-right-width:1px;}.border-b{border-bottom-width:1px;}.border-t{border-top-width:1px;}.border-gray-e6{--tw-border-opacity:1;border-color:rgba(230, 232, 236, var(--tw-border-opacity));}.border-dark-e6{border-color: #E6E8EC;}.border-blue-0b{--tw-border-opacity:1;border-color:rgba(11, 99, 229, var(--tw-border-opacity));}.border-blue-ce{--tw-border-opacity:1;border-color:rgba(206, 224, 250, var(--tw-border-opacity));}.border-gray-24{--tw-border-opacity:1;border-color:rgba(36, 55, 82, var(--tw-border-opacity));}.border-gray-cd{--tw-border-opacity:1;border-color:rgba(205, 210, 216, var(--tw-border-opacity));}.border-white{--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity));}.border-gray-f5{--tw-border-opacity:1;border-color:rgba(245, 246, 247, var(--tw-border-opacity));}.border-dark-06{--tw-border-opacity:1;border-color:rgba(6, 28, 61, var(--tw-border-opacity));}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));}.bg-gray-f0{--tw-bg-opacity:1;background-color:rgba(240, 245, 255, var(--tw-bg-opacity));}.bg-blue-0b{--tw-bg-opacity:1;background-color:rgba(11, 99, 229, var(--tw-bg-opacity));}.bg-gray-f5{--tw-bg-opacity:1;background-color:rgba(245, 246, 247, var(--tw-bg-opacity));}.bg-blue-18{background-color: #1877F214;}.bg-green-0e{background-color:#0E76A814;}.bg-pink-ea{background-color: #EA4C8914 ;}.bg-blue-05{background-color:#053EFF14;}.bg-gray-14{background-color:#00000014;}.bg-dark-06{--tw-bg-opacity:1;background-color:rgba(6, 28, 61, var(--tw-bg-opacity));}.bg-transparent{background-color:transparent;}.bg-gray-e6{--tw-bg-opacity:1;background-color:rgba(230, 232, 236, var(--tw-bg-opacity));}.bg-green-e7{--tw-bg-opacity:1;background-color:rgba(231, 245, 232, var(--tw-bg-opacity));}.bg-yellow-ff{--tw-bg-opacity:1;background-color:rgba(255, 249, 238, var(--tw-bg-opacity));}.bg-pink-fe{--tw-bg-opacity:1;background-color:rgba(254, 237, 250, var(--tw-bg-opacity));}.bg-pink-f1{--tw-bg-opacity:1;background-color:rgba(241, 235, 255, var(--tw-bg-opacity));}.bg-orange-ff{--tw-bg-opacity:1;background-color:rgba(255, 244, 222, var(--tw-bg-opacity));}.bg-black{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity));}.bg-blue-09{--tw-bg-opacity:1;background-color:rgba(9, 79, 183, var(--tw-bg-opacity));}.bg-white-12{--tw-bg-opacity:1;background-color:rgba(39, 100, 192, var(--tw-bg-opacity));}.bg-blue-500{--tw-bg-opacity:1;background-color:rgba(59, 130, 246, var(--tw-bg-opacity));}.bg-opacity-50{--tw-bg-opacity:0.5;}.bg-cover{background-size:cover;}.bg-center{background-position:center;}.bg-right-bottom{background-position:right bottom;}.bg-no-repeat{background-repeat:no-repeat;}.object-cover{-o-object-fit:cover;object-fit:cover;}.object-center{-o-object-position:center;object-position:center;}.p-8{padding:2rem;}.p-6{padding:1.5rem;}.p-3{padding:0.75rem;}.p-2\\.5{padding:0.625rem;}.p-2{padding:0.5rem;}.p-10{padding:2.5rem;}.p-4{padding:1rem;}.p-1{padding:0.25rem;}.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}.px-1{padding-left:0.25rem;padding-right:0.25rem;}.py-7{padding-top:1.75rem;padding-bottom:1.75rem;}.px-18{padding-left:18px;padding-right:18px;}.px-3\\.5{padding-left:0.875rem;padding-right:0.875rem;}.px-3{padding-left:0.75rem;padding-right:0.75rem;}.py-3\\.5{padding-top:0.875rem;padding-bottom:0.875rem;}.px-9{padding-left:2.25rem;padding-right:2.25rem;}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem;}.px-5{padding-left:1.25rem;padding-right:1.25rem;}.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.py-4{padding-top:1rem;padding-bottom:1rem;}.py-6{padding-top:1.5rem;padding-bottom:1.5rem;}.px-6{padding-left:1.5rem;padding-right:1.5rem;}.py-20{padding-top:5rem;padding-bottom:5rem;}.px-4{padding-left:1rem;padding-right:1rem;}.py-14{padding-top:3.5rem;padding-bottom:3.5rem;}.px-8{padding-left:2rem;padding-right:2rem;}.py-8{padding-top:2rem;padding-bottom:2rem;}.py-10{padding-top:2.5rem;padding-bottom:2.5rem;}.pl-10{padding-left:2.5rem;}.pb-10{padding-bottom:2.5rem;}.pt-36{padding-top:9rem;}.pt-6{padding-top:1.5rem;}.pl-9{padding-left:2.25rem;}.pt-40{padding-top:10rem;}.pb-12{padding-bottom:3rem;}.pt-124{padding-top:124px;}.pb-14{padding-bottom:3.5rem;}.pt-216{padding-top:216px;}.pt-156{padding-top:156px;}.pb-20{padding-bottom:5rem;}.pt-230{padding-top:230px;}.pt-4{padding-top:1rem;}.pl-4{padding-left:1rem;}.pt-20{padding-top:5rem;}.pt-14{padding-top:3.5rem;}.pb-36{padding-bottom:9rem;}.pt-56{padding-top:14rem;}.pb-0{padding-bottom:0px;}.pt-16{padding-top:4rem;}.pt-12{padding-top:3rem;}.pl-8{padding-left:2rem;}.pt-0{padding-top:0px;}.pb-4{padding-bottom:1rem;}.pt-24{padding-top:6rem;}.text-left{text-align:left;}.text-center{text-align:center;}.text-base{font-size:1rem;line-height:1.5rem;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-2xl{font-size:1.5rem;line-height:2rem;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.text-3xl{font-size:1.875rem;line-height:2.25rem;}.text-body-14{font-size:14px;line-height:14px;}.text-body-24{font-size:24px;line-height:32px;}.text-body-16{font-size:16px;line-height:24px;}.text-button{font-size:14px;line-height:44px;}.text-body-12\\/12{font-size:12px;line-height:12px;}.text-body-18{font-size:18px;line-height:26px;}.text-body-14\\/20{font-size:14px;line-height:20px;}.text-body-20{font-size:20px;line-height:28px;}.text-lg{font-size:1.125rem;line-height:1.75rem;}.text-4xl{font-size:2.25rem;line-height:2.5rem;}.text-button-17{font-size:17px;line-height:56px;}.text-body-17{font-size:17px;line-height:24px;}.text-body-32px{font-size:32px;line-height:46px;}.text-body-17\\/56px{font-size:17px;line-height:56px;}.text-body-14\\/24{font-size:14px;line-height:24px;}.text-xs{font-size:0.75rem;line-height:1rem;}.text-body-10{font-size:10px;line-height:10px;}.font-medium{font-weight:500;}.font-semibold{font-weight:600;}.font-light{font-weight:300;}.font-normal{font-weight:400;}.uppercase{text-transform:uppercase;}.capitalize{text-transform:capitalize;}.leading-3{line-height:.75rem;}.leading-none{line-height:1;}.leading-5{line-height:1.25rem;}.tracking-ls03{letter-spacing: 0.012em;}.tracking-ls04{letter-spacing: 0.01em;}.tracking-widest{letter-spacing:0.1em;}.tracking-1{letter-spacing: 0.015em;}.tracking-ls02{letter-spacing:0.02em;}.text-dark-06{--tw-text-opacity:1;color:rgba(6, 28, 61, var(--tw-text-opacity));}.text-dark-42{--tw-text-opacity:1;color:rgba(66, 82, 107, var(--tw-text-opacity));}.text-gray-6a{color: #6A778B;}.text-blue-0b{--tw-text-opacity:1;color:rgba(11, 99, 229, var(--tw-text-opacity));}.text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}.text-pink-75{--tw-text-opacity:1;color:rgba(117, 52, 255, var(--tw-text-opacity));}.text-linkedin{--tw-text-opacity:1;color:rgba(14, 118, 168, var(--tw-text-opacity));}.text-dribble{--tw-text-opacity:1;color:rgba(234, 76, 137, var(--tw-text-opacity));}.text-behance{--tw-text-opacity:1;color:rgba(5, 62, 255, var(--tw-text-opacity));}.text-black{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));}.text-gray-b4{--tw-text-opacity:1;color:rgba(180, 187, 197, var(--tw-text-opacity));}.text-gray-83{--tw-text-opacity:1;color:rgba(131, 142, 158, var(--tw-text-opacity));}.text-gray-9b{--tw-text-opacity:1;color:rgba(155, 164, 177, var(--tw-text-opacity));}.text-opacity-60{--tw-text-opacity:0.6;}.placeholder-gray-83::-moz-placeholder{--tw-placeholder-opacity:1;color:rgba(131, 142, 158, var(--tw-placeholder-opacity));}.placeholder-gray-83:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgba(131, 142, 158, var(--tw-placeholder-opacity));}.placeholder-gray-83::placeholder{--tw-placeholder-opacity:1;color:rgba(131, 142, 158, var(--tw-placeholder-opacity));}.placeholder-gray-6a::-moz-placeholder{color: #6A778B;}.placeholder-gray-6a:-ms-input-placeholder{color: #6A778B;}.placeholder-gray-6a::placeholder{color: #6A778B;}.opacity-0{opacity:0;}.shadow-bs12{--tw-shadow:0px 0px 24px rgba(6, 28, 61, 0.12);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow-bs013{--tw-shadow:0px -1px 0px 0px #E6E8EC inset;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow-bs8{--tw-shadow:0px 12px 32px rgba(6, 28, 61, 0.08);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow-bs08{--tw-shadow:0px 16px 72px rgba(6, 28, 61, 0.08);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow-bs012{--tw-shadow:0px 16px 88px rgba(0, 0, 0, 0.12);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.outline-none{outline:2px solid transparent;outline-offset:2px;}.filter{filter:var(--tw-filter);}.transition{transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.duration-300{transition-duration:300ms;}.duration-500{transition-duration:500ms;}body{font-family:Lexend, sans-serif;font-weight:400;}.container{margin-left:auto;margin-right:auto;padding-left:0.75rem;padding-right:0.75rem;}@media (min-width: 1280px){.container{max-width:1320px;}}.footer-menu li a{position:relative;padding-left:0;transition:all .2s linear}.footer-menu li a:before{content:\"\";width:16px;height:2px;border-radius:2px;background-color:#fff;display:inline-block;position:absolute;top:50%;left:0;transform:translateY(-50%);opacity:0;transition:all .3s ease-in-out;transition-delay:.1s}.footer-menu li a:hover{padding-left:28px}.footer-menu li a:hover:before{opacity:1}.build-solution:nth-child(2) .build-solution-wrap{margin-top:50px;border:2px solid #fcdbf4}@media(max-width:640px){.build-solution:nth-child(2) .build-solution-wrap{margin:0}}.build-solution:nth-child(2) .build-solution-wrap .icon{background-color:#f249c8}.build-solution:nth-child(3) .build-solution-wrap{margin-top:-50px;border:2px solid #e3d6ff}@media(max-width:640px){.build-solution:nth-child(3) .build-solution-wrap{margin:0}}.build-solution:nth-child(3) .build-solution-wrap .icon{background-color:#7534ff}.build-solution:nth-child(4) .build-solution-wrap{border:2px solid #cfebd1}.build-solution:nth-child(4) .build-solution-wrap .icon{background-color:#0f9918}.business-card:hover .icon{background-color:#0b63e5}.business-card:hover path{stroke:#fff}.business-card .icon svg path{transition:all .4s}input[type=radio]+label span{transition:background .2s,transform .2s}input[type=radio]:checked+label span{background-color:#0b63e5;box-shadow:inset 0 0 0 4px #fff}@media(max-width:1670px){.hero-demo{position:relative;z-index:0}.hero-demo:before{content:\"\";left:0;top:0;width:100%;height:100%;z-index:-1;position:absolute;background-color:rgba(0,0,0,.7)}}@media(max-width:1023px){.fun-column:nth-child(2) .fun-wrap{border-right:none}}.fun-column:nth-child(4) .fun-wrap{border-right:none}.fun-column:nth-child(5) .fun-wrap{border-bottom:none}@media(max-width:1023px){.fun-column:nth-child(5) .fun-wrap{border-bottom:1px solid #e6e8ec}}.fun-column:nth-child(6) .fun-wrap{border-bottom:none}@media(max-width:1023px){.fun-column:nth-child(6) .fun-wrap{border-bottom:1px solid #e6e8ec;border-right:0}}.fun-column:nth-child(7) .fun-wrap{border-bottom:none}.fun-column:nth-child(8) .fun-wrap{border:none}@media(max-width:480px){.fun-column .fun-wrap{border-right:none;border-bottom:1px solid #e6e8ec!important}.fun-column:last-child .fun-wrap:last-child{border-bottom:none!important}}.content-wrap:last-child{margin:0}.content-wrap:hover h3,.content-wrap:hover p{color:#fff}@media(max-width:1024px){.feature{max-width:100%;overflow:hidden;overflow-x:auto}}@media(max-width:460px){.feature li:first-child{margin-left:280px}}.feature-box{cursor:pointer;padding:24px;height:112px;white-space:nowrap;transition:all .3s ease-in-out}.feature-box.is-active,.feature-box:hover{box-shadow:inset 0 -3px 0 0 #0b63e5}.feature-box.is-active h6,.feature-box:hover h6{color:#061c3d}.sort-filter #vs1__combobox,.sort-filter .vs__actions,.sort-filter .vs__search,.sort-filter .vs__selected{margin:0;padding:0}.sort-filter #vs1__combobox{padding:12px 18px;border-radius:6px;border:1px solid #e6e8ec}.sort-filter .vs__search,.sort-filter .vs__selected{font-size:16px;color:#838e9e;font-weight:300;line-height:24px}.faq-wrapper[data-v-5d9392b3]{margin:0 auto}.faq-wrapper[data-v-5d9392b3] .accordion{margin:0;border:0}.faq-wrapper[data-v-5d9392b3] .accordion__item{overflow:hidden;border-radius:12px;margin-bottom:24px;border:1px solid #e6e8ec}.faq-wrapper[data-v-5d9392b3] .accordion__title-text{font-size:20px;line-height:28px;color:#061c3d;letter-spacing:-.015em}.faq-wrapper[data-v-5d9392b3] .accordion__title{padding:24px}.faq-wrapper[data-v-5d9392b3] .accordion__title:hover .accordion__toggle-button:after,.faq-wrapper[data-v-5d9392b3] .accordion__title:hover .accordion__toggle-button:before,.faq-wrapper[data-v-5d9392b3] .accordion__title_active{background-color:#0b63e5}.faq-wrapper[data-v-5d9392b3] .accordion__title_active .accordion__title-text{color:#fff}.faq-wrapper[data-v-5d9392b3] .accordion__title_active .accordion__toggle-button.accordion__toggle-button_active:after,.faq-wrapper[data-v-5d9392b3] .accordion__title_active .accordion__toggle-button.accordion__toggle-button_active:before{background-color:#fff}.faq-wrapper[data-v-5d9392b3] .accordion__value{padding:18px 24px 24px}.faq-wrapper[data-v-5d9392b3] .accordion__toggle-button:after,.faq-wrapper[data-v-5d9392b3] .accordion__toggle-button:before{background-color:#061c3d}.custom-scroll::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#f5f5f5}.custom-scroll::-webkit-scrollbar{width:6px;background-color:#f5f5f5}.custom-scroll::-webkit-scrollbar-thumb{background-color:#061c3d}@media(max-width:1024px){.screenshort-scroll::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#f5f5f5}.screenshort-scroll::-webkit-scrollbar{width:6px;background-color:#f5f5f5}.screenshort-scroll::-webkit-scrollbar-thumb{background-color:#061c3d}}.custom-pagination .swiper-pagination-bullet{width:12px;height:12px;margin:0 5px;opacity:1;transition:all .4s;background-color:#cee0fa}.custom-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active{width:32px;border-radius:12px;background-color:#0b63e5}body{position:relative}body.overlay:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:49;background:rgba(0,0,0,.75);box-shadow:0 8px 32px 0 rgba(31,38,135,.37);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}@media(min-width:1024px){body.overlay:after{display:none}}.toggle{width:65px;height:65px;display:flex;cursor:pointer;overflow:hidden;position:relative;border-radius:10px;align-items:center;justify-content:center;transition:all .1s linear}.toggle span,.toggle span:after,.toggle span:before{width:35px;height:3px;background-color:#0b63e5;display:block;transition:.3s}.toggle span:before{content:\"\";transform:translateY(-11px)}.toggle span:after{content:\"\";transform:translateY(7px)}.toggle.active span{background-color:transparent}.toggle.active span:before{transform:translateY(0) rotate(45deg)}.toggle.active span:after{transform:translateY(-3px) rotate(-45deg)}.nav-menu__item{position:relative;display:flex;align-items:center}@media(max-width:1024px){.nav-menu__item{justify-content:space-between}}.nav-menu__item .dropdown-icon{margin-left:8px;transition:all .3s linear}.nav-menu__item:hover .dropdown-icon,.nav-menu__item:hover a{color:#0b63e5}.nav-menu__item:hover .dropdown-icon{transform:rotate(180deg)}.nav-menu__item:hover .nav-menu__dropdown{opacity:1;overflow:visible;pointer-events:all}.nav-menu__item:hover .nav-menu__dropdown li a{color:#061c3d}.nav-menu__item a{font-size:16px;line-height:24px;color:#42526b;padding:16px 0;display:block;text-transform:capitalize}.nav-menu__dropdown{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding:12px 0;border-radius:6px;width:200px;background-color:#fff;border:1px solid #e6e8ec;box-shadow:0 4px 16px 0 rgba(20,25,26,.0784313725490196);opacity:0;z-index:999;pointer-events:none;transition:all .3s ease-in-out}@media(max-width:1024px){.nav-menu__dropdown{position:relative;top:auto;left:auto}}.nav-menu__dropdown:after,.nav-menu__dropdown:before{content:\" \";display:block;border-color:transparent;border-style:solid;border-width:0 10px 12px;position:absolute;left:50%;transform:translateX(-50%)}@media(max-width:1024px){.nav-menu__dropdown:after,.nav-menu__dropdown:before{display:none}}.nav-menu__dropdown:before{top:-.8em;border-bottom-color:#e6e8ec}.nav-menu__dropdown:after{top:-.7em;border-bottom-color:#fff}.nav-menu__dropdown li:hover a{background-color:#f0f5ff}.nav-menu__dropdown li a{font-size:14px;line-height:20px;text-transform:capitalize;color:#061c3d;font-weight:300;width:100%;padding:6px 20px;display:inline-block;transition:all .2s linear}.sidebar .sidebar-menu__content{display:flex;align-items:center;justify-content:space-between}.sidebar .sidebar-menu__content a{font-size:16px;font-weight:400;line-height:24px;color:#42526b;text-transform:capitalize}.sidebar .sidebar-menu__item{padding:12px 32px;transition:all .3s ease-in-out}.sidebar .sidebar-menu__item.active,.sidebar .sidebar-menu__item:hover{background-color:#f0f5ff}.sidebar .sidebar-menu__item.active .sidebar-menu__dropdown,.sidebar .sidebar-menu__item:hover .sidebar-menu__dropdown{max-height:100%;pointer-events:all;visibility:visible;overflow:auto}.sidebar .sidebar-menu__item .sidebar-menu__dropdown{max-height:0;pointer-events:none;visibility:hidden;overflow:hidden;transition:all .3s ease-in-out}.sidebar .sidebar-menu__item .sidebar-menu__dropdown ul{padding-top:6px}.sidebar .sidebar-menu__item .sidebar-menu__dropdown ul li a{font-size:14px;line-height:20px;font-weight:300;text-transform:capitalize;width:100%;padding:6px 12px;display:inline-block}.sidebar .sidebar-menu__item .sidebar-menu__dropdown ul li a:hover{color:#0b63e5}.sidebar .sidebar-menu__button{margin:12px 32px}.fade-enter-active,.fade-leave-active{transform:translateX(0);transition:all .4s ease-in-out}.fade-enter,.fade-leave-to{transform:translateX(-300px)}html{scroll-behavior:smooth}.clip-thumb{-webkit-clip-path:polygon(8% 0,100% 0,100% 100%,0 100%);clip-path:polygon(8% 0,100% 0,100% 100%,0 100%)}.hover\\:bg-dark-06:hover{--tw-bg-opacity:1;background-color:rgba(6, 28, 61, var(--tw-bg-opacity));}.hover\\:bg-gray-f0:hover{--tw-bg-opacity:1;background-color:rgba(240, 245, 255, var(--tw-bg-opacity));}.hover\\:bg-gray-200:hover{--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity));}.hover\\:bg-black:hover{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity));}.hover\\:bg-linkedin:hover{--tw-bg-opacity:1;background-color:rgba(14, 118, 168, var(--tw-bg-opacity));}.hover\\:bg-dribble:hover{--tw-bg-opacity:1;background-color:rgba(234, 76, 137, var(--tw-bg-opacity));}.hover\\:bg-behance:hover{--tw-bg-opacity:1;background-color:rgba(5, 62, 255, var(--tw-bg-opacity));}.hover\\:bg-facebook:hover{--tw-bg-opacity:1;background-color:rgba(24, 119, 242, var(--tw-bg-opacity));}.hover\\:bg-blue-800:hover{--tw-bg-opacity:1;background-color:rgba(30, 64, 175, var(--tw-bg-opacity));}.hover\\:bg-blue-0b:hover{--tw-bg-opacity:1;background-color:rgba(11, 99, 229, var(--tw-bg-opacity));}.hover\\:text-blue-0b:hover{--tw-text-opacity:1;color:rgba(11, 99, 229, var(--tw-text-opacity));}.hover\\:text-white:hover{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}.hover\\:shadow-bs8:hover{--tw-shadow:0px 12px 32px rgba(6, 28, 61, 0.08);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px;}.group:hover .group-hover\\:text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}.group:hover .group-hover\\:text-dark-06{--tw-text-opacity:1;color:rgba(6, 28, 61, var(--tw-text-opacity));}@media (min-width: 640px){.sm\\:left-0{left:0px;}.sm\\:order-1{order:1;}.sm\\:order-2{order:2;}.sm\\:col-span-6{grid-column:span 6 / span 6;}.sm\\:mt-0{margin-top:0px;}.sm\\:mb-0{margin-bottom:0px;}.sm\\:mr-6{margin-right:1.5rem;}.sm\\:mr-3{margin-right:0.75rem;}.sm\\:inline-block{display:inline-block;}.sm\\:flex{display:flex;}.sm\\:w-auto{width:auto;}.sm\\:max-w-full{max-width:100%;}.sm\\:transform-none{transform:none;}.sm\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.sm\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr));}.sm\\:flex-row{flex-direction:row;}.sm\\:items-center{align-items:center;}.sm\\:justify-start{justify-content:flex-start;}.sm\\:justify-end{justify-content:flex-end;}.sm\\:justify-between{justify-content:space-between;}.sm\\:gap-0{gap:0px;}.sm\\:space-x-3 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.75rem * var(--tw-space-x-reverse));margin-left:calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));}.sm\\:overflow-x-hidden{overflow-x:hidden;}.sm\\:p-12{padding:3rem;}.sm\\:px-5{padding-left:1.25rem;padding-right:1.25rem;}.sm\\:text-left{text-align:left;}.sm\\:text-base{font-size:1rem;line-height:1.5rem;}.sm\\:text-xl{font-size:1.25rem;line-height:1.75rem;}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}.sm\\:text-lg{font-size:1.125rem;line-height:1.75rem;}.sm\\:text-body-18{font-size:18px;line-height:26px;}}@media (min-width: 768px){.md\\:col-span-6{grid-column:span 6 / span 6;}.md\\:mb-12{margin-bottom:3rem;}.md\\:mb-0{margin-bottom:0px;}.md\\:grid{display:grid;}.md\\:h-470{height:470px;}.md\\:h-650{height:650px;}.md\\:h-600{height:600px;}.md\\:max-w-sm{max-width:24rem;}.md\\:max-w-536{max-width:536px;}.md\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.md\\:p-12{padding:3rem;}.md\\:p-8{padding:2rem;}.md\\:px-8{padding-left:2rem;padding-right:2rem;}.md\\:py-10{padding-top:2.5rem;padding-bottom:2.5rem;}.md\\:py-8{padding-top:2rem;padding-bottom:2rem;}.md\\:py-124{padding-top:124px;padding-bottom:124px;}.md\\:pb-72{padding-bottom:72px;}.md\\:pb-0{padding-bottom:0px;}.md\\:pt-124{padding-top:124px;}.md\\:text-3xl{font-size:1.875rem;line-height:2.25rem;}.md\\:text-heading{font-size:72px;line-height:80px;}.md\\:text-body-20{font-size:20px;line-height:28px;}.md\\:text-title{font-size:48px;line-height:56px;}.md\\:text-heading-40{font-size:40px;line-height:48px;}.md\\:text-body-18{font-size:18px;line-height:26px;}.md\\:text-5xl{font-size:3rem;line-height:1;}.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem;}}@media (min-width: 1024px){.lg\\:-bottom-64{bottom:-16rem;}.lg\\:order-1{order:1;}.lg\\:order-2{order:2;}.lg\\:col-span-1{grid-column:span 1 / span 1;}.lg\\:col-span-2{grid-column:span 2 / span 2;}.lg\\:col-span-6{grid-column:span 6 / span 6;}.lg\\:col-span-3{grid-column:span 3 / span 3;}.lg\\:col-start-3{grid-column-start:3;}.lg\\:col-start-10{grid-column-start:10;}.lg\\:col-end-9{grid-column-end:9;}.lg\\:col-end-17{grid-column-end:17;}.lg\\:mb-0{margin-bottom:0px;}.lg\\:mt-0{margin-top:0px;}.lg\\:mb-28{margin-bottom:7rem;}.lg\\:mb-9{margin-bottom:2.25rem;}.lg\\:mb-16{margin-bottom:4rem;}.lg\\:mr-20{margin-right:5rem;}.lg\\:mb-12{margin-bottom:3rem;}.lg\\:mb-8{margin-bottom:2rem;}.lg\\:block{display:block;}.lg\\:flex{display:flex;}.lg\\:grid{display:grid;}.lg\\:hidden{display:none;}.lg\\:w-1\\/2{width:50%;}.lg\\:w-40{width:10rem;}.lg\\:max-w-536{max-width:536px;}.lg\\:max-w-680{max-width:680px;}.lg\\:max-w-3xl{max-width:48rem;}.lg\\:grid-cols-16{grid-template-columns:repeat(16, minmax(0,1fr));}.lg\\:grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr));}.lg\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr));}.lg\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.lg\\:flex-row{flex-direction:row;}.lg\\:justify-start{justify-content:flex-start;}.lg\\:justify-end{justify-content:flex-end;}.lg\\:space-x-8 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(2rem * var(--tw-space-x-reverse));margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)));}.lg\\:overflow-y-scroll{overflow-y:scroll;}.lg\\:border-t-0{border-top-width:0px;}.lg\\:border-r{border-right-width:1px;}.lg\\:object-fill{-o-object-fit:fill;object-fit:fill;}.lg\\:px-0{padding-left:0px;padding-right:0px;}.lg\\:py-124{padding-top:124px;padding-bottom:124px;}.lg\\:py-0{padding-top:0px;padding-bottom:0px;}.lg\\:pt-124{padding-top:124px;}.lg\\:pt-0{padding-top:0px;}.lg\\:pt-200{padding-top:200px;}.lg\\:pb-124{padding-bottom:124px;}.lg\\:pb-0{padding-bottom:0px;}.lg\\:pb-72{padding-bottom:72px;}.lg\\:pb-222{padding-bottom:222px;}.lg\\:pt-300{padding-top:300px;}.lg\\:pl-6{padding-left:1.5rem;}.lg\\:pr-20{padding-right:5rem;}.lg\\:text-left{text-align:left;}.lg\\:text-heading-40{font-size:40px;line-height:48px;}.lg\\:text-6xl{font-size:3.75rem;line-height:1;}.lg\\:text-5xl{font-size:3rem;line-height:1;}.lg\\:text-title{font-size:48px;line-height:56px;}}@media (min-width: 1280px){.xl\\:col-span-1{grid-column:span 1 / span 1;}.xl\\:col-span-4{grid-column:span 4 / span 4;}.xl\\:col-span-3{grid-column:span 3 / span 3;}.xl\\:grid{display:grid;}.xl\\:max-w-536{max-width:536px;}.xl\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr));}.xl\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.xl\\:p-0{padding:0px;}.xl\\:py-16{padding-top:4rem;padding-bottom:4rem;}.xl\\:pr-24{padding-right:6rem;}.xl\\:pl-14{padding-left:3.5rem;}.xl\\:text-left{text-align:left;}.xl\\:text-heading-80{font-size:80px;line-height:88px;}.xl\\:text-heading-56{font-size:56px;line-height:60px;}.xl\\:text-title{font-size:48px;line-height:56px;}}@media (min-width: 480px){.ex-small\\:col-span-2{grid-column:span 2 / span 2;}.ex-small\\:mr-5{margin-right:1.25rem;}.ex-small\\:grid{display:grid;}.ex-small\\:flex-row{flex-direction:row;}.ex-small\\:overflow-auto{overflow:auto;}.ex-small\\:text-left{text-align:left;}@media (min-width: 1024px){.ex-small\\:lg\\:col-span-1{grid-column:span 1 / span 1;}}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-white.2ff8dca.svg";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("cross-fetch/polyfill");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("vue-apollo/ssr");

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "Accordion", function() { return Accordion; });
__webpack_require__.d(components_namespaceObject, "Breadcrumb", function() { return Breadcrumb; });
__webpack_require__.d(components_namespaceObject, "BusinessCard", function() { return BusinessCard; });
__webpack_require__.d(components_namespaceObject, "CounterUp", function() { return CounterUp; });
__webpack_require__.d(components_namespaceObject, "Fun", function() { return Fun; });
__webpack_require__.d(components_namespaceObject, "LinkThumb", function() { return LinkThumb; });
__webpack_require__.d(components_namespaceObject, "Newsletter", function() { return components_Newsletter; });
__webpack_require__.d(components_namespaceObject, "Pagination", function() { return Pagination; });
__webpack_require__.d(components_namespaceObject, "ProductCard", function() { return ProductCard; });
__webpack_require__.d(components_namespaceObject, "PurchaseCard", function() { return PurchaseCard; });
__webpack_require__.d(components_namespaceObject, "SocialLink", function() { return components_SocialLink; });
__webpack_require__.d(components_namespaceObject, "SolutionCard", function() { return SolutionCard; });
__webpack_require__.d(components_namespaceObject, "Footer", function() { return components_Footer; });
__webpack_require__.d(components_namespaceObject, "FooterTwo", function() { return components_FooterTwo; });
__webpack_require__.d(components_namespaceObject, "Header", function() { return components_Header; });
__webpack_require__.d(components_namespaceObject, "HeaderThree", function() { return components_HeaderThree; });
__webpack_require__.d(components_namespaceObject, "HeaderTwo", function() { return components_HeaderTwo; });
__webpack_require__.d(components_namespaceObject, "ProductListTab", function() { return ProductListTab; });
__webpack_require__.d(components_namespaceObject, "ProductListTabs", function() { return ProductListTabs; });
__webpack_require__.d(components_namespaceObject, "HomeHeroSection", function() { return HomeHeroSection; });
__webpack_require__.d(components_namespaceObject, "HomeWhyUs", function() { return HomeWhyUs; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(25);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(26);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(17);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(10);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(18);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _bd89e132 = () => interopDefault(__webpack_require__.e(/* import() | pages/hire-us */ 15).then(__webpack_require__.bind(null, 143)));

const _5eca80e1 = () => interopDefault(__webpack_require__.e(/* import() | pages/product-demo */ 17).then(__webpack_require__.bind(null, 144)));

const _6ee62834 = () => interopDefault(__webpack_require__.e(/* import() | pages/product-details */ 18).then(__webpack_require__.bind(null, 145)));

const _7bf05e1c = () => interopDefault(__webpack_require__.e(/* import() | pages/product-list */ 19).then(__webpack_require__.bind(null, 146)));

const _26ea1b40 = () => interopDefault(__webpack_require__.e(/* import() | pages/screenshort */ 20).then(__webpack_require__.bind(null, 147)));

const _46db3905 = () => interopDefault(__webpack_require__.e(/* import() | pages/sitemap */ 21).then(__webpack_require__.bind(null, 148)));

const _07f70ca2 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 16).then(__webpack_require__.bind(null, 142)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/hire-us",
    component: _bd89e132,
    name: "hire-us"
  }, {
    path: "/product-demo",
    component: _5eca80e1,
    name: "product-demo"
  }, {
    path: "/product-details",
    component: _6ee62834,
    name: "product-details"
  }, {
    path: "/product-list",
    component: _7bf05e1c,
    name: "product-list"
  }, {
    path: "/screenshort",
    component: _26ea1b40,
    name: "screenshort"
  }, {
    path: "/sitemap",
    component: _46db3905,
    name: "sitemap"
  }, {
    path: "/",
    component: _07f70ca2,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5ffbb3bb"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "7396a3a2"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css
var tailwind = __webpack_require__(43);

// EXTERNAL MODULE: ./assets/scss/app.scss
var scss_app = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=649d4566&
var defaultvue_type_template_id_649d4566_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.global && _vm.global.header)?_c('Header',{attrs:{"data":_vm.global.header}}):_vm._e(),_vm._ssrNode(" "),_c('nuxt'),_vm._ssrNode(" "),(_vm.global && _vm.global.newsletter)?_c('Newsletter',{attrs:{"data":_vm.global.newsletter}}):_vm._e(),_vm._ssrNode(" "),(_vm.global && _vm.global.footer)?_c('Footer',{attrs:{"data":_vm.global.footer}}):_vm._e()],2)}
var defaultvue_type_template_id_649d4566_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=649d4566&

// EXTERNAL MODULE: ./components/Header/Header.vue + 4 modules
var Header = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Footer/Footer.vue + 4 modules
var Footer = __webpack_require__(5);

// EXTERNAL MODULE: ./components/SocialLink.vue + 4 modules
var SocialLink = __webpack_require__(12);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(22);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./graphql/global.js
 // export const global = gql`

/* harmony default export */ var graphql_global = (external_graphql_tag_default.a`
# Write your query or mutation here
query {
  global {
    data {
      attributes {
        header {
          id
          logo {
            data {
              attributes {
                name
                url
                previewUrl
                formats
              }
            }
          }
          menuItems {
            id
            label
            href
            target
            menuSubItems {
              id
              label
              href
              target
            }
          }
          profile {
            label
            theme
            width
            link {
              id
              label
              href
              target
            }
          }
        }
        newsletter {
          id
          newsletter_title
          newsletter_description
          social_title
          social_description
          social_medias {
            data {
              attributes {
                name
                url
                theme
                icon {
                  data {
                    attributes {
                      name
                      url
                      previewUrl
                      formats
                    }
                  }
                }
              }
            }
          }
        }
        footer {
          id,
          logo {
            data {
              attributes {
                name,
                ext,
                formats, 
                url, 
                previewUrl
              }
            }
          }
          description,
          menuItems {
            label,
            href 
            target
            menuSubItems {
              id
              label
              href
              target
            }
          }
        }
      }
    }
  }
}
`);
// EXTERNAL MODULE: ./components/Newsletter.vue + 4 modules
var Newsletter = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//





/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  components: {
    Header: Header["default"],
    Footer: Footer["default"],
    SocialLink: SocialLink["default"],
    Newsletter: Newsletter["default"]
  },

  // apollo: {
  //   global: {
  //     query: GLOBAL_QUERY,
  //     prefetch: true,
  //   },
  // },
  data() {
    return {
      global: null
    };
  },

  methods: {
    async loadData() {
      var _data$global, _data$global$data;

      // console.log(this.$nuxt.$apolloProvider.defaultClient)
      // console.log(this.$apolloProvider.defaultClient);
      const client = this.$nuxt.$apolloProvider.defaultClient;
      const {
        data
      } = await client.query({
        query: graphql_global
      });
      this.global = data === null || data === void 0 ? void 0 : (_data$global = data.global) === null || _data$global === void 0 ? void 0 : (_data$global$data = _data$global.data) === null || _data$global$data === void 0 ? void 0 : _data$global$data.attributes;
    }

  },

  mounted() {
    this.loadData();
  }

});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_649d4566_render,
  defaultvue_type_template_id_649d4566_staticRenderFns,
  false,
  null,
  null,
  "89788b06"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {Header: __webpack_require__(4).default,Newsletter: __webpack_require__(13).default,Footer: __webpack_require__(5).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/demo.vue?vue&type=template&id=5d2df894&
var demovue_type_template_id_5d2df894_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('HeaderTwo'),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('FooterTwo')],2)}
var demovue_type_template_id_5d2df894_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/demo.vue?vue&type=template&id=5d2df894&

// EXTERNAL MODULE: ./components/Header/HeaderTwo.vue + 4 modules
var HeaderTwo = __webpack_require__(14);

// EXTERNAL MODULE: ./components/Footer/FooterTwo.vue + 4 modules
var FooterTwo = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/demo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var demovue_type_script_lang_js_ = ({
  components: {
    HeaderTwo: HeaderTwo["default"],
    FooterTwo: FooterTwo["default"]
  }
});
// CONCATENATED MODULE: ./layouts/demo.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_demovue_type_script_lang_js_ = (demovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/demo.vue





/* normalize component */

var demo_component = Object(componentNormalizer["a" /* default */])(
  layouts_demovue_type_script_lang_js_,
  demovue_type_template_id_5d2df894_render,
  demovue_type_template_id_5d2df894_staticRenderFns,
  false,
  null,
  null,
  "70bec152"
  
)

/* harmony default export */ var demo = (demo_component.exports);

/* nuxt-component-imports */
installComponents(demo_component, {HeaderTwo: __webpack_require__(14).default,FooterTwo: __webpack_require__(15).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/screenshot.vue?vue&type=template&id=06274138&
var screenshotvue_type_template_id_06274138_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('HeaderThree'),_vm._ssrNode(" "),_c('Nuxt')],2)}
var screenshotvue_type_template_id_06274138_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/screenshot.vue?vue&type=template&id=06274138&

// EXTERNAL MODULE: ./components/Header/HeaderThree.vue + 4 modules
var HeaderThree = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/screenshot.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var screenshotvue_type_script_lang_js_ = ({
  components: {
    HeaderThree: HeaderThree["default"]
  }
});
// CONCATENATED MODULE: ./layouts/screenshot.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_screenshotvue_type_script_lang_js_ = (screenshotvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/screenshot.vue





/* normalize component */

var screenshot_component = Object(componentNormalizer["a" /* default */])(
  layouts_screenshotvue_type_script_lang_js_,
  screenshotvue_type_template_id_06274138_render,
  screenshotvue_type_template_id_06274138_staticRenderFns,
  false,
  null,
  null,
  "acb60f4c"
  
)

/* harmony default export */ var screenshot = (screenshot_component.exports);

/* nuxt-component-imports */
installComponents(screenshot_component, {HeaderThree: __webpack_require__(16).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/sitemap.vue?vue&type=template&id=78f50335&lang=true&
var sitemapvue_type_template_id_78f50335_lang_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Nuxt')],1)}
var sitemapvue_type_template_id_78f50335_lang_true_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/sitemap.vue?vue&type=template&id=78f50335&lang=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/sitemap.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var sitemapvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./layouts/sitemap.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_sitemapvue_type_script_lang_js_ = (sitemapvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/sitemap.vue





/* normalize component */

var sitemap_component = Object(componentNormalizer["a" /* default */])(
  layouts_sitemapvue_type_script_lang_js_,
  sitemapvue_type_template_id_78f50335_lang_true_render,
  sitemapvue_type_template_id_78f50335_lang_true_staticRenderFns,
  false,
  null,
  null,
  "46e336f1"
  
)

/* harmony default export */ var sitemap = (sitemap_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js











const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_demo": sanitizeComponent(demo),
  "_screenshot": sanitizeComponent(screenshot),
  "_sitemap": sanitizeComponent(sitemap)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const Accordion = () => __webpack_require__.e(/* import() | components/accordion */ 1).then(__webpack_require__.bind(null, 97)).then(c => wrapFunctional(c.default || c));
const Breadcrumb = () => __webpack_require__.e(/* import() | components/breadcrumb */ 2).then(__webpack_require__.bind(null, 96)).then(c => wrapFunctional(c.default || c));
const BusinessCard = () => __webpack_require__.e(/* import() | components/business-card */ 3).then(__webpack_require__.bind(null, 59)).then(c => wrapFunctional(c.default || c));
const CounterUp = () => __webpack_require__.e(/* import() | components/counter-up */ 4).then(__webpack_require__.bind(null, 149)).then(c => wrapFunctional(c.default || c));
const Fun = () => __webpack_require__.e(/* import() | components/fun */ 5).then(__webpack_require__.bind(null, 105)).then(c => wrapFunctional(c.default || c));
const LinkThumb = () => __webpack_require__.e(/* import() | components/link-thumb */ 8).then(__webpack_require__.bind(null, 94)).then(c => wrapFunctional(c.default || c));
const components_Newsletter = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 13)).then(c => wrapFunctional(c.default || c));
const Pagination = () => __webpack_require__.e(/* import() | components/pagination */ 9).then(__webpack_require__.bind(null, 63)).then(c => wrapFunctional(c.default || c));
const ProductCard = () => __webpack_require__.e(/* import() | components/product-card */ 10).then(__webpack_require__.bind(null, 57)).then(c => wrapFunctional(c.default || c));
const PurchaseCard = () => __webpack_require__.e(/* import() | components/purchase-card */ 13).then(__webpack_require__.bind(null, 95)).then(c => wrapFunctional(c.default || c));
const components_SocialLink = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 12)).then(c => wrapFunctional(c.default || c));
const SolutionCard = () => __webpack_require__.e(/* import() | components/solution-card */ 14).then(__webpack_require__.bind(null, 93)).then(c => wrapFunctional(c.default || c));
const components_Footer = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 5)).then(c => wrapFunctional(c.default || c));
const components_FooterTwo = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 15)).then(c => wrapFunctional(c.default || c));
const components_Header = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 4)).then(c => wrapFunctional(c.default || c));
const components_HeaderThree = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 16)).then(c => wrapFunctional(c.default || c));
const components_HeaderTwo = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 14)).then(c => wrapFunctional(c.default || c));
const ProductListTab = () => __webpack_require__.e(/* import() | components/product-list-tab */ 11).then(__webpack_require__.bind(null, 150)).then(c => wrapFunctional(c.default || c));
const ProductListTabs = () => __webpack_require__.e(/* import() | components/product-list-tabs */ 12).then(__webpack_require__.bind(null, 106)).then(c => wrapFunctional(c.default || c));
const HomeHeroSection = () => __webpack_require__.e(/* import() | components/home-hero-section */ 6).then(__webpack_require__.bind(null, 107)).then(c => wrapFunctional(c.default || c));
const HomeWhyUs = () => __webpack_require__.e(/* import() | components/home-why-us */ 7).then(__webpack_require__.bind(null, 108)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "vue-apollo"
var external_vue_apollo_ = __webpack_require__(19);
var external_vue_apollo_default = /*#__PURE__*/__webpack_require__.n(external_vue_apollo_);

// EXTERNAL MODULE: external "cross-fetch/polyfill"
var polyfill_ = __webpack_require__(48);

// EXTERNAL MODULE: external "apollo-client"
var external_apollo_client_ = __webpack_require__(27);

// EXTERNAL MODULE: external "apollo-link"
var external_apollo_link_ = __webpack_require__(6);

// EXTERNAL MODULE: external "apollo-upload-client"
var external_apollo_upload_client_ = __webpack_require__(28);

// EXTERNAL MODULE: external "apollo-cache-inmemory"
var external_apollo_cache_inmemory_ = __webpack_require__(9);

// EXTERNAL MODULE: external "subscriptions-transport-ws"
var external_subscriptions_transport_ws_ = __webpack_require__(29);

// EXTERNAL MODULE: external "subscriptions-transport-ws/dist/message-types"
var message_types_ = __webpack_require__(30);
var message_types_default = /*#__PURE__*/__webpack_require__.n(message_types_);

// EXTERNAL MODULE: external "apollo-link-ws"
var external_apollo_link_ws_ = __webpack_require__(31);

// EXTERNAL MODULE: external "apollo-utilities"
var external_apollo_utilities_ = __webpack_require__(32);

// EXTERNAL MODULE: external "apollo-link-persisted-queries"
var external_apollo_link_persisted_queries_ = __webpack_require__(33);

// EXTERNAL MODULE: external "apollo-link-context"
var external_apollo_link_context_ = __webpack_require__(34);

// EXTERNAL MODULE: external "apollo-link-state"
var external_apollo_link_state_ = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/vue-cli-plugin-apollo/graphql-client/src/index.js












// Create the apollo client
function createApolloClient ({
  // Client ID if using multiple Clients
  clientId = 'defaultClient',
  // URL to the HTTP API
  httpEndpoint,
  // Url to the Websocket API
  wsEndpoint = null,
  // Token used in localstorage
  tokenName = 'apollo-token',
  // Enable this if you use Query persisting with Apollo Engine
  persisting = false,
  // Is currently Server-Side Rendering or not
  ssr = false,
  // Only use Websocket for all requests (including queries and mutations)
  websocketsOnly = false,
  // Custom starting link.
  // If you want to replace the default HttpLink, set `defaultHttpLink` to false
  link = null,
  // Custom pre-auth links
  // Useful if you want, for example, to set a custom middleware for refreshing an access token.
  preAuthLinks = [],
  // If true, add the default HttpLink.
  // Disable it if you want to replace it with a terminating link using `link` option.
  defaultHttpLink = true,
  // Options for the default HttpLink
  httpLinkOptions = {},
  // Custom Apollo cache implementation (default is apollo-cache-inmemory)
  cache = null,
  // Options for the default cache
  inMemoryCacheOptions = {},
  // Additional Apollo client options
  apollo = {},
  // apollo-link-state options
  clientState = null,
  // Function returning Authorization header token
  getAuth = src_defaultGetAuth,
  // Local Schema
  typeDefs = undefined,
  // Local Resolvers
  resolvers = undefined,
  // Hook called when you should write local state in the cache
  onCacheInit = undefined,
}) {
  let wsClient, authLink, stateLink
  const disableHttp = websocketsOnly && !ssr && wsEndpoint

  // Apollo cache
  if (!cache) {
    cache = new external_apollo_cache_inmemory_["InMemoryCache"](inMemoryCacheOptions)
  }

  if (!disableHttp) {
    const httpLink = Object(external_apollo_upload_client_["createUploadLink"])({
      uri: httpEndpoint,
      ...httpLinkOptions,
    })

    if (!link) {
      link = httpLink
    } else if (defaultHttpLink) {
      link = Object(external_apollo_link_["from"])([link, httpLink])
    }

    // HTTP Auth header injection
    authLink = Object(external_apollo_link_context_["setContext"])(async (_, { headers }) => {
      const Authorization = await getAuth(tokenName)
      const authorizationHeader = Authorization ? { Authorization } : {}
      return {
        headers: {
          ...headers,
          ...authorizationHeader,
        },
      }
    })

    // Concat all the http link parts
    link = authLink.concat(link)

    if (preAuthLinks.length) {
      link = Object(external_apollo_link_["from"])(preAuthLinks).concat(authLink)
    }
  }

  // On the server, we don't want WebSockets and Upload links
  if (!ssr) {
    // If on the client, recover the injected state
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-underscore-dangle
      const state = window.__APOLLO_STATE__
      if (state && state[clientId]) {
        // Restore state
        cache.restore(state[clientId])
      }
    }

    if (!disableHttp) {
      let persistingOpts = {}
      if (typeof persisting === 'object' && persisting != null) {
        persistingOpts = persisting
        persisting = true
      }
      if (persisting === true) {
        link = Object(external_apollo_link_persisted_queries_["createPersistedQueryLink"])(persistingOpts).concat(link)
      }
    }

    // Web socket
    if (wsEndpoint) {
      wsClient = new external_subscriptions_transport_ws_["SubscriptionClient"](wsEndpoint, {
        reconnect: true,
        connectionParams: () => {
          const Authorization = getAuth(tokenName)
          return Authorization ? { Authorization, headers: { Authorization } } : {}
        },
      })

      // Create the subscription websocket link
      const wsLink = new external_apollo_link_ws_["WebSocketLink"](wsClient)

      if (disableHttp) {
        link = link ? link.concat(wsLink) : wsLink
      } else {
        link = Object(external_apollo_link_["split"])(
          // split based on operation type
          ({ query }) => {
            const { kind, operation } = Object(external_apollo_utilities_["getMainDefinition"])(query)
            return kind === 'OperationDefinition' &&
              operation === 'subscription'
          },
          wsLink,
          link,
        )
      }
    }
  }

  if (clientState) {
    console.warn('clientState is deprecated, see https://vue-cli-plugin-apollo.netlify.com/guide/client-state.html')
    stateLink = Object(external_apollo_link_state_["withClientState"])({
      cache,
      ...clientState,
    })
    link = Object(external_apollo_link_["from"])([stateLink, link])
  }

  const apolloClient = new external_apollo_client_["ApolloClient"]({
    link,
    cache,
    // Additional options
    ...(ssr ? {
      // Set this on the server to optimize queries when SSR
      ssrMode: true,
    } : {
      // This will temporary disable query force-fetching
      ssrForceFetchDelay: 100,
      // Apollo devtools
      connectToDevTools: "production" !== 'production',
    }),
    typeDefs,
    resolvers,
    ...apollo,
  })

  // Re-write the client state defaults on cache reset
  if (stateLink) {
    apolloClient.onResetStore(stateLink.writeDefaults)
  }

  if (onCacheInit) {
    onCacheInit(cache)
    apolloClient.onResetStore(() => onCacheInit(cache))
  }

  return {
    apolloClient,
    wsClient,
    stateLink,
  }
}

function restartWebsockets (wsClient) {
  // Copy current operations
  const operations = Object.assign({}, wsClient.operations)

  // Close connection
  wsClient.close(true)

  // Open a new one
  wsClient.connect()

  // Push all current operations to the new connection
  Object.keys(operations).forEach(id => {
    wsClient.sendMessage(
      id,
      message_types_default.a.GQL_START,
      operations[id].options,
    )
  })
}

function src_defaultGetAuth (tokenName) {
  if (typeof window !== 'undefined') {
    // get the authentication token from local storage if it exists
    const token = window.localStorage.getItem(tokenName)
    // return the headers to the context so httpLink can read them
    return token ? `Bearer ${token}` : ''
  }
}

// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__(36);
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);

// CONCATENATED MODULE: ./.nuxt/apollo-module.js






external_vue_default.a.use(external_vue_apollo_default.a);
/* harmony default export */ var apollo_module = ((ctx, inject) => {
  const providerOptions = {
    clients: {}
  };
  const {
    app,
    beforeNuxtRender,
    req
  } = ctx;
  const AUTH_TOKEN_NAME = 'apollo-token';
  const COOKIE_ATTRIBUTES = {
    "expires": 7,
    "path": "\u002F",
    "secure": false
  };
  const AUTH_TYPE = 'Bearer ';
  const cookies = new external_universal_cookie_default.a(req && req.headers.cookie); // Config

  const defaultTokenName =  false || AUTH_TOKEN_NAME;

  function defaultGetAuth() {
    const token = cookies.get(defaultTokenName);
    return token && defaultClientConfig.validateToken(token) ? AUTH_TYPE + token : '';
  }

  let defaultClientConfig;
  defaultClientConfig = {
    "httpEndpoint": "https://api.templatecookie.com/graphql"
  };

  const defaultValidateToken = () => true;

  if (!defaultClientConfig.validateToken) {
    defaultClientConfig.validateToken = defaultValidateToken;
  }

  const defaultCache = defaultClientConfig.cache ? defaultClientConfig.cache : new external_apollo_cache_inmemory_["InMemoryCache"](defaultClientConfig.inMemoryCacheOptions ? defaultClientConfig.inMemoryCacheOptions : undefined);

  if (false) {}

  if (!defaultClientConfig.getAuth) {
    defaultClientConfig.getAuth = defaultGetAuth;
  }

  if (false) {}

  defaultClientConfig.ssr = !!true;
  defaultClientConfig.cache = defaultCache;
  defaultClientConfig.tokenName = defaultTokenName; // if ssr we'd still like to have our webclient's cookies

  if ( true && req && req.headers && req.headers.cookie) {
    if (!defaultClientConfig.httpLinkOptions) {
      defaultClientConfig.httpLinkOptions = {};
    }

    if (!defaultClientConfig.httpLinkOptions.headers) {
      defaultClientConfig.httpLinkOptions.headers = {};
    }

    defaultClientConfig.httpLinkOptions.headers.cookie = req.headers.cookie;
  } // Create apollo client


  let defaultApolloCreation = createApolloClient({ ...defaultClientConfig
  });
  defaultApolloCreation.apolloClient.wsClient = defaultApolloCreation.wsClient;
  providerOptions.defaultClient = defaultApolloCreation.apolloClient;
  const vueApolloOptions = Object.assign(providerOptions, {
    errorHandler(error) {
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message);
    }

  });
  const apolloProvider = new external_vue_apollo_default.a(vueApolloOptions); // Allow access to the provider in the context

  app.apolloProvider = apolloProvider;

  if (true) {
    const ApolloSSR = __webpack_require__(49);

    beforeNuxtRender(({
      nuxtState
    }) => {
      nuxtState.apollo = ApolloSSR.getStates(apolloProvider);
    });
  }

  inject('apolloHelpers', {
    onLogin: async (token, apolloClient = apolloProvider.defaultClient, cookieAttributes = COOKIE_ATTRIBUTES, skipResetStore = false) => {
      // Fallback for tokenExpires param
      if (typeof cookieAttributes === 'number') cookieAttributes = {
        expires: cookieAttributes
      };

      if (typeof cookieAttributes.expires === 'number') {
        cookieAttributes.expires = new Date(Date.now() + 86400 * 1000 * cookieAttributes.expires);
      }

      if (token) {
        cookies.set(AUTH_TOKEN_NAME, token, cookieAttributes);
      } else {
        cookies.remove(AUTH_TOKEN_NAME, cookieAttributes);
      }

      if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);

      if (!skipResetStore) {
        try {
          await apolloClient.resetStore();
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log('%cError on cache reset (setToken)', 'color: orange;', e.message);
        }
      }
    },
    onLogout: async (apolloClient = apolloProvider.defaultClient, skipResetStore = false) => {
      cookies.remove(AUTH_TOKEN_NAME, COOKIE_ATTRIBUTES);
      if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);

      if (!skipResetStore) {
        try {
          await apolloClient.resetStore();
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log('%cError on cache reset (logout)', 'color: orange;', e.message);
        }
      }
    },
    getToken: (tokenName = AUTH_TOKEN_NAME) => {
      return cookies.get(tokenName);
    }
  });
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(24);

// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./apollo-module.js (mode: 'all')

 // Source: ../plugins/dropdown.js (mode: 'client')

 // Source: ../plugins/aos.js (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "template-cookie",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof apollo_module === 'function') {
    await apollo_module(app.context, inject);
  }

  if (false) {}

  if (false) {} // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("vue-countup-v2");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("vue-awesome-swiper");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map