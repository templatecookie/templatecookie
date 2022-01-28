export const Accordion = () => import('../../components/Accordion.vue' /* webpackChunkName: "components/accordion" */).then(c => wrapFunctional(c.default || c))
export const Breadcrumb = () => import('../../components/Breadcrumb.vue' /* webpackChunkName: "components/breadcrumb" */).then(c => wrapFunctional(c.default || c))
export const BusinessCard = () => import('../../components/BusinessCard.vue' /* webpackChunkName: "components/business-card" */).then(c => wrapFunctional(c.default || c))
export const CounterUp = () => import('../../components/CounterUp.vue' /* webpackChunkName: "components/counter-up" */).then(c => wrapFunctional(c.default || c))
export const Fun = () => import('../../components/Fun.vue' /* webpackChunkName: "components/fun" */).then(c => wrapFunctional(c.default || c))
export const LinkThumb = () => import('../../components/LinkThumb.vue' /* webpackChunkName: "components/link-thumb" */).then(c => wrapFunctional(c.default || c))
export const Newsletter = () => import('../../components/Newsletter.vue' /* webpackChunkName: "components/newsletter" */).then(c => wrapFunctional(c.default || c))
export const Pagination = () => import('../../components/Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c))
export const ProductCard = () => import('../../components/ProductCard.vue' /* webpackChunkName: "components/product-card" */).then(c => wrapFunctional(c.default || c))
export const PurchaseCard = () => import('../../components/PurchaseCard.vue' /* webpackChunkName: "components/purchase-card" */).then(c => wrapFunctional(c.default || c))
export const SocialLink = () => import('../../components/SocialLink.vue' /* webpackChunkName: "components/social-link" */).then(c => wrapFunctional(c.default || c))
export const SolutionCard = () => import('../../components/SolutionCard.vue' /* webpackChunkName: "components/solution-card" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const FooterTwo = () => import('../../components/Footer/FooterTwo.vue' /* webpackChunkName: "components/footer-two" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/Header/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const HeaderThree = () => import('../../components/Header/HeaderThree.vue' /* webpackChunkName: "components/header-three" */).then(c => wrapFunctional(c.default || c))
export const HeaderTwo = () => import('../../components/Header/HeaderTwo.vue' /* webpackChunkName: "components/header-two" */).then(c => wrapFunctional(c.default || c))
export const ProductListTab = () => import('../../components/product-list/Tab.vue' /* webpackChunkName: "components/product-list-tab" */).then(c => wrapFunctional(c.default || c))
export const ProductListTabs = () => import('../../components/product-list/Tabs.vue' /* webpackChunkName: "components/product-list-tabs" */).then(c => wrapFunctional(c.default || c))
export const HomeHeroSection = () => import('../../components/Home/HeroSection.vue' /* webpackChunkName: "components/home-hero-section" */).then(c => wrapFunctional(c.default || c))
export const HomeWhyUs = () => import('../../components/Home/WhyUs.vue' /* webpackChunkName: "components/home-why-us" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
