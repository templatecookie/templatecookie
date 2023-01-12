<template>
  <div class="flex w-full md:flex-wrap">
    <div class="px-6 pb-0 w-8/12 h-full">
      <nuxt-content class="markdown-body docs-details" :document="page" />
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
            <ul class="mb-2">
              <li @click="tableOfContentsHeadingClick(link)" class="toc-list" :class="{ 'pl-4': link.depth === 3}" v-for="link of page.toc" :key="link.id">
                <a role="button" class="transition-colors duration-75 mb-2 block text-gray-700 font-light text-sm"  :class="{ 'text-blue-500 hover:text-blue-600': link.id === currentlyActiveToc, 'text-black hover:gray-900': link.id !== currentlyActiveToc }" :href="`#${link.id}`">{{ link.text }}</a>
              </li>
            </ul>
            <div class="bg-blue-200 px-3 py-5 rounded-md mt-4">
              <h3 class="text-xl mb-2"> Buy our products from Envato Market </h3>
              <a href="https://go.templatecookie.com/codecanyon" target="_blank" class="outline-btn">
                Buy our products
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-1" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M122.3,71.4l19.8-19.8a44.1,44.1,0,0,1,62.3,62.3l-28.3,28.2a43.9,43.9,0,0,1-62.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M133.7,184.6l-19.8,19.8a44.1,44.1,0,0,1-62.3-62.3l28.3-28.2a43.9,43.9,0,0,1,62.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
              </a>
            </div>
            <div class="bg-blue-200 px-3 py-5 rounded-md mt-4">
              <h3 class="text-xl mb-2"> Get VPS Hosting on Cloudways </h3>
              <a href="http://go.templatecookie.com/cloudways" target="_blank" class="outline-btn">
                Get Cloudways Hosting
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-1" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M122.3,71.4l19.8-19.8a44.1,44.1,0,0,1,62.3,62.3l-28.3,28.2a43.9,43.9,0,0,1-62.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M133.7,184.6l-19.8,19.8a44.1,44.1,0,0,1-62.3-62.3l28.3-28.2a43.9,43.9,0,0,1,62.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
              </a>
            </div>
            <div class="bg-blue-200 px-3 py-5 rounded-md mt-4">
              <h3 class="text-xl mb-2">Get $100 Free Credit on Digitalocean</h3>
              <a href="http://go.templatecookie.com/digitalocean" target="_blank" class="outline-btn">
                Get $100 on Digitalocean
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-1" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M122.3,71.4l19.8-19.8a44.1,44.1,0,0,1,62.3,62.3l-28.3,28.2a43.9,43.9,0,0,1-62.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M133.7,184.6l-19.8,19.8a44.1,44.1,0,0,1-62.3-62.3l28.3-28.2a43.9,43.9,0,0,1,62.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
              </a>
            </div>
            <div class="bg-blue-200 px-3 py-5 rounded-md mt-4">
              <h3 class="text-xl mb-2">Get Domain & Web Hosting at Cheaper Rate</h3>
              <a href="http://go.templatecookie.com/namecheap" target="_blank" class="outline-btn">
                Get Domain & Shared Hosting
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-1" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M122.3,71.4l19.8-19.8a44.1,44.1,0,0,1,62.3,62.3l-28.3,28.2a43.9,43.9,0,0,1-62.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M133.7,184.6l-19.8,19.8a44.1,44.1,0,0,1-62.3-62.3l28.3-28.2a43.9,43.9,0,0,1,62.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
              </a>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
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
  },
  data() {
    return {
      currentlyActiveToc: "",
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0
      }
    };
  },
  methods: {
    tableOfContentsHeadingClick(link) {
      this.currentlyActiveToc = link.id;
    },
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id;
        }
      });
    }, this.observerOptions);

    // Track all sections that have an `id` applied
    document
      .querySelectorAll(".nuxt-content h2[id], .nuxt-content h3[id]")
      .forEach(section => {
        this.observer.observe(section);
      });
  },
  beforeDestroy() {
    this.observer.disconnect();
  }
}
</script>
