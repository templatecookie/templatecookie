<template>
  <section class="latest" v-if="homepage && homepage?.latestProduct" id="products">
    <div class="mx-auto max-w-7xl py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div class="mb-[72px] text-center">
        <h2 class="text-4xl md:text-5xl text-dark font-semibold capitalize tracking-1 mb-8">
          {{ homepage.latestProduct[0].title }}
        </h2>
        <p class="text-lg font-light max-w-lg mx-auto text-dark" v-if="homepage?.latestProduct[0].description">
          {{ homepage.latestProduct[0].description }}
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div v-for="(item, index) in latestProducts" :key="index" class="flex items-stretch aos" data-aos="fade-up"
          :data-aos-delay="index * 100">
          <ProductCard :product="item" :large="false" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  homepage: {
    type: Object,
    required: true
  },
  latestProducts: {
    type: Object,
    required: true
  }
})
</script>
