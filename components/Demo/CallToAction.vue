<template>
  <div class="pt-28 lg:pt-40 bg-dark-06">
    <div class="container">
      <div class="text-center mb-40">
        <h2 class="text-white text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
          {{ product.cta_section.title }}
        </h2>
        <p class="text-white text-base sm:text-lg mb-6 lg:mb-12 font-light">
          {{ product.cta_section.description }}
        </p>
        <a :href="product.buy_url" target="_blank"
          class="inline-block bg-blue-0b rounded-7 py-4 px-9 text-body-17 text-white duration-300 hover:bg-black">
          Purchase Now
          <img class="inline-block ml-2" src="~/assets/images/svg/arrow-right.svg" alt="brand-logo" />
        </a>
      </div>
    </div>
    <div>
      <swiper class="swiper" :options="swiperOptionOne">
        <swiper-slide class="slider-full" v-for="(item, index) in product.cta_section.screenshots.data" :key="index">
          <img class="w-full h-60 object-cover border border-white p-3 pb-0 border-b-0" :src="fixImageUrl(item.attributes.url, true)" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  props: ['product'],
  components: {
    Swiper,
    SwiperSlide,
  },
  data () {
    return {
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
  }
}
</script>

<style>

</style>
