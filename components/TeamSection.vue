<template>
  <!-- / Team  -->
  <div class="bg-gray-900 py-8 sm:py-24 md:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Team Expertise
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          Our team of highly skilled developers specializes in Custom software
          and website development. With years of experience, they possess in-depth
          knowledge of our products and are committed to delivering
          exceptional support.
        </p>
      </div>
      <ul
        role="list"
        class="mx-auto md:mt-20 mt-8 grid max-w-2xl grid-cols-1 gap-x-8 md:gap-y-14 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3"
      >
        <team-item v-for="(member, index) in members" :key="index" :item="member" />
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'description', 'members'])
</script>

<style>

</style>
