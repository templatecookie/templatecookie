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
            Jobpilot Installation Pricing Plan
          </h2>
          <p class="text-dark-06 lg:w-3/5 m-auto text-base sm:text-body-18 mb-8 lg:mb-20 font-light">
            Donec ligula ligula, porta at urna non, faucibus congue urna. Nullam nulla purus, facilisis vitae odio ac, tempus aliquet dolor.
          </p>
        </div>
        <div class="card-area m-auto justify-center flex-wrap flex gap-6 mb-6">
          <div v-for="(plan, index) in selectedProductData.plans" :key="index" class="card bg-white p-8 rounded-2xl border border-gray-100 border-t-4 border-t-[#FF8800] max-w-[424px]">
            <div class="top-area flex flex-wrap gap-4 justify-between items-center mb-8">
              <div class="card-icon inline-block p-5 rounded-lg bg-[#FFF9EE]">
                <!-- <img :src="plan.icon.url" class="w-10 h-10" alt=""> -->
              </div>
              <div class="price">
                <h2 class="text-5xl text-[#FF8800]">
                  Free
                  <span class="text-base text-gray-700"></span>
                </h2>
              </div>
            </div>
            <div class="details-area">
              <h2 class="mb-2 text-gray-900 text-2xl">Free Access</h2>
              <p class="mb-8 text-base text-gray-700">
                Etiam venenatis condimentum elit at semper. Ut commodo consectetur
                nulla.
              </p>
              <a href="#" class="btn inline-block bg-transparent border-[1.5px] border-[#FF8800] rounded-7 px-8 duration-300">
                <div class="flex gap-4 items-center">
                  <span class="text-[17px] leading-[56px] text-[#FF8800] font-medium">Get Demo</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 12H20.25"
                      stroke="#FF8800"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.5 5.25L20.25 12L13.5 18.75"
                      stroke="#FF8800"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div>
            <div class="divider bg-gray-100 h-px my-8"></div>
            <div class="list-area">
              <ul>
                <li class="flex gap-3 mb-5" v-for="(feature, index) in plan.features" :key="index">
                  <div class="list-icon inline-block rounded-full" :class="{ 'opacity-30' : !feature.active }">
                    <svg width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8"
                      />
                      <path
                        d="M16.8125 8.9375L10.6875 15.0622L7.625 12"
                        stroke="#0F9918"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light " :class="{ 'line-through' :  !feature.active }">{{ feature.feature }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import bannerImg from "~/assets/images/all-img/img-five.png";
import ALL_PRODUCT_PLANS from '~/graphql/allProductPlans.js'

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
    this.selectedProduct = this.products[0].product.id
    console.log(this.selectedProduct);
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
