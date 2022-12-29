<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <div class="ex-small:grid grid-cols-12">
      <div v-for="(item, indexItem) in data.fact" :key="indexItem"
        class="col-span-6 lg:col-span-3 fun-column duration-300 hover:shadow-bs8">
        <div class="text-center border-r border-b border-gray-f0 px-1 py-7 md:px-8 md:py-10 fun-wrap">
          <h3 class="text-primary text-3xl lg:text-heading-40 tracking-01 mb-2">
          <ICountUp :delay="400" :endVal="item.counter"  v-if="item.counter"/>{{ item.title }}
          </h3> 
          <p class="text-dark-gray text-sm sm:text-base">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
export default {
  props: ['data'],
  components: { ICountUp },
  options: {
    useEasing: true,
    useGrouping: true,
  },
}
</script>

<style>

</style>
