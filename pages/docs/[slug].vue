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
            <span v-if="product?.title" v-text="product.title" />
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
                  {{ item.link }}
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
            :productName="product?.name + 'Documentation'"
            :categories="categories"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import groupBy from "lodash.groupby";

const route = useRoute();
const router = useRouter();

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://templatecookie.com" + route.path,
    },
  ],
});

const newPath = route.path.match(/^\/docs\/\w+/);
// fetch all pages.
const { data } = await useAsyncData("docs-product", () =>
  queryContent(`${newPath[0]}`)
    .only(["title", "description", "category", "position", "_path", "_dir"])
    .sort({ position: 1 })
    .find()
);

const generateDocTitle = (str = "") => {
  let title;
  if (route.fullPath.includes("/docs/adlisting")) {
    title = str.toLowerCase().includes("adlisting")
      ? `${str} - Documentation`
      : `${str} - Adlisting Documentation`;
  }
  if (route.fullPath.includes("/docs/jobpilot")) {
    title = str.toLowerCase().includes("jobpilot") ? str : `Jobpilot - ${str}`;
  }
  if (route.fullPath.includes("/docs/schooling")) {
    title = str.toLowerCase().includes("schooling")
      ? str
      : `Schooling - ${str}`;
  }
  console.log({ str, title });
  return title;
};

// find index.md and create product short name from _path
const product = ref([]);
product.value = data._rawValue.find((item) => {
  if (item._path === route.path.replace(/\/+$/, "")) {
    item.title = generateDocTitle(item.title);
    console.log({ item });
    return item;
  }
});

router.afterEach((updatedRoute) => {
  console.log({ data, updatedRoute });
  product.value = data._rawValue.find((item) => {
    if (item._path === updatedRoute.path) {
      item.title = generateDocTitle(item.title);
      console.log({ item });
      return item;
    }
  });
  console.log({ tt: toRaw(product) });
});

// group by categories using lodash library

const categories = groupBy(
  data._rawValue.map((item) => ({ ...item, link: item.title })),
  "category"
);
</script>

<style scoped>
.nuxt-link-active {
  background-color: rgb(239, 246, 255);
}
</style>
