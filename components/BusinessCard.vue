<template>
  <div
    class="bg-white rounded-lg p-8 text-center business-card flex items-stretch flex-col h-full"
  >
    <div
      class="icon w-76 h-76 bg-gray-f0 rounded-lg flex items-center justify-center m-auto mb-7 duration-300"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M18 31.5C25.4558 31.5 31.5 25.4558 31.5 18C31.5 10.5442 25.4558 4.5 18 4.5C10.5442 4.5 4.5 10.5442 4.5 18C4.5 25.4558 10.5442 31.5 18 31.5Z"
          fill="#0B63E5"
        />
        <path
          d="M18 31.5C25.4558 31.5 31.5 25.4558 31.5 18C31.5 10.5442 25.4558 4.5 18 4.5C10.5442 4.5 4.5 10.5442 4.5 18C4.5 25.4558 10.5442 31.5 18 31.5Z"
          stroke="#0B63E5"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.875 16.875H18V24.75H19.125"
          stroke="#0B63E5"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.4375 11.8125C18.4375 12.0541 18.2416 12.25 18 12.25C17.7584 12.25 17.5625 12.0541 17.5625 11.8125C17.5625 11.5709 17.7584 11.375 18 11.375C18.2416 11.375 18.4375 11.5709 18.4375 11.8125Z"
          fill="#0B63E5"
          stroke="#0B63E5"
          stroke-width="2.5"
        />
      </svg>
    </div>
    <div>
      <h3 class="text-dark-06 text-xl mb-3">{{ title }}</h3>
      <p class="text-dark-42 text-base">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessCard",
  props: {
    title: {
      type: String,
      requied: true,
    },
    text: {
      type: String,
      requied: true,
    },
  },
};
</script>
