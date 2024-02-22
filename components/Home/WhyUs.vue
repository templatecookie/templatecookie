<template>
  <section class="overflow-hidden py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex lg:flex-nowrap flex-wrap px-3 lg:px-0">
        <div class="lg:w-1/2 w-full lg:py-[124px] order-2 lg:order-1 pb-14 lg:pb-0 lg:pr-8">
          <h1 class="text-4xl md:text-5xl text-dark font-semibold capitalize tracking-1 mb-8">
            {{ section.info[0].title }}
          </h1>
          <p class="text-base font-light text-dark mb-10">
            {{ section.info[0].description }}
          </p>
          <div class="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
            <div v-for="(item, index) in section.counters" :key="index" data-aos="zoom-in" :data-aos-delay="index * 100"
              class="aos flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:space-x-3 p-6 rounded-xl overflow-hidden bg-primary-100"
              :class="item.cssClass">
              <div>
                <span class="inline-block">
                  <nuxt-img :src="item.icon.url" alt="" class="max-w-[56px] max-h-[56px]" />
                </span>
              </div>
              <div class="text-center sm:text-left">
                <h2 class="text-2xl font-medium text-dark mb-2">
                  {{ item.counter }}{{ item.title }}
                </h2>
                <p class="text-sm text-dark-gray uppercase whitespace-nowrap overflow-ellipsis">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 w-full order-1 lg:order-2 mb-6 lg:mb-0 h-80 lg:h-[680px] clip-thumb" data-aos="slide-left">
          <NuxtImg v-if="section.info[0].background" :src="section.info[0].background.url" alt=""
            class="w-full h-full object-cover object-center rounded-lg" />
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 mt-8">
      <div class="flex flex-wrap align-start gap-6">
        <div v-for="(item, index) in section.feature" :key="index" data-aos="fade-up" :data-aos-delay="index * 100"
          class="flex flex-col sm:w-64 flex-grow sm:flex-row items-center justify-center sm:justify-start sm:space-x-3 p-6 rounded-xl overflow-hidden mb-4"
          :class="item.cssClass">
          <div class="text-center sm:text-left" v-if="item.image">
            <span class="inline-block">
              <nuxt-img :src="item.image.url" alt="" />
            </span>
            <h2 class="text-xl font-medium text-dark mb-2 mt-4">
              {{ item.title }}
            </h2>
            <p class="text-sm text-dark-gray leading-normal font-light">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      options: {
        useEasing: true,
        useGrouping: true,
      },
    };
  },
  computed: {
    section() {
      return this.data[0];
    },
  },
};
</script>

<style></style>
