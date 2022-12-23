<template>
  <div class="py-20 lg:pt-124" id="top-features">
    <div class="container">
      <div class="mb-72 text-center" v-if="data.info && data.info[0]">
        <h2 class="text-4xl md:text-5xl textdark font-semibold capitalize tracking-1 mb-8 max-w-lg mx-auto">
          {{ data.info[0].title }}
        </h2>
        <p class="text-base font-light max-w-lg mx-auto textdark">
          {{ data.info[0].description }}
        </p>
      </div>
      <div class="grid grid-cols-12 gap-6">
        <div v-for="(item, itemIndex) in data.features" :key="itemIndex"
          class="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6">
          <div class="bg-white rounded-lg p-8 business-card duration-300 hover:shadow-bs8">
            <div v-if="item.image && item.image.url" class="icon w-76 h-76 bg-gray-f0 rounded-lg flex items-center justify-center mb-7 duration-300 ">
              <nuxt-img :src="item.image.url" class="w-7 h-7 object-cover" alt="" />
            </div>
            <div>
              <h3 class="textdark text-xl mb-3">{{ item.title }}</h3>
              <p class="text-dark-gray text-base font-light">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
} 
</script>

<style>

</style>
