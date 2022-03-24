<template>
  <div>
    <!-- Banner  -->
    <section class="realtive overflow-hidden pb-14 lg:pb-72 pt-156 bg-no-repeat bg-center bg-cover"
      :style="{ backgroundImage: `url(${bannerImg})` }">
      <div class="container">
        <div class="text-center">
          <h1 class="text-4xl md:text-heading-40 text-dark-06 mb-6 max-w-680 mx-auto font-semibold">
            {{ category.name }}
          </h1>
          <p class="text-lg md:text-body-18 text-dark-06 mb-8 max-w-full md:max-w-536 mx-auto font-light">
            {{ category.slug }}
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="container" v-if="products.length">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
          <div v-for="(item, itemIndex) in products" :key="itemIndex" class="flex items-stretch">
            <ProductCard :product="item.attributes" :id="item.id" :large="true" />
          </div>
        </div>
        <div class="flex items-center justify-center py-7">
          <Pagination :data="pagination" v-on:goToPage="handleGoToPage"/>
        </div>
      </div>
      <div class="container py-12" v-else>
        <div class="text-center text-2xl pb-6 text-red-400">
          No products available, come back later!
        </div>
        <nuxt-link :to="{ name: 'products'}" class="flex items-center bg-blue-0b hover:bg-dark-06 transition-all w-auto max-w-232 justify-center text-button-17 text-white rounded-lg overflow-hidden mx-auto">
            Browse Products
            <!-- arrow toggle icon -->
            <span class="inline-block ml-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </span>
          </nuxt-link>
      </div>
    </section>
  </div>
</template>
<script>

import bannerImg from "~/assets/images/all-img/img-five.png";
import ProductCard from "~/components/ProductCard.vue";
import CATEGORY_PRODUCTS from '~/graphql/categoryProducts'

export default {
  components: {
    ProductCard,
  },
  head: {
    title: 'Category Page | Templatecookie',
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
  watchQuery: ["page"],
  async asyncData({ app, params, query, $config }) {
    const client = app.apolloProvider.defaultClient;
    const { slug } = params;
    const page = parseInt(query.page || 1);

    const { data } = await client.query({
      query: CATEGORY_PRODUCTS,
      variables: {
        page,
        pageSize: $config.dataPerPage,
        slug
      }
    })

    const category = data.categories.data[0]?.attributes
    const products = data?.products?.data;
    const pagination = data?.products?.meta?.pagination;
    
    return { category, products, pagination }
  },
  data() {
    return {
      bannerImg,
    };
  },
  methods: {
    handleGoToPage(event){
      this.$router.push({ query: { page: event } })
    },
  }
};
</script>
