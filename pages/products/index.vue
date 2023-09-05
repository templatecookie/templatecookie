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
                        Browse our latest products for your next big idea, and see what we
                        have to offer.
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
            <div class="mx-auto max-w-7xl px-4 sm:px-6" v-if="products?.length">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
                    <div v-for="(item, itemIndex) in displayedProducts" :key="itemIndex" class="flex items-stretch">
                        <ProductCard :product="item" :large="true" />
                    </div>
                </div>
                <!-- pagination   -->
                <pagination :currentPage="currentPage" :totalPages="totalPages" @page-change="handlePageChange" />
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
    import ALL_PRODUCTS from "../../graphql/allProducts";

    export default {
        async setup() {
            const products = ref(null);
            const {data} = await useGraphqlQuery({
                query: ALL_PRODUCTS
            });
            products.value = data?._rawValue?.allProducts;
            const title = "All Products Listing";
            const description = "Browse Templatecookie all products, Templatecookie has HTML, Figma & Laravel products.";

            useSeoMeta({
                title: title,
                ogTitle: title,
                description: description,
                ogDescription: description,
                ogImage: '/social-meta.png',
            })

            return {
                products,
            };
        },
        data() {
            return {
                bannerImg: "/images/img-five.png",
                selectedCategory: {},
                tabs: [],
                activeTechnology: "",
                categoryList: [{
                    name: "All Categories",
                    slug: "",
                }, ],
                productsNo: this.products,
                currentPage: 1,
                itemsPerPage: 8,
            };
        },
        computed: {
            totalPages() {
                const pageno = Math.ceil(this.productsNo.length / this.itemsPerPage);
                console.log(pageno)
                return pageno
            },
            displayedProducts() {
                const startIndex = (this.currentPage - 1) * this.itemsPerPage;
                const endIndex = startIndex + this.itemsPerPage;
                return this.products.slice(startIndex, endIndex);
            },
        },
        methods: {
            handlePageChange(newPage) {
                this.currentPage = newPage;
            },
        },
    };
</script>
