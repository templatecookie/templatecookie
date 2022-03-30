<template>
  <div class="container">
    <div class="ex-small:grid grid-cols-12">
      <div v-for="(item, indexItem) in data" :key="indexItem"
        class="col-span-6 lg:col-span-3 fun-column duration-300 hover:shadow-bs8">
        <div class="text-center border-r border-b border-gray-e6 px-1 py-7 md:px-8 md:py-10 fun-wrap">
          <h3 class="text-blue-0b text-3xl lg:text-heading-40 tracking-01 mb-2">
            {{ item.value }}
          </h3>
          <p class="text-dark-42 text-body-14 sm:text-base">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style>

</style>
