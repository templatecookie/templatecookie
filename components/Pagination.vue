<template lang="">
  <div>
    <ul>
      <li>
        <nuxt-link
          to="#"
          class="flex items-center text-button font-medium text-blue-0b capitalize bg-gray-f0 rounded-md"
        >
          <span class="icon mr-3 inline-block">
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
          Previous
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
