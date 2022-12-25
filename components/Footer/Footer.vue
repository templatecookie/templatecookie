<template>
<div>
  <footer class="bg-gray-900 mt-20" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-md pt-12 px-4 sm:max-w-lg sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8 lg:pt-24">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <img class="h-10" v-if="footer.logo.url" :src="footer.logo.url" alt="Templatecookie" />
          <img class="h-10" v-else src="/logo-white.svg" alt="Templatecookie" />
          <p class="text-base text-gray-400">
            {{ footer.description }}
          </p>
          <div class="flex space-x-6" v-if="newsletter[0].socials && newsletter[0].socials">
            <a :href="item.url" class="text-gray-400 hover:text-gray-300 h-10 w-10 flex justify-center items-center" v-for="item in newsletter[0].socials" :key="item.name">
              <span class="sr-only">Facebook</span>
              <img :src="item.icon.url" alt="">
            </a>
          </div>
        </div>
        <div class="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div>
            <h3 class="text-base font-medium text-gray-200">Company</h3>
            <ul role="list" class="mt-4 space-y-4">
              <li>
                <nuxt-link to="/hire-us" class="text-base text-gray-400 hover:text-gray-300">Hire Us</nuxt-link>
              </li>

              <li>
                <nuxt-link to="/installation-plans" class="text-base text-gray-400 hover:text-gray-300">Installation Plans</nuxt-link>
              </li>

              <li>
                <nuxt-link to="/get-support" class="text-base text-gray-400 hover:text-gray-300">Get Support</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/docs" class="text-base text-gray-400 hover:text-gray-300">Documentation</nuxt-link>
              </li>
              <li>
                <a href="https://1.envato.market/EaNJ2X" target="_blank" class="text-base text-gray-400 hover:text-gray-300">Codecanyon Profile</a>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0" v-for="item in footer.menuitems" :key="item.id">
            <h3 class="text-base font-medium text-gray-200">{{ item.label }}</h3>
            <ul role="list" class="mt-4 space-y-4" v-if="item.products">
              <li v-for="(subItem, index) in item.products" :key="index">
                <nuxt-link class="text-base text-gray-400 hover:text-gray-300" :to="{ name: 'demo-slug', params: {slug: subItem.slug} }">{{ subItem.name }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t border-gray-700 py-6 md:flex md:items-center md:justify-between">
        <div class="md:order-2">
          <img class="h-[37px] w-[390px]" src="/images/payment-gateway.svg" />
        </div>
        <p class="mt-8 text-sm text-gray-400 md:order-3 md:mt-0">
          &copy; {{ new Date().getFullYear() }} All Rights Reserved -
          Templatecookie
        </p>
      </div>
    </div>
  </footer>
</div>
</template>
<script>
export default {
  name: "Footer",
  props: ['data', 'newsletter'],
  computed: {
    footer() {
      return this.data[0]
    }
  }
};
</script>
