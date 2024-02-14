<template>
  <div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6" v-if="products?.length">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-8">
        <div v-for="(item, itemIndex) in displayedProducts" :key="itemIndex" class="flex items-stretch" data-aos="fade-up"
          :data-aos-delay="itemIndex * 100">
          <ProductCard :product="item" :large="false" />
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 py-16" v-else>
      <div class="text-center text-2xl pb-6 text-red-400">
        No products available, try with different filter!
      </div>
    </div>
  </div>
</template>

<script setup>
import ALL_PRODUCTS from "../../graphql/allProducts";
const products = ref(null);

const { data } = await useGraphqlQuery({
  query: ALL_PRODUCTS,
});
products.value = data?._rawValue?.allProducts;
const displayedProducts = computed(() => products.value.slice(0, 6));
</script>


