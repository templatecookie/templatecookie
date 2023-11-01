<template>
  <div>
    <hire-hero-section v-show="isLoadedHubspot" />
    <hire-our-services />
    <hire-working-process />
    <hire-our-experties />
    <hire-contact-us />
  </div>
</template>

<script setup>
const isLoadedHubspot = ref(false);
const route = useRoute();
const title = "Hire Expert Designer & Developers | Templatecookie";
const description =
  "We have expert developers and designers to help you build your next dream project. Our team composed with experts in various industry";

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
      href: "https://templatecookie.com" + route.path,
    },
  ],
  script: [
    {
      src: "https://js.hsforms.net/forms/v2.js",
      onload: () => (isLoadedHubspot.value = true),
    },
  ],
});
</script>
