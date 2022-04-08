<template>
  <section class="pt-36">
    <div class="container py-20">
      <h1 class="mb-2">Product Docs Page</h1>
      <hr />
      <div class="flex">
        <ul class="w-2/12">
          <li v-for="(item, index) in products" :key="index">
            <a :href="item.path"> {{ item.title }} </a>
          </li>
        </ul>
        <div class="w-10/12">
        
          <NuxtChild />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
