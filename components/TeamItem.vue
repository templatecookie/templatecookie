<template>
  <li>
    <img class="aspect-[14/13] max-w-xs w-full rounded-2xl object-cover" :src="item.avatar" :alt="item.name + ' - ' + item.role " />
    <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
      {{ item.name }}
    </h3>
    <p class="text-base leading-7 text-gray-300">
      {{ item.role }}
    </p>
    <p class="text-sm leading-6 text-gray-500">{{ item.location }}</p>
  </li>
</template>

<script setup>
const props = defineProps(['item'])
</script>

<style>

</style>