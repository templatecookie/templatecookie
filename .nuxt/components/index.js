export { default as Accordion } from '../../components/Accordion.vue'
export { default as Breadcrumb } from '../../components/Breadcrumb.vue'
export { default as BusinessCard } from '../../components/BusinessCard.vue'
export { default as CounterUp } from '../../components/CounterUp.vue'
export { default as LinkThumb } from '../../components/LinkThumb.vue'
export { default as Newsletter } from '../../components/Newsletter.vue'
export { default as Pagination } from '../../components/Pagination.vue'
export { default as ProductCard } from '../../components/ProductCard.vue'
export { default as PurchaseCard } from '../../components/PurchaseCard.vue'
export { default as SocialLink } from '../../components/SocialLink.vue'
export { default as SolutionCard } from '../../components/SolutionCard.vue'
export { default as DemoCallToAction } from '../../components/Demo/CallToAction.vue'
export { default as DemoProductFeatureScreenshots } from '../../components/Demo/ProductFeatureScreenshots.vue'
export { default as DemoProductFolderStructure } from '../../components/Demo/ProductFolderStructure.vue'
export { default as DemoProductFunFact } from '../../components/Demo/ProductFunFact.vue'
export { default as DemoProductHero } from '../../components/Demo/ProductHero.vue'
export { default as DemoProductPages } from '../../components/Demo/ProductPages.vue'
export { default as DemoProductScreenshots } from '../../components/Demo/ProductScreenshots.vue'
export { default as DemoProductSupport } from '../../components/Demo/ProductSupport.vue'
export { default as DemoProductTopFeatures } from '../../components/Demo/ProductTopFeatures.vue'
export { default as Footer } from '../../components/Footer/Footer.vue'
export { default as FooterTwo } from '../../components/Footer/FooterTwo.vue'
export { default as Header } from '../../components/Header/Header.vue'
export { default as HeaderTwo } from '../../components/Header/HeaderTwo.vue'
export { default as ProductListTab } from '../../components/product-list/Tab.vue'
export { default as HomeHeroSection } from '../../components/Home/HeroSection.vue'
export { default as HomeTopFeaturesSection } from '../../components/Home/TopFeaturesSection.vue'
export { default as HomeWhyUs } from '../../components/Home/WhyUs.vue'

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
