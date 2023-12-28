<template>
  <div class="w-full">
    <div
      class="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <div
        class="rounded-md overflow-hidden bg-white shadow-sm"
        v-for="(item, index) in data"
        :key="item.title"
        data-aos="zoom-in"
        :data-aos-delay="100 * index"
      >
        <div>
          <img :src="item.img" :alt="item.title" />
        </div>
        <div class="p-4 flex items-center justify-between">
          <h5 v-text="item.title" class="text-xl text-gray-900 font-bold" />
          <a
            :href="item.link"
            target="_blank"
            class="text-xl text-gray-700 font-bold hover:text-gray-900 transition duration-200 ease-linear"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import image1 from "~/assets/images/inner/1.jpg";
import image2 from "~/assets/images/inner/2.jpg";
import image5 from "~/assets/images/inner/5.jpg";
import image6 from "~/assets/images/inner/6.jpg";
import image7 from "~/assets/images/inner/7.jpg";
import image8 from "~/assets/images/inner/8.jpg";
import image9 from "~/assets/images/inner/9.jpg";

const data = [
  {
    title: "Overview",
    img: image1,
    link: "https://jobpilot.templatecookie.com/company/dashboard",
  },
  {
    title: "Post Job",
    img: image2,
    link: "https://jobpilot.templatecookie.com/company/dashboard",
  },
  {
    title: "My Job",
    img: image5,
    link: "https://jobpilot.templatecookie.com/company/dashboard",
  },
  {
    title: "Job Application",
    img: image6,
    link: "https://jobpilot.templatecookie.com/company/dashboard",
  },
  {
    title: "Plans & Billing",
    img: image7,
    link: "https://jobpilot.templatecookie.com/company/dashboard",
  },
  {
    title: "Job Alert",
    img: image8,
    link: "https://jobpilot.templatecookie.com/company/dashboard",
  },
  {
    title: "Settings",
    img: image9,
    link: "https://jobpilot.templatecookie.com/company/dashboard",
  },
];
</script>

<style scoped>
</style>
