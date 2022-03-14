<template>
  <div>
    <HeaderTwo />
    <product-hero :product="product" />
    <product-fun-fact :data="product.product_funfacts" />
    <product-top-features :data="product.productFeatures" />

    <div class="py-20 lg:py-124">
      <product-screenshots />
      <product-feature-screenshots />
      <product-pages :data="product.productPages" />
      <product-folder-structure />
      <product-support />
      <call-to-action />
    </div>

    <!-- <div class="py-20 lg:py-124">
      <div class="container">
        <div class="lg:grid grid-cols-12 gap-6">
          <div class="col-span-6 lg:order-2">
            <div class="mb-6 lg:mb-0 h-340 md:h-470">
              <img class="w-full h-full object-cover rounded-20" src="~@/assets/images/all-img/demo-thumb.png" alt="" />
            </div>
          </div>
          <div class="col-span-6 flex items-center">
            <div class="lg:max-w-536">
              <h3 class="text-blue-0b text-base tracking-ls04 uppercase mb-4">
                Explore our Gilio team services.
              </h3>
              <h2 class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
                Feature Name 01
              </h2>
              <p class="text-dark-06 text-base sm:text-body-18 mb-6 lg:mb-9 font-light">
                Nunc convallis semper justo quis tempor. Praesent molestie,
                lorem sed imperdiet tempor, libero urna semper urna, facilisis
                vulputate velit arcu vitae mi. Donec ac nisi ex.
              </p>
              <nuxt-link to="/"
                class="inline-block bg-blue-0b rounded-7 py-4 px-9 text-body-17 text-white duration-300 hover:bg-dark-06">
                Button Label
                <img class="inline-block ml-2" src="~/assets/images/svg/arrow-right.svg" alt="brand-logo" /></nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="py-20 lg:py-124">
        <div class="container">
          <div class="lg:max-w-536 m-auto text-center mb-10 lg:mb-16">
            <h3 class="text-blue-0b text-base tracking-ls04 uppercase mb-4">
              Explore our Gilio team services.
            </h3>
            <h2 class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
              Feature Name 01
            </h2>
            <p class="text-dark-06 text-base sm:text-body-18 mb-6 lg:mb-9 font-light">
              Nunc convallis semper justo quis tempor. Praesent molestie, lorem
              sed imperdiet tempor, libero urna semper urna, facilisis vulputate
              velit arcu vitae mi. Donec ac nisi ex.
            </p>
          </div>
          <div class="mb-6 lg:mb-0 h-350 md:h-650">
            <img class="w-full object-cover rounded-20" src="~@/assets/images/all-img/demo-thumb2.png" alt="" />
          </div>
        </div>
      </div>
      <div class="py-20 lg:py-124 bg-gray-f0">
        <div class="container">
          <div class="lg:grid grid-cols-12 gap-6">
            <div class="col-span-6">
              <div class="lg:mr-20 mb-6 lg:mb-0 h-340 md:h-470">
                <img class="w-full h-full object-cover rounded-20" src="~@/assets/images/all-img/demo-thumb.png"
                  alt="" />
              </div>
            </div>
            <div class="col-span-6 flex items-center">
              <div class="lg:max-w-536">
                <h3 class="text-blue-0b text-base tracking-ls04 uppercase mb-4">
                  Explore our Gilio team services.
                </h3>
                <h2 class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
                  Feature Name 01
                </h2>
                <p class="text-dark-06 text-base sm:text-body-18 mb-6 lg:mb-9 font-light">
                  Nunc convallis semper justo quis tempor. Praesent molestie,
                  lorem sed imperdiet tempor, libero urna semper urna, facilisis
                  vulputate velit arcu vitae mi. Donec ac nisi ex.
                </p>
                <nuxt-link to="/"
                  class="inline-block bg-blue-0b rounded-7 py-4 px-9 text-body-17 text-white duration-300 hover:bg-dark-06">
                  Button Label
                  <img class="inline-block ml-2" src="~/assets/images/svg/arrow-right.svg" alt="brand-logo" />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-20 lg:py-124 bg-gray-f0">
        <div class="container">
          <div class="lg:grid grid-cols-12 gap-6">
            <div class="col-span-6">
              <div class="lg:mr-20 mb-6 lg:mb-0 h-340 md:h-470">
                <img class="w-full h-full object-cover rounded-20" src="~@/assets/images/all-img/demo-thumb.png"
                  alt="" />
              </div>
            </div>
            <div class="col-span-6 flex items-center">
              <div class="lg:max-w-536">
                <h3 class="text-blue-0b text-base tracking-ls04 uppercase mb-4">
                  Explore our Gilio team services.
                </h3>
                <h2 class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
                  Feature Name 01
                </h2>
                <p class="text-dark-06 text-base sm:text-body-18 mb-6 lg:mb-9 font-light">
                  Nunc convallis semper justo quis tempor. Praesent molestie,
                  lorem sed imperdiet tempor, libero urna semper urna, facilisis
                  vulputate velit arcu vitae mi. Donec ac nisi ex.
                </p>
                <nuxt-link to="/"
                  class="inline-block bg-blue-0b rounded-7 py-4 px-9 text-body-17 text-white duration-300 hover:bg-dark-06">
                  Button Label
                  <img class="inline-block ml-2" src="~/assets/images/svg/arrow-right.svg" alt="brand-logo" />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import BusinessCard from "~/components/BusinessCard.vue";
import PurchaseCard from "~/components/PurchaseCard.vue";
import PRODUCT_DEMO from '~/graphql/productDemo'
import HeaderTwo from "~/components/Header/HeaderTwo.vue";

import ProductTopFeatures from '~/components/Demo/ProductTopFeatures.vue';
import ProductFeatureScreenshots from '../../components/Demo/ProductFeatureScreenshots.vue';
import ProductFolderStructure from '../../components/Demo/ProductFolderStructure.vue';
import ProductScreenshots from '../../components/Demo/ProductScreenshots.vue';
import ProductPages from '../../components/Demo/ProductPages.vue';
import ProductFunFact from '../../components/Demo/ProductFunFact.vue';
import ProductHero from "../../components/Demo/ProductHero.vue";
import ProductSupport from '../../components/Demo/ProductSupport.vue';
import CallToAction from '../../components/Demo/CallToAction.vue';

export default {
  layout: "empty",
  name: "ProductDemo",
  head: {
    title: 'Product Demo Page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
  },
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;
    const { slug } = params;

    const { data } = await client.query({
      query: PRODUCT_DEMO,
      variables: {
        slug
      }
    })
    
    const product = data.product.data.attributes;
    return { product }
  },
  components: {
    BusinessCard,
    PurchaseCard,
    ProductTopFeatures,
    HeaderTwo,
    ProductFeatureScreenshots,
    ProductFolderStructure,
    ProductScreenshots,
    ProductPages,
    ProductFunFact,
    ProductHero,
    ProductSupport,
    CallToAction
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
