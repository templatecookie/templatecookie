<template>
  <footer class="relative bg-dark-06 pt-40 lg:pt-200">
    <div class="container">
      <!-- footer top content  -->
      <div class="grid xl:grid-cols-3 pb-12 md:pb-72">
        <!-- Brand info -->
        <div class="mb-12">
          <!-- logo -->
          <div class="mb-6">
            <img v-if="data.logo.data.attributes.url" :src="fixUrl(data.logo.data.attributes.url)" alt="Templatecookie" />
            <img v-else src="~/assets/images/logo.svg" alt="Templatecookie " />
          </div>
          <p class="text-body-16 text-gray-b4 max-w-sm font-light">
            {{ data.description }}
          </p>
        </div>
        <!-- Navigation Menu -->
        <div class="grid sm:grid-cols-2 gap-7 sm:gap-0 col-span-2" v-if="data && data.menuItems">
          <!-- Menu column  -->
          <div v-for="item in data.menuItems" :key="item.id">
            <h2 class="mb-7 text-body-16 leading-none tracking-widest uppercase text-white">
              {{ item.label }}
            </h2>
            <div>
              <ul class="space-y-2 footer-menu" v-if="item.menuSubItems.length">
                <li v-for="dropdownItem in item.menuSubItems" :key="dropdownItem.id">
                  <nuxt-link class="text-body-16 capitalize text-gray-83" :to="dropdownItem.href">
                    {{ dropdownItem.label }}
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
};
</script>
