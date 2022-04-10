<template>
  <div>
    <section class="realtive py-12 lg:py-20 bg-no-repeat bg-center bg-cover"
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
  head() {
    const title = 'Templatecookie Product Documentation';
    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, expedita illo! Velit delectus totam quaerat voluptatem porro commodi veniam facilis?';
    return {
      title: title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description }
      ]
    }
  },
  data() {
    return {
      bannerImg,
    };
  },
  async asyncData({ $content }) {
    const products = await $content("docs", {deep: true})
      .where({slug: {$eq: "index"}})
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
