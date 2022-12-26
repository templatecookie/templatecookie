<template>
  <div>
    <!-- Banner  -->
    <section class="pb-14 lg:pb-72 pt-14 lg:pt-32 bg-no-repeat bg-center bg-cover" :style="{ backgroundImage: `url(${bannerImg})` }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="text-center">
          <h1 class="text-4xl md:text-heading-40 textdark mb-6 max-w-680 mx-auto font-semibold">
            <!-- {{ page.info.title }} -->
            Browse our Products
          </h1>
          <p class="text-lg md:text-lg textdark mb-8 max-w-full md:max-w-536 mx-auto font-light">
            Browse our latest products for your next big idea, and see what we have to offer.
          </p>

          <div class="grid grid-cols-2 lg:grid-cols-3 items-center bg-white relative rounded px-6" v-if="1 === 3">
            <!-- <div class="col-span-full lg:col-span-2">
              <ul class="flex items-center justify-center lg:justify-start feature relative">
                <li @click="setTechnology('')">
                  <div class="flex flex-col items-center feature-box group" :class="activeTechnology == '' ? 'is-active' : ''">
                    <span class="feature-box__icon inline-block mb-3">
                      <img src="/icons/all.svg" alt="version" />
                    </span>
                    <h6 class="feature-box__title text-base capitalize text-gray-61 text-dark-gray group-hover:textdark">
                      All
                    </h6>
                  </div>
                </li>
                <li v-for="(item, index) in technologies" :key="index" @click="setTechnology(item.attributes.slug)">
                  <div class="flex flex-col items-center feature-box group" :class="activeTechnology == item.attributes.slug ? 'is-active' : ''">
                    <span class="feature-box__icon inline-block mb-3">
                      <nuxt-img :src="fixImageUrl(item.attributes.icon)" alt="version" />
                    </span>
                    <h6 class="feature-box__title text-base capitalize text-gray-61 text-dark-gray group-hover:textdark">
                      {{ item.attributes.name }}
                    </h6>
                  </div>
                </li>
              </ul>
            </div> -->
            <div class="col-span-full lg:col-span-1 py-4 lg:py-0">
              <div class="flex items-center justify-center lg:justify-end space-x-3 sort-filter">
                <h5 class="whitespace-nowrap text-sm leading-5">
                  Category :
                </h5>
                <div class="w-200">
                  <v-select label="name" :clearable="false" placeholder="Select Category" v-model="selectedCategory" :options="categoryList" @input="setCategory" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Item content -->
    <section>
      <div class="mx-auto max-w-7xl px-4 sm:px-6" v-if="products.length">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
          <div v-for="(item, itemIndex) in products" :key="itemIndex" class="flex items-stretch">
            <ProductCard :product="item" :large="true" />
          </div>
        </div>
        <!-- pagination   -->
        <div class="flex items-center justify-center py-7">
          <!-- <Pagination :data="pagination" v-on:goToPage="handleGoToPage"/> -->
        </div>
      </div>

      <div class="container py-16" v-else>
        <div class="text-center text-2xl pb-6 text-red-400">
          No products available, try with different filter!
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import bannerImg from "../../static/images/img-five.png";
import Pagination from "~/components/Pagination.vue";
import ProductCard from "~/components/ProductCard.vue";
// import PRODUCT_LISTING from '../../graphql/productListing'
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
  async asyncData({ app, query, $config }) {
    const client = app.apolloProvider.defaultClient;

//     const { data } = await client.query({
//       query: PRODUCT_LISTING,
//     })

    let productData = await client.query({
      query: ALL_PRODUCTS,
      // variables: {
      //   page: parseInt(query.page || 1),
      //   pageSize: $config.dataPerPage,
      //   technology: query.technology || "",
      //   category: query.category || "",
      // }
    })

    const products = productData.data.allProducts;
    const pagination = productData.data.allProducts;
    const categories = productData.data.allCategories;
//     const page = data.productListing.data?.attributes;
//     const technologies = data.technologies.data;

//     return { page, products, pagination, technologies, categories }
    return { products, pagination, categories }
  },
  data() {
    return {
      bannerImg,
      selectedCategory: {},
      tabs: [],
      activeTechnology: "",
      categoryList: [
        {
          name: "All Categories",
          slug: "",
        }
      ],
    };
  },
  methods: {
//     handleGoToPage(event){
//       this.$router.push({ query: { page: event } })
//     },
//     setTechnology(technology) {
//       this.activeTechnology = technology;

//       const query = {
//         ...this.$route.query,
//         technology: technology,
//       }

//       this.$router.push({ query: query })
//     },
    setCategory(category) {
      const query = {
        ...this.$route.query,
        category: category.slug,
      }

      this.$router.push({ query: query })
    },
    setQueries(){
      this.categories.forEach(element => {
        this.categoryList.push(element);
      });

      this.activeTechnology = this.$route.query.technology || "";

      let category = this.categories.find(element  => element.slug === this.$route.query.category);
      this.selectedCategory = category ? category : this.categoryList[0];
    },
    // async filterProducts(){
    //   const client = this.$nuxt.$apolloProvider.defaultClient;
    //   const query = this.$route.query

    //   const { data } = await client.query({
    //     query: ALL_PRODUCTS,
    //     variables: {
    //       page: parseInt(query.page || 1),
    //       pageSize: this.$config.dataPerPage,
    //       technology: query.technology || "",
    //       category: query.category || "",
    //     }
    //   })

    //   this.products = data.products.data;
    //   this.pagination = data.products?.meta?.pagination;
    // }
  },
  // watch: {
  //   '$route.query': {
  //     handler(query) {
  //       this.filterProducts();
  //     },
  //     // deep: true,
  //     // immediate: true
  //   },
  // },
  mounted() {
    this.setQueries();
  },
};
</script>
