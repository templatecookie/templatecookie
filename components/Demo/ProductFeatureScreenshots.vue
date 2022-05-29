<template>
  <div class="py-20 lg:pt-124">
    <div class="container">
      <div class="lg:max-w-536 m-auto text-center mb-10 lg:mb-16">
        <h3 class="text-blue-0b text-base tracking-ls04 uppercase mb-4" v-if="data.subtitle">
          {{ data.subtitle }}
        </h3>
        <h2 class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
          {{ data.title }}
        </h2>
        <p class="text-dark-06 text-base sm:text-body-18 mb-6 lg:mb-9 font-light">
          {{ data.description }}
        </p>
      </div>
      <div id="tabs" class="lg:grid grid-cols-12 gap-6">
        <div class="col-span-8 order-2">
          <div class="content lg:pl-6 mb-6">
            <div class="tabcontent">
              <div class="h-340 md:h-600 overflow-hidden rounded-20">
                <img class="rounded-20"
                  :src="activeItem" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-4">
          <div class="tabs">
            <div v-for="(item, index) in data.features" :key="index" class="block mb-6 tab-content-wrap cursor-pointer border border-gray-e6 rounded-2xl p-8 duration-300" :class="activeItem == item.image.url ? 'bg-blue-500' : '' " @click="activeItem = item.image.url">
              <h3 class="font-medium text-2xl mb-4 duration-300" :class="activeItem == item.image.url ? 'text-white' : 'text-dark-06'">
                {{ item.title }}
              </h3>
              <p class="test-base font-light duration-300" :class="activeItem == item.image.url ? 'text-white opacity-80' : 'text-dark-42'">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      activeItem: this.data.features[0].image.url,
    };
  }
}
</script>

<style>

</style>
