<template>
  <div class="py-20 lg:pt-124" id="screenshot-gallery">
    <div class="container">
      <div class="lg:max-w-536 m-auto text-center mb-10 lg:mb-16">
        <h2 class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
          {{ data.info[0].title }}
        </h2>
        <p class="text-dark-06 text-base sm:text-body-18 mb-6 lg:mb-9 font-light">
          {{ data.info[0].description }}
        </p>
      </div>
      <div class="relative">
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
              class="w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 bg-black bg-opacity-50 duration-300 hover:bg-blue-0b">
              <img src="~@/assets/images/svg/caret-left.svg" alt="" />
            </span>
          </div>
          <div class="swiper-button-next mr-6" slot="button-next">
            <span
              class="w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 bg-black bg-opacity-50 duration-300 hover:bg-blue-0b arrow-icon">
              <img src="~@/assets/images/svg/caret-right.svg" alt="" />
            </span>
          </div>
        </div>
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
