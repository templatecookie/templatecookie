<template>
  <div>
    <section class="realtive py-12 lg:py-20 bg-no-repeat bg-center bg-cover" :style="{ backgroundImage: `url(${bannerImg})` }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="text-center">
          <h1 class="text-4xl md:text-heading-40 textdark mb-6 max-w-680 mx-auto font-semibold">
            Installation Plans
          </h1>
          <p class="text-lg md:text-lg textdark mb-8 max-w-full md:max-w-536 mx-auto font-light">
            These plans are only available to those who have bought one or more products from us before. If you haven't purchased yet, check our <a class="text-blue-600" href="https://1.envato.market/EaNJ2X">codecanyon profile</a>
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-14">
        <h2 class="mb-6 text-3xl font-medium">Chose your purchased product</h2>
        <div class="grid gap-4 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
          <div v-for="(item, index) in products" :key="index">
            <input class="hidden" type="radio" name="choose-product" :id="'id'+item.product.id" :value="'id'+item.product.id" v-model="selectedProduct" />
            <label :for="'id'+item.product.id">
              <div class="flex items-center gap-3 rounded-xl p-5" :class="selectedProduct == `id${item.product.id}` ? 'border-2 border-[#0B63E5] bg-white': 'bg-gray-f0 border-2 border-transparent'">
                <div class="flex-shrink-0" v-if="item.product.thumbnail">
                  <img class="w-16 h-16 object-cover rounded-md" :src="item.product.thumbnail.url" alt />
                </div>
                <h2 class="text-base text-[#061C3D]"> {{ item.product.name }} </h2>
              </div>
            </label>
          </div>
        </div>
      </div>
    </section>
    <PricingSection :id="selectedProductData.id" :plans="selectedProductPlans" :info="selectedProductData" :checkout="true" />
  </div>
</template>

<script>
import ALL_PRODUCT_PLANS from '~/graphql/allProductPlans.js'
import PricingSection from '~/components/PricingSection.vue'

export default {
  head: {
    title: "Installation Plans | Templatecookie Products",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Buy our premium installation support package, our expert team will help you get your app installed & configured."
      }
    ],
  },
  components: { PricingSection },
  data() {
    return {
      selectedProduct: null,
      bannerImg: "/images/img-five.png",
    };
  },
  async asyncData({ app, params, store, $sentry }) {
    try {
      const client = app.apolloProvider.defaultClient;

      const { data } = await client.query({
        query: ALL_PRODUCT_PLANS,
      })

      const products = data.allProductplans;
      return { products }
    } catch (error) {
      $sentry.captureException(error)
    }
  },

  computed: {
    selectedProductData(){
        return this.products.find(elem => elem.product.id == this.selectedProduct.replace('id',''));
    },
    selectedProductPlans(){
      return this.selectedProductData.plans.map(item => item.priceplan[0])
    }
  },
  created(){
    this.selectedProduct = 'id'+this.products[0].product.id
  }
};
</script>

<style lang="scss" scoped>
.responsive-overly {
  @media (max-width: 1199px) {
    background-position: center !important;
    background-size: cover !important;
  }
}
</style>
