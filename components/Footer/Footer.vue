<template>
  <footer class="bg-dark-06 pt-40 lg:pt-200">
    <div class="container">
      <div class="grid xl:grid-cols-3 pb-10 md:pb-16">
        <div class="mb-8">
          <div class="mb-6">
            <img v-if="footer.logo.url" :src="footer.logo.url" alt="Templatecookie" />
            <img v-else src="~/assets/images/logo.svg" alt="Templatecookie " />
          </div>
          <p class="text-body-16 text-gray-b4 max-w-sm font-light">
            {{ footer.description }}
          </p>
        </div>
        <!-- Navigation Menu -->
        <div class="grid sm:grid-cols-2 gap-7 sm:gap-0 col-span-2" v-if="footer && footer.menuitems">
          <div v-for="item in footer.menuitems" :key="item.id">
            <h2 class="mb-7 text-body-16 leading-none tracking-widest uppercase text-white">
              {{ item.label }}
            </h2>
            <div>
              <ul class="space-y-2 footer-menu" v-if="item.products">
                <li v-for="(subItem, index) in item.products" :key="index">
                  <nuxt-link class="text-body-16 capitalize text-gray-83" :to="{ name: 'demo-slug', params: {slug: subItem.slug} }">
                    {{ subItem.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul class="flex gap-4 flex-wrap items-center justify-center pb-6 pt-6 border-t border-gray-24">
        <!-- <li><nuxt-link to="/hire-us" class="mr-4 text-base font-light text-gray-83">Hire Us</nuxt-link></li> -->
        <li><nuxt-link to="/docs/" class="text-base font-light text-gray-83">Documentation</nuxt-link></li>
        <li><a href="https://themeforest.net/user/templatecookie" target="_blank" class="text-base font-light text-gray-83">Themeforest Profile</a></li>
        <li><a href="https://codecanyon.net/user/templatecookie" target="_blank" class="text-base font-light text-gray-83">Codecanyon Profile</a></li>
        <li><a href="https://zakirsoft.notion.site/1b82679fb8a94ed5b8da224bf0722418?v=91846e018e6948e18e9365fb2450e0f1" target="_blank" class="text-base font-light text-gray-83">Product Roadmap</a></li>
      </ul>
      <!-- footer copyright content  -->
      <div class="py-4 text-center border-t border-gray-24">
        <p class="text-sm text-gray-500 font-light capitalize">
          &copy; {{ new Date().getFullYear() }} All Rights Reserved -
          Templatecookie
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  props: ['data'],
  computed: {
    footer() {
      return this.data[0]
    }
  }
};
</script>
