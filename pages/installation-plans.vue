<template>
  <div>
    <div class="bg-gray-f0 py-18">
      <div class="container">
        <div class="text-center max-w-4xl m-auto mb-20 lg:mb-28">
          <h1 class="text-dark-06 text-4xl md:text-5xl lg:text-6xl xl:text-heading-80 font-semibold mb-6 lg:mb-9 tracking-ls02">
            Installation Plans
          </h1>
          <p class="text-dark-06 text-lg sm:text-xl mb-6 lg:mb-9 max-w-xl m-auto font-light">
            YOU MUST HAVE TO PURCHASE LICENSE FIRST FROM <a href="https://codecanyon.net/user/templatecookie">CODECANYON</a> TO BUY THESE INSTALLATION PLANS.
          </p>
          <nuxt-link to="/" class="inline-block bg-blue-0b rounded-7 py-4 px-9 text-body-17 text-white duration-300 hover:bg-dark-06">
            View Plan
            <img class="inline-block ml-2" src="~/assets/images/svg/arrow-right.svg" alt="brand-logo" /></nuxt-link>
        </div>
      </div>
    </div>
    <!-- end -->

    <div class="py-20 lg:py-124">
      <div class="container">
        <div class="lg:max-w-3xl m-auto text-center mb-16">
          <h2
            class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl xl:text-heading-56 font-semibold mb-6 tracking-ls02">
            Your development plan, our development team.
          </h2>
          <p class="text-dark-06 text-lg sm:text-lg mb-6 lg:mb-9 font-light">
            You want to build a web app from scratch or just add some new
            features on a theme. We’ll give you an entire team of professional
            developers. Or just one. Pick what works best for you, and we’ll
            develop wonders.
          </p>
        </div>
        <div class="max-w-872 m-auto grid grid-cols-12 gap-6">
          <div class="col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-6">
            <div class="rounded-xl p-6 md:p-8 shadow-bs8 border border-gray-e6">
              <div class="mb-8">
                <img class="m-auto" src="~@/assets/images/all-img/thumb1.png" alt="" />
              </div>
              <div>
                <h3 class="text-2xl font-semibold mb-6 text-center text-dark-06">
                  Lend-a-dev.
                </h3>
                <p class="text-dark-42 font-light text-lg mb-4">
                  In need of some extra help customizing features? Borrow one of
                  our developers.
                </p>
                <p class="text-dark-42 font-light text-lg">
                  One is not enough for your growing development needs? We have
                  more. Profesional engineers that can augment your team now.
                </p>
                <nuxt-link to="/"><span
                    class="mt-7 w-full font-medium rounded-7 text-body-17/56px text-white inline-block bg-blue-0b text-center duration-300 hover:bg-dark-06">I
                    Want This</span></nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-6">
            <div class="rounded-xl p-6 md:p-8 shadow-bs8 border border-gray-e6">
              <div class="mb-8">
                <img class="m-auto" src="~@/assets/images/all-img/thumb2.png" alt="" />
              </div>
              <div>
                <h3 class="text-2xl font-semibold mb-6 text-center text-dark-06">
                  Get-a-team.
                </h3>
                <p class="text-dark-42 font-light text-lg">
                  In need of full coding power? You can get the entire dev team
                  with just the right roles:
                </p>
                <ul class="list-disc text-dark-06 text-base pt-4 pl-4">
                  <li class="mb-2">Professional engineers? Check.</li>
                  <li class="mb-2">Testers? Check.</li>
                  <li class="mb-2">UI/UX Designers? Check.</li>
                  <li class="mb-2">Project Managers? Check.</li>
                  <li>Your app is exactly what you want!</li>
                </ul>
                <nuxt-link to="/"><span
                    class="mt-7 w-full font-medium rounded-7 text-body-17/56px text-white inline-block bg-blue-0b text-center duration-300 hover:bg-dark-06">I
                    Want This</span></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end -->
  </div>
</template>
<script>
import SolutionCard from "../components/SolutionCard.vue";
import BusinessCard from "../components/BusinessCard.vue";
import ICountUp from "vue-countup-v2";

export default {
  components: {
    SolutionCard,
    BusinessCard,
    ICountUp,
  },
  head: {
    title: 'Hire Us',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
  },
  data() {
    return {
      options: {
        useEasing: true,
        useGrouping: true,
      },

      achivementList: [
        {
          value: 17,
          designation: "Awards Rewarded",
          icon: "https://i.imgur.com/XHzKgiy.png",
        },
        {
          value: 23,
          designation: "Years of Experience",
          icon: "https://i.imgur.com/RHw1fUb.png",
        },
        {
          value: 23,
          designation: "Happy Clients",
          icon: "https://i.imgur.com/ddKeF4B.png",
        },
        {
          value: 315,
          designation: "COMPLETED PROJECT",
          icon: "https://i.imgur.com/h8K5qbt.png",
        },
      ],

      projectIdea: {
        backgroundImage: "url(https://i.imgur.com/2HNdUlR.png)",
      },

      featureList: [
        {
          icon: "https://i.imgur.com/UhqXDIG.png",
          aos: "fade-up-right",
          title: "1. Understanding (UX)",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          icon: "https://i.imgur.com/bniudjt.png",
          aos: "fade-up-left",
          title: "2. Stage of Design (UI)",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          icon: "https://i.imgur.com/iGXELjX.png",
          aos: "fade-up-right",
          title: "3. Development",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          icon: "https://i.imgur.com/eWkTzLc.png",
          aos: "fade-up-left",
          title: "4. Project Delivery",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
      ],

      BusinessItems: [
        {
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
    };
  },
};
</script>

<style lang="scss" scoped>
.responsive-overly {
    @media (max-width: 1199px) {
      background-position: center!important;
      background-size: cover!important;
    }
}
</style>
