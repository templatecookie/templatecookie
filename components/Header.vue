<template lang="">
  <header class="relative py-6" style="background: #ffffff99">
    <div class="container flex items-center justify-between">
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
        <div class="toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang=""></style>
