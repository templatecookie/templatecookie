<template>
  <div>
    <Header />
    <nuxt />
    <!-- newsletter  -->
    <section class="relative lg:pt-124 z-10">
      <div class="container">
        <!-- call to action card  -->
        <div
          class="relative overflow-hidden bg-white border-gray-e6 border rounded-3xl p-6 md:p-12 -mb-16"
        >
          <!-- inner content wrapper  -->
          <div class="flex flex-col lg:flex-row lg:space-x-8">
            <!-- Join community  -->
            <div
              class="border-t lg:border-t-0 lg:border-r border-dark-e6 w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left pt-6 lg:pt-0"
            >
              <h2 class="text-body-24 text-dark-06 capitalize mb-3">
                Join Our community
              </h2>
              <p
                class="font-light text-body-16 text-dark-42 mb-6 max-w-full lg:max-w-536"
              >
                In tristique gravida libero sit amet ornare. Integer volutpat
                ligula vitae consequat interdum. Pellentesque a vehicula ligula.
              </p>
              <div class="flex justify-center lg:justify-start">
                <SocialLink />
              </div>
            </div>
            <!-- subscribe to newsletter  -->
            <div
              class="w-full lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0 text-center lg:text-left"
            >
              <h2 class="text-body-24 text-dark-06 capitalize mb-3">
                Subscribe to our newsletter
              </h2>
              <p class="font-light text-body-16 text-dark-42 mb-6 max-w-536">
                In tristique gravida libero sit amet ornare. Integer volutpat
                ligula vitae consequat interdum. Pellentesque a vehicula ligula.
              </p>
              <form action="#">
                <!-- email field  -->
                <div
                  class="relative overflow-hidden rounded-md border border-gray-e6 py-3 px-18 mb-3"
                >
                  <!-- icon  -->
                  <span
                    class="absolute top-1/2 left-[18px] transform -translate-y-1/2"
                  >
                    <img src="~/assets/images/svg/envelop.svg" alt="icon" />
                  </span>
                  <input
                    type="email"
                    placeholder="Email Address"
                    class="outline-none focus:outline-none text-body-16 font-light placeholder-gray-83 text-dark-06 pl-9 w-full"
                  />
                </div>
                <button
                  type="submit"
                  class="inline-block text-center text-button bg-blue-0b hover:bg-dark-06 transition-all w-full rounded-md text-white font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
import SocialLink from "../components/SocialLink.vue";
import GLOBAL_QUERY from '~/graphql/global'

export default { 
  components: { Header, Footer, SocialLink },
  // apollo: {
  //   global: {
  //     query: GLOBAL_QUERY,
  //     prefetch: true,
  //   },
  // },
  data () {
    return {
      global: null,
    }
  },
  methods: {
    async loadData(){
      // console.log(this.$nuxt.$apolloProvider.defaultClient)
      // console.log(this.$apolloProvider.defaultClient);
      const client = this.$nuxt.$apolloProvider.defaultClient;

      const { data } = await client.query({
        query: GLOBAL_QUERY,
      })
      
      console.log(data.global.data.attributes)
    }
  },
  mounted (){
    this.loadData();
  }
};
</script>
