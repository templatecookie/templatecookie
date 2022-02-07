<template>
  <div class="py-20 lg:py-124">
      <div class="container">
        <div class="md:grid grid-cols-12 gap-6 mb-12 items-center">
          <div class="col-span-7 mb-4 md:mb-0">
            <h2 class="text-dark-06 text-body-32px md:text-4xl xl:text-title font-semibold tracking-01">
              Explore Relik <br />
              Notable Feature
            </h2>
          </div>
          <div class="col-span-5">
            <p class="text-dark-06 text-lg sm:text-xl font-light">
              You get all Bootstrap components fully customized. Besides, you
              receive numerous plugins out of the box and ready to use
            </p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-6">
          <div v-for="(item, itemIndex) in buisnessCard" :key="itemIndex"
            class="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6">
            <BusinessCard className="shadow-bs8 border border-gray-e6" :title="item.title" :text="item.text" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    buisnessCard: [{
        title: "Project Introduction",
        text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
      },
      {
        title: "User Experience Design",
        text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
      },
      {
        title: "User Interface Design",
        text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
      },
      {
        title: "Front-end Development",
        text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
      },
      {
        title: "Back-end Development",
        text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
      },
      {
        title: "Delivery & Client Feedback",
        text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
      },
    ],
  })
}
</script>

<style>

</style>
