<template>
  <div class="px-8 pb-0">
    <nuxt-content class="markdown-body" :document="page" />
    <div class="pt-8 w-full text-left text-gray-500">
      <i> Updated at {{ formatDate }}</i>
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
