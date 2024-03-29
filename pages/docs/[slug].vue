<template>
  <div>
    <section
      class="py-12 lg:pb-12 bg-no-repeat bg-center bg-cover"
      style="background-image: url('/hero-bg.png')"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="text-left">
          <h1
            class="text-4xl md:text-heading-40 text-dark mb-6 mx-auto font-semibold capitalize"
          >
            <span v-if="product?.seoTitle" v-text="product.seoTitle" />
          </h1>
          <p
            class="text-lg md:text-lg text-dark mb-8 font-light"
            v-if="product?.description"
          >
            {{ product.description }}
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex py-8 items-start">
          <div class="w-3/12 h-full border-r-[1px] border-gray-100">
            <ul class="mb-6" v-for="(items, index) in categories" :key="index">
              <li class="uppercase text-xs text-gray-500 mb-2">{{ index }}</li>
              <li v-for="(item, index) in items" :key="index">
                <nuxt-link
                  :activeClass="'nuxt-link-active'"
                  :href="item?._path"
                  class="px-4 py-2 inline-block w-full text-gray-700 font-light text-sm"
                >
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
            <ul>
              <li>
                <nuxt-link
                  :to="`/docs/${$route.params.slug}/hosting`"
                  class="px-4 py-2 inline-block w-full text-gray-700 font-light text-sm"
                >
                  Hosting
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  :to="`/docs/${$route.params.slug}/faq`"
                  class="px-4 py-2 inline-block w-full text-gray-700 font-light text-sm"
                >
                  FAQ
                </nuxt-link>
              </li>
            </ul>
          </div>
          <!-- <NuxtPage /> -->
          <NuxtPage
            :product="product"
            :categories="categories"
            @on-load="(data) => (product = data)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import groupBy from "lodash.groupby";

const { path } = useRoute();
const router = useRouter();

const newPath = path.match(/^\/docs\/\w+/);
// fetch all pages.
const { data } = await useAsyncData("docs-product", () =>
  queryContent(`${newPath[0]}`)
    .only(["title", "description", "category", "position", "_path", "_dir"])
    .sort({ position: 1 })
    .find()
);

// find index.md and create product short name from _path
const product = ref([]);
product.value = { ...data._rawValue[0], seoTitle: data._rawValue[0].title };

// group by categories using lodash library
const categories = groupBy(data._rawValue, "category");

router.afterEach((updatedRoute) => {
  if (updatedRoute.name === "docs-slug") {
    product.value = { ...data._rawValue[0], seoTitle: data._rawValue[0].title };
  }
});

useSeoMeta({
  title: product.value.title,
  ogTitle: product.value.title,
  description: product.value.description,
  ogDescription: product.value.description,
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://templatecookie.com" + path,
    },
  ],
});

defineOgImage({
  title: product.value.title,
  description: product.value.description,
});
</script>

<style scoped>
.nuxt-link-active {
  background-color: rgb(239, 246, 255);
}
</style>
