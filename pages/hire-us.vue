<template>
<div>
    <div class="bg-gray-f0 py-20 lg:py-30">
      <div class="container">
        <div class="text-center max-w-4xl	m-auto mb-28">
          <h1 class="text-dark-06 text-4xl md:text-5xl lg:text-6xl xl:text-heading-80 font-semibold mb-6 lg:mb-9 tracking-ls02">The easiest way to create your website.</h1>
          <p class="text-dark-06 text-lg sm:text-xl mb-6 lg:mb-9 max-w-xl m-auto">Golio gives you everything you need to create your website in minutes. Bootstrap code with a well-organized Figma file to design & develop your next websites in minutes.</p>
          <nuxt-link to="/" class="inline-block bg-blue-0b rounded-br7 py-4 px-9 text-body-17 text-white duration-300 hover:bg-dark-06">Let’s Work together <img class="inline-block ml-2" src="~/assets/images/svg/arrow-right.svg" alt="brand-logo" /></nuxt-link>
        </div>
      </div>
  </div>
  <div class="py-20 lg:py-30">
      <div class="container">
        <div class="lg:grid grid-cols-12 gap-7">
          <div class="col-span-6 items-center">
            <div class=" lg:max-w-536 lg:mb-0 mb-8">
              <h1 class="text-dark-06 text-4xl md:text-5xl  xl:text-heading-56 font-semibold mb-6  tracking-ls02">We design & build your solution.</h1>
            <p class="text-dark-06 text-lg sm:text-lg mb-6 lg:mb-9">Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex.  </p>
            <nuxt-link to="/" class="inline-block bg-blue-0b rounded-br7 py-4 px-9 text-body-17 text-white duration-300 hover:bg-dark-06">Request A Quote <img class="inline-block ml-2" src="~/assets/images/svg/arrow-right.svg" alt="brand-logo" /></nuxt-link>
            </div>
            
          </div>
          <div class="col-span-6">
              <div class="grid grid-cols-12 gap-6">
                  <div v-for="(item, itemIndex) in items" :key="itemIndex" class="sm:col-span-6 col-span-12 build-solution">
                    <SolutionCard :title="item.title" :text="item.text"/>
                  </div>
              </div>
          </div>
        </div>
      </div>
  </div>
</div>
  
</template>
<script>
import SolutionCard from "../components/SolutionCard.vue";
export default{
  name: "HireUsPage",
  component:{
    SolutionCard
  },
  data(){
    return{
      items:[
        {
          title: "1. Understanding (UX)",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
        {
          title: "2. Stage of Design (UI)",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
        {
          title: "3. Development",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
        {
          title: "4. Project Delivery",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        }
      ]
    }
  }
};
</script>