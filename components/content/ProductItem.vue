<template>
  <div
    class="bg-white relative overflow-hidden p-6 border border-gray-f0 rounded-2xl product-card w-full product-card--sm"
  >
    <nuxt-link
      :to="product._path"
      :key="product._path"
      class="product-card__img relative inline-block overflow-hidden rounded-lg w-full product-card__img-wrapper mb-4"
    >
      <img
        :src="resolveImage()"
        :alt="product.title"
        class="w-full h-full mb-4 object-cover overflow-hidden"
      >
      <div class="product-card__text">
        <h2 class="text-dark mb-3 font-normal text-lg">
          {{ product.title }}
        </h2>
        <p class="text-dark-gray font-light mb-0 text-sm/20">
          {{ product.description }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    resolveImage() {
      try {
        return `${this.product._path}/preview.png`;
      } catch (error) {
        return null;
      }
    },
  },
};
</script>

<style></style>
