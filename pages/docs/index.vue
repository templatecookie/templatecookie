<template>
  <div>
    <div class="pb-10 pt-36 bg-cover bg-center" :style="{ backgroundImage: 'url(' + bgimage + ')' }">
      <div class="container">
        <div class="ex-small:overflow-auto overflow-x-scroll">
          <ul class="flex text-gray-6a text-sm space-x-2 mb-3">
            <li class="leading-3 whitespace-nowrap">
              <nuxt-link to="/">Home </nuxt-link>
            </li>
            <li class="leading-3 whitespace-nowrap">
              <img src="~@/assets/images/svg/arrow-gray.svg" alt="" />
            </li>
            <li class="leading-3 whitespace-nowrap">
              <nuxt-link :to="{ name: 'docs'}"> Documentation </nuxt-link>
            </li>
            <li class="leading-3 whitespace-nowrap">
              <img src="~@/assets/images/svg/arrow-gray.svg" alt="" />
            </li>
            <li class="leading-3 whitespace-nowrap">
              <nuxt-link to="#">Hello World</nuxt-link>
            </li>
            <!-- <li class="leading-3 whitespace-nowrap">
              <img src="~@/assets/images/svg/arrow-gray.svg" alt="" />
            </li>
            <li class="leading-3 whitespace-nowrap">
              <nuxt-link to="#">Figma</nuxt-link>
            </li> -->
          </ul>
        </div>

        <h2 class="text-dark-06 text-2xl md:text-3xl lg:text-heading-40 font-semibold tracking-01">
          Documentation
        </h2>
      </div>
    </div>
    <section>
      <div class="container py-20">
        <div class="flex flex-wrap -mx-2">
          <div class="w-full md:w-1/2 px-2" v-for="(product, index) in products" :key="index">
            <nuxt-link :to="product.path" class="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-100 inline-block">
              <h3 class="text-dark-06 text-lg font-semibold tracking-wide leading-tight mb-3">
                {{ product.title }}
              </h3>
              <p class="text-gray-6a text-sm leading-tight mb-3">
                {{ product.description }}
              </p>
            </nuxt-link>
            <!-- <pre> {{ product }} </pre> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bgimage: require('../../assets/images/all-img/breadcrumb.png'),
    }
  },
  async asyncData ({ $content }) {
    const products = await $content('docs', { deep: true })
    .where({ index: { $eq: true } })
    .sortBy('position', 'asc')
    .fetch()

    return {
      products
    }
  }
}
</script>

<style>

</style>
