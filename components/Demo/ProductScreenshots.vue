<template>
  <div class="py-20 lg:pt-124" id="screenshot-gallery">
    <div class="container">
      <div class="lg:max-w-536 m-auto text-center mb-10 lg:mb-16" v-if="data.info && data.info[0]">
        <h2 class="textdark text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
          {{ data.info[0].title }}
        </h2>
        <p class="textdark text-base sm:text-lg mb-6 lg:mb-9 font-light">
          {{ data.info[0].description }}
        </p>
      </div>
      <div class="relative" v-if="data.screenshots && data.screenshots.length > 1">
        <swiper class="swiper shadow-bs012 rounded-xl" :options="swiperOptionTwo">
          <swiper-slide v-for="(item, index) in data.screenshots" :key="index">
            <img class="w-full h-full rounded-xl" :src="item.url" alt="" />
          </swiper-slide>
        </swiper>
        <div class="custom-pagination flex justify-center pt-16">
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
        <div class="single-slider">
          <div class="swiper-button-prev ml-6" slot="button-prev">
            <span
              class="w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 bg-black bg-opacity-50 duration-300 hover:bg-primary">
              <img src="/icons/caret-left.svg" alt="" />
            </span>
          </div>
          <div class="swiper-button-next mr-6" slot="button-next">
            <span
              class="w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 bg-black bg-opacity-50 duration-300 hover:bg-primary arrow-icon">
              <img src="/icons/caret-right.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
      <div class="relative" v-if="data.screenshots && data.screenshots.length === 1">
        <img class="w-full h-full rounded-xl" :src="data.screenshots[0].url" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  props: ['data'],
  components: {
    Swiper,
    SwiperSlide
  },
  data (){
    return {
      swiperOptionTwo: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    }
  }
}
</script>
