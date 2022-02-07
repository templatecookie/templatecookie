<template>
  <div>
    <div class="flex flex-col sm:flex-row items-center justify-between p-8 shadow-bs013 bg-gray-f5">
      <!-- text content -->
      <div class="mb-6 sm:mb-0">
        <nuxt-link :to="{ name: 'products-slug', params: {slug: productId}}" class="text-body-18 capitalize text-dark-06">
          {{ product.name }}
        </nuxt-link>
      </div>
      <!-- action  -->
      <div>
        <a :href="product.buy_url" target="_blank" class="flex items-center justify-center text-white hover:text-white text-button capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded px-5 w-full whitespace-nowrap text-center">
          Buy Now
          <span class="inline-block ml-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.75 12H20.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div id="tabs" class="lg:flex">
      <div class="tabs w-full lg:w-40 bg-gray-f5 p-3 flex-shrink-0 sticky top-0 h-900 lg:overflow-y-scroll custom-scroll">
        <p class="text-dark-06 text-opacity-60 uppercase mb-2 text-xs">
          SCREENSHOT
        </p>
        <a href="#" class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="defaultImg = item.attributes.url" v-for="item in product.gallery.data" :key="item.id">
          <img class="w-full h-full object-cover" :src="fixImageUrl(item.attributes.url, true)" alt="" />
        </a>
      </div>
      <div class="content bg-dark-06 p-6 md:p-12 w-full hidden lg:block">
        <div class="tabcontent">
          <div v-if="defaultImg">
            <img class="w-full h-full" :src="fixImageUrl(defaultImg, true)" alt="" />
          </div>
          <div v-else class="flex justify-center items-center">
            <h3 class="text-white">Please click on image to preview </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PRODUCT_SCREENSHOTS from '~/graphql/productScreenshots'

export default {
  layout: "empty",
  name: "Screenshort",
  head: {
    title: 'Product Screenshot Page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
  },

  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;
    const { slug } = params;

    const { data } = await client.query({
      query: PRODUCT_SCREENSHOTS,
      variables: {
        slug
      }
    })
    
    const product = data.product.data.attributes;
    const productId = data.product.data.id;
    return { product, productId }
  },
  data() {
    return {
      defaultImg: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.tab-left-thumb {
  @media (max-width: 1024px) {
      height: 600px;
  }
  border: 2px solid #e6e8ec;

  &.active {
    border: 2px solid #0b63e5;
    @media (max-width: 1024px) {
      border: 2px solid #e6e8ec;
    }
  }
}
</style>
