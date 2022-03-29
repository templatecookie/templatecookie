<template>
  <div>
    <header class="fixed w-full py-3 z-50 bg-white shadow-6xl">
      <div class="container relative">
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
              <li class="nav-menu__item">
                <nuxt-link to="#">Demo</nuxt-link>
                <!-- dropdown icon  -->
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
              </li>
              <li class="nav-menu__item">
                <nuxt-link to="#">Pages</nuxt-link>
                <!-- dropdown icon  -->
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
              </li>
              <li class="nav-menu__item">
                <nuxt-link to="#">Components</nuxt-link>
                <!-- dropdown icon  -->
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
              </li>
              <li class="nav-menu__item">
                <nuxt-link to="#">Support</nuxt-link>
                <!-- dropdown icon  -->
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
              </li>
              <li class="flex items-center space-x-3">
                <a href="product.buy_url" target="_blank"
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
                <nuxt-link to="#"
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
                  Docs v.5.0
                </nuxt-link>
              </li>
            </ul>
          </div>
          <!-- Toggole -->
          <div class="lg:hidden">
            <div @click="openSidebar" :class="`toggle ${toggleStatus === true ? 'active' : ''} `">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="pb-36 pt-56 lg:pb-222 lg:pt-300 bg-dark-06 bg-content bg-right-bottom bg-no-repeat hero-demo"
      :style="hero">
      <div class="container">
        <div class="max-w-2xl sm:text-left text-center relative">
          <h1 class="tracking-01 font-semibold text-3xl md:text-4xl lg:text-title text-white mb-8">
            Adlisting Demo Product
          </h1>
          <p class="text-white font-light text-lg md:text-xl max-w-536">
            Adlisting - Buy Sell Classified Ads Marketplace Laravel Script
          </p>
          <div class="mt-8">
            <a href="#" target="_blank"
              class="block text-center sm:inline-block border-1.5 border-blue-0b bg-blue-0b font-medium rounded-7 py-3.5 px-8 text-body-17 text-white duration-300 mb-3 sm:mb-0 sm:mr-3">
              Buy Now
              <img class="inline-block ml-2" src="~/assets/images/svg/arrow-right.svg" alt="" />
            </a>
            <a href="#" target="_blank"
              class="block text-center sm:inline-block font-medium border-1.5 border-white rounded-7 py-3.5 px-8 text-body-17 text-white duration-300">
              Live Preview
            </a>
          </div>
          <div
            class="shadow-bs8 rounded-xl p-6 bg-white border border-gray-e6 flex items-center justify-center sm:justify-start absolute -bottom-44 lg:-bottom-64 sm:left-0 sm:transform-none transform -translate-x-1/2 left-1/2 sm:w-auto w-full">
            <p class="text-dark-06 text-body-14/24 mr-4 text-left">
              Compatible with:
            </p>
            <ul class="flex space-x-3">
              <li>
                <nuxt-link to="#"><img src="~@/assets/images/svg/icon1.svg" alt="" /></nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"><img src="~@/assets/images/svg/icon2.svg" alt="" /></nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"><img src="~@/assets/images/svg/icon3.svg" alt="" /></nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"><img src="~@/assets/images/svg/icon4.svg" alt="" /></nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="ex-small:grid grid-cols-12">
        <div v-for="(item, indexItem) in FunItems" :key="indexItem"
          class="col-span-6 lg:col-span-3 fun-column duration-300 hover:shadow-bs8">
          <div class="text-center border-r border-b border-gray-e6 px-1 py-7 md:px-8 md:py-10 fun-wrap">
            <h3 class="text-blue-0b text-3xl lg:text-heading-40 tracking-01 mb-2">
              {{ item.title }}
            </h3>
            <p class="text-dark-42 text-body-14 sm:text-base">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="py-20 lg:py-124">
      <div class="container">
        <div class="md:grid grid-cols-12 gap-6 mb-12 items-center">
          <div class="col-span-7 mb-4 md:mb-0">
            <h2 class="text-dark-06 text-body-32px md:text-4xl xl:text-title font-semibold tracking-01">
              Explore Relik <br />
              Notable Feature
            </h2>
          </div>
          <div class="col-span-5">
            <p class="text-dark-06 text-lg sm:text-xl font-light">
              You get all Bootstrap components fully customized. Besides, you
              receive numerous plugins out of the box and ready to use
            </p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-6">
          <div v-for="(item, itemIndex) in buisnessCard" :key="itemIndex"
            class="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6">
            <div :class="`bg-white rounded-lg p-8 business-card duration-300 hover:shadow-bs8 ${className}`">
              <div class="icon w-76 h-76 bg-gray-f0 rounded-lg flex items-center justify-center mb-7 duration-300 ">
                <img src="#" class="w-full h-full object-cover" alt="" />
              </div>
              <div>
                <h3 class="text-dark-06 text-xl mb-3">{{ item.title }}</h3>
                <p class="text-dark-42 text-base font-light">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-20 lg:py-124">

      <div class="py-20 lg:py-124">
        <div class="container">
          <div class="lg:max-w-536 m-auto text-center mb-10 lg:mb-16">
            <h2 class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
              Folder Structure
            </h2>
            <p class="text-dark-06 text-base sm:text-body-18 mb-6 lg:mb-9 font-light font-light">
              Nunc convallis semper justo quis tempor. Praesent molestie, lorem
              sed imperdiet tempor, libero urna semper urna
            </p>
          </div>
          <div class="relative">
            <swiper class="swiper shadow-bs012 rounded-xl" :options="swiperOptionTwo">
              <swiper-slide><img class="w-full h-full rounded-xl" src="~@/assets/images/all-img/slider4.png" alt="" />
              </swiper-slide>
              <swiper-slide><img class="w-full h-full rounded-xl" src="~@/assets/images/all-img/slider4.png" alt="" />
              </swiper-slide>
              <swiper-slide><img class="w-full h-full rounded-xl" src="~@/assets/images/all-img/slider4.png" alt="" />
              </swiper-slide>
              <swiper-slide><img class="w-full h-full rounded-xl" src="~@/assets/images/all-img/slider4.png" alt="" />
              </swiper-slide>
              <swiper-slide><img class="w-full h-full rounded-xl" src="~@/assets/images/all-img/slider4.png" alt="" />
              </swiper-slide>
            </swiper>
            <div class="custom-pagination flex justify-center pt-16">
              <div class="swiper-pagination" slot="pagination"></div>
            </div>
            <div class="single-slider">
              <div class="swiper-button-prev ml-6" slot="button-prev">
                <span
                  class="w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 bg-black bg-opacity-50 duration-300 hover:bg-blue-0b">
                  <img src="~@/assets/images/svg/caret-left.svg" alt="" />
                </span>
              </div>
              <div class="swiper-button-next mr-6" slot="button-next">
                <span
                  class="w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 bg-black bg-opacity-50 duration-300 hover:bg-blue-0b arrow-icon">
                  <img src="~@/assets/images/svg/caret-right.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="py-20 lg:py-124">
        <div class="container">
          <div class="text-center mb-8 lg:mb-12">
            <h2 class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
              45+ Beautiful hand-crafted pages
            </h2>
          </div>
          <div class="grid grid-cols-12 gap-6">
            <div v-for="(item, itemIndex) in linkThumb" :key="itemIndex"
              class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
              <div class="thumb-link">
                <a :href="item.url" target="_blank">
                  <img :src="item.img" alt="product-img"
                    class="w-full h-250 object-cover overflow-hidden shadow-bs12" />
                  <h3
                    class="text-white text-base font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-300 flex w-full justify-center opacity-0">
                    {{ item.title }}
                    <img class="ml-2" :src="item.img" alt="">
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="py-20 lg:py-124 bg-gray-f5">
        <div class="container">
          <div class="lg:grid grid-cols-2 gap-6">
            <div class="flex items-center mb-6 lg:mb-0">
              <div class="lg:pr-20 text-center lg:text-left">
                <h2 class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
                  Folder Structure
                </h2>
                <p class="text-dark-06 text-base sm:text-lg font-light">
                  Nunc convallis semper justo quis tempor. Praesent molestie,
                  lorem sed imperdiet tempor, libero urna semper urna, facilisis
                  vulputate velit arcu vitae mi. Donec ac nisi ex.
                </p>
              </div>
            </div>
            <div class="">
              <pre
                class="border border-gray-e6 p-8 rounded-2xl bg-white text-sm text-dark-06 pb-0 h-364 overflow-y-scroll custom-scroll">
      ├── templatecookie
          ├── assets
            ├── css
            ├── fonts 
            ├── images
            ├── js
          ├── components
          ├── pages
            ├── index.vue
            ├── hire-us.vue
            ├── product-demo.vue
            ├── product-details.vue
            ├── product-list.vue
            ├── billing.vue
            ├── billing.vue

                  </pre>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-20 lg:pt-124 md:pb-0 pb-20">
        <div class="container">
          <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 purchase-card-wrap">
              <div class="purchase-card p-10 bg-gray-f0 text-center rounded-2xl">
                <div class="icon w-84 h-84 m-auto bg-blue-0b rounded-full flex items-center justify-center mb-7">
                  <img src="https://i.imgur.com/xSZYYEg.png" alt="icon" />
                </div>
                <div>
                  <h3 class="text-dark-06 text-lg mb-3 font-medium"> Let’s Purchase This Product </h3>
                  <p class="text-dark-06 text-sm font-light mb-7"> Cras condimentum tincidunt dolor quis imperdiet.
                    Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes. </p>
                  <a href="#"
                    class="btn inline-block bg-blue-0b rounded-5 text-sm py-2.5 px-5 text-white duration-300 hover:bg-black">
                    Purchase Now
                    <img class="inline-block ml-2 duration-300" src="~/assets/images/svg/arrow-right.svg"
                      alt="brand-logo" /></a>
                </div>
              </div>
            </div>
            <div class="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 purchase-card-wrap">
              <div class="purchase-card p-10 bg-gray-f0 text-center rounded-2xl">
                <div class="icon w-84 h-84 m-auto bg-blue-0b rounded-full flex items-center justify-center mb-7">
                  <img src="https://i.imgur.com/OALz67a.png" alt="icon" />
                </div>
                <div>
                  <h3 class="text-dark-06 text-lg mb-3 font-medium"> Well-Organize Documentation </h3>
                  <p class="text-dark-06 text-sm font-light mb-7"> Cras condimentum tincidunt dolor quis imperdiet.
                    Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes. </p>
                  <a href="#"
                    class="btn inline-block bg-blue-0b rounded-5 text-sm py-2.5 px-5 text-white duration-300 hover:bg-black">
                    Documentation
                    <img class="inline-block ml-2 duration-300" src="~/assets/images/svg/arrow-right.svg"
                      alt="brand-logo" /></a>
                </div>
              </div>
            </div>
            <div class="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 purchase-card-wrap">
              <div class="purchase-card p-10 bg-gray-f0 text-center rounded-2xl">
                <div class="icon w-84 h-84 m-auto bg-blue-0b rounded-full flex items-center justify-center mb-7">
                  <img src="https://i.imgur.com/sbCT8wF.png" alt="icon" />
                </div>
                <div>
                  <h3 class="text-dark-06 text-lg mb-3 font-medium"> 24/7 Customer Support </h3>
                  <p class="text-dark-06 text-sm font-light mb-7"> Cras condimentum tincidunt dolor quis imperdiet.
                    Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes. </p>
                  <a href="#"
                    class="btn inline-block bg-blue-0b rounded-5 text-sm py-2.5 px-5 text-white duration-300 hover:bg-black">
                    Get Support
                    <img class="inline-block ml-2 duration-300" src="~/assets/images/svg/arrow-right.svg"
                      alt="brand-logo" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-28 lg:pt-40 bg-dark-06">
      <div class="container">
        <div class="text-center mb-40">
          <h2 class="text-white text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
            Let’s Get Started
          </h2>
          <p class="text-white text-base sm:text-lg mb-6 lg:mb-12 font-light">
            Pick a demo and start building your WordPress website today.
          </p>
          <a href="product.buy_url" target="_blank"
            class="inline-block bg-blue-0b rounded-7 py-4 px-9 text-body-17 text-white duration-300 hover:bg-black">
            Purchase Now
            <img class="inline-block ml-2" src="~/assets/images/svg/arrow-right.svg" alt="brand-logo" />
          </a>
        </div>
      </div>
      <div>
        <swiper class="swiper" :options="swiperOptionOne">
          <swiper-slide class="slider-full">
            <img class="w-full h-full border border-white p-3 pb-0" src="~@/assets/images/all-img/slider1.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-full border border-white p-3 pb-0" src="~@/assets/images/all-img/slider2.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-full border border-white p-3 pb-0" src="~@/assets/images/all-img/slider3.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-full border border-white p-3 pb-0" src="~@/assets/images/all-img/slider1.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-full border border-white p-3 pb-0" src="~@/assets/images/all-img/slider2.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-full border border-white p-3 pb-0" src="~@/assets/images/all-img/slider3.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-full border border-white p-3 pb-0" src="~@/assets/images/all-img/slider1.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-full border border-white p-3 pb-0" src="~@/assets/images/all-img/slider2.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-full border border-white p-3 pb-0" src="~@/assets/images/all-img/slider3.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-full border border-white p-3 pb-0" src="~@/assets/images/all-img/slider1.png" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  layout: "empty",
  components: {
    Swiper,
    SwiperSlide
  },
  name: "ProductDemo",
  head: {
    title: 'Product Demo Page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
  },
  data() {
    return {

      swiperOptionOne: {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        breakpoints: {
          1199: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },
        linkThumb: [{
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/z3lpl2i.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/btnaKPg.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/WeNt6qZ.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/aXNiPxi.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/LrX4y5U.png",
        },

        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/7A80zMR.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/nnXHQ9w.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/OkWf1Gj.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/BRCMvYp.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/Z3NJCTN.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/2kaiEQa.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/HLreajz.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/mbarwY4.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/8g0dDml.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/YMm1zRS.png",
        },

        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/gE2RT42.png",
        },
      ],
      swiperOptionTwo: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      buisnessCard: [{
          title: "Project Introduction",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          title: "User Experience Design",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          title: "User Interface Design",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          title: "Front-end Development",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          title: "Back-end Development",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          title: "Delivery & Client Feedback",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
      ],

      hero: {
        backgroundImage: "url(https://i.imgur.com/aBzS4DP.png)",
      },
      FunItems: [
      {
        title: "55+",
        text: "High-Quality Pages",
      },
      {
        title: "55+",
        text: "Figma UI Components",
      },
      {
        title: "24/7",
        text: "Dedicated Support all",
      },
      {
        title: "100%",
        text: "Money-Back Guarantee",
      },
      {
        title: "Doc",
        text: "Detailed Documentation",
      },
      {
        title: "Global",
        text: "Auto-Updatedable Style Guide",
      },
      {
        title: "Inter",
        text: "Free Google Font Used",
      },
      {
        title: "Fig",
        text: "Well-Organize & Easy-to-use File",
      },
      ],
    }
  },
};
</script>

<style lang="scss" scoped>
// animation
.slider-full {
  animation: scroll 26s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-250px * 7));
  }
}

// swiper single silder
.single-slider {

  .swiper-button-prev,
  .swiper-button-next {
    top: calc(50% - 15px);
    transform: translateY(-50%);
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    content: none;
  }
}

.tab-content-wrap {
  &.active {
    background-color: #0b63e5;

    h3,
    p {
      color: white;
    }
  }
}
</style>
