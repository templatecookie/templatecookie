import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bd89e132 = () => interopDefault(import('../pages/hire-us.vue' /* webpackChunkName: "pages/hire-us" */))
const _5eca80e1 = () => interopDefault(import('../pages/product-demo.vue' /* webpackChunkName: "pages/product-demo" */))
const _6ee62834 = () => interopDefault(import('../pages/product-details.vue' /* webpackChunkName: "pages/product-details" */))
const _7bf05e1c = () => interopDefault(import('../pages/product-list.vue' /* webpackChunkName: "pages/product-list" */))
const _26ea1b40 = () => interopDefault(import('../pages/screenshort.vue' /* webpackChunkName: "pages/screenshort" */))
const _46db3905 = () => interopDefault(import('../pages/sitemap.vue' /* webpackChunkName: "pages/sitemap" */))
const _07f70ca2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

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
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
