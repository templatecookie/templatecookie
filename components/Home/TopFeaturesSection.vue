<template>
  <section class="why-should bg-gray-f5 py-14 md:py-124">
    <div class="container">
      <!-- section title  -->
      <div class="mb-72 text-center">
        <h2 class="text-4xl md:text-title text-dark-06 font-semibold capitalize tracking-1 mb-8 max-w-md mx-auto">
          {{ data.info.title }}
        </h2>
        <p class="text-body-16 font-light max-w-lg mx-auto text-dark-06">
          {{ data.info.description }}
        </p>
      </div>
      <!-- Project services -->
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div v-for="(item, itemIndex) in data.features" :key="itemIndex">
          <div class="bg-white rounded-lg p-8 business-card duration-300 hover:shadow-bs8 text-center">
            <div class="icon w-76 h-76 bg-gray-f0 rounded-lg flex items-center justify-center mb-7 duration-300 m-auto">
              <img :src="fixImageUrl(item.icon)" alt="">
            </div>
            <div>
              <h3 class="text-dark-06 text-xl mb-3">{{ item.title }}</h3>
              <p class="text-dark-42 text-base font-light">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {

      productList: [
        {
          title: "Project Information",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          title: "User Experience Design",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          title: "Project Introduction",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          title: "Front-end Development",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          title: "Project Information",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          title: "Delivery & Client Feedback",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
      ],
    }
  }
}
</script>

<style>

</style>
