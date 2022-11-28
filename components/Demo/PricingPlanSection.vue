<template>
  <div class="pt-20 lg:pt-124 bg-white pricing-section pb-32" id="pricing">
    <div class="pricing-section-bg" v-if="data.info && data.info[0]" :class="data.info[0].bgClass"></div>
    <div class="container" v-if="data.info && data.info[0]">
      <div class="lg:w-3/5 m-auto text-center mb-10 lg:mb-16">
        <h2 class="text-6xl font-semibold mb-8">{{ data.info[0].title }}</h2>
        <p class="text-lg font-light"> {{ data.info[0].description }} </p>
      </div>
      <div class="flex space-between gap-6 flex-wrap xl:flex-nowrap justify-center">
        <pricing-plan v-for="(item, index) in data.plans" :key="index" :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import PricingPlan from '../PricingPlan.vue'
export default {
  components: { PricingPlan },
  props: ['data']
}
</script>

<style lang="scss">
</style>
