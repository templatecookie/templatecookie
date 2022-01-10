<template>
  <div>
      <div class="py-28 lg:py-56 bg-dark-06 bg-content bg-right bg-no-repeat hero-demo" :style="DemoHero">
        <div class="container">
          <div class="max-w-2xl">
            <h1 class="tracking-ls01 font-semibold text-3xl md:text-4xl lg:text-title text-white mb-8">Relik - Admin Dashboard Figma Template</h1>
            <p class="text-white font-light text-lg md:text-xl max-w-536">👉 Relik is a beautiful, simple, developer-friendly, highly customizable  admin dashboard template  with a 💎 high-quality UI & well-organized Figma file 🔥.</p>
            <div class="mt-8">
              <nuxt-link to="/" class="inline-block border-1.5 border-blue-0b bg-blue-0b font-medium rounded-7 py-3.5 px-8 text-body-17 text-white duration-300 mr-3">Buy Now <img class="inline-block ml-2" src="~/assets/images/svg/arrow-right.svg" alt="" /></nuxt-link>
              <nuxt-link to="/" class="inline-block font-medium border-1.5 border-white rounded-7 py-3.5 px-8 text-body-17 text-white duration-300 ">Live Preview</nuxt-link>
            </div>
          </div>
      </div>
    </div>

    <div class="py-20 lg:py-124 ">
      <div class="container">
        <div class="md:grid grid-cols-12 gap-6 mb-12">
          <div class="col-span-7 max-w-sm mb-4 md:mb-0">
              <h2 class="text-dark-06 text-4xl xl:text-title font-semibold tracking-ls01">Explore Relik Notable Feature</h2>
          </div>
          <div class="col-span-5">
              <p class="text-dark-06 text-lg sm:text-xl lg:mb-9 font-light">You get all Bootstrap components fully customized. Besides, you receive numerous plugins out of the box and ready to use</p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-6">
              <div v-for="(item, itemIndex) in BusinessItems" :key="itemIndex" class="col-span-12 xl:col-span-4  lg:col-span-6 md:col-span-6">
                  <BusinessCard className="shadow-bs8 border border-gray-e6" :title="item.title" :text="item.text"/>
              </div>
          </div>
      </div>
    </div>
 
  </div>
  
  
</template>
<script>
import BusinessCard from "../components/BusinessCard.vue";
export default{
  name: "ProductDemo",
  components: {
    BusinessCard
  },

data(){
  return{
      DemoHero: {
        backgroundImage: "url(https://i.imgur.com/aBzS4DP.png)",
    },
    BusinessItems:[
        {
          title: "Project Introduction",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
        {
          title: "User Experience Design",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
        {
          title: "User Interface Design",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
        {
          title: "Front-end Development",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
        {
          title: "Back-end Development",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
        {
          title: "Delivery & Client Feedback",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
      ],
  }
}

  
}
</script>