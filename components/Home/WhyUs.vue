p<template>
  <!-- Why us   -->
  <section class="relative overflow-hidden">
    <!-- content wrapper   -->
    <div class="flex flex-col lg:grid lg:grid-cols-16 px-3 lg:px-0">
      <div class="lg:col-start-3 lg:col-end-9 lg:py-124 order-2 lg:order-1 pb-14 lg:pb-0">
        <h1 class="text-4xl md:text-title text-dark-06 font-semibold capitalize tracking-1 mb-8">
          {{ data.info.title }}
        </h1>
        <p class="text-body-16 font-light text-dark-06 mb-10">
          {{ data.info.description }}
        </p>
        <!-- features card  -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
          <div v-for="(item, itemIndex) in data.counterNumbers" :key="itemIndex"
            class="flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:space-x-3 p-6 rounded-xl overflow-hidden" :class="cardTheme(item.theme)">
            <div class="text-center sm:text-left">

              <span class="inline-block">
                <img :src="fixImageUrl(item.icon)" alt="" />
              </span>
              <h2 class="text-xl font-medium text-dark-06 mb-2 mt-4">
                <!-- <ICountUp :delay="item.delay" :endVal="item.title" :options="options" /> -->
                {{ item.title }}
              </h2>
              <p class="text-body-14 text-dark-42 leading-normal font-light">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:col-start-10 lg:col-end-17 order-1 lg:order-2 mb-6 lg:mb-0 h-680 clip-thumb">
        <img v-if="data.info.background.data" :src="fixImageUrl(data.info.background)" alt="" class="w-full h-full object-cover object-left" />
      </div>
    </div>
  </section>
</template>

<script>
import ICountUp from "vue-countup-v2";

export default {
  props: ['data'],
  components: { ICountUp },
  methods: {
    cardTheme(theme){
      switch (theme) {
        case "purple":
          return "bg-pink-f1";
          break;
        case "green":
          return "bg-green-e7";
          break;
        case "yellow":
          return "bg-yellow-ff";
          break;
        case "orange":   
          return "bg-pink-fe";
          break;
        default:
          return "bg-pink-f1";
          break;
      }
    },
  },
  data() {
    return {
      options: {
        useEasing: true,
        useGrouping: true,
      },
    }
  }
}
</script>

<style>

</style>
