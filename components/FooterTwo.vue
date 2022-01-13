<template lang="">
  <footer class="relative bg-dark-06 pt-124">
    <div class="container">
      <!-- footer top content  -->
      <div class="grid xl:grid-cols-3 pb-12 md:pb-72">
        <!-- Brand info -->
        <div class="mb-12 col-span-2 xl:col-span-1">
          <!-- logo -->
          <div class="mb-6">
            <img src="~/assets/images/logo-white.svg" alt="brand-logo" />
          </div>
          <p class="text-body-16 text-gray-b4 md:max-w-sm font-light">
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
        </div>
        <!-- Navigation Menu -->
        <div class="grid sm:grid-cols-4 gap-7 sm:gap-0 col-span-2">
          <!-- Menu column  -->
          <div class="col-span-2 lg:col-span-1">
            <h2
              class="mb-7 text-body-20 leading-none tracking-widest uppercase text-white"
            >
              Quick Links
            </h2>
            <div>
              <ul class="space-y-2 footer-menu">
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    Product
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    Envato Profile
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    Contact us
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    About us
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- Menu column  -->
          <div class="col-span-2 lg:col-span-1">
            <h2
              class="mb-7 text-body-20 leading-none tracking-widest uppercase text-white"
            >
              Services
            </h2>
            <div>
              <ul class="space-y-2 footer-menu">
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    Docs
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    Changelog
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    License
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    Support
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-span-full lg:col-span-2 mt-8 lg:mt-0">
            <!-- subscribe to newsletter  -->
            <div class="">
              <h2 class="text-body-20 text-white uppercase mb-3">
                Subscribe to our newsletter
              </h2>
              <p class="font-light text-body-16 text-gray-9b mb-6">
                In tristique gravida libero sit amet ornare. Integer volutpat
                ligula vitae consequat interdum. Pellentesque a vehicula ligula.
              </p>
              <form action="#">
                <!-- email field  -->
                <div
                  class="relative overflow-hidden rounded-md py-3 px-18 mb-3 bg-white"
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
                    class="bg-transparent outline-none focus:outline-none text-body-16 font-light placeholder-gray-6a text-dark-06 pl-9 w-full"
                  />
                </div>
                <button
                  type="submit"
                  class="inline-block text-center text-button bg-blue-0b hover:bg-blue-800 transition-all w-full rounded-md text-white font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- footer copyright content  -->
      <div class="py-4 md:py-8 text-center border-t border-gray-24">
        <p class="text-body-16 text-white font-light capitalize">
          &copy; 2021 All Rights Reserved - Templatecookie
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterTwo",
};
</script>
<style lang=""></style>
