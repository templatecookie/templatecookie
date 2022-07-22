<template>
  <div class="pt-24 bg-gray-100">
    <div class="container">
      <div class="flex justify-center flex-col items-center min-h-[60vh] py-16">
        <h1 v-if="error.statusCode === 404" class="text-gray-700 mb-4">Page not found</h1>
        <h1 v-else>An error occurred</h1>
        <NuxtLink to="/" class="inline-block">Home page</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
