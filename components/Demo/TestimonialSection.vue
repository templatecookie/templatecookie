<template>
  <section
    class="overflow-hidden bg-dark"
    :id="data.sectionId ? data.sectionId : data.id"
  >
    <div class="mx-auto max-w-7xl py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div class="mb-8 text-center">
        <h2 class="text-lg font-semibold text-primary">
          Testimonial
        </h2>
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {{ data.title }}
        </h2>
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          What People Say About Us
        </h2>
        <p class="mt-3 mx-auto max-w-xl text-lg text-gray-200">
          <!-- {{ data.description }} -->
          Don't just listen to our words, see what our valued customers think
          about our product.
        </p>
      </div>
      <swiper
        class="flex"
        :modules="modules"
        :slides-per-view="config.slidesPerView"
        :autoplay="config.autoplay"
        :breakpoints="config.breakpoints"
        :space-between="config.spaceBetween"
        :pagination="config.pagination"
      >
        <swiper-slide
          class="!h-auto"
          v-for="(item, index) in data.testimonials"
          :key="index"
        >
          <div class="flex h-full">
            <div class="flex flex-col bg-white rounded-xl">
              <div class="flex-auto p-4 md:p-6">
                <p class="text-base italic md:text-lg text-gray-800">
                  "{{ item.quote }}"
                </p>
              </div>

              <div class="p-4 bg-gray-100 rounded-b-xl md:px-7">
                <div class="flex items-center">
                  <div
                    class="flex-shrink-0 mr-3"
                    v-if="item.image && item.image.url"
                  >
                    <img
                      class="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                      :src="item.image"
                      :alt="item.name"
                    >
                  </div>

                  <div>
                    <p class="text-sm sm:text-base font-semibold text-gray-800">
                      {{ item.name }}
                    </p>
                    <p class="text-xs text-gray-500">
                      {{ item.role }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="custom-pagination relative flex justify-center pt-16">
        <div
          class="swiper-pagination"
          slot="pagination"
        />
      </div>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default {
  props: ["data"],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination, Autoplay],
      config: {
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      },
    };
  },
};
</script>
<style></style>
