<template>
  <div class="bg-gray-50">
    <div class="relative overflow-hidden">
      <div
        class="absolute md:block hidden inset-y-0 h-full w-full"
        aria-hidden="true"
      >
        <div class="relative h-full">
          <svg
            class="absolute right-full translate-y-1/3 translate-x-1/4 transform sm:translate-x-1/2 md:translate-y-1/2 lg:translate-x-full"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
            />
          </svg>
          <svg
            class="absolute left-full -translate-y-3/4 -translate-x-1/4 transform sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
            />
          </svg>
        </div>
      </div>

      <div class="relative pt-6 pb-16 sm:pb-24">
        <div class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div class="text-center">
            <h1
              class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span class="block">{{ product.name }}</span>
            </h1>
            <p
              class="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"
            >
              {{ product.description }}
            </p>
          </div>
          <div class="mt-8 flex justify-center gap-4 flex-wrap">
            <template
              v-for="(item, index) in product.actionButtons"
              :key="index"
            >
              <a
                v-if="item.target"
                :href="item.href"
                target="_blank"
                class="block text-center sm:inline-block font-medium rounded-[7px] py-3.5 px-8 text-lg text-white duration-300 mb-3 sm:mb-0"
                :class="
                  item.cssClass ? item.cssClass : 'bg-primary hover:bg-dark'
                "
              >
                {{ item.label }}
              </a>
              <nuxt-link
                v-else
                :to="item.href"
                class="block text-center sm:inline-block bg-primary font-medium rounded-[7px] py-3.5 px-8 text-lg text-white duration-300 mb-3 sm:mb-0"
                :class="
                  item.cssClass ? item.cssClass : 'bg-primary hover:bg-dark'
                "
              >
                {{ item.label }}
              </nuxt-link>
            </template>
          </div>
        </div>
      </div>

      <div class="relative" v-if="product.demoBanner">
        <div class="absolute inset-0 flex flex-col" aria-hidden="true">
          <div class="flex-1" />
          <div class="w-full flex-1 bg-gray-800" />
        </div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6">
          <NuxtImg
            class="relative rounded-lg shadow-lg mx-auto"
            :src="product.demoBanner.url"
            :alt="product.name"
          />
        </div>
      </div>
    </div>
    <div
      class="bg-gray-800"
      v-if="product.logoCloudsImages && product.logoCloudsTitle"
    >
      <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 class="text-center text-base font-semibold text-gray-400">
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
    </div>
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
      bgImage: "/images/img-five.png",
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
