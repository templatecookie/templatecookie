<template>
  <div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 py-32">
        <div class="flex gap-6 flex-wrap">
            <div class="w-40 h-28 flex justify-center items-center bg-primary">blue-0b</div>
            <div class="w-40 h-28 flex justify-center items-center bg-dark">dark-06</div>
            <div class="w-40 h-28 flex justify-center items-center bg-gray-f0">gray-f0</div>
            <div class="w-40 h-28 flex justify-center items-center bg-gray-f0">gray-f0</div>
            <div class="w-40 h-28 flex justify-center items-center bg-gray-f0">gray-f0</div>
            <div class="w-40 h-28 flex justify-center items-center bg-blue-ce">blue-ce</div>
            <div class="w-40 h-28 flex justify-center items-center bg-purple-e3">purple-e3</div>
            <div class="w-40 h-28 flex justify-center items-center bg-green-e7">green-e7</div>
            <div class="w-40 h-28 flex justify-center items-center bg-blue-18">blue-18</div>
        </div>
        <div class="flex gap-6 flex-wrap">
          <div class="w-40 h-28 flex justify-center items-center bg-green-e7"> bg-green-e7 </div>
          <div class="w-40 h-28 flex justify-center items-center bg-blue-ce"> bg-blue-ce </div>
          <div class="w-40 h-28 flex justify-center items-center bg-red-300"> bg-red-300 </div>
          <div class="w-40 h-28 flex justify-center items-center bg-green-300"> bg-green-300 </div>
          <div class="w-40 h-28 flex justify-center items-center bg-blue-300"> bg-blue-300 </div>
          <div class="w-40 h-28 flex justify-center items-center bg-blue-600"> bg-blue-600 </div>
          <div class="w-40 h-28 flex justify-center items-center bg-purple-300"> bg-purple-300 </div>
        </div>

        <div class="bg-green-50 bg-red-50 bg-blue-50 text-green-600 text-blue-600 text-red-600 bg-green-600 bg-blue-600 bg-red-600"></div>
    </div>
  </div>
</template>

<script>
import SITEMAP_PRODUCTS from '~/graphql/allProducts'
export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'robots', content: 'noindex' },
    ],
  },
  async mounted(){
  }
}
</script>

<style>

</style>
