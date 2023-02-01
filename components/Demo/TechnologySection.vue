<template>
  <div class="bg-white" :id="data.sectionId ? data.sectionId : data.id">
    <div class="mx-auto max-w-7xl py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div>
        <div class="mb-14 text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {{ data.title }}
            <!-- Technologies We Used -->
          </h2>
          <p class="mt-3 mx-auto max-w-3xl text-lg text-gray-500"> 
            {{ data.description }}
            <!-- We used modern technologies to make the {{product.shortName}} product. We ensured that the product is high quality and meet the deamands of the users day to day needs. -->
          </p>
        </div>
        <div class="mt-8 grid grid-cols-3 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-4">
          <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8" v-for="(item, index) in data.technologies" :key="index">
            <div class="sr-only">{{ item.name }}</div>
            <img :src="item.icon.url" :alt="item.name" data-aos="fade-up" :data-aos-delay="index * 100" class="max-h-12 aos-init aos-animate">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'product']
}
</script>

<style>

</style>
