<template>
  <div class="min-h-600 sm:min-h-840 pb-20 pt-40 flex items-center bg-dark bg-cover xl:bg-contain bg-right-bottom bg-no-repeat hero-demo" :style="{ backgroundImage: 'url(' + getBanner() + ')' }">
    <div class="container">
      <div class="max-w-2xl sm:text-left text-center">
        <h1 class="tracking-01 font-semibold text-3xl md:text-4xl lg:text-5xl text-white mb-8">
          {{ product.name }}
        </h1>
        <p class="text-white font-light text-lg md:text-xl lg:max-w-536">
          {{ product.description }}
        </p>
        <div class="mt-8">
          <a href="#pricing" target="_blank" class="block text-center sm:inline-block border-1.5 border-primary bg-primary font-medium rounded-7 py-3.5 px-8 text-lg text-white duration-300 mb-3 sm:mb-0 sm:mr-3">
            Buy Now
          </a>
          <a :href="product.previewUrl" target="_blank"
            class="block text-center sm:inline-block font-medium border-1.5 border-white rounded-7 py-3.5 px-8 text-lg text-white duration-300">
            Try For Free!
          </a>
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
      bgImage: require('../../static/images/img-five.png')
    }
  },
  methods: {
    getBanner(){
      // return this.product.demo_page_banner ? this.fixImageUrl(this.product.demo_page_banner) : this.bgImage
      return this.product.demoBanner && this.product.demoBanner.url ? this.product.demoBanner.url : this.bgImage;
    }
  }
}
</script>

<style>

</style>
