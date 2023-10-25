<template>
  <div>
    <section
      class="realtive bg-no-repeat bg-center bg-cover"
      :style="{ backgroundImage: `url(${bannerImg})` }"
    >
      <div
        class="mx-auto max-w-7xl py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-heading-40 text-dark mb-6 max-w-[680px] mx-auto font-semibold">
            Installation Plans
          </h1>
          <p
            class="text-lg md:text-lg text-dark max-w-full md:max-w-[536px] mx-auto font-light"
          >
            These plans are only available to those who have bought one or more
            products from us before. If you haven't purchased yet, check our
            <a
              class="text-blue-600"
              href="https://1.envato.market/EaNJ2X"
            >codecanyon profile</a>
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-14">
        <h2 class="mb-6 text-3xl font-medium">
          Choose your purchased product
        </h2>
        <div class="grid gap-4 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
          <div
            v-for="(item, index) in products"
            :key="index"
          >
            <input
              class="hidden"
              type="radio"
              name="choose-product"
              :id="'id' + item?.product?.id"
              :value="'id' + item?.product?.id"
              v-model="selectedProduct"
              :checked="'id' + products[0].product.id"
            >
            <label :for="'id' + item?.product?.id">
              <div
                @click="scrollDown"
                class="flex items-center gap-3 rounded-xl p-5"
                :class="
                  selectedProduct === `id${item?.product?.id}`
                    ? 'border-2 border-[#0B63E5] bg-white'
                    : 'bg-gray-f0 border-2 border-transparent'
                "
              >
                <div
                  class="flex-shrink-0"
                  v-if="item?.product?.thumbnail"
                >
                  <img
                    class="w-16 h-16 object-cover rounded-md"
                    :src="item.product.thumbnail.url"
                    :alt="item.product.name"
                  >
                </div>
                <h2 class="text-base text-[#061C3D]">
                  {{ item?.product?.name }}
                </h2>
              </div>
            </label>
          </div>
        </div>
      </div>
    </section>
    <PricingSection
      :id="selectedProduct"
      :plans="selectedProductPlans"
      :info="selectedProductData"
      :checkout="true"
    />
  </div>
</template>

<script>
import ALL_PRODUCT_PLANS from "../graphql/allProductPlans";
import useGraphqlQuery from "~/composables/useGraphqlQuery";

export default {
  async setup() {
    const selectedProduct = ref(null);
    const products = ref({});
    const bannerImg = ref("/img-five.png");

    const { data, error } = await useGraphqlQuery({ query: ALL_PRODUCT_PLANS });
    products.value = data?._rawValue?.allProductplans;

    const selectedProductData = computed(() => {
      return products.value.find((elem) => {
        return (
          elem.product.id ===
          (selectedProduct.value
            ? selectedProduct.value.replace("id", "")
            : null)
        );
      });
    });

    const selectedProductPlans = computed(() => {
      if (selectedProductData.value) {
        return selectedProductData?.value?.plans?.map(
          (item) => item.priceplan[0],
        );
      }
    });

    const title = "Installation Plans | Templatecookie Products";
    const description =
      "Buy our premium installation support package, our expert team will help you get your app installed & configured.";

    useSeoMeta({
      title: title,
      ogTitle: title,
      description: description,
      ogDescription: description,
      ogImage: "/social.png",
    });

    const scrollDown = () => {
      const elements = document.getElementsByClassName("pricing-section");
      if (elements.length > 0) {
        elements[0].scrollIntoView({ behavior: "smooth" });
      }
    };

    return {
      bannerImg,
      products,
      selectedProduct,
      selectedProductData,
      selectedProductPlans,
      scrollDown,
    };
  },
  created() {
    this.selectedProduct = "id" + this.products[0]?.product?.id;
  },
};
</script>

<style lang="scss" scoped>
.responsive-overly {
  @media (max-width: 1199px) {
    background-position: center !important;
    background-size: cover !important;
  }
}
</style>
