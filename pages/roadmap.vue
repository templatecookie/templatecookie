<template>
  <div>
    <div class="bg-primary py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="text-center max-w-4xl m-auto pt-6">
          <h1
            class="text-white text-5xl font-semibold mb-6 lg:mb-9 tracking-ls02"
          >
            Product Roadmap
          </h1>
          <p class="text-white text-lg mb-6 lg:mb-9 max-w-xl m-auto font-light">
            Engage with us on our roadmap! Share your ideas, vote on others, and
            be part of the innovation journey.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div data-productlift-embed="d77067a9-03fc-4683-990b-f0ed41624c9b" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
useHead({
  script: [
    { src: "https://roadmap.templatecookie.com/widgets_sdk", defer: true },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://templatecookie.com" + route.path,
    },
  ],
});

const title = "Templatecookie Product Roadmap | Explore Our Innovation Journey";
const description =
  "Stay in the loop with TemplateCookie's Product Roadmap. Witness innovation in action, submit your ideas, and vote on upcoming features. Join us in shaping the future of our products.";

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: "/social-meta.png",
});
</script>
