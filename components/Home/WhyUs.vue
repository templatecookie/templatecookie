<template>
  <section class="overflow-hidden">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="flex px-3 lg:px-0">
        <div class="w-1/2 lg:py-124 order-2 lg:order-1 pb-14 lg:pb-0 pr-8">
          <h1 class="text-4xl md:text-5xl textdark font-semibold capitalize tracking-1 mb-8">
            {{ section.info[0].title }}
          </h1>
          <p class="text-base font-light textdark mb-10">
            {{ section.info[0].description }}
          </p>
          <div class="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
            <div v-for="(item, index) in section.counters" :key="index" data-aos="zoom-in" :data-aos-delay="index * 100"
              class="flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:space-x-3 p-6 rounded-xl overflow-hidden bg-primary-100" :class="item.cssClass">
              <div>
                <span class="inline-block">
                  <nuxt-img :src="item.icon.url" alt="" class="max-w-[56px] max-h-[56px]" />
                </span>
              </div>
              <div class="text-center sm:text-left">
                <h2 class="text-2xl font-medium textdark mb-2">
                  <ICountUp :delay="400" :endVal="item.counter" :options="options" />{{ item.title }}
                </h2>
                <p class="text-sm text-dark-gray uppercase whitespace-nowrap overflow-ellipsis">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 order-1 lg:order-2 mb-6 lg:mb-0 h-680 clip-thumb" data-aos="slide-left">
          <img v-if="section.info[0].background" :src="section.info[0].background.url" alt="" class="w-full h-full object-cover object-center rounded-lg" />
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 mt-8 pb-14">
      <div class="flex align-start gap-6">
        <div v-for="(item, index) in section.feature" :key="index" data-aos="fade-up" :data-aos-delay="index * 100"
          class="flex flex-col sm:w-64 flex-grow sm:flex-row items-center justify-center sm:justify-start sm:space-x-3 p-6 rounded-xl overflow-hidden mb-4" :class="item.cssClass">
          <div class="text-center sm:text-left" v-if="item.image">
            <span class="inline-block">
              <nuxt-img :src="item.image.url" alt="" />
            </span>
            <h2 class="text-xl font-medium textdark mb-2 mt-4">
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
import ICountUp from "vue-countup-v2";

export default {
  props: ['data'],
  components: { ICountUp },
  data() {
    return {
      options: {
        useEasing: true,
        useGrouping: true,
      },
    }
  },
  computed: {
    section(){
      return this.data[0];
    }
  }
}
</script>

<style>

</style>
