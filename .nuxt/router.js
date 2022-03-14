import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bd89e132 = () => interopDefault(import('../pages/hire-us.vue' /* webpackChunkName: "pages/hire-us" */))
const _6b313f72 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _75b17219 = () => interopDefault(import('../pages/category/_slug.vue' /* webpackChunkName: "pages/category/_slug" */))
const _0e898684 = () => interopDefault(import('../pages/demo/_slug.vue' /* webpackChunkName: "pages/demo/_slug" */))
const _29cbca42 = () => interopDefault(import('../pages/products/_slug/index.vue' /* webpackChunkName: "pages/products/_slug/index" */))
const _6c5e91bd = () => interopDefault(import('../pages/products/_slug/screenshots.vue' /* webpackChunkName: "pages/products/_slug/screenshots" */))
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
    path: "/products",
    component: _6b313f72,
    name: "products"
  }, {
    path: "/category/:slug?",
    component: _75b17219,
    name: "category-slug"
  }, {
    path: "/demo/:slug?",
    component: _0e898684,
    name: "demo-slug"
  }, {
    path: "/products/:slug",
    component: _29cbca42,
    name: "products-slug"
  }, {
    path: "/products/:slug/screenshots",
    component: _6c5e91bd,
    name: "products-slug-screenshots"
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
