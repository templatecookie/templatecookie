<template>
    <!-- card wrapper  -->
    <div class="relative overflow-hidden p-8 border border-gray-e6 rounded-2xl product-card w-full" :class="large ? 'product-card--lg ' : 'product-card--sm'">
      <nuxt-link :to="{ name: 'products-slug', params: {slug: product.slug}}" class="product-card__img relative inline-block overflow-hidden rounded-lg w-full product-card__img-wrapper mb-4">
        <img :src="fixImageUrl(product.banner)" alt="product-img" class="w-full h-full object-cover overflow-hidden" />
      </nuxt-link>

      <!-- Product info  -->
      <div class="product-card__text">
        <!-- Tags  -->
        <h6 class="tracking-widest font-normal text-pink-75 uppercase m-0 mb-1" :class=" large ? 'text-body-14' : 'text-body-12/12'" v-if="product.category.data" >
          {{ product.category.data.attributes.name }}
        </h6>

        <h2 class="text-dark-06 mb-3 font-normal" :class="large ? 'text-body-24' : 'text-body-18'">
          {{ product.name }}
        </h2>

        <p class="text-body-16 text-dark-42 font-light mb-6" :class="large ? 'text-body-16' : 'text-body-14/20'">
          {{ product.short_description }}
        </p>

        <!-- actions content  -->
        <div class="flex justify-between items-center sm:mt-0 mt-6  product-card__actions">
          <!-- Purchase  -->
          <div class="flex items-center space-x-3 order-2 sm:order-1">
            <div>
              <nuxt-link :to="{name: 'products-slug', params: {slug: product.slug}}" class="flex items-center overflow-hidden border border-blue-0b text-blue-0b rounded-lg group py-3.5 px-9 whitespace-nowrap product-card__button">
                Learn More
                <span class="inline-block ml-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </nuxt-link>
            </div>
            <div class="flex-shrink-0">
              <button
                class="product-card__button-cart inline-block overflow-hidden bg-gray-f5 hover:bg-gray-200 transition-all rounded-lg">
                <img src="~/assets/images/svg/cart.svg" alt="cart-icon" />
              </button>
            </div>
          </div>

          <!-- Price  -->
          <div class=" order-2">
            <h5 class="text-body-24 font-normal uppercase text-pink-75" :class="large ? 'text-body-24' : 'text-body-20'">
              ${{ product.price }}
            </h5>
          </div>
        </div>
      </div>
    </div>

    <!-- product card small wrapper  -->
    <!-- <div class="relative overflow-hidden p-6 border border-gray-e6 rounded-2xl product-card product-card--sm">
      <nuxt-link to="#"
        class="product-card__img relative inline-block overflow-hidden rounded-lg w-full product-card__img-wrapper mb-4">
        <img :src="img" alt="product-img" class="w-full h-full object-cover overflow-hidden" />
      </nuxt-link>
       <div class="product-card__text">
        <h6 class="text-body-12/12  tracking-widest font-normal text-pink-75 uppercase m-0 mb-1">
          {{ tag }}
        </h6>
        <h2 class="text-body-18  text-dark-06 mb-3 font-normal">
          {{ title }}
        </h2>
        <p class="text-body-14/20 text-dark-42 font-light mb-6">
          {{ text }}
        </p>
        <div class="flex justify-between items-center sm:mt-0 mt-6  product-card__actions">
          <div class="flex items-center space-x-3 order-2 sm:order-1">
            <div>
              <nuxt-link to="#"
                class="flex items-center overflow-hidden border border-blue-0b text-blue-0b rounded-lg group py-3.5 px-9 whitespace-nowrap product-card__button">
                Learn More
                <span class="inline-block ml-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </nuxt-link>
            </div>
            <div class="flex-shrink-0">
              <button
                class="product-card__button-cart inline-block overflow-hidden bg-gray-f5 hover:bg-gray-200 transition-all rounded-lg">
                <img src="~/assets/images/svg/cart.svg" alt="cart-icon" />
              </button>
            </div>
          </div>
          <div class=" order-2">
            <h5 class="text-body-20 font-normal uppercase text-pink-75">
              ${{ price }}
            </h5>
          </div>
        </div>
      </div>
    </div> -->
</template>

<script>
import global from '~/mixin/global'

export default {
  name: "ProductCard",
  mixins: [global],
  props: {
    large: {
      type: Boolean,
      required: false,
      default: false,
    },
    product: {
      type: Object,
      required: true,
    }
  },
};
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
      &__img {
        height: 190px;
      }

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

    // @media (max-width: 767px) {
    //   height: 160px !important;
    // }
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
