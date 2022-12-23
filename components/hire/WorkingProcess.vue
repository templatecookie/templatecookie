<template>
  <section class="bg-gray-50 ">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="mb-20 text-center">
        <!-- <h2 class="text-lg font-semibold text-indigo-600">Deploy faster</h2> -->
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our working process
        </p>
        <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          We're excited to partner with you to bring your online vision to life. Here's a quick overview of how we work and deliver the best possible outcome to our valued clients.
        </p>
      </div>
      <div class="grid grid-cols-12 gap-6">
        <div v-for="(item, index) in steps" :key="index" :data-aos="item.aos" :data-aos-delay="100 * index"
          class="sm:col-span-6 col-span-12 build-solution">
          <div class="p-6 rounded-lg border-2 border-blue-ce build-solution-wrap bg-white">
            <div class="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6 icon" v-html="item.icon">
              <!-- <nuxt-img :src="item.icon" alt="" /> -->
            </div>
            <div>
              <h3 class="textdark text-lg font-normal mb-3">{{ item.title }}</h3>
              <p class="text-dark-gray text-sm font-light">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      steps: [
        {
          icon: `<svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="64" cy="168" r="40" opacity="0.2"></circle><circle cx="192" cy="168" r="40" opacity="0.2"></circle><line x1="104" y1="92" x2="152" y2="92" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M229.6,154.3,185.9,55A24.1,24.1,0,0,0,152,55V168" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M104,168V55a24.1,24.1,0,0,0-33.9,0L26.4,154.3" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="64" cy="168" r="40" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><circle cx="192" cy="168" r="40" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>`,
          aos: "fade-up",
          title: "The Discovery Phase",
          text: "First, we'll schedule a consultation to learn about your business, goals, and target audience. We'll use this information to understand what you're looking for in your project and create a plan that meets your needs.",
        },
        {
          icon: `<svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="32" y="72" width="120" height="112" rx="8" opacity="0.2"></rect><line x1="152" y1="96" x2="208" y2="96" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="152" y1="160" x2="208" y2="160" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M64,72V40a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V184" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polyline points="64 104 76 152 92 116 108 152 120 104" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><rect x="32" y="72" width="120" height="112" rx="8" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect></svg>`,
          aos: "fade-up",
          title: "The Proposal",
          text: "Based on our discovery phase, we'll create a detailed project proposal outlining the scope of work, timeline, and budget. This proposal will give you a clear understanding of what to expect from our partnership.",
        },
        {
          icon: `<svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M112,136,94.2,53a24,24,0,0,1,23.5-29h20.6a24,24,0,0,1,23.5,29L144,136Z" opacity="0.2"></path><line x1="40" y1="224" x2="216" y2="224" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M112,136,94.2,53a24,24,0,0,1,23.5-29h20.6a24,24,0,0,1,23.5,29L144,136" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><rect x="40" y="136" width="176" height="56" rx="8" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect></svg>`,
          aos: "fade-up",
          title: "Make It Official",
          text: "If you like what you see in the proposal, we'll send you a contract to sign and return, along with any necessary deposits. This helps ensure that we're both on the same page and sets us up for a successful partnership.",
        },
        {
          icon: `<svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M211.4,127.4,184,72H72L44.6,127.4a8.2,8.2,0,0,0,.7,8.3L128,248l82.7-112.3A8.2,8.2,0,0,0,211.4,127.4ZM128,152a20,20,0,1,1,20-20A20.1,20.1,0,0,1,128,152Z" opacity="0.2"></path><line x1="128" y1="152" x2="128" y2="248" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><circle cx="128" cy="132" r="20" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M72,72V32a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V72" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M72,72,44.6,127.4a8.2,8.2,0,0,0,.7,8.3L128,248l82.7-112.3a8.2,8.2,0,0,0,.7-8.3L184,72Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
          aos: "fade-up",
          title: "Design and Development",
          text: "At this stage, our talented team will start working on bringing your project to life. We'll work closely with you throughout the process to ensure that the final product meets your vision and needs.",
        },
        {
          icon: `<svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M73.9,111.4h0L42.5,149a7.6,7.6,0,0,0-1.6,6.8l12.3,55.7A8,8,0,0,0,66,216l30-24C78.4,161.4,72.7,134.5,73.9,111.4Z" opacity="0.2"></path><path d="M181.5,110.7h0l31.4,37.7a7.6,7.6,0,0,1,1.6,6.8l-12.3,55.6a8,8,0,0,1-12.8,4.6l-30-24C177,160.7,182.7,133.8,181.5,110.7Z" opacity="0.2"></path><line x1="144" y1="224" x2="112" y2="224" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M123,19.8C104,35,40.5,95.8,96,192h64c54.4-96.2-8.2-156.9-27-172.2A7.8,7.8,0,0,0,123,19.8Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M73.9,111.4,42.5,149a7.6,7.6,0,0,0-1.6,6.8l12.3,55.7A8,8,0,0,0,66,216l30-24" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M181.5,110.6l32,38.4a7.6,7.6,0,0,1,1.6,6.8l-12.3,55.7A8,8,0,0,1,190,216l-30-24" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="128" cy="96" r="12"></circle></svg>  `,
          aos: "fade-up",
          title: "Testing and Launching",
          text: "Before we launch your project, we'll thoroughly test and debug it to ensure it's fully functional and error-free. When everything is ready, we'll launch your project and ensure it's live and accessible to your audience.",
        },
        {
          icon: `<svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M195.9,60.1a96,96,0,0,1,0,135.8l-39.6-39.6a40.1,40.1,0,0,0,0-56.6Z" opacity="0.2"></path><path d="M60.1,195.9a96,96,0,0,1,0-135.8L99.7,99.7a40.1,40.1,0,0,0,0,56.6Z" opacity="0.2"></path><circle cx="128" cy="128" r="96" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><circle cx="128" cy="128" r="40" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><line x1="99.7" y1="99.7" x2="60.1" y2="60.1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="156.3" y1="99.7" x2="195.9" y2="60.1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="156.3" y1="156.3" x2="195.9" y2="195.9" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="99.7" y1="156.3" x2="60.1" y2="195.9" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>`,
          aos: "fade-up",
          title: "Ongoing Support",
          text: "After launch, we'll provide ongoing maintenance and support to ensure that your project continues to function smoothly. You can count on us to be there for you every step of the way.",
        },
      ],
    }
  }
}
</script>

<style>

</style>
