<template>
  <header class="fixed w-full py-3 bg-white shadow-6xl z-50">
    <div class="container relative">
      <!-- header inner content  -->
      <div class="flex items-center justify-between">
        <div>
          <nuxt-link to="/">
            <img :src="fixImageUrl(data.logo)" alt="Templatecookie" />
            <!-- <img v-else src="~/assets/images/logo.svg" alt="Templatecookie " /> -->
          </nuxt-link>
        </div>
        <!-- menu  -->
        <div class="hidden lg:block">
          <ul class="flex items-center space-x-5 nav-menu" v-if="data && data.menuItems">
            <li class="nav-menu__item " v-for="(item, index) in data.menuItems" :key="index">
              <nuxt-link :to="{ name: 'category-slug', params: {slug: item.category.data.attributes.slug} }">{{ item.label }}</nuxt-link>
            </li>
            
            <li v-if="data.profile && data.profile.link">
              <a :href="data.profile.link.href" :target="data.profile.link.target" class="text-white hover:text-white text-sm capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded inline-block px-5 py-4">
                {{ data.profile.link.label }}
              </a>
            </li>
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
            <li class="sidebar-menu__item" v-for="(item, index) in data.menuItems" :key="index">
              <div class="sidebar-menu__content">
                <nuxt-link :to="{ name: 'category-slug', params: {slug: item.category.data.attributes.slug} }">{{ item.label }}</nuxt-link>
              </div>
            </li>
            <!-- <li class="sidebar-menu__item">
              <div class="sidebar-menu__content">
                <nuxt-link to="/">UI template</nuxt-link>
                <span class="dropdown-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.625 6.75L9 12.375L3.375 6.75" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </div>
            </li> -->
            
            <li class="sidebar-menu__button" v-if="data.profile && data.profile.link">
              <a :href="data.profile.link.label" :target="data.profile.link.target"
                class="text-white hover:text-white text-button capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded inline-block px-5 w-full text-center">
                {{ data.profile.link.label}}
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
