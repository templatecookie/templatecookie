<template>
  <section class="bg-gray-100">
    <div class="bg-blue-600">
      <div class="container markdown-body">
        <div class="py-12">
          <h1 class="!text-white">Templatecookie Blog</h1>
          <div class="text-gray-200 font-light">
            <nuxt-link to="/" class="!text-gray-200 !hover:text-gray-600">Home</nuxt-link> / <a class="!text-gray-200" href="javascript:void(0)">Blog</a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container">
        <div class="py-24">
          <h3 class="text-4xl font-bold mb-8">Latest Posts</h3>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="shadow-lg rounded-lg overflow-hidden" v-for="(d, i) in 8" :key="i">
              <img class="w-full h-52 object-cover" src="../../static/docs/adlisting/preview.png" alt="">
              <div class="p-4 px-6">
                <h2 class="text-2xl mb-3 text-gray-900">Best eCommerce Script on Codecanyon </h2>
                <p class="text-base text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero reiciendis nisi obcaecati.</p>
                <nuxt-link :to="{ name: 'blog-slug', params: {slug: 'blog-post-1'}}" class="px-8 py-3 rounded bg-green-500 hover:bg-green-700 hover:text-white transition-all inline-block mt-4 text-base">Read More</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
