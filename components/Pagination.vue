<template lang="">
  <div>
    <ul class="flex items-center space-x-4">
      <li>
        <nuxt-link
          to="#"
          class="flex items-center text-button font-medium text-blue-0b capitalize bg-gray-f0 rounded-md px-3 sm:px-5"
        >
          <span class="icon mr-2 inline-block">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.875 10H3.125"
                stroke="#0B63E5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.75 4.375L3.125 10L8.75 15.625"
                stroke="#0B63E5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          Prev
        </nuxt-link>
      </li>
      <!-- pagination list  -->
      <li>
        <ul
          class="flex items-center space-x-2 max-w-100 sm:max-w-full overflow-hidden overflow-x-scroll sm:overflow-x-hidden"
        >
          <li>
            <nuxt-link
              class="inline-block text-button text-dark-42 hover:text-blue-0b font-normal px-3 overflow-hidden rounded-md hover:bg-gray-f0"
              to="#"
            >
              01
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="inline-block text-button text-dark-42 hover:text-blue-0b font-normal px-3 overflow-hidden rounded-md hover:bg-gray-f0 active"
              to="#"
            >
              02
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="inline-block text-button text-dark-42 hover:text-blue-0b font-normal px-3 overflow-hidden rounded-md hover:bg-gray-f0"
              to="#"
            >
              03
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="inline-block text-button text-dark-42 hover:text-blue-0b font-normal px-3 overflow-hidden rounded-md hover:bg-gray-f0"
              to="#"
            >
              04
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="inline-block text-button text-dark-42 hover:text-blue-0b font-normal px-3 overflow-hidden rounded-md hover:bg-gray-f0"
              to="#"
            >
              05
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li>
        <nuxt-link
          to="#"
          class="flex items-center text-button font-medium text-blue-0b capitalize bg-gray-f0 rounded-md px-3 sm:px-5"
        >
          Next
          <span class="icon ml-2 inline-block">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 12H20.25"
                stroke="#0B63E5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5 5.25L20.25 12L13.5 18.75"
                stroke="#0B63E5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Pagination",
};
</script>
<style scoped>
.nuxt-link-active,
.active {
  color: #fff;
  background-color: #0b63e5;
}
</style>
