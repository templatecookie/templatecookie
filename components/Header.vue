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
          <ul class="flex items-center space-x-5 nav-menu">
            <li class="nav-menu__item dropdown">
              <nuxt-link to="/">Free Template</nuxt-link>
              <!-- dropdown icon  -->
              <span class="dropdown-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.625 6.75L9 12.375L3.375 6.75"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
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
            </li>
            <li class="nav-menu__item">
              <nuxt-link to="/">UI template</nuxt-link>
              <span class="dropdown-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.625 6.75L9 12.375L3.375 6.75"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </li>
            <li class="nav-menu__item">
              <nuxt-link to="/">Html Template</nuxt-link>
            </li>
            <li class="nav-menu__item">
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
<style lang="scss">
.nav-menu {
  &__item {
    position: relative;
    .dropdown-icon {
      display: none;
    }
    &.dropdown {
      &-icon {
        display: block !important;
      }
    }
  }

  &__dropdown {
    position: absolute;
    top: calc(100% + 20px);
    left: 50%;
    transform: translateX(-50%);
    padding: 12px 0px;
    border-radius: 6px;
    width: 200px;
    background-color: #fff;
    border: 1px solid #e6e8ec;
    box-shadow: 0px 4px 16px 0px #14191a14;
    &::after {
      content: "";
      position: absolute;
      top: -18px;
      left: 50%;
      width: 0;
      height: 0;
      transform: translateX(-50%);
      border-left: 18px solid transparent;
      border-right: 18px solid transparent;
      border-bottom: 24px solid #fff;
    }
    li {
      a {
        width: 100%;
        padding: 6px 20px;
        text-align: center;
        display: inline-block;
      }
    }
  }
}
</style>
