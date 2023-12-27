<template>
  <section class="space-y-8 pt-16">
    <div class="text-center space-y-4">
      <h4
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-10"
      >
        Integrated Most Popular Payment Gateways
      </h4>
    </div>
    <div
      v-if="product.logoCloudsImages && product.logoCloudsTitle"
      class="max-w-[1200px] mx-auto"
    >
      <div
        class="flex justify-center bg-white py-2 px-4 rounded flex-wrap gap-10"
      >
        <div
          class="border border-gray-100 rounded-md p-4 inline-flex items-center justify-center"
          v-for="(item, index) in product.logoCloudsImages"
          :key="item.url"
          data-aos="fade-in"
          data-aos-mirror="true"
          :data-aos-duration="1000 * index"
          data-aos-once="false"
        >
          <NuxtImg class="h-12" :src="item.url" :alt="item.alt" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  product: Object,
});
</script>

<style>
</style>
