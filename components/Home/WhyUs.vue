<template>
  <!-- Why us   -->
  <section class="relative overflow-hidden">
    <div class="flex flex-col lg:grid lg:grid-cols-16 px-3 lg:px-0">
      <div class="lg:col-start-3 lg:col-end-9 lg:py-124 order-2 lg:order-1 pb-14 lg:pb-0">
        <h1 class="text-4xl md:text-title text-dark-06 font-semibold capitalize tracking-1 mb-8">
          {{ section.info[0].title }}
        </h1>
        <p class="text-body-16 font-light text-dark-06 mb-10">
          {{ section.info[0].description }}
        </p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
          <div v-for="(item, itemIndex) in section.counters" :key="itemIndex"
            class="flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:space-x-3 p-6 rounded-xl overflow-hidden bg-primary-100" :class="item.cssClass">
            <div>
              <span class="inline-block">
                <nuxt-img :src="item.icon.url" alt="" class="max-w-[56px] max-h-[56px]" />
              </span>
            </div>
            <div class="text-center sm:text-left">
              <h2 class="text-body-24 font-medium text-dark-06 mb-2">
                <ICountUp :delay="400" :endVal="item.counter" :options="options" />{{ item.title }}
              </h2>
              <p class="text-body-14 text-dark-42 uppercase whitespace-nowrap overflow-ellipsis">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:col-start-10 lg:col-end-17 order-1 lg:order-2 mb-6 lg:mb-0 h-680 clip-thumb">
        <img v-if="section.info[0].background" :src="section.info[0].background.url" alt="" class="w-full h-full object-cover object-center" />
      </div>
    </div>
    <div class="container mt-8">
      <div class="flex align-start gap-6 flex-wrap lg:flex-nowrap">
        <div v-for="(item, itemIndex) in section.feature" :key="itemIndex"
          class="flex flex-col sm:w-64 flex-grow sm:flex-row items-center justify-center sm:justify-start sm:space-x-3 p-6 rounded-xl overflow-hidden mb-4" :class="item.cssClass">
          <div class="text-center sm:text-left" v-if="item.image">
            <span class="inline-block">
              <nuxt-img :src="item.image.url" alt="" />
            </span>
            <h2 class="text-xl font-medium text-dark-06 mb-2 mt-4">
              {{ item.title }}
            </h2>
            <p class="text-body-14 text-dark-42 leading-normal font-light">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden">
      <div class="bg-pink-f1 w-full h-4">1</div>
      <div class="bg-green-e7 w-full h-4">1</div>
      <div class="bg-yellow-ff w-full h-4">1</div>
      <div class="bg-pink-fe w-full h-4">1</div>
      <div class="bg-pink-f1 w-full h-4">1</div>
      <div class="bg-blue-ce w-full h-4">1</div>
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
