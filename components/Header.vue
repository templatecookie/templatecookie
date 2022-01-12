<template lang="">
  <header class="fixed w-full py-6 z-50" style="background: #ffffff99">
    <div class="container">
      <!-- header inner content  -->
      <div class="flex items-center justify-between">
        <!-- brand Logo -->
        <div>
          <nuxt-link to="/">
            <img src="~/assets/images/logo.svg" alt="brand-logo" />
          </nuxt-link>
        </div>
        <!-- menu  -->
        <div class="hidden lg:block">
          <ul class="flex items-center space-x-5 menu">
            <li class="menu__item">
              <nuxt-link to="/" class="text-body-16 capitalize text-dark-42"
                >Free Template</nuxt-link
              >
            </li>
            <li class="menu__item">
              <nuxt-link to="/" class="text-body-16 capitalize text-dark-42"
                >UI template</nuxt-link
              >
            </li>
            <li class="menu__item">
              <nuxt-link to="/" class="text-body-16 capitalize text-dark-42"
                >Html Template</nuxt-link
              >
            </li>
            <li class="menu__item">
              <nuxt-link to="/" class="button text-white">
                envato profile
              </nuxt-link>
            </li>
          </ul>
        </div>
        <!-- Toggole -->
        <div class="lg:hidden">
          <div
            @click="openSidebar"
            :class="`toggle ${toggleStatus === true ? 'active' : ''} `"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <!-- Sidebar  -->
      <div class="absolute" v-if="sideBar"></div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
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
    },
  },
};
</script>
<style lang="scss"></style>
