<template>
  <div>
    <section class="realtive py-12 lg:py-20 bg-no-repeat bg-center bg-cover" :style="{ backgroundImage: `url(${bannerImg})` }">
      <div class="container">
        <div class="text-center">
          <h1 class="text-4xl md:text-heading-40 text-dark-06 mb-6 max-w-680 mx-auto font-semibold">
            Installation Plans
          </h1>
          <p class="text-lg md:text-body-18 text-dark-06 mb-8 max-w-full md:max-w-536 mx-auto font-light">
            These plans are only available to those who have bought one or more products from us before. If you haven't purchased yet, check our <a class="text-blue-600" href="https://1.envato.market/EaNJ2X">codecanyon profile</a>
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="container py-[124px]">
        <h2 class="mb-6 text-2xl font-medium">Chose your purchased product</h2>
        <div class="grid gap-4 grid-cols-3">
          <div v-for="(item, index) in products" :key="index">
            <input class="hidden" type="radio" name="choose-product" :id="'id'+item.product.id" :value="'id'+item.product.id" v-model="selectedProduct" />
            <label :for="'id'+item.product.id">
              <div class="flex items-center gap-3 rounded-xl p-5" :class="selectedProduct == `id${item.product.id}` ? 'border-2 border-[#0B63E5] bg-white': 'bg-[#F5F6F7] border-2 border-transparent'">
                <div class="flex-shrink-0">
                  <img class="w-16 h-16 object-cover" :src="item.product.banner.url" alt />
                </div>
                <h2 class="text-base text-[#061C3D]"> {{ item.product.name }} </h2>
              </div>
            </label>
          </div>
        </div>
      </div>
    </section>
    <section class="pricing-section bg-white">
      <div class="container">
        <div class="text-center">
          <h2 class="text-dark-06 md:text-4xl lg:text-5xl lg:leading-[56px] font-semibold mb-6 tracking-01">
            {{ selectedProductData.title }}
          </h2>
          <p class="text-dark-06 lg:w-3/5 m-auto text-base sm:text-body-18 mb-8 lg:mb-20 font-light">
            {{ selectedProductData.description }}
          </p>
        </div>
        <div class="card-area m-auto justify-center flex-wrap flex gap-6 mb-6">
         <pricing-plan v-for="(plan, index) in selectedProductData.plans" :key="index" :item="plan.priceplan[0]"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import bannerImg from "~/assets/images/all-img/img-five.png";
import ALL_PRODUCT_PLANS from '~/graphql/allProductPlans.js'
import PricingPlan from '~/components/PricingPlan.vue'

export default {
  head: {
    title: "Installation Plans",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "my website description"
      }
    ]
  },
  components: { PricingPlan },
  data() {
    return {
      selectedProduct: null,
      bannerImg: bannerImg,
    };
  },
  async asyncData({ app, params, store }) {
    const client = app.apolloProvider.defaultClient;

    const { data } = await client.query({
      query: ALL_PRODUCT_PLANS,
    })

    const products = data.allProductplans;
    return { products }
  },
  computed: {
    selectedProductData(){
        return this.products.find(elem => elem.product.id == this.selectedProduct.replace('id',''));
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
.container {
  @media (min-width: 1320px) {
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>
