<template>
  <!-- Features -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Grid -->
    <div
      class="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-8 text-center"
    >
      <!-- Stats -->
      <div>
        <count-up
          :end-val="6"
          class="mt-2 sm:mt-3 text-4xl sm:text-7xl font-bold text-primary"
          :options="{
            enableScrollSpy: true,
          }"
        >
          <template #prefix> 0 </template>
          <template #suffix> + </template>
        </count-up>

        <p class="mt-1 text-gray-900 font-bold">Different Home Pages</p>
      </div>
      <!-- End Stats -->

      <!-- Stats -->
      <div>
        <count-up
          :end-val="10"
          class="mt-2 sm:mt-3 text-4xl sm:text-7xl font-bold text-primary"
          :options="{
            enableScrollSpy: true,
          }"
        >
          <template #suffix> + </template>
        </count-up>
        <p class="mt-1 text-gray-900 font-bold">Job Pages</p>
      </div>
      <!-- End Stats -->
      <!-- Stats -->
      <div>
        <count-up
          :end-val="20"
          class="mt-2 sm:mt-3 text-4xl sm:text-7xl font-bold text-primary"
          :options="{
            enableScrollSpy: true,
          }"
        >
          <template #suffix> + </template>
        </count-up>
        <p class="mt-1 text-gray-900 font-bold">Inner Pages</p>
      </div>
      <!-- End Stats -->

      <!-- Stats -->
      <div>
        <count-up
          :end-val="10"
          class="mt-2 sm:mt-3 text-4xl sm:text-7xl font-bold text-primary"
          :options="{
            enableScrollSpy: true,
          }"
        >
          <template #suffix> + </template>
        </count-up>
        <p class="mt-1 text-gray-900 font-bold">Blog Pages</p>
      </div>
      <!-- End Stats -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Features -->
</template>

<script setup>
import CountUp from "vue-countup-v3";
</script>
