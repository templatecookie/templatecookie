<template>
  <div>
    <section class="realtive pb-14 lg:pb-72 pt-156 bg-no-repeat bg-center bg-cover"
      :style="{ backgroundImage: `url(${bannerImg})` }">
      <div class="container">
        <div class="text-center">
          <h1 class="text-4xl md:text-heading-40 text-dark-06 mb-6 max-w-680 mx-auto font-semibold">
            Templatecookie Docs
          </h1>
          <p class="text-lg md:text-body-18 text-dark-06 mb-8 max-w-full md:max-w-536 mx-auto font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, expedita illo! Velit delectus totam quaerat voluptatem porro commodi veniam facilis?
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="container py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div v-for="(item, index) in products" :key="index" class="flex items-stretch">
            <ProductItem :product="item"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductItem from '../../components/Docs/ProductItem.vue'
import bannerImg from "~/assets/images/all-img/img-five.png";

export default {
  layout: 'documentation',
  data() {
    return {
      bannerImg,
    };
  },
  async asyncData({ $content }) {
      const products = await $content("docs", {deep: true})
        .where({index: {$eq: true}})
        .sortBy("position", "asc")
        .fetch();
      return {
        products
      };
    },
    components: {
      ProductItem
    }
}
</script>

<style>

</style>
