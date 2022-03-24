<template>
  <!-- newsletter  -->
  <section class="relative lg:pt-124 z-10">
    <div class="container">
      <!-- call to action card  -->
      <div class="relative overflow-hidden bg-white border-gray-e6 border rounded-3xl p-6 md:p-12 -mb-16">
        <div class="flex flex-col lg:flex-row lg:space-x-8">
          <!-- Join community  -->
          <div
            class="border-t lg:border-t-0 lg:border-r border-dark-e6 w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left pt-6 lg:pt-0">
            <h2 class="text-body-24 text-dark-06 capitalize mb-3">
              {{ data.social_title }}
            </h2>
            <p class="font-light text-body-16 text-dark-42 mb-6 max-w-full lg:max-w-536">
              {{ data.social_description }}
            </p>
            <div class="flex justify-center lg:justify-start">
              <SocialLink :social="data.social_medias" v-if="data && data.social_medias"/>
            </div>
          </div>
          
          <!-- subscribe to newsletter  -->
          <div class="w-full lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0 text-center lg:text-left">
            <h2 class="text-body-24 text-dark-06 capitalize mb-3">
              {{ data.newsletter_title }}
            </h2>
            <p class="font-light text-body-16 text-dark-42 mb-6 max-w-536">
              {{ data.newsletter_description }}
            </p>
            <form action="#">
              <div class="relative overflow-hidden rounded-md border border-gray-e6 py-3 px-18 mb-3">
                <span class="absolute top-1/2 left-[18px] transform -translate-y-1/2">
                  <img src="~/assets/images/svg/envelop.svg" alt="icon" />
                </span>
                <input type="email" placeholder="Email Address"
                  class="outline-none focus:outline-none text-body-16 font-light placeholder-gray-83 text-dark-06 pl-9 w-full" />
              </div>
              <button type="submit"
                class="inline-block text-center text-button bg-blue-0b hover:bg-dark-06 transition-all w-full rounded-md text-white font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SocialLink from "./SocialLink.vue"
export default {
    props: ["data"],
    data() {
        return {};
    },
    components: { SocialLink }
}
</script>

<style>

</style>
