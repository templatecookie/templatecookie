<template>
  <div>
    <div class="container py-32">
        <div class="flex gap-6 flex-wrap">
            <div class="w-40 h-28 flex justify-center items-center bg-blue-0b">blue-0b</div>
            <div class="w-40 h-28 flex justify-center items-center bg-blue-09">blue-09</div>
            <div class="w-40 h-28 flex justify-center items-center bg-pink-75">pink-75</div>
            <div class="w-40 h-28 flex justify-center items-center bg-dark-06">dark-06</div>
            <div class="w-40 h-28 flex justify-center items-center bg-dark-42">dark-42</div>
            <div class="w-40 h-28 flex justify-center items-center bg-gray-f5">gray-f5</div>
            <div class="w-40 h-28 flex justify-center items-center bg-gray-b4">gray-b4</div>
            <div class="w-40 h-28 flex justify-center items-center bg-gray-83">gray-83</div>
            <div class="w-40 h-28 flex justify-center items-center bg-gray-24">gray-24</div>
            <div class="w-40 h-28 flex justify-center items-center bg-gray-e6">gray-e6</div>
            <div class="w-40 h-28 flex justify-center items-center bg-gray-f0">gray-f0</div>
            <div class="w-40 h-28 flex justify-center items-center bg-blue-ce">blue-ce</div>
            <div class="w-40 h-28 flex justify-center items-center bg-pink-fc">pink-fc</div>
            <div class="w-40 h-28 flex justify-center items-center bg-pink-f2">pink-f2</div>
            <div class="w-40 h-28 flex justify-center items-center bg-purple-e3">purple-e3</div>
            <div class="w-40 h-28 flex justify-center items-center bg-green-of">green-of</div>
            <div class="w-40 h-28 flex justify-center items-center bg-green-cf">green-cf</div>
            <div class="w-40 h-28 flex justify-center items-center bg-orange-ff">orange-ff</div>
            <div class="w-40 h-28 flex justify-center items-center bg-pink-f1">pink-f1</div>
            <div class="w-40 h-28 flex justify-center items-center bg-green-e7">green-e7</div>
            <div class="w-40 h-28 flex justify-center items-center bg-yellow-ff">yellow-ff</div>
            <div class="w-40 h-28 flex justify-center items-center bg-pink-fe">pink-fe</div>
            <div class="w-40 h-28 flex justify-center items-center bg-gray-cd">gray-cd</div>
            <div class="w-40 h-28 flex justify-center items-center bg-blue-18">blue-18</div>
        </div>
    </div>
  </div>
</template>

<script>
import SITEMAP_PRODUCTS from '~/graphql/allProducts'
// import getSitemapProducts from '../util/getSitemapProducts';

export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'robots', content: 'noindex' },
    ],
  },
  async mounted(){
    // // const client = this.$apollo.getClient();
    // const client = this.$apollo.vm.$apolloProvider.defaultClient;
    // // const data = this.$apollo.getClient().readQuery({
    // //   query: SITEMAP_PRODUCTS,
    // // });

    // // const { data } = client.query({
    // //   query: SITEMAP_PRODUCTS,
    // // })

    // const data = await this.$apollo.query({
    //     query: SITEMAP_PRODUCTS,
    // }).then(({ data }) => {
    //   return data.allProducts.map(({ slug }) => ({
    //     url: `/demo/${slug}`,
    //     changefreq: 'daily',
    //     priority: 1,
    //   }));
    // })

    // console.log(await getSitemapProducts());
  }
}
</script>

<style>

</style>
