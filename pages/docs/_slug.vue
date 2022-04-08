<template>
  <div>
    <section class="realtive pb-14 lg:pb-72 pt-156 bg-no-repeat bg-center bg-cover"
      :style="{ backgroundImage: `url(${bannerImg})` }">
      <div class="container">
        <div class="text-left">
          <h1 class="text-4xl md:text-heading-40 text-dark-06 mb-6 mx-auto font-semibold">
            Adlisting Product
          </h1>
          <p class="text-lg md:text-body-18 text-dark-06 mb-8 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, expedita illo! Velit delectus  
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="flex">
          <ul class="w-3/12 h-full border-r-[1px] border-gray-100 py-8">
            <li class="uppercase text-xs text-gray-500 mb-4"> getting started </li>
            <li v-for="(item, index) in products" :key="index">
              <nuxt-link :to="item.path" class="px-4 py-2 inline-block w-full bg-blue-50 text-gray-700 font-light text-sm"> {{ item.title }} </nuxt-link>
            </li>
          </ul>
          <div class="w-9/12 h-full">
            <NuxtChild />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import bannerImg from "~/assets/images/all-img/img-five.png";
export default {
  layout: 'documentation',
  data() {
    return {
      bannerImg,
    };
  },
  async asyncData ({ $content, params }) {
    console.log(params.slug)
    const products = await $content(`docs/${ params.slug }`, { deep: true })
    // .where({ index: { $eq: true } })
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
