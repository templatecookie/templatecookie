<template>
  <div class="pt-20 lg:pt-124" id="top-features">
    <div class="container">
      <div class="flex justify-center items-center" v-if="data && data.info">
        <div class="max-w-680 mb-4 md:mb-0 text-center">
          <h2 class="text-dark-06 text-body-32px md:text-4xl xl:text-title font-semibold tracking-01">
            {{ data.info.title }}
          </h2>
          <p class="text-dark-06 mt-4 text-lg sm:text-xl font-light">
            {{ data.info.description }}
          </p>
        </div>
        <div class="col-span-5">
          <!-- <p class="text-dark-06 text-lg sm:text-xl font-light">
            {{ data.info.description }}
          </p> -->
        </div>
      </div>
      <div class="grid grid-cols-12 gap-6">
        <div v-for="(item, itemIndex) in data.features" :key="itemIndex"
          class="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6">
          <div class="bg-white rounded-lg p-8 business-card duration-300 hover:shadow-bs8">
            <div class="icon w-76 h-76 bg-gray-f0 rounded-lg flex items-center justify-center mb-7 duration-300 ">
              <img :src="fixImageUrl(item.icon)" class="w-full h-full object-cover" alt="" />
            </div>
            <div>
              <h3 class="text-dark-06 text-xl mb-3">{{ item.title }}</h3>
              <p class="text-dark-42 text-base font-light">{{ item.description }}</p>
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
