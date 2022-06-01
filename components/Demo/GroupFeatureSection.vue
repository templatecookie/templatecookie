<template>
<section class="bg-gray-f5 py-16" :class="data.cssClass">
  <div class="container">
    <!-- Project services -->
    <div class="flex flex-wrap">
      <div class="w-3/12 fun-column" v-for="(item, index) in data.items" :key="index">
        <div class="flex flex-col py-8 items-center fun-wrap border-r border-b border-gray-e6 ">
          <div class="w-8 h-8 mb-4 text-blue-0b">
            <img :src="item.icon.url" alt="">
          </div>
          <h3 class="text-dark-06 text-base"> {{ item.text }} </h3>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style>

</style>
