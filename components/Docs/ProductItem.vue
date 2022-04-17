<template>
  <div class="relative overflow-hidden p-6 border border-gray-e6 rounded-2xl product-card w-full product-card--sm">
    <nuxt-link :to="product.dir" class="product-card__img relative inline-block overflow-hidden rounded-lg  w-full product-card__img-wrapper mb-4">
      <img :src="resolveImage()" :alt="product.title" class="w-full h-full object-cover overflow-hidden">
    </nuxt-link>
    <div class="product-card__text">
      <h2 class="text-dark-06 mb-3 font-normal text-body-18">
        {{ product.title }}
      </h2>
      <p class="text-dark-42 font-light mb-0 text-body-14/20">
        {{ product.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    resolveImage() {
      const path = this.product.dir.replace('/docs/', '');
      try {
        return `/docs/${path}/preview.png`
      } catch (error) {
        return null;
      }
    }
  }
}
</script>

<style>

</style>
