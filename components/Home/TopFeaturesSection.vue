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
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2"
                  d="M18 31.5C25.4558 31.5 31.5 25.4558 31.5 18C31.5 10.5442 25.4558 4.5 18 4.5C10.5442 4.5 4.5 10.5442 4.5 18C4.5 25.4558 10.5442 31.5 18 31.5Z"
                  fill="#0B63E5" />
                <path
                  d="M18 31.5C25.4558 31.5 31.5 25.4558 31.5 18C31.5 10.5442 25.4558 4.5 18 4.5C10.5442 4.5 4.5 10.5442 4.5 18C4.5 25.4558 10.5442 31.5 18 31.5Z"
                  stroke="#0B63E5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.875 16.875H18V24.75H19.125" stroke="#0B63E5" stroke-width="2.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M18.4375 11.8125C18.4375 12.0541 18.2416 12.25 18 12.25C17.7584 12.25 17.5625 12.0541 17.5625 11.8125C17.5625 11.5709 17.7584 11.375 18 11.375C18.2416 11.375 18.4375 11.5709 18.4375 11.8125Z"
                  fill="#0B63E5" stroke="#0B63E5" stroke-width="2.5" />
              </svg>
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
