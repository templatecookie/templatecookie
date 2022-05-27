<template>
  <header class="fixed w-full py-3 z-50 bg-white shadow-6xl">
    <div class="container relative">
      <div class="flex items-center justify-between">
        <div>
          <nuxt-link to="/">
            <img src="~/assets/images/logo.svg" alt="brand-logo" />
          </nuxt-link>
        </div>
        <div class="hidden lg:block">
          <ul class="flex items-center space-x-5 nav-menu">
            <!-- <li class="nav-menu__item">
              <nuxt-link to="#">Screenshot Gallery</nuxt-link>
              <span class="dropdown-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.625 6.75L9 12.375L3.375 6.75" stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <ul class="nav-menu__dropdown">
                <li>
                  <nuxt-link to="#">Dropdown item </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">Dropdown item </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">Dropdown item </nuxt-link>
                </li>
              </ul>
            </li> -->
            <li class="nav-menu__item">
              <nuxt-link to="#top-features">Top Features</nuxt-link>
            </li>
            <li class="nav-menu__item">
              <nuxt-link to="#screenshot-gallery">Screenshot Gallery</nuxt-link>
            </li>
            <li class="nav-menu__item">
              <nuxt-link to="#pages">Pages</nuxt-link>
            </li>
            <li class="nav-menu__item">
              <nuxt-link to="#support">Support</nuxt-link>
            </li>
            <li class="flex items-center space-x-3">
              <a href="#pricing"
                class="flex items-center justify-center text-white hover:text-white text-button capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded px-5 w-full text-center">
                Buy Now
                <span class="inline-block ml-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 12H20.25" stroke="white" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </span>
              </a>
              <a target="_blank" :href="product.docsUrl" v-if="product.docsUrl"
                class="flex items-center justify-center text-dark-06 hover:text-white text-button capitalize font-medium bg-gray-e6 hover:bg-dark-06 overflow-hidden rounded px-5 w-full text-center whitespace-nowrap">
                <span class="inline-block mr-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 8.75H13.75" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M8.75 11.25H13.75" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path
                      d="M16.25 3.125H3.75C3.40482 3.125 3.125 3.40482 3.125 3.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V3.75C16.875 3.40482 16.5952 3.125 16.25 3.125Z"
                      stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.25 3.125V16.875" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </span>
                Documentation
              </a>
            </li>
          </ul>
        </div>
        <div class="lg:hidden">
          <div @click="openSidebar" :class="`toggle ${toggleStatus === true ? 'active' : ''} `">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <!-- mobile menu -->
    <transition name="fade">
      <div class="sidebar absolute left-0 top-full w-full bg-white h-screen max-w-300 block lg:hidden" v-if="sideBar">
        <div class="py-6">
          <ul class="sidebar-menu">
            <!-- <li class="sidebar-menu__item">
              <div class="sidebar-menu__content">
                <nuxt-link to="#">Demo</nuxt-link>
                <span class="dropdown-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.625 6.75L9 12.375L3.375 6.75" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </div>
              <div class="sidebar-menu__dropdown">
                <ul>
                  <li>
                    <nuxt-link to="#">Dropdown item </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">Dropdown item </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">Dropdown item </nuxt-link>
                  </li>
                </ul>
              </div>
            </li> -->
            <li class="sidebar-menu__item">
              <div class="sidebar-menu__content">
                <nuxt-link to="#">Top Features</nuxt-link>
              </div>
            </li>
            <li class="sidebar-menu__item">
              <div class="sidebar-menu__content">
                <nuxt-link to="#">Screenshot Gallery</nuxt-link>
              </div>
            </li>
            <li class="sidebar-menu__item">
              <div class="sidebar-menu__content">
                <nuxt-link to="#">Pages</nuxt-link>
              </div>
            </li>
            <li class="sidebar-menu__item">
              <div class="sidebar-menu__content">
                <nuxt-link to="#">Support</nuxt-link>
              </div>
            </li>

            <li class="sidebar-menu__button">
              <a href="#pricing" target="_blank"
                class="flex items-center justify-center text-white hover:text-white text-button capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded px-5 w-full text-center">
                Buy Now
                <span class="inline-block ml-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 12H20.25" stroke="white" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </span>
              </a>
            </li>
            <!-- <li class="sidebar-menu__button">
              <nuxt-link to="#"
                class="flex items-center justify-center text-dark-06 hover:text-white text-button capitalize font-medium bg-gray-e6 hover:bg-dark-06 overflow-hidden rounded px-5 w-full text-center">
                <span class="inline-block mr-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 8.75H13.75" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M8.75 11.25H13.75" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path
                      d="M16.25 3.125H3.75C3.40482 3.125 3.125 3.40482 3.125 3.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V3.75C16.875 3.40482 16.5952 3.125 16.25 3.125Z"
                      stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.25 3.125V16.875" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </span>
                Docs v5.0
              </nuxt-link>
            </li> -->
          </ul>
        </div>
      </div>
    </transition>
  </header>
</template>
<script>
export default {
  name: "HeaderTwo",
  props: ['product'],
  data() {
    return {
      toggleStatus: false,
      sideBar: false,
    };
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
