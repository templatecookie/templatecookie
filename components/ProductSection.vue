<template>
  <section class="latest bg-gray-50" v-if="homepage && homepage?.latestProduct" id="products">
    <div class="mx-auto max-w-7xl py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 space-y-6">
      <div class="text-center">
        <h2 class="text-4xl md:text-5xl text-dark font-semibold capitalize tracking-1 mb-8">
          {{ homepage.latestProduct[0].title }}
        </h2>
        <p class="text-lg font-light max-w-lg mx-auto text-dark" v-if="homepage?.latestProduct[0].description">
          {{ homepage.latestProduct[0].description }}
        </p>
      </div>
      <!-- <div class=" flex justify-center">
        <RadioGroup v-model="tab"
          class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200">
          <RadioGroupOption as="template" v-for="option in tabs" :key="option.value" :value="option" v-slot="{ checked }">
            <div
              :class="[checked ? 'bg-blue-600 text-white' : 'text-gray-500', 'cursor-pointer rounded-full px-2.5 py-1']"
              class="text-base">
              <span>{{ option.label }}</span>
            </div>
          </RadioGroupOption>
        </RadioGroup>
      </div> -->
      <!-- <free-products v-if="tab.value === 'free'" /> -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div v-for="(item, index) in latestProducts" :key="index" class="flex items-stretch aos" data-aos="fade-up"
          :data-aos-delay="index * 100">
          <ProductCard :product="item" :large="false" bg="bg-white" />
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>

import { ref } from 'vue'
// import { RadioGroup, RadioGroupOption } from '@headlessui/vue'

defineProps({
  homepage: {
    type: Object,
    required: true
  },
  latestProducts: {
    type: Object,
    required: true
  }
})

// const tabs = [
//   { value: 'free', label: 'Free' },
//   { value: 'latest', label: 'Latest' },
// ]


// const tab = ref(tabs[0])


</script>
