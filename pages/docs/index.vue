<template>
  <div>
    <section class="realtive py-12 lg:py-20 bg-no-repeat bg-center bg-cover" style="
        background-image: url('https://www.datocms-assets.com/73511/1653474086-hero_bg.png');
      ">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="text-center">
          <h1 class="text-4xl md:text-heading-40 text-dark mb-6 max-w-[680px] mx-auto font-semibold">
            Templatecookie Docs
          </h1>
          <p class="text-lg md:text-lg text-dark mb-8 max-w-full md:max-w-[536px] mx-auto font-light">
            Don't have previous experience using our products? Read the
            documentation to learn more about the complex features and topics.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div v-for="(item, index) in data" :key="index" class="flex items-stretch">
            <ContentProductItem :product="item" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ContentProductItem from "~/components/content/ProductItem.vue";

const bannerImg = ref("/img-five.png");
const title = ref("Templatecookie Product Documentation");
const description = ref(
  "Don't have previous experience using our products? Read the documentation to learn more about the features and topics?"
);
const route = useRoute();
useHead({
  link: [
    {
      rel: "canonical",
      href: "https://www.templatecookie.com" + route.path,
    },
  ],
});

// This will be reactive even you change title/description above
useHead({
  title,
  meta: [
    { name: "description", content: description },
    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    // Twitter Card
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ],
});

const { data } = await useAsyncData("docs", () =>
  queryContent("/docs")
    .where({ status: { $contains: "true" } })
    .where({ category: { $contains: "Getting Started" } })
    .find()
);

defineOgImage({
  title: title,
  description: description,
});
</script>
