<template>
  <div
    class="flex-shrink-0 w-3/12 flex-grow mb-4 border rounded-md overflow-hidden min-h-full"
    v-for="(items, index) in categories"
    :key="index"
  >
    <div class="py-3 px-5 bg-gray-50 uppercase text-gray-400">
      {{ index }}
    </div>
    <div class="px-5 py-3">
      <ul class="mb-6">
        <!-- <li class="uppercase text-xs text-gray-500 mb-2"> {{ index }} </li> -->
        <li
          v-for="(item, index) in items"
          :key="index"
        >
          <nuxt-link
            :to="item._path"
            class="px-4 py-2 inline-block w-full text-gray-900 font-light"
          >
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categories"],
};
</script>

<style></style>
