<template>
  <div class="flex w-full md:flex-wrap">
    <div class="px-6 pb-0 w-8/12 h-full">
      <nuxt-content class="markdown-body" :document="page" />
      <div class="pt-8 w-full text-left text-gray-500">
        <i> Updated at {{ formatDate }}</i>
      </div>
    </div>
    <div class="px-4 w-4/12 h-auto border-l border-gray-100">
      <aside class="col-span-1 lg:flex lg:flex-col">
        <div class="sticky top-16">
          <h2 class="uppercase text-black font-h2 text-lg tracking-wider">
            Table of contents
          </h2>
          <nav class="mt-4">
            <ul>
              <li class="toc-list" :class="{ 'pl-4': link.depth === 3}" v-for="link of page.toc" :key="link.id">
                <a role="button" class="transition-colors duration-75 mb-2 block text-gray-700 font-light text-sm" :href="`#${link.id}`">{{ link.text }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  layout: 'documentation',
  props: ['productName', 'categories'],
  scrollToTop: true,
  head() {
    const title = this.page.title + ` - ${this.productName}`;
    const description = this.page.description;
    return {
      title: title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description }
      ]
    }
  },
  async asyncData ({ $content, route}) {
    console.log(route.path);
    const page = await $content(route.path)
    .sortBy('position', 'asc')
    .fetch()
    return {
      page
    }
  },
  computed: {
    formatDate(){
      return this.page ? dayjs(this.page.updatedAt).format('dddd, MMMM DD YYYY') : '';
    }
  }
}
</script>

<style lang="scss">
  @import '../../../assets/scss/markdown.scss';
</style>
