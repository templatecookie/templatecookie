<template>
  <div>
    <!-- Banner  -->
    <section
      class="py-14 lg:py-32 bg-no-repeat bg-center bg-cover"
      :style="{ backgroundImage: `url(${bannerImg})` }"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="text-center">
          <h1
            class="text-4xl md:text-heading-40 textdark mb-6 max-w-680 mx-auto font-semibold"
          >
            Browse our Products
          </h1>
          <p
            class="text-lg md:text-lg textdark mb-8 max-w-full md:max-w-536 mx-auto font-light"
          >
            Browse our latest products for your next big idea, and see what we
            have to offer.
          </p>

          <div
            class="grid grid-cols-2 lg:grid-cols-3 items-center bg-white relative rounded px-6"
            v-if="1 === 3"
          >
            <div class="col-span-full lg:col-span-1 py-4 lg:py-0">
              <div
                class="flex items-center justify-center lg:justify-end space-x-3 sort-filter"
              >
                <h5 class="whitespace-nowrap text-sm leading-5">Category :</h5>
                <div class="w-48">
                  <v-select
                    label="name"
                    :clearable="false"
                    placeholder="Select Category"
                    v-model="selectedCategory"
                    :options="categoryList"
                    @input="setCategory"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Item content -->
    <section>
      <div class="mx-auto max-w-7xl px-4 sm:px-6" v-if="products?.length">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
          <div
            v-for="(item, itemIndex) in displayedProducts"
            :key="itemIndex"
            class="flex items-stretch"
          >
            <ProductCard :product="item" :large="true" />
          </div>
        </div>
        <!-- pagination   -->
        <pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @page-change="handlePageChange"
        />
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 py-16" v-else>
        <div class="text-center text-2xl pb-6 text-red-400">
          No products available, try with different filter!
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ALL_PRODUCTS from "../../graphql/allProducts";

const bannerImg = "/images/img-five.png";
const selectedCategory = ref({});
const categoryList = [
  {
    name: "All Categories",
    slug: "",
  },
];
const products = ref(null);
const currentPage = ref(1);
const itemsPerPage = ref(8);
const { data } = await useGraphqlQuery({
  query: ALL_PRODUCTS,
});
products.value = data?._rawValue?.allProducts;
const title = "All Products Listing";
const description =
  "Explore a range of free HTML and Figma templates at Templatecookie. Elevate your projects with our versatile and user-friendly design solutions. Browse now!";

const handlePageChange = (newPage) => {
  currentPage.value = newPage;
};

const totalPages = computed(() =>
  Math.ceil(products.value.length / itemsPerPage.value)
);

const displayedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return products.value.slice(startIndex, endIndex);
});

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: "/social-meta.png",
});

defineOgImage({
  title: title,
  description: description,
});
</script>
