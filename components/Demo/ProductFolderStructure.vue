<template>
  <div class="py-20 lg:py-124 bg-gray-f5">
    <div class="container">
      <div class="lg:grid grid-cols-2 gap-6">
        <div class="flex items-center mb-6 lg:mb-0">
          <div class="lg:pr-20 text-center lg:text-left">
            <h2 class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
              {{ data.title }}
            </h2>
            <p class="text-dark-06 text-base sm:text-lg font-light">
              {{ data.description }}
            </p>
          </div>
        </div>
        <div class="">
          <pre class="border border-gray-e6 p-8 rounded-2xl bg-white text-sm text-dark-06 pb-0 h-364 overflow-y-scroll custom-scroll" v-html="data.structure">
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style>

</style>
