<template>
  <h1>This is the contact page</h1>
</template>

<script setup>
const route = useRoute();

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://templatecookie.com" + route.path,
    },
  ],
});
</script>

<style></style>
