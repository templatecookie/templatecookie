<template>
  <div>
    <section class="py-12 lg:pb-12 bg-no-repeat bg-center bg-cover" :style="{ backgroundImage: `url(${bannerImg})` }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="text-left">
          <h1 class="text-4xl md:text-heading-40 textdark mb-6 mx-auto font-semibold">
            {{ product.title }} - Documentation
          </h1>
          <p class="text-lg md:text-lg textdark mb-8 font-light">
            {{ product.description }}
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex py-8 items-start">
          <div class="w-3/12 h-full border-r-[1px] border-gray-100 ">
            <ul class="mb-6" v-for="(items, index) in categories" :key="index">
              <li class="uppercase text-xs text-gray-500 mb-4"> {{ index }} </li>
              <li v-for="(item, index) in items" :key="index">
                <nuxt-link :to="item.path" class="px-4 py-2 inline-block w-full text-gray-700 font-light text-sm"> {{ item.title }} </nuxt-link>
              </li>
            </ul>
          </div>
          <NuxtChild :productName="product.title + ' Documentation'" :categories="categories"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import groupBy from 'lodash.groupby'
import DocCategoryCardItem from '../../components/Docs/DocCategoryCardItem.vue';

export default {
  components: { DocCategoryCardItem },
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
      bannerImg: "/images/img-five.png",
    };
  },
  async asyncData ({ $content, params }) {
    const pages = await $content(`docs/${ params.slug }`, { deep: true })
    .where({slug: {$ne: "index"}})
    .sortBy('position', 'asc')
    .only(['title', 'path', 'description', 'category',])
    .fetch()

    const categories = groupBy(pages, 'category')

    let productData = await $content(`docs/${ params.slug }`, { deep: true })
      .where({slug: {$eq: 'index'}})
      .only(['title', 'path', 'description'])
      .fetch()
    const product = productData[0]

    return {
      pages,
      product,
      categories,
    }
  },
  methods: {
    redirectToDocs(){
      const keys = Object.keys(this.categories);
      const url = this.categories[keys[0]][0].path;

      this.$router.push(url)
    }
  },
  created(){
    // this.redirectToDocs();
  },
  
  watch:{
    $route (to, from){
      // this.redirectToDocs();
    }
} 
}
</script>

<style scoped>
.nuxt-link-exact-active {
  background-color: rgb(239, 246, 255);
}
</style>
