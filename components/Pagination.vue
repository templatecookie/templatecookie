<template>
  <div>
    <ul class="flex items-center space-x-4">
      <li>
        <a href="#" v-if="prevDisabled()" @click.prevent :disabled="prevDisabled()" class="bg-gray-200 text-gray-600 flex items-center text-sm font-medium capitalize rounded-md p-3 sm:px-5">
          <span class="icon mr-2 inline-block">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.875 10H3.125" stroke="#525252" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M8.75 4.375L3.125 10L8.75 15.625" stroke="#525252" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
          Prev
        </a>
        <a href="#" v-else @click.prevent="goToPreviousPage()" class="bg-gray-f0 text-blue-0b flex items-center text-sm font-medium capitalize rounded-md p-3 sm:px-5">
          <span class="icon mr-2 inline-block">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.875 10H3.125" stroke="#0B63E5" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M8.75 4.375L3.125 10L8.75 15.625" stroke="#0B63E5" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
          Prev
        </a>
      </li>
      <!-- pagination list  -->
      <li>
        <ul class="flex items-center max-w-100 sm:max-w-full overflow-hidden overflow-x-scroll sm:overflow-x-hidden">
          <li v-for="page in data.pageCount" :key="page">
            <a href="#" v-if="page != data.page" @click.prevent="goToPage(page)" class="inline-block text-sm text-dark-42 hover:text-blue-0b font-normal px-3.5 p-3 overflow-hidden rounded-md hover:bg-gray-f0">
              {{ leadingZero(page) }}
            </a>
            <a @click.prevent v-else class="active inline-block text-sm text-dark-42 hover:text-blue-0b font-normal px-3.5 p-3 overflow-hidden rounded-md hover:bg-gray-f0">
              {{ leadingZero(page) }}
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#" v-if="nextDisabled()" @click.prevent :disabled="nextDisabled()" class="bg-gray-200 text-gray-600 flex items-center text-sm font-medium capitalize rounded-md  p-2.5 sm:px-5">
          Next
          <span class="icon ml-2 inline-block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.75 12H20.25" stroke="#525252" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#525252" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </a>
        <a href="#" v-else @click.prevent="goToNextPage()" class="bg-gray-f0 text-blue-0b flex items-center text-sm font-medium capitalize rounded-md  p-2.5 sm:px-5">
          Next
          <span class="icon ml-2 inline-block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.75 12H20.25" stroke="#0B63E5" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#0B63E5" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['data'],
  methods: {
    prevDisabled(){
      return this.data.page < 2;
    },
    nextDisabled() {
      return this.data.pageCount == this.data.page;
    },
    leadingZero(value) {
      return value < 10 ? '0' + value : value;
    },
    goToPage(page){
      this.$emit('goToPage', page);
    },
    goToPreviousPage(){
      const currentPage = this.data.page;
      this.$emit('goToPage', currentPage - 1);
    },
    goToNextPage(){
      const currentPage = this.data.page;
      this.$emit('goToPage', currentPage + 1)
    }
  }
};
</script>
<style scoped>
.active {
  color: #fff;
  background-color: #0b63e5;
}
</style>
