<template>
  <div>
    <!-- Banner  -->
    <section class="realtive overflow-hidden pb-14 lg:pb-72 pt-156 bg-no-repeat bg-center bg-cover"
      :style="{ backgroundImage: `url(${bannerImg})` }">
      <div class="container">
        <!-- banner content  -->
        <div class="text-center">
          <h1 class="text-4xl md:text-heading-40 text-dark-06 mb-6 max-w-680 mx-auto font-semibold">
            {{ productListing.info.title }}
          </h1>
          <p class="text-lg md:text-body-18 text-dark-06 mb-8 max-w-full md:max-w-536 mx-auto font-light">
            {{ productListing.info.description }}
          </p>

          <!-- Templates Tabs Menu  -->
          <div class="grid grid-cols-2 lg:grid-cols-3 items-center bg-white relative rounded px-6">
            <!-- Tab menu  -->
            <div class="col-span-full lg:col-span-2">
              <ul class="flex items-center justify-center lg:justify-start feature relative">
                <li v-for="(item, index) in productListing.technologies.data" :key="index" @click="activeTab = item.attributes.slug">
                  <div class="flex flex-col items-center feature-box group" :class="{ 'is-active': activeTab === item.attributes.slug }" @click="activeTab = 'bootstrapTab'">
                    <!-- icon  -->
                    <span class="feature-box__icon inline-block mb-3">
                      <img :src="fixImageUrl(item.attributes.icon)" alt="version" />
                    </span>
                    <h6 class="feature-box__title text-body-16 capitalize text-gray-61 text-gray-6a group-hover:text-dark-06">
                      {{ item.attributes.name }}
                    </h6>
                  </div>
                </li>
              </ul>
            </div>
            <!-- Sort List  -->
            <div class="col-span-full lg:col-span-1 py-4 lg:py-0">
              <!-- dropdown wrapper  -->
              <div class="flex items-center justify-center lg:justify-end space-x-3 sort-filter">
                <h5 class="whitespace-nowrap text-body-14 leading-5">
                  Category :
                </h5>
                <div class="w-200">
                  <v-select label="name" :clearable="false" placeholder="Select Sort" :options="categoryList" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Item content -->
    <section>
      <div class="container">
        <!-- filter content  -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
          <div v-for="(item, itemIndex) in allProducts" :key="itemIndex" class="flex items-stretch">
            <ProductCard :product="item.attributes" :id="item.id" :large="true" />
          </div>
        </div>
        <!-- pagination   -->
        <div class="flex items-center justify-center py-7">
          <Pagination :data="pagination" v-on:goToPage="handleGoToPage"/>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import bannerImg from "~/assets/images/all-img/img-five.png";
import Pagination from "~/components/Pagination.vue";
import ProductCard from "~/components/ProductCard.vue";
import PRODUCT_LISTING from '../../graphql/productListing'
import ALL_PRODUCTS from '../../graphql/allProducts'

export default {
  components: {
    Pagination,
    ProductCard,
  },
  head: {
    title: 'All Products Listing',
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
  async asyncData({ app, query }) {
    const client = app.apolloProvider.defaultClient;
    const page = parseInt(query.page || 1);

    const { data } = await client.query({
      query: PRODUCT_LISTING,
    })

    let products = await client.query({
      query: ALL_PRODUCTS,
      variables: {
        page,
        pageSize: 2,
      }
    })
    
    const allProducts = products.data.products.data;
    const productListing = data.productListing.data?.attributes;
    const pagination = products.data.products?.meta?.pagination;
    
    return { productListing, allProducts, pagination }
  },
  data() {
    return {
      tabs: [],
      activeTab: "all",
      bannerImg,
      categoryList: ["All Categories",],
    };
  },
  methods: {
    handleGoToPage(event){
      this.$router.push({ query: { page: event } })
    },
  },
  computed: {
    categories() {
      return this.$store.getters.getGlobalData;
    }
  },
  watch: {
    categories(newValue) {
      // console.log(newValue);
    }
  },
  mounted() {
  },
};
</script>
