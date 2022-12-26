<template>
<section class="py-16" :class="data.cssClass ? data.cssClass : 'bg-gray-f0'">
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <!-- Project services -->
    <div class="flex flex-wrap">
      <div class="w-3/12 fun-column border border-collapse border-gray-f0 table-cell" v-for="(item, index) in data.items" :key="index">
        <div class="flex flex-col py-8 items-center fun-wrap ">
          <div class="w-8 h-8 mb-4 text-primary">
            <nuxt-img :src="item.icon.url" alt="" />
          </div>
          <h3 class="textdark text-base"> {{ item.text }} </h3>
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
