<template>
  <div>
    <div class="bg-blue-600">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="py-12">
          <h1 class="!text-white text-2xl lg:text-5xl mb-2">
            Templatecookie Blog
          </h1>
          <div class="font-light">
            <nuxt-link to="/" class="!text-gray-200 !hover:text-gray-600">
              Home
            </nuxt-link>
            / <a class="!text-gray-200" href="javascript:void(0)">Blog</a>
          </div>
        </div>
      </div>
    </div>
    <section class="bg-gray-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <div class="mx-auto mt-12 grid gap-5 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3" v-if="posts.length">
          <blog-item :item="item" v-for="(item, i) in posts" :key="i" />
        </div>
        <div v-else>No post found</div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ALL_BLOG_QUERY from "~/graphql/blog/allBlogPosts.js";
import store from "~/store";
const route = useRoute();
const title = `Templatecookie Blog: Discover the Latest & Stay Updated`;
const description = "Discover tech insights and innovation at the Templatecookie blog. Stay informed, inspired, and engaged with our diverse range of blog posts.";

const { data } = await useGraphqlQuery({ query: ALL_BLOG_QUERY });
const posts = data._rawValue.allPosts;
const siteLogo = store.global?.logo?.url;
useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: "/social-meta.png",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://www.templatecookie.com" + route.path,
    },
  ],
});

defineOgImage({
  component: "Blog",
  title: title,
  description: description,
  siteLogo,
});
</script>

<style></style>
