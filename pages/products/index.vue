<template>
  <div>
    <!-- Banner  -->
    <section class="pb-14 lg:pb-72 pt-14 lg:pt-32 bg-no-repeat bg-center bg-cover" :style="{ backgroundImage: `url(${bannerImg})` }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="text-center">
          <h1 class="text-4xl md:text-heading-40 textdark mb-6 max-w-680 mx-auto font-semibold">
            Browse our Products
          </h1>
          <p class="text-lg md:text-lg textdark mb-8 max-w-full md:max-w-536 mx-auto font-light">
            Browse our latest products for your next big idea, and see what we have to offer.
          </p>

          <div class="grid grid-cols-2 lg:grid-cols-3 items-center bg-white relative rounded px-6" v-if="1 === 3">
            <div class="col-span-full lg:col-span-1 py-4 lg:py-0">
              <div class="flex items-center justify-center lg:justify-end space-x-3 sort-filter">
                <h5 class="whitespace-nowrap text-sm leading-5">
                  Category :
                </h5>
                <div class="w-48">
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
        </div>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 py-16" v-else>
        <div class="text-center text-2xl pb-6 text-red-400">
          No products available, try with different filter!
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Pagination from "~/components/Pagination.vue";
import ProductCard from "~/components/ProductCard.vue";
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
        content: 'Browse Templatecookie all products, Templatecookie has HTML, Figma & Laravel products.'
      }
    ],
  },
  async asyncData({ app, query, $config, $sentry }) {
    try {
      const client = app.apolloProvider.defaultClient;

      let productData = await client.query({
        query: ALL_PRODUCTS,
      })

      const products = productData.data.allProducts;
      const pagination = productData.data.allProducts;
      const categories = productData.data.allCategories;
      return { products, pagination, categories }
    } catch (error) {
      $sentry.captureException(error)
    }
  },
  data() {
    return {
      bannerImg: "/images/img-five.png",
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
  },
  mounted() {
    this.setQueries();
  },
};
</script>
