<template>
  <nuxt-link :to="{ name: 'blog-slug', params: { slug: item.slug }}" class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden group bg-white">
    <div class="text-green-500 md:mb-2 lg:mb-0">
      <img class="w-full lg:h-52 md:h-48 h-48 object-center object-cover" v-if="item.image && item.image.url" :src="item.image.url" :alt="item.title">
    </div>
    <div class="p-6 bg-white">
      <p class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{{ formateDate(item.updatedAt) }}</p>
      <h2 class="title-font text-lg font-medium mb-2 text-gray-900 group-hover:text-primary">
        {{ item.title }}
      </h2>
      <p class="leading-relaxed mb-3 text-base font-light">
        {{ item.shortDescription }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style>

</style>
