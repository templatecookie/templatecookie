<template>
  <div class="bg-gray-50">
    <div class="relative overflow-hidden">
      <div class="absolute inset-y-0 h-full w-full" aria-hidden="true">
        <div class="relative h-full">
          <svg class="absolute right-full translate-y-1/3 translate-x-1/4 transform sm:translate-x-1/2 md:translate-y-1/2 lg:translate-x-full" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="e229dbec-10e9-49ee-8ec3-0286ca089edf" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
          </svg>
          <svg class="absolute left-full -translate-y-3/4 -translate-x-1/4 transform sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="d2a68204-c383-44b1-b99f-42ccff4e5365" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
          </svg>
        </div>
      </div>

      <div class="relative pt-6 pb-16 sm:pb-24">
        <div class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block">{{ product.name }}</span>
            </h1>
            <p class="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              {{ product.description }}
            </p>
          </div>

          <div class="mt-8 flex justify-center gap-4 flex-wrap">
            <a href="#pricing" target="_blank" class="block text-center sm:inline-block border-1.5 border-primary bg-primary font-medium rounded-7 py-3.5 px-8 text-lg text-white duration-300 mb-3 sm:mb-0">
              Buy Now
            </a>
            <a :href="product.previewUrl" target="_blank"
              class="block text-center sm:inline-block font-medium border-1.5 border-white rounded-7 py-3.5 px-8 text-lg text-white duration-300 bg-dark">
              Try For Free!
            </a>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="absolute inset-0 flex flex-col" aria-hidden="true">
          <div class="flex-1"></div>
          <div class="w-full flex-1 bg-gray-800"></div>
        </div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6">
          <img class="relative rounded-lg shadow-lg mx-auto" :src="product.demoBanner.url" :alt="product.name">
        </div>
      </div>
    </div>
    <div class="bg-gray-800">
      <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 class="text-center text-base font-semibold text-gray-400">{{ product.logoCloudsTitle }}</h2>
        <!-- <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1" v-for="(item, index) in product.logoCloudsImages" :key="index">
            <img class="h-12" :src="item.url" alt="Tuple">
          </div>
        </div> -->

      <swiper class="swiper" :options="swiperOptionOne">
        <swiper-slide class="mt-8 slider-full" v-for="(item, index) in product.logoCloudsImages" :key="index">
          <div class="flex justify-center bg-white/10 py-2 px-4 rounded">
            <img class="h-12" :src="item.url" alt="Tuple">
          </div>
        </swiper-slide>
      </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      bgImage: require('../../static/images/img-five.png'),
      swiperOptionOne: {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: {
          delay: 1,
          disableOnInteraction: false
        },
        freeMode: true,
        speed: 10000,
        breakpoints: {
          1199: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },
    }
  },
  methods: {
    getBanner(){
      return this.product.demoBanner && this.product.demoBanner.url ? this.product.demoBanner.url : this.bgImage;
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>

<style>

</style>
