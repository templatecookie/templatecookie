<template>
  <div
    class="flex flex-col sm:flex-row items-center justify-between p-8 shadow-bs013 bg-gray-f5"
  >
    <!-- text content -->
    <div class="mb-6 sm:mb-0">
      <p class="text-body-18 capitalize text-dark-06">
        Relik - Admin Dashboard Figma Template
      </p>
    </div>
    <!-- action  -->
    <div>
      <nuxt-link
        to="#"
        class="flex items-center justify-center text-white hover:text-white text-button capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded px-5 w-full whitespace-nowrap text-center"
      >
        Buy Now
        <span class="inline-block ml-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 12H20.25"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5 5.25L20.25 12L13.5 18.75"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderThree",
};
</script>
<style></style>
