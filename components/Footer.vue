<template lang="">
  <footer class="relative bg-dark-06 pt-200">
    <div class="container">
      <!-- footer top content  -->
      <div class="grid xl:grid-cols-3 pb-12 md:pb-72">
        <!-- Brand info -->
        <div class="mb-12">
          <!-- logo -->
          <div class="mb-6">
            <img src="~/assets/images/logo-white.svg" alt="brand-logo" />
          </div>
          <p class="text-body-16 text-gray-b4 max-w-sm font-light">
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
        </div>
        <!-- Navigation Menu -->
        <div class="grid sm:grid-cols-2 gap-7 sm:gap-0 col-span-2">
          <!-- Menu column  -->
          <div>
            <h2
              class="mb-7 text-body-16 leading-none tracking-widest uppercase text-white"
            >
              Html Template
            </h2>
            <div>
              <ul class="space-y-2 footer-menu">
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    Portfolio
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    About
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    Services
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    Pricing Plans
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    Contact
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- Menu column  -->
          <div>
            <h2
              class="mb-7 text-body-16 leading-none tracking-widest uppercase text-white"
            >
              PHP Scripts
            </h2>
            <div>
              <ul class="space-y-2 footer-menu">
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    Figma
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    Relik - Admin Dashboard Figma Template
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    E-tutor - Education & Online LMS Figma Template
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    Behance
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="text-body-16 capitalize text-gray-83"
                    to="/"
                  >
                    Themeforest
                  </nuxt-link>
                </li>
              </ul>
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
  name: "Footer",
};
</script>
<style lang=""></style>
