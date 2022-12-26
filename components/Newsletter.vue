<template>
  <!-- newsletter  -->
  <section class="relative lg:pt-124 z-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <!-- call to action card  -->
      <div class="relative overflow-hidden bg-white border-gray-f0 border rounded-3xl p-6 md:p-12 -mb-16">
        <div class="flex flex-col lg:flex-row lg:space-x-8">
          <!-- Join community  -->
          <div
            class="border-t lg:border-t-0 lg:border-r border-dark-e6 w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left pt-6 lg:pt-0">
            <h2 class="text-2xl textdark capitalize mb-3">
              {{ newsletter.socialTitle }}
            </h2>
            <p class="font-light text-base text-dark-gray mb-6 max-w-full lg:max-w-536">
              {{ newsletter.socialDescription }}
            </p>
            <div class="flex justify-center lg:justify-start">
              <SocialLink :social="newsletter.socials" v-if="data && newsletter.socials"/>
            </div>
          </div>
          
          <!-- subscribe to newsletter  -->
          <div class="w-full lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0 text-center lg:text-left">
            <h2 class="text-2xl textdark capitalize mb-3">
              {{ newsletter.newsletterTitle }}
            </h2>
            <p class="font-light text-base text-dark-gray mb-6 max-w-536">
              {{ newsletter.newsletterDescription }}
            </p>
            <form action="https://www.getrevue.co/profile/templatecookie/add_subscriber" method="post" target="_blank" name="revue-form">
              <div class="relative overflow-hidden rounded-md border border-gray-f0 py-3 px-18 mb-3">
                <span class="absolute top-1/2 left-[18px] transform -translate-y-1/2">
                  <img src="/icons/envelop.svg" alt="icon" />
                </span>
                <input type="email" placeholder="Email Address" name="member[email]"
                  class="outline-none focus:outline-none text-base font-light placeholder-dark-gray textdark pl-9 w-full" />
              </div>
              <button type="submit" name="member[subscribe]"
                class="inline-block text-center text-sm bg-primary hover:bg-dark transition-all w-full rounded-md text-white font-medium">
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
  components: { 
    SocialLink
  },

  computed: {
    newsletter() {
      return this.data[0]
    }
  }
}
</script>

<style>

</style>
