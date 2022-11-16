<template>
  <header class="w-full py-3 bg-white drop-shadow-sm">
    <div class="container">
      <!-- header inner content  -->
      <div class="flex items-center justify-between">
        <nuxt-link to="/">
          <nuxt-img :src="data.url" alt="Templatecookie - Premium Quality Scripts & HTML Templates" />
        </nuxt-link>
        <!-- menu  -->
        <div class="hidden lg:block">
          <ul class="flex items-center space-x-5 nav-menu">
            <li v-for="(item, index) in menuItems" :key="index">
              <a class="px-3" v-if="item.blank" target="_blank" :href="item.url"> {{ item.name }} </a>
              <nuxt-link class="px-3" v-else :to="item.url"> {{ item.name }} </nuxt-link>
            </li>
            <!-- <li >
              <a href="https://1.envato.market/EaNJ2X" target="_blank" class="text-white hover:text-white text-sm capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded inline-block px-5 py-4">
                Codecanyon Profile
              </a>
            </li> -->
          </ul>
        </div>
        <div class="lg:hidden">
          <div @click.prevent="openSidebar()" class="toggle" :class="{ 'active' : mobileNav }">
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar  -->
    <!-- <div class="absolute top-0 left-0 w-screen h-screen z-10 bg-black/75 backdrop-blur-3xl inset-2"></div> -->
    <transition name="fade">
      <div class="sidebar drop-shadow-lg absolute left-0 top-0 z-50 w-full bg-white h-screen max-w-300 block lg:hidden" v-if="mobileNav">
        <div class="py-6">
          <div class="px-8 py-4">
            <nuxt-img :src="data.url" class="w-52" alt="Templatecookie - Premium Quality Scripts & HTML Templates" />
          </div>
          <ul class="sidebar-menu">
            <li v-for="(item, index) in menuItems" :key="index">
                <a v-if="item.blank" @click.native="openSidebar()" class="px-8 py-2 w-full flex" target="_blank" :href="item.url"> {{ item.name }} </a>
                <nuxt-link v-else @click.native="openSidebar()" class="px-8 py-2 w-full flex" :to="item.url"> {{ item.name }} </nuxt-link>
            </li>
            <li class="sidebar-menu__button">
              <a href="https://1.envato.market/EaNJ2X" target="_blank"
                class="text-white hover:text-white text-button capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded inline-block px-5 w-full text-center">
                Codecanyon Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </header>
</template>
<script>
export default {
  name: "Header",
  props: ['data'],
  data() {
    return {
      mobileNav: false,
      menuItems: [
        // {
        //   name: "Home",
        //   url: '/',
        //   blank: false,
        // },
        {
          name: "Products",
          url: '/products',
          blank: false,
        },
        {
          name: "Get Support",
          url: '/get-support',
          blank: false,
        },
        // {
        //   name: "Installation Plans",
        //   url: '/installation-plans',
        //   blank: false,
        // },
        {
          name: "Documentation",
          url: '/docs/',
          blank: false,
        },
        {
          name: "Contact Us",
          url: '/contact-us',
          blank: false,
        },
        {
          name: "Blog",
          url: '/blog',
          blank: false,
        },
      ]
    };
  },
  computed: {
    global() {
      return this.$store.getters.getGlobalData;
    }
  },
  methods: {
    openSidebar() {
      this.mobileNav = !this.mobileNav;
      // document.body.classList.toggle("overlay");
    },
  },
};
</script>
