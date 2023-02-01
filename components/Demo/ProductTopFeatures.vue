<template>
  <div class="bg-gray-100" :id="data.sectionId ? data.sectionId : data.id">
    <div class="mx-auto max-w-7xl py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div class="mb-72 text-center" v-if="data.info && data.info[0]">
        <h2 class="text-4xl md:text-5xl textdark font-semibold capitalize tracking-1 mb-8 ">
          {{ data.info[0].title }}
        </h2>
        <p class="text-lg font-light max-w-lg mx-auto text-dark">
          {{ data.info[0].description }}
        </p>
      </div>
      <div class="grid grid-cols-12 gap-8">
        <div v-for="(item, itemIndex) in data.features" :key="itemIndex"
          class="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6">
          <div class="bg-white rounded-md p-8 business-card duration-300 shadow-sm">
            <div v-if="item.image && item.image.url" class="inline-flex justify-center items-center w-16 h-16 mb-7 rounded-lg border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
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
