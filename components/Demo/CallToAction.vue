<template>
  <div>
  <!-- <div class="bg-white">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div class="overflow-hidden rounded-lg bg-dark shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span class="block">Ready to dive in?</span>
              <span class="block">Start your free trial today.</span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-indigo-200">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
            <a href="#" class="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-primary shadow hover:bg-indigo-50">View Pricing</a>
          </div>
        </div>
        <div class="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
          <img class="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg" alt="App screenshot">
        </div>
      </div>
    </div>
  </div> -->

  <div class="pt-28 lg:pt-40 bg-dark" :class="section.cssClass">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="text-center mb-40">
        <h2 class="text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
          {{ section.title }}
        </h2>
        <p class="text-white text-base sm:text-lg mb-6 lg:mb-12 font-light">
          {{ section.description }}
        </p>
        <a href="#pricing"
          class="inline-block bg-primary rounded-7 py-4 px-9 text-lg text-white duration-300 hover:bg-black">
          Buy Now
          <img class="inline-block ml-2" src="/icons/arrow-right.svg" alt="brand-logo" />
        </a>
        <nuxt-link to="/hire-us"
          class="inline-block rounded-7 py-4 ml-2 px-9 text-lg text-white duration-300 bg-secondary hover:bg-black">
          Request Customization
        </nuxt-link>
      </div>
    </div>
    <div>
      <swiper class="swiper" :options="swiperOptionOne">
        <swiper-slide class="slider-full" v-for="(item, index) in section.screenshots" :key="index">
          <img class="w-full h-60 object-cover border border-white p-3 pb-0 border-b-0" :src="item.url" alt="" />
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
  props: ['section', 'product'],
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
