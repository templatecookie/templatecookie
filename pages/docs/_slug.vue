<template>
  <div>
    <section class="realtive pb-10 lg:pb-12 pt-32 bg-no-repeat bg-center bg-cover"
      :style="{ backgroundImage: `url(${bannerImg})` }">
      <div class="container">
        <div class="text-left">
          <h1 class="text-4xl md:text-heading-40 text-dark-06 mb-6 mx-auto font-semibold">
            {{ product.title }} - Documentation
          </h1>
          <p class="text-lg md:text-body-18 text-dark-06 mb-8 font-light">
            {{ product.description }}
          </p>
        </div>
      </div>
    </section>
    <code>
      {{ pages }}
    </code>
    <section>
      <div class="container">
        <div class="flex py-8">
          <ul class="w-3/12 h-full border-r-[1px] border-gray-100 mb-4">
            <li class="uppercase text-xs text-gray-500 mb-4"> getting started </li>
            <li v-for="(item, index) in pages" :key="index">
              <nuxt-link :to="item.path" class="px-4 py-2 inline-block w-full text-gray-700 font-light text-sm"> {{ item.title }} </nuxt-link>
            </li>
          </ul>
          <div class="w-9/12 h-full">
            <NuxtChild :productName="product.title + ' Documentation'"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import bannerImg from "~/assets/images/all-img/img-five.png";
export default {
  layout: 'documentation',
  head() {
    const title = this.product.title + ' Documentation';
    const description = this.product.description;
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
  async asyncData ({ $content, params }) {
    const pages = await $content(`docs/${ params.slug }`, { deep: true })
    .sortBy('category', 'asc')
    .sortBy('index', 'asc')
    .sortBy('position', 'asc')
    // .only(['title', 'path', 'slug', 'description', 'toc', 'dir', 'position'])
    .fetch()
    console.log(pages);

    let productData = await $content(`docs/${ params.slug }`, { deep: true })
      .where({index: {$eq: true}})
      .only(['title', 'path', 'slug', 'description','dir'])
      .fetch()
    const product = productData[0]

    return {
      pages,
      product
    }
  }
}
</script>

<style>
.nuxt-link-exact-active {
  background-color: rgb(239, 246, 255);
}
</style>
