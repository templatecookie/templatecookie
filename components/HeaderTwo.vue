<template lang="">
  <header class="fixed w-full py-6 z-50 bg-white shadow-6xl">
    <div class="container relative">
      <!-- header inner content  -->
      <div class="flex items-center justify-between">
        <!-- brand Logo -->
        <div>
          <nuxt-link to="#">
            <img src="~/assets/images/logo.svg" alt="brand-logo" />
          </nuxt-link>
        </div>
        <!-- menu  -->
        <div class="hidden lg:block">
          <ul class="flex items-center space-x-5 nav-menu">
            <li class="nav-menu__item">
              <nuxt-link to="#">Demo</nuxt-link>
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
              <nuxt-link to="#">Pages</nuxt-link>
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
              <nuxt-link to="#">Components</nuxt-link>
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
              <nuxt-link to="#">Support</nuxt-link>
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
            <li class="flex items-center space-x-3">
              <nuxt-link
                to="#"
                class="flex items-center justify-center text-white hover:text-white text-button capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded px-5 w-full text-center"
              >
                Buy Now
                <span class="inline-block ml-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 12H20.25"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.5 5.25L20.25 12L13.5 18.75"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </nuxt-link>
              <nuxt-link
                to="#"
                class="flex items-center justify-center text-dark-06 hover:text-white text-button capitalize font-medium bg-gray-e6 hover:bg-dark-06 overflow-hidden rounded px-5 w-full text-center whitespace-nowrap"
              >
                <span class="inline-block mr-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.75 8.75H13.75"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.75 11.25H13.75"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.25 3.125H3.75C3.40482 3.125 3.125 3.40482 3.125 3.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V3.75C16.875 3.40482 16.5952 3.125 16.25 3.125Z"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.25 3.125V16.875"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Docs v.5.0
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
    </div>

    <!-- Sidebar  -->
    <transition name="fade">
      <div
        class="sidebar absolute left-0 top-full w-full bg-white h-screen max-w-300 block lg:hidden"
        v-if="sideBar"
      >
        <!-- menu  -->
        <div class="py-6">
          <ul class="sidebar-menu">
            <li class="sidebar-menu__item">
              <div class="sidebar-menu__content">
                <nuxt-link to="#">Demo</nuxt-link>
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
            </li>
            <li class="sidebar-menu__item">
              <div class="sidebar-menu__content">
                <nuxt-link to="#">Pages</nuxt-link>
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
            </li>
            <li class="sidebar-menu__item">
              <div class="sidebar-menu__content">
                <nuxt-link to="#">Components</nuxt-link>
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
            </li>
            <li class="sidebar-menu__item">
              <div class="sidebar-menu__content">
                <nuxt-link to="#">Support</nuxt-link>
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
            </li>
            <li class="sidebar-menu__button">
              <nuxt-link
                to="#"
                class="flex items-center justify-center text-white hover:text-white text-button capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded px-5 w-full text-center"
              >
                Buy Now
                <span class="inline-block ml-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 12H20.25"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.5 5.25L20.25 12L13.5 18.75"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </nuxt-link>
            </li>
            <li class="sidebar-menu__button">
              <nuxt-link
                to="#"
                class="flex items-center justify-center text-dark-06 hover:text-white text-button capitalize font-medium bg-gray-e6 hover:bg-dark-06 overflow-hidden rounded px-5 w-full text-center"
              >
                <span class="inline-block mr-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.75 8.75H13.75"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.75 11.25H13.75"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.25 3.125H3.75C3.40482 3.125 3.125 3.40482 3.125 3.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V3.75C16.875 3.40482 16.5952 3.125 16.25 3.125Z"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.25 3.125V16.875"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Docs v5.0
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </header>
</template>
<script>
export default {
  name: "HeaderTwo",
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
<style lang="scss" scoped>
// Toggle Button
.toggle {
  width: 65px;
  height: 65px;
  display: flex;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  transition: all 0.1s linear;

  span {
    width: 40px;
    height: 2.8px;
    position: absolute;
    border-radius: 4px;
    background: #1863ff;
    transition: all 0.3s linear;

    &:nth-child(1) {
      width: 25px;
      left: 15px;
      transform: translateY(-12px);
    }
    &:nth-child(2) {
      width: 15px;
      left: 15px;
      transform: translateY(12px);
    }
  }

  &.active {
    span {
      &:nth-child(1) {
        width: 40px;
        transition-delay: 0.03s;
        transform: translateY(0px) rotate(45deg);
      }
      &:nth-child(2) {
        width: 40px;
        transition-delay: 0.06s;
        transform: translateY(0px) rotate(315deg);
      }
      &:nth-child(3) {
        transform: translateX(60px);
      }
    }
  }
}

.nav-menu {
  &__item {
    position: relative;
    display: flex;
    align-items: center;
    @media (max-width: 1024px) {
      justify-content: space-between;
    }
    .dropdown-icon {
      margin-left: 8px;
      transition: all 0.3s linear;
    }

    &:hover {
      a,
      .dropdown-icon {
        color: #0b63e5;
      }

      .dropdown-icon {
        transform: rotate(180deg);
      }

      .nav-menu__dropdown {
        opacity: 1;
        overflow: visible;
        pointer-events: all;
        li {
          a {
            color: #061c3d;
          }
        }
      }
    }

    a {
      font-size: 14px;
      line-height: 20px;
      color: #42526b;
      text-transform: capitalize;
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
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
    transition: all 0.3s ease-in-out;
    @media (max-width: 1024px) {
      position: relative;
      top: auto;
      left: auto;
    }
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
      @media (max-width: 1024px) {
        display: none;
      }
    }
    li {
      &:hover {
        a {
          background-color: #f0f5ff;
        }
      }
      a {
        font-size: 14px;
        line-height: 20px;
        text-transform: capitalize;
        color: #061c3d;
        font-weight: 300;
        width: 100%;
        padding: 6px 20px;
        display: inline-block;
        transition: all 0.2s linear;
      }
    }
  }
}

.sidebar {
  .sidebar-menu {
    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: #42526b;
        text-transform: capitalize;
      }
    }

    &__item {
      padding: 12px 32px;
      transition: all 0.3s ease-in-out;
      &:hover,
      &.active {
        background-color: #f0f5ff;
        .sidebar-menu__dropdown {
          max-height: 100%;
          pointer-events: all;
          visibility: visible;
          overflow: auto;
        }
      }
      .sidebar-menu__dropdown {
        max-height: 0;
        pointer-events: none;
        visibility: hidden;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        ul {
          padding-top: 6px;
          li {
            a {
              font-size: 14px;
              line-height: 20px;
              font-weight: 300;
              text-transform: capitalize;
              width: 100%;
              padding: 6px 12px;
              display: inline-block;
              &:hover {
                color: #0b63e5;
              }
            }
          }
        }
      }
    }

    &__button {
      margin: 12px 32px;
    }
  }
}

/* Sidbar transition animation  */
.fade-enter-active,
.fade-leave-active {
  transform: translateX(0px);
  transition: all 0.4s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-300px);
}
</style>
