<template>
  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden group bg-white">
    <nuxt-link :to="{ name: 'blog-slug', params: { slug: item.slug }}" class="text-green-500 md:mb-2 lg:mb-0">
      <img class="w-full lg:h-52 md:h-48 h-36 object-center object-cover" v-if="item.image && item.image.url" :src="item.image.url" alt="">
    </nuxt-link>
    <div class="p-6">
      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{{ formateDate(item.updatedAt) }}</h2>
      <h1 class="title-font text-lg font-medium mb-3">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: item.slug }}" class="text-gray-900 group-hover:text-green-500 inline-flex items-center md:mb-2 lg:mb-0">
          {{ item.title }}
        </nuxt-link>
      </h1>
      <p class="leading-relaxed mb-3">
        {{ item.shortDescription }}
      </p>
      <div class="flex items-center flex-wrap ">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: item.slug }}" class="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style>

</style>
