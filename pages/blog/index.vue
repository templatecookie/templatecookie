<template>
  <div>
    <div class="bg-blue-600">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="py-12">
          <h1 class="!text-white text-2xl lg:text-5xl mb-2">Templatecookie Blog</h1>
          <div class="text-gray-200 font-light">
            <nuxt-link to="/" class="!text-gray-200 !hover:text-gray-600">Home</nuxt-link> / <a class="!text-gray-200" href="javascript:void(0)">Blog</a>
          </div>
        </div>
      </div>
    </div>
    <section class="text-gray-600 body-font bg-gray-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <div class="flex flex-wrap -m-4" v-if="posts.length">
          <div class="p-4 md:w-1/3" v-for="(item, i) in posts" :key="i">
            <blog-item :item="item" />
          </div>
        </div>
        <div v-else>
            No post found
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ALL_BLOG_QUERY from '~/graphql/blog/allBlogPosts.js'
import BlogItem from '../../components/blog/BlogItem.vue';

export default {
  components: { BlogItem },
  head() {
    const title = `Blog - Templatecookie.com`;
    const description = 'Read templatecookie blog. Updated Weekly'
    return {
      title: title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', name: 'og:description', content: description },
        { hid: 'og:type', property: 'og:type', name: 'og:type', content: "product" },
        // { hid: 'og:image', property: 'og:image', name: 'og:image', content: product.banner.url },
      ],
    }
  },
  async asyncData({ app, params, store, $sentry }) {
    try {
      const client = app.apolloProvider.defaultClient;

      const { data } = await client.query({
        query: ALL_BLOG_QUERY,
      })

      const posts = data.allPosts;
      return { posts }
    } catch (error) {
      $sentry.captureException(error)
    }
  },
}
</script>

<style>

</style>
