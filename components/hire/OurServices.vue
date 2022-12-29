<template>
  <div class="relative bg-white py-24 sm:py-32 lg:py-40">
    <div class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
      <!-- <h2 class="text-lg font-semibold text-primary">Deploy faster</h2> -->
      <p class="mt-2 text-3xl font-bold text- tracking-tight text-gray-900 sm:text-4xl">
        Services We Offer
      </p>
      <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">We offer different types of product design and development services based on our client’s demands. Here goes the list of top services we are offering at Template Cookie.</p>
      <div class="mt-20">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div class="pt-6" v-for="(item, index) in services" :key="index" :data-aos="item.aos" :data-aos-delay="100 * index">
            <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-center rounded-xl bg-primary p-3 shadow-lg" v-html="item.icon"> </span>
                </div>
                <h3 class="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">{{ item.name }}</h3>
                <p class="mt-5 text-base leading-7 text-gray-600">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      services: [
        {
          icon: `<svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="16" y1="80" x2="104" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="152" y1="80" x2="240" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><circle cx="128" cy="80" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><circle cx="40" cy="176" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><circle cx="216" cy="176" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M151.8,83.3A88.1,88.1,0,0,1,214.6,152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M41.4,152a88.1,88.1,0,0,1,62.8-68.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
          name: "Product Design (UI/UX)",
          aos: "fade-up",
          description: "Our product design team can help you create visually appealing and user-friendly products that meet both your functionality and aesthetic demands."
        },
        {
          icon: `<svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="128" y1="108" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="128" y1="40" x2="128" y2="68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><circle cx="128" cy="88" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><line x1="200" y1="188" x2="200" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="40" x2="200" y2="148" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><circle cx="200" cy="168" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><line x1="56" y1="156" x2="56" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="56" y1="40" x2="56" y2="116" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><circle cx="56" cy="136" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>`,
          name: "Custom Software Development",
          aos: "fade-up",
          description: "We offer custom software development services to help businesses create tailored software solutions that meet their specific needs and requirements."
        },
        {
          icon: `<svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><line x1="32" y1="80" x2="224" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M168,112a40,40,0,0,1-80,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
          name: "Online Marketplace Development",
          aos: "fade-up",
          description: "Looking to start your own online marketplace? Let us help you bring your vision to life with our state of the art marketplace development services."
        },
        {
          icon: `<svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="104" y1="92" x2="152" y2="92" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M229.6,154.3,185.9,55A24.1,24.1,0,0,0,152,55V168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M104,168V55a24.1,24.1,0,0,0-33.9,0L26.4,154.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="64" cy="168" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><circle cx="192" cy="168" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>`,
          name: "MVP Development",
          aos: "fade-up",
          description: "Want to test the market before committing to a full product launch? Our MVP development services can help you create a basic version of your product and gather feedback."
        },
        {
          icon: `<svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polyline points="192 116 144 164 120 140" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>`,
          name: "SAAS Development",
          aos: "fade-up",
          description: "We offer SAAS (Software as a Service) development services to help businesses create and launch their own subscription-based software products."
        },
      ]
    }
  }
}
</script>

<style>

</style>
