<template>
  <div>
    <ProductDemoHeader :product="product" v-if="product" />
    <product-hero :product="product" v-if="product"  />
    <product-fun-fact :data="product.product_funfacts" v-if="product.product_funfacts"  />
    <product-top-features :data="product.productFeatures" v-if="product.productFeatures" />

    <div class="">
      <product-screenshots :data="product.productFeatureScreenshots" v-if="product.productFeatureScreenshots" />
      <product-feature-screenshots :data="product.displayFeatures" v-if="product.displayFeatures"/>
      <product-pages :data="product.productPages" v-if="product.productPages"  />
      <support-pricing />
      <product-folder-structure :data="product.folder_structure" v-if="product.folder_structure" />
      <product-support  />
    </div>
    <call-to-action :product="product" v-if="product && product.cta_section" />
  </div>
</template>

<script>
import BusinessCard from "~/components/BusinessCard.vue";
import PurchaseCard from "~/components/PurchaseCard.vue";
import PRODUCT_DEMO from '~/graphql/productDemo'
import ProductDemoHeader from "~/components/Header/ProductDemoHeader.vue";

import ProductTopFeatures from '~/components/Demo/ProductTopFeatures.vue';
import ProductFeatureScreenshots from '../../components/Demo/ProductFeatureScreenshots.vue';
import ProductFolderStructure from '../../components/Demo/ProductFolderStructure.vue';
import ProductScreenshots from '../../components/Demo/ProductScreenshots.vue';
import ProductPages from '../../components/Demo/ProductPages.vue';
import ProductFunFact from '../../components/Demo/ProductFunFact.vue';
import ProductHero from "../../components/Demo/ProductHero.vue";
import ProductSupport from '../../components/Demo/ProductSupport.vue';
import CallToAction from '../../components/Demo/CallToAction.vue';
import GLOBAL_QUERY from '~/graphql/global'
import SupportPricing from '../../components/Demo/SupportPricing.vue';

export default {
  layout: "empty",
  name: "ProductDemo",
  head() {
    const product = this.product
    return { 
      title: product.name + "| Templatecookie.com",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'my website description'
        }
      ],
    }
  },
  async asyncData({ app, params, store }) {
    const client = app.apolloProvider.defaultClient;
    const { slug } = params;

    const { data } = await client.query({
      query: PRODUCT_DEMO,
      variables: {
        slug
      }
    })

    if(!store.getters.getGlobalData){
      const global = await client.query({
        query: GLOBAL_QUERY,
      })
        
      const globalData = global.data?.global?.data?.attributes
      store.commit('SET_GLOBAL_DATA', globalData)
    }
    
    const product = data.products.data[0]?.attributes;
    return { product }
  },
  components: {
    BusinessCard,
    PurchaseCard,
    ProductTopFeatures,
    ProductDemoHeader,
    ProductFeatureScreenshots,
    ProductFolderStructure,
    ProductScreenshots,
    ProductPages,
    ProductFunFact,
    ProductHero,
    ProductSupport,
    CallToAction,
    SupportPricing
  },
};
</script>

<style lang="scss" scoped>
// animation
.slider-full {
  animation: scroll 26s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-250px * 7));
  }
}

// swiper single silder
.single-slider {

  .swiper-button-prev,
  .swiper-button-next {
    top: calc(50% - 15px);
    transform: translateY(-50%);
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    content: none;
  }
}

.tab-content-wrap {
  &.active {
    background-color: #0b63e5;

    h3,
    p {
      color: white;
    }
  }
}
</style>
