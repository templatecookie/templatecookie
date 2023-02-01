<template>
  <div>
    <demo-header :product="product" v-if="product"  />
    <product-hero :product="product" v-if="product" />


    <div class="bg-white">
      <div class="mx-auto max-w-7xl py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why chose our product?</h2>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div class="flex flex-col">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <!-- Heroicon name: outline/inbox -->
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                  </svg>
                </div>
                Unlimited inboxes
              </dt>
              <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p class="flex-auto">Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.</p>
                <p class="mt-6">
                </p>
              </dd>
            </div>

            <div class="flex flex-col">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <!-- Heroicon name: outline/users -->
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                Manage team members
              </dt>
              <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p class="flex-auto">Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.</p>
                <p class="mt-6">
                </p>
              </dd>
            </div>

            <div class="flex flex-col">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <!-- Heroicon name: outline/trash -->
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </div>
                Spam report
              </dt>
              <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p class="flex-auto">Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.</p>
                <p class="mt-6">
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>


    <div v-for="(section, index) in product.contents" :key="index">
      <div v-if="section.__typename == 'ExclusivefeatureRecord'">
        <exclusive-feature :data="section" />
      </div>
      <div v-if="section.__typename == 'FeaturescreenshotRecord'">
        <product-screenshots :data="section" />
      </div>
      <div v-if="section.__typename == 'TopfeatureRecord'">
       <ProductTopFeatures :data="section" />
      </div>
      <div v-if="section.__typename == 'ProductctaRecord'">
        <call-to-action :section="section" :product="product" />
      </div>
      <div v-if="section.__typename == 'PriceplanRecord'">
        <PricingSection :plans="section.plans" :id="section.sectionId ? section.sectionId : section.id" :info="section.info[0]" :extraOffer="product.extraOffer" />
      </div>
      <div v-if="section.__typename == 'TestimonialSectionRecord'">
        <testimonial-section :data="section" />
      </div>
      <div v-if="section.__typename == 'TechnologySectionRecord'">
        <technology-section :data="section" />
      </div>
    </div>
  </div>
</template>

<script>
import PRODUCT_DEMO from '~/graphql/productDemo'
import GLOBAL_QUERY from '~/graphql/global'
import ProductTopFeatures from '~/components/Demo/ProductTopFeatures.vue';
import ProductFeatureScreenshots from '../../components/Demo/ProductFeatureScreenshots.vue';
import ProductScreenshots from '../../components/Demo/ProductScreenshots.vue';
import ProductHero from "../../components/Demo/ProductHero.vue";
import CallToAction from '../../components/Demo/CallToAction.vue';
import ExclusiveFeature from "../../components/Demo/ExclusiveFeature.vue";
import GroupFeatureSection from "../../components/Demo/GroupFeatureSection.vue";
import DemoHeader from '../../components/DemoHeader.vue';
import PricingSection from '~/components/PricingSection.vue'
import TestimonialSection from '../../components/Demo/TestimonialSection.vue';
import TechnologySection from '../../components/Demo/TechnologySection.vue';

export default {
  layout: "empty",
  name: "ProductDemo",
  head() {
    const product = this.product
    return {
      title: `${product.name}`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: product.description },
        { hid: 'og:title', property: 'og:title', name: 'og:title', content: product.name },
        { hid: 'og:description', name: 'og:description', name: 'og:description', content: product.description },
        { hid: 'og:type', property: 'og:type', name: 'og:type', content: "product" },
        { hid: 'og:image', property: 'og:image', name: 'og:image', content: product.demoBanner ? product.demoBanner.url : product.banner.url },
      ],
    }
  },
  async asyncData({ app, params, store, query, $sentry }) {
    try {
      const client = app.apolloProvider.defaultClient;
      const draft = app.apolloProvider.clients.draft
      const { slug } = params;
      const queryObject = { query: PRODUCT_DEMO, variables: { slug } };
      let productData;

      if(query && query.draft){
        productData = await draft.query(queryObject)
      }else {
        productData = await client.query(queryObject)
      }

      if(!store.getters.getGlobalData){
        const global = await client.query({
          query: GLOBAL_QUERY,
        })

        const globalData = global.data?.global?.data?.attributes
        store.commit('SET_GLOBAL_DATA', globalData)
      }

      const product = productData.data.product;
      return { product }
    } catch (error) {
      $sentry.captureException(error)
    }
  },

  components: {
    ProductTopFeatures,
    ProductFeatureScreenshots,
    ProductScreenshots,
    ProductHero,
    CallToAction,
    PricingSection,
    ExclusiveFeature,
    GroupFeatureSection,
    DemoHeader,
    TestimonialSection,
    TechnologySection,
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
