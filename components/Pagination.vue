<template>
  <ul class="flex justify-center items-center space-x-4">
    <li>
      <a @click.prevent="prevPage"
        :class="currentPage === 1 ? 'bg-gray-200 text-gray-600 cursor-not-allowed':'bg-gray-f0 text-primary cursor-pointer'"
        class="flex items-center text-sm font-medium capitalize rounded-md p-3 sm:px-5">
        <span class="icon mr-2 inline-block">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.875 10H3.125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M8.75 4.375L3.125 10L8.75 15.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </span>
        Prev
      </a>
    </li>
    <li v-for="page in totalPages" :key="page" class="pagination-list flex justify-center items-center">
      <a @click.prevent="goToPage(page)" :class="{ 'active': currentPage == page }"
        class="cursor-pointer inline-block text-sm text-dark-gray hover:text-primary font-normal px-3.5 p-3 overflow-hidden rounded-md hover:bg-gray-f0">
        {{ page }}
      </a>
    </li>
    <li>
      <a @click.prevent="nextPage"
        :class="currentPage === totalPages ? 'bg-gray-200 text-gray-600 cursor-not-allowed':'bg-gray-f0 text-primary cursor-pointer'"
        class="flex items-center text-sm font-medium capitalize rounded-md p-3 sm:px-5">
        Next
        <span class="icon ml-2 inline-block">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </span>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      currentPage: Number,
      totalPages: Number,
    },
    data(){
      return {
        active : this.currentPage,
      }
    },
    methods: {
      prevPage() {
        if (this.currentPage > 1) {
          this.$router.push({ query: { page: this.currentPage - 1 } });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          this.$emit('page-change', this.currentPage - 1);
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.$router.push({ query: { page: this.currentPage + 1 } });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          this.$emit('page-change', this.currentPage + 1);
        }
      },
      goToPage(page) {
        if (this.currentPage !== page) {
          this.$router.push({ query: { page } });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          this.$emit('page-change', page);
        }
      },
      getSearchParams(k) {
        var p = {};
        location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) { p[k] = v })
        return k ? p[k] : p;
      },
    },
    mounted(){

      if (this.getSearchParams('page')) {
        // this.form.queue = this.getSearchParams('page');
        const page = this.getSearchParams('page');
        this.$router.push({ query: { page } });
        this.$emit('page-change', page);
        this.active = page
      }
    }
  };
</script>

<style scoped>
  .pagination-list .active {
    background: rgba(11, 99, 229, 1);
    color: white;
  }
</style>
