<template>
  <section class="bg-white py-[5rem]">
    <div class="mx-auto max-w-7xl flex flex-wrap gap-[6rem] items-center px-4">
      <div class="flex-1 order-2 sm:order-1" data-aos="fade-in">
        <h4
          class="pb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-5"
        >
          Read Product Documentation
        </h4>
        <nuxt-link
          target="_blank"
          href="/docs/jobpilot/introduction"
          class="border border-primary hover:bg-primary hover:text-white transition duration-200 ease-linear text-gray-900 rounded-md px-4 py-3 inline-flex items-center gap-2"
          >Documentation
          <span>
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
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
        </nuxt-link>
      </div>
      <div
        class="max-w-full shrink-0 lg:max-w-[550px] sm:order-2 order-1"
        data-aos="zoom-in"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <NuxtImg
          src="/images/documentation.png"
          alt="why choose us img"
          class="w-full"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style></style>
