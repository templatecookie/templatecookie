<template>
  <header class="w-full py-3 bg-white shadow-6xl">
    <div class="container relative">
      <!-- header inner content  -->
      <div class="flex items-center justify-between">
        <nuxt-link to="/">
          <nuxt-img :src="data.url" alt="Templatecookie - Premium Quality Scripts & HTML Templates" />
        </nuxt-link>
        <!-- menu  -->
        <div class="hidden lg:block">
          <ul class="flex items-center space-x-5 nav-menu">
            <li class="nav-menu__item" v-for="(item, index) in menuItems" :key="index">
              <a v-if="blank" target="_blank" :href="item.url"> {{ item.name }} </a>
              <nuxt-link v-else :to="item.url"> {{ item.name }} </nuxt-link>
            </li>
            <!-- <li class="nav-menu__item">
              <nuxt-link to="/products"> Products </nuxt-link>
            </li>
            <li class="nav-menu__item">
              <nuxt-link to="/docs"> Documentation </nuxt-link>
            </li>
            <li class="nav-menu__item" v-if="global.supportUrl">
              <a :href="global.supportUrl" target="_blank"> Support </a>
            </li>
            <li class="nav-menu__item" v-else>
              <a href="mailto:templatecookie@gmail.com" target="_blank"> Support </a>
            </li>
            <li class="sidebar-menu__item">
              <div class="sidebar-menu__content">
                <nuxt-link to="/contact-us"> Contact Us </nuxt-link>
              </div>
            </li> -->
            <!-- <li >
              <a href="https://codecanyon.net/user/templatecookie" target="_blank" class="text-white hover:text-white text-sm capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded inline-block px-5 py-4">
                Codecanyon Profile
              </a>
            </li> -->
          </ul>
        </div>
        <!-- Toggole -->
        <div class="lg:hidden">
          <div @click="openSidebar" :class="`toggle ${toggleStatus === true ? 'active' : ''} `">
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar  -->
    <transition name="fade">
      <div class="sidebar absolute left-0 top-full w-full bg-white h-screen max-w-300 block lg:hidden z-50"
        v-if="sideBar">
        <div class="py-6">
          <ul class="sidebar-menu">
            <li class="sidebar-menu__item" v-for="(item, index) in menuItems" :key="index">
              <div class="sidebar-menu__content">
                <a v-if="blank" target="_blank" :href="item.url"> {{ item.name }} </a>
                <nuxt-link v-else :to="item.url"> {{ item.name }} </nuxt-link>
              </div>
            </li>
            <li class="sidebar-menu__button">
              <a href="https://codecanyon.net/user/templatecookie" target="_blank"
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
      toggleStatus: false,
      sideBar: false,
      menuItems: [
        {
          name: "Home",
          url: '/',
          blank: false,
        },
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
        {
          name: "Hire Us",
          url: '/hire-us',
          blank: false,
        },
        {
          name: "Documentation",
          url: '/docs',
          blank: false,
        },
        {
          name: "Contact Us",
          url: '/contact-us',
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
      this.toggleStatus = !this.toggleStatus;
      this.sideBar = !this.sideBar;
      document.body.classList.toggle("overlay");
    },
  },
};
</script>
