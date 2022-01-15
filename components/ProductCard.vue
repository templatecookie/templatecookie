<template>
  <!-- card wrapper  -->
  <div
    class="relative overflow-hidden p-6 border border-gray-e6 rounded-2xl product-card"
  >
    <!-- Product img preview -->
    <nuxt-link
      to="#"
      :class="`relative inline-block overflow-hidden rounded-lg w-full product-card__img-wrapper mb-4  ${className} `"
    >
      <img
        :src="img"
        alt="product-img"
        class="w-full h-full object-cover overflow-hidden"
      />
    </nuxt-link>
    <!-- Product info  -->
    <div>
      <!-- Tags  -->
      <h6 class="tracking-widest font-normal text-pink-75 uppercase m-0 mb-1">
        {{ tag }}
      </h6>
      <h2 class="text-body-24 text-dark-06 mb-3 font-normal">
        {{ title }}
      </h2>
      <p class="text-dark-42 font-light mb-6">
        {{ text }}
      </p>
      <!-- actions content  -->
      <div
        class="flex flex-col sm:flex-row items-end sm:items-center sm:justify-between"
      >
        <!-- Purchase  -->
        <div
          class="flex items-center justify-center w-full sm:w-auto space-x-3 order-2 sm:order-1"
        >
          <div>
            <nuxt-link
              to="#"
              :class="`flex items-center overflow-hidden border border-blue-0b text-blue-0b rounded-lg group whitespace-nowrap ${buttonClass} `"
            >
              Learn More
              <span class="inline-block ml-3">
                <img src="~/assets/images/svg/arrow.svg" alt="arrow-icon" />
              </span>
            </nuxt-link>
          </div>
          <div class="flex-shrink-0">
            <button
              class="inline-block overflow-hidden p-4 bg-gray-f5 hover:bg-gray-200 transition-all rounded-lg"
            >
              <img src="~/assets/images/svg/cart.svg" alt="cart-icon" />
            </button>
          </div>
        </div>
        <!-- Price  -->
        <div class="mb-4 sm:mb-0 order-1 sm:order-2">
          <h5 class="text-body-24 font-normal uppercase text-pink-75">
            ${{ price }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    className: {
      type: String,
      required: true,
    },
    buttonClass: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.product-card {
  &:hover {
    .product-card__img-wrapper {
      img {
        transform: scale(1.1);
      }
    }
  }
  &__img-wrapper {
    img {
      transform: scale(1);
      transition: all 0.4s linear;
    }
  }
}
</style>
