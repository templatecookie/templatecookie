<template>
  <div class="flex-shrink-0 w-3/12 flex-grow mb-4 border rounded-md overflow-hidden">
    <div class="py-3 px-5 bg-gray-50 uppercase text-gray-400">
      {{ name }}
    </div>
    <div class="px-5 py-3">
      <ul>
        <li v-for="(item, index) in items" :key="index" class="mb-2">
          <nuxt-link :to="item.path" class="text-gray-900 font-light">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', "name"],
}
</script>

<style>

</style>
