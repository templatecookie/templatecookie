<template>
  <!-- card wrapper  -->
  <div class="relative overflow-hidden border border-gray-f0 rounded-2xl product-card w-full"
    :class="[large ? 'product-card--lg' : 'product-card--sm', bg]">
    <nuxt-link :to="pathName"
      class="product-card__img relative inline-block overflow-hidden rounded-lg w-full product-card__img-wrapper">
      <nuxt-img v-if="product.banner?.url" :src="product.banner.url" alt="product-img"
        class="w-full h-full object-cover overflow-hidden" />
    </nuxt-link>

    <div class="product-card__text" :class="large ? 'p-8' : 'p-6'">
      <div class="tracking-widest font-normal text-secondary uppercase m-0 mb-1" :class="large ? 'text-sm' : 'text-sm'"
        v-if="product.category">
        {{ product.category.name }}
      </div>

      <h2 class="text-dark mb-3 font-normal" :class="large ? 'text-2xl' : 'text-lg'">
        {{ product.name }}
      </h2>

      <p class="text-base text-dark-gray font-light mb-6" :class="large ? 'text-base' : 'text-sm/20'">
        {{ product.description }}
      </p>

      <div class="flex justify-between items-center sm:mt-0 mt-6 product-card__actions">
        <div class="flex items-center space-x-3 order-2 sm:order-1">
          <div>
            <nuxt-link :to="pathName"
              class="flex items-center overflow-hidden border border-primary text-primary rounded-lg group py-3.5 px-9 whitespace-nowrap product-card__button">
              View Details
              <span class="inline-block ml-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const { product } = defineProps({
  large: {
    type: Boolean,
    required: false,
    default: false,
  },
  product: {
    type: Object,
    required: true,
  },
  bg: {
    type: String,
    default: () => 'bg-gray-50'
  }
})

const pathName = ref(`/free-products/${product.slug}`);

</script>

<style lang="scss" scoped>
.product-card {
  &--lg {
    @media (max-width: 575px) {
      padding: 24px;
    }

    .product-card {
      &__img {
        height: 296px;

        @media (max-width: 640px) {
          height: 200px;
        }
      }

      &__button {
        height: 56px;
        width: 196px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        justify-content: center;

        @media (max-width: 640px) {
          height: 45px;
          width: 150px;
        }

        span {
          margin-left: 12px;
        }

        &-cart {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;

          @media (max-width: 640px) {
            height: 45px;
            width: 45px;
          }
        }
      }
    }
  }

  &--sm {
    .product-card {
      &__button {
        height: 45px;
        width: 150px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        justify-content: center;

        span {
          margin-left: 8px;
        }

        &-cart {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  &__img {
    img {
      transform: scale(1);
      transition: all 0.4s linear;
    }
  }

  &__text {
    p {
      @media (max-width: 640px) {
        margin-bottom: 0px;
      }
    }
  }

  &__button {
    transition: all 0.3s ease-in;

    &:hover {
      color: #fff;
      background-color: #0b63e5;
    }
  }
}
</style>
