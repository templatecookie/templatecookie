<template>
  <div
    class="py-20 lg:pt-124"
    :id="data.sectionId ? data.sectionId : data.id"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div
        class="lg:max-w-[536px] m-auto text-center mb-10 lg:mb-16"
        v-if="data.info && data.info[0]"
      >
        <h2
          class="text-dark text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01"
        >
          {{ data.info[0].title }}
        </h2>
        <p class="text-dark text-base sm:text-lg mb-6 lg:mb-9 font-light">
          {{ data.info[0].description }}
        </p>
      </div>
      <div
        class="relative"
        v-if="data.screenshots && data.screenshots.length > 1"
      >
        <swiper
          :navigation="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            v-for="(item, index) in data.screenshots"
            :key="index"
          >
            <img
              class="w-full lg:min-h-[600px] lg:max-h-[600px] h-full rounded-xl"
              :src="item.url"
              alt="Templatecookie Products Screenshots"
            >
          </swiper-slide>
        </swiper>
      </div>
      <div
        class="relative"
        v-if="data.screenshots && data.screenshots.length === 1"
      >
        <img
          class="w-full h-full rounded-xl"
          :src="data.screenshots[0].url"
          alt="Templatecookie Product Screenshots"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

export default {
  props: ["data"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
<style>
.swiper-button-prev,
.swiper-button-next {
  width: 48px !important;
  height: 48px !important;
  background: rgba(0, 0, 0, 0.5);
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 6px;
}
.swiper-button-prev {
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.5 17.1504L6.25 10.9004L12.5 4.65039' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}
.swiper-button-next {
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.5 17.1504L13.75 10.9004L7.5 4.65039' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}
</style>
