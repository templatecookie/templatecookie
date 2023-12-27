<template>
  <div
    class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 bg-white/50"
  >
    <div class="relative overflow-hidden">
      <div class="relative pt-6 pb-16 sm:pb-24">
        <div
          class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6"
          data-aos="fade-up"
        >
          <div class="text-center">
            <h1
              class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span
                class="block bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent"
                >{{ product.name }}</span
              >
            </h1>
            <p
              class="mx-auto mt-3 max-w-md text-base text-gray-900 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"
            >
              {{ product.description }}
            </p>
          </div>
          <div class="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="#"
              class="transition duration-200 ease-linear inline-flex items-center justify-canter gap-2 border border-primary-500 py-2 px-4 rounded-md shadow-sm hover:bg-primary-500 hover:text-white text-gray-900 text-md"
            >
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </span>
              Buy Now
            </a>
            <a
              href="#"
              class="transition duration-200 ease-linear inline-flex items-center justify-canter gap-2 border border-secondary py-2 px-4 rounded-md shadow-sm hover:bg-secondary hover:text-white text-gray-900 text-md"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </span>
              Live Demo
            </a>
          </div>
        </div>
      </div>

      <div class="relative" v-if="product.demoBanner">
        <div class="mx-auto max-w-7xl px-4 sm:px-6" data-aos="fade-down">
          <NuxtImg
            class="relative rounded-lg shadow-lg mx-auto w-full"
            :src="product.demoBanner.url"
            :alt="product.name"
          />
        </div>
      </div>
    </div>
    <!-- <div v-if="product.logoCloudsImages && product.logoCloudsTitle">
      <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 class="text-center text-base font-semibold text-white">
          {{ product.logoCloudsTitle }}
        </h2>
        <swiper
          class="swiper"
          :slides-per-view="4"
          :space-between="24"
          :loop="true"
          :free-mode="true"
          :speed="10000"
          :modules="modules"
          :autoplay="{
            delay: 1,
            disableOnInteraction: false,
          }"
          :breakpoints="breakpoints"
        >
          <swiper-slide
            class="mt-8 slider-full"
            v-for="(item, index) in product.logoCloudsImages"
            :key="index"
          >
            <div class="flex justify-center bg-white py-2 px-4 rounded">
              <NuxtImg class="h-12" :src="item.url" :alt="item.alt" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div> -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      bgImage: "/img-five.png",
      modules: [FreeMode, Autoplay],

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
    };
  },
  methods: {
    getBanner() {
      return this.product.demoBanner && this.product.demoBanner.url
        ? this.product.demoBanner.url
        : this.bgImage;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style></style>
