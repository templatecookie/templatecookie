<template>
<div class="pb-36 pt-56 lg:pb-222 lg:pt-300 bg-dark-06 bg-content bg-right-bottom bg-no-repeat hero-demo"
      :style="hero">
      <div class="container">
        <div class="max-w-2xl sm:text-left text-center relative">
          <h1 class="tracking-01 font-semibold text-3xl md:text-4xl lg:text-title text-white mb-8">
            {{ product.name }}
          </h1>
          <p class="text-white font-light text-lg md:text-xl max-w-536">
            {{ product.short_description }}
          </p>
          <div class="mt-8">
            <a :href="product.buy_url" target="_blank" class="block text-center sm:inline-block border-1.5 border-blue-0b bg-blue-0b font-medium rounded-7 py-3.5 px-8 text-body-17 text-white duration-300 mb-3 sm:mb-0 sm:mr-3">
              Buy Now
              <img class="inline-block ml-2" src="~/assets/images/svg/arrow-right.svg" alt="" />
            </a>
            <a :href="product.preview_url" target="_blank"
              class="block text-center sm:inline-block font-medium border-1.5 border-white rounded-7 py-3.5 px-8 text-body-17 text-white duration-300">
              Live Preview
              </a>
          </div>
          <div
            class="shadow-bs8 rounded-xl p-6 bg-white border border-gray-e6 flex items-center justify-center sm:justify-start absolute -bottom-44 lg:-bottom-64 sm:left-0 sm:transform-none transform -translate-x-1/2 left-1/2 sm:w-auto w-full">
            <p class="text-dark-06 text-body-14/24 mr-4 text-left">
              Compatible with:
            </p>
            <ul class="flex space-x-3">
              <li>
                <nuxt-link to="#"><img src="~@/assets/images/svg/icon1.svg" alt="" /></nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"><img src="~@/assets/images/svg/icon2.svg" alt="" /></nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"><img src="~@/assets/images/svg/icon3.svg" alt="" /></nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"><img src="~@/assets/images/svg/icon4.svg" alt="" /></nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hero: {
        backgroundImage: "url(https://i.imgur.com/aBzS4DP.png)",
      }
    }
  }
}
</script>

<style>

</style>
