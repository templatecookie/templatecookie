<template>
  <section class="mt-[7rem] space-y-8">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 text-center">
      <h4
        class="mt-2 pb-14 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-10 after:bg-no-repeat after:w-full after:left-0 after:bottom-5 after:content-[url('~/assets/images/Underline.png')] after:absolute relative"
      >
        App Core Features
      </h4>
      <p class="text-lg font-medium max-w-lg mx-auto text-dark">
        Explore the essential functionalities that you really need
      </p>
    </div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 text-center">
      <div class="max-w-lg mx-auto">
        <ul class="flex">
          <li
            class="me-2 basis-[50%] inline-flex gap-2 pb-3 text-dark font-bold items-center justify-center border-b-2 border-transparent group hover:active-tab"
            role="button"
            :class="{ 'active-tab': tab === 'frontend' }"
            @click="tab = 'frontend'"
          >
            <div class="h-[40px] sm:h-[40px] w-[30px] sm:w-[40px]">
              <img
                src="~/assets/images/icons/frontend-tab.png"
                alt="frontend tab icon"
              />
            </div>

            <h5 class="text-lg">Frontend</h5>
          </li>
          <li
            class="me-2 basis-[50%] inline-flex justify-center gap-2 pb-3 text-dark font-bold items-center border-b-2 border-transparent group hover:active-tab"
            role="button"
            @click="tab = 'backend'"
            :class="{ 'active-tab': tab === 'backend' }"
          >
            <div class="h-[40px] sm:h-[40px] w-[30px] sm:w-[40px]">
              <img
                src="~/assets/images/icons/backend.png"
                alt="frontend tab icon"
              />
            </div>

            <h5 class="text-lg">Backend</h5>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <tabs-frontend-features v-if="tab === 'frontend'" />
      <tabs-backend-features v-if="tab === 'backend'" />
    </div>
  </section>
</template>

<script setup>
const tab = ref("frontend");
</script>

<style>
</style>
