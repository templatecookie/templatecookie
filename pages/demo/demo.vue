<template>
  <div>
    <header class="fixed w-full py-3 z-50 bg-white shadow-6xl">
      <div class="container relative">
        <!-- header inner content  -->
        <div class="flex items-center justify-between">
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

    <div
      class="min-h-600 sm:min-h-840 pb-20 pt-40 flex items-center bg-dark-06 bg-cover xl:bg-contain bg-right-bottom bg-no-repeat hero-demo"
      :style="hero">
      <div class="container">
        <div class="lg:max-w-2xl sm:text-left text-center relative">
          <h1 class="tracking-01 font-semibold text-3xl md:text-4xl lg:text-title text-white mb-8">
            Relik - Admin Dashboard Figma Template
          </h1>
          <p class="text-white font-light text-lg md:text-xl lg:max-w-536">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci fugiat nisi incidunt reiciendis
            voluptatum provident corrupti voluptates. Est cum ab vitae dolorem libero rerum adipisci, iste voluptatem
            nisi nesciunt eligendi magnam tempora suscipit odit minus recusandae aspernatur veniam possimus deserunt
            labore praesentium repellendus dolores assumenda. Tempora repellat distinctio dolorem officiis.

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
              productFeatures - Explore Relik <br />
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
            <div class="bg-white rounded-lg p-8 business-card duration-300 hover:shadow-bs8">
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

    <div class="">
      <div class="py-20 lg:py-124">
        <div class="container">
          <h2 class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
            ProductFeatureScreenshots - Folder Structure
          </h2>
          <p class="text-dark-06 text-base sm:text-body-18 mb-6 lg:mb-9 font-light">
            Nunc convallis semper justo quis tempor. Praesent molestie, lorem
            sed imperdiet tempor, libero urna semper urna
          </p>
          <div class="lg:max-w-536 m-auto text-center mb-10 lg:mb-16">

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
          <div class="lg:max-w-536 m-auto text-center mb-10 lg:mb-16">
            <h3 class="text-blue-0b text-base tracking-ls04 uppercase mb-4">
              Explore our Gilio team services.
            </h3>
            <h2 class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
              DisplayFeatures - Feature Name 01
            </h2>
            <p class="text-dark-06 text-base sm:text-body-18 mb-6 lg:mb-9 font-light">
              Nunc convallis semper justo quis tempor. Praesent molestie, lorem
              sed imperdiet tempor, libero urna semper urna, facilisis vulputate
              velit arcu vitae mi. Donec ac nisi ex.
            </p>
          </div>
          <div id="tabs" class="lg:grid grid-cols-12 gap-6">
            <div class="col-span-8 order-2">
              <div class="content lg:pl-6 mb-6">
                <div v-if="activetab === '1'" class="tabcontent">
                  <div class="h-340 md:h-600 overflow-hidden rounded-20">
                    <img class="rounded-20" src="~@/assets/images/all-img/one.jpg" alt="" />
                  </div>
                </div>
                <div v-if="activetab === '2'" class="tabcontent">
                  <div class="h-340 md:h-600 overflow-hidden rounded-20">
                    <img class="rounded-20" src="~@/assets/images/all-img/two.jpg" alt="" />
                  </div>
                </div>
                <div v-if="activetab === '3'" class="tabcontent">
                  <div class="h-340 md:h-600 overflow-hidden rounded-20">
                    <img class="rounded-20" src="~@/assets/images/svg/info.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-4">
              <div class="tabs">
                <div
                  class="block mb-6 tab-content-wrap cursor-pointer border border-gray-e6 rounded-2xl p-8 duration-300"
                  v-on:click="activetab = '1'" v-bind:class="[activetab === '1' ? 'active' : '']">
                  <h3 class="text-dark-06 font-medium text-2xl mb-4 duration-300">
                    Back-end Development
                  </h3>
                  <p class="text-dark-42 test-base font-light duration-300">
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae; Sed nec diam gravida,
                    convallis lectus ut.
                  </p>
                </div>
                <div
                  class="block mb-6 tab-content-wrap cursor-pointer border border-gray-e6 rounded-2xl p-8 duration-300"
                  v-on:click="activetab = '2'" v-bind:class="[activetab === '2' ? 'active' : '']">
                  <h3 class="text-dark-06 font-medium text-2xl mb-4 duration-300">
                    Back-end Development
                  </h3>
                  <p class="text-dark-42 test-base font-light duration-300">
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae; Sed nec diam gravida,
                    convallis lectus ut.
                  </p>
                </div>
                <div class="block tab-content-wrap cursor-pointer border border-gray-e6 rounded-2xl p-8 duration-300"
                  v-on:click="activetab = '3'" v-bind:class="[activetab === '3' ? 'active' : '']">
                  <h3 class="text-dark-06 font-medium text-2xl mb-4 duration-300">
                    Back-end Development
                  </h3>
                  <p class="text-dark-42 test-base font-light duration-300">
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae; Sed nec diam gravida,
                    convallis lectus ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-20 lg:py-124">
        <div class="container">
          <div class="text-center mb-8 lg:mb-12">
            <h2 class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
              ProductPages - 45+ hand-crafted pages
            </h2>
          </div>
          <div class="grid grid-cols-12 gap-6">
            <div v-for="(item, itemIndex) in linkThumb" :key="itemIndex"
              class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
              <div class="thumb-link">
                <a :href="item.url" target="_blank">
                  <nuxt-img :src="item.img" alt="product-img"
                    class="w-full h-250 object-cover overflow-hidden shadow-bs12" />
                  <h3
                    class="text-white text-base font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-300 flex w-full justify-center opacity-0">
                    {{ item.title }} <img class="ml-2" src="~assets/images/svg/ArrowSquareOut.svg" alt="">
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
      <div class="py-20 lg:py-124 md:pb-0 pb-20">
        <div class="container">
          <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 purchase-card-wrap">
              <div class="purchase-card p-10 bg-gray-f0 text-center rounded-2xl">
                <div class="icon w-84 h-84 m-auto bg-blue-0b rounded-full flex items-center justify-center mb-7">
                  <img src="../../assets/images/svg/handshake.svg" alt="icon" />
                </div>
                <div>
                  <h3 class="text-dark-06 text-lg mb-3 font-medium"> Life time free updates </h3>
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
              <div class="purchase-card p-10 bg-purple-e3 text-center rounded-2xl">
                <div class="icon w-84 h-84 m-auto bg-purple-600 rounded-full flex items-center justify-center mb-7">
                  <img src="../../assets/images/svg/notebook.svg" alt="icon" />
                </div>
                <div>
                  <h3 class="text-dark-06 text-lg mb-3 font-medium"> Well-Organize Documentation </h3>
                  <p class="text-dark-06 text-sm font-light mb-7"> Cras condimentum tincidunt dolor quis imperdiet.
                    Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes. </p>
                  <a href="#"
                    class="btn inline-block bg-purple-600 rounded-5 text-sm py-2.5 px-5 text-white duration-300 hover:bg-black">
                    Documentation
                    <img class="inline-block ml-2 duration-300" src="~/assets/images/svg/arrow-right.svg"
                      alt="brand-logo" /></a>
                </div>
              </div>
            </div>
            <div class="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 purchase-card-wrap">
              <div class="purchase-card p-10 bg-green-e7 text-center rounded-2xl">
                <div class="icon w-84 h-84 m-auto bg-green-of rounded-full flex items-center justify-center mb-7">
                  <img src="../../assets/images/svg/headset.svg" alt="icon" />
                </div>
                <div>
                  <h3 class="text-dark-06 text-lg mb-3 font-medium"> 24/7 Customer Support </h3>
                  <p class="text-dark-06 text-sm font-light mb-7"> Cras condimentum tincidunt dolor quis imperdiet.
                    Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes. </p>
                  <a href="#"
                    class="btn inline-block bg-green-of rounded-5 text-sm py-2.5 px-5 text-white duration-300 hover:bg-black">
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

    <!-- Pricing Section Start -->
    <section class="pricing-section bg-white py-20 lg:py-124 relative">
    <div class="pricing-section-bg"></div>
      <div class="container">
        <div class="text-center">
          <h2
            class="text-dark-06 lg:w-3/5 m-auto  text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
            Explore our pricing plans
          </h2>
          <p class="text-dark-06 lg:w-3/5 m-auto  text-base sm:text-body-18 mb-8 lg:mb-20 font-light">
            Donec ligula ligula, porta at urna non, faucibus congue urna. Nullam nulla purus, facilisis vitae odio ac,
            tempus aliquet dolor.
          </p>
        </div>
        <div class="card-area m-auto justify-center lg:flex-row flex-col flex lg:gap-6">
          <div class="card bg-white p-8 rounded-2xl border border-gray-100 min-w-96 w-4/12">
            <div class="top-area flex justify-between items-center mb-8">
              <div class="card-icon inline-block p-5 rounded-lg bg-pink-50">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2"
                    d="M5.1731 11.6592C5.05973 11.8515 4.99996 12.0706 5 12.2938V27.7067C5 27.9285 5.05902 28.1463 5.17099 28.3378C5.28296 28.5292 5.44386 28.6874 5.63717 28.7962L19.3872 36.5306C19.5743 36.6358 19.7853 36.6911 20 36.6911L20.0016 36.6911L20.1483 20.0003L5.17313 11.6592L5.1731 11.6592Z"
                    fill="#F249C8" />
                  <path
                    d="M35 27.7068V12.2939C35 12.0721 34.941 11.8543 34.829 11.6629C34.717 11.4714 34.5561 11.3132 34.3628 11.2045L20.6128 3.4701C20.4257 3.36486 20.2147 3.30957 20 3.30957C19.7853 3.30957 19.5743 3.36486 19.3872 3.4701L5.63717 11.2045C5.44386 11.3132 5.28296 11.4714 5.17099 11.6629C5.05902 11.8543 5 12.0721 5 12.2939V27.7068C5 27.9286 5.05902 28.1464 5.17099 28.3379C5.28296 28.5293 5.44386 28.6876 5.63717 28.7963L19.3872 36.5307C19.5743 36.6359 19.7853 36.6912 20 36.6912C20.2147 36.6912 20.4257 36.6359 20.6128 36.5307L34.3628 28.7963C34.5561 28.6876 34.717 28.5293 34.829 28.3379C34.941 28.1464 35 27.9286 35 27.7068Z"
                    stroke="#F249C8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M27.6597 23.8298V15.7048L12.5 7.34375" stroke="#F249C8" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M34.8274 11.6607L20.148 20.0003L5.17285 11.6592" stroke="#F249C8" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20.1486 20L20.002 36.6908" stroke="#F249C8" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </div>
              <div class="price">
                <h2 class="text-5xl text-pink-500">$21
                  <span class="text-base text-gray-700">/One Time</span></h2>
              </div>
            </div>
            <div class="details-area">
              <h2 class="mb-2 text-gray-900 text-2xl">Standard</h2>
              <p class="mb-8 text-base text-gray-700">Upgrade your social portfolio with a stunning profile & enhanced
                shots.
              </p>
              <a href="#"
                class="btn inline-block bg-transparent border border-blue-500 rounded-5 text-sm py-2.5 px-5 text-blue-500 duration-300 hover:bg-black">
                <div class="flex gap-4">
                  <span>Get Started</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 12H20.25" stroke="#0B63E5" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#0B63E5" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </div>
              </a>
            </div>
            <div class="divider bg-gray-100 h-px my-8"></div>
            <div class="list-area">
              <ul>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#E7F5E8"/>
                    <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">User Dashboard</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#E7F5E8"/>
                    <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Post 3 Ads per week</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#E7F5E8"/>
                        <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                  </div>
                  <p class="text-gray-700 font-light">Multiple images & videos</p>
                </li>
                <li class="flex gap-3 mb-5 opacity-30">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z" fill="#E7F5E8"/>
                        <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <p class="line-through font-light">Basic customer support</p>
                </li>
                <li class="flex gap-3 mb-5 opacity-30">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z" fill="#E7F5E8"/>
                        <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <p class="line-through font-light">Featured ads</p>
                </li>
                <li class="flex gap-3 mb-5 opacity-30">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z" fill="#E7F5E8"/>
                        <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <p class="line-through font-light">Special ads badge</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="card bg-white p-8 rounded-2xl border border-gray-100 min-w-96 w-4/12">
            <div class="top-area flex justify-between items-center mb-8">
              <div class="card-icon inline-block p-5 rounded-lg bg-blue-50">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2" d="M5 12.5L20 21.25L35 12.5L20 3.75L5 12.5Z" fill="#0B63E5" />
                  <path d="M5 27.5L20 36.25L35 27.5" stroke="#0B63E5" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M5 20L20 28.75L35 20" stroke="#0B63E5" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M5 12.5L20 21.25L35 12.5L20 3.75L5 12.5Z" stroke="#0B63E5" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div class="price">
                <h2 class="text-5xl text-blue-500">$49
                  <span class="text-base text-gray-700">/One Time</span></h2>
              </div>
            </div>
            <div class="details-area">
              <h2 class="mb-2 text-gray-900 text-2xl">Premium</h2>
              <p class="mb-8 text-base text-gray-700">Quisque auctor erat velit, quis ultrices nisi vestibulum at. Donec
                vitae purus lorem.
              </p>
              <a href="#"
                class="btn inline-block bg-blue-500 border border-blue-500 rounded-5 text-sm py-2.5 px-5 text-blue-500 duration-300 hover:bg-black">
                <div class="flex gap-4">
                  <span class="text-white">Get Started</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 12H20.25" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </div>
              </a>
            </div>
            <div class="divider bg-gray-100 h-px my-8"></div>
            <div class="list-area">
              <ul>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#E7F5E8"/>
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">User Dashboard</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#E7F5E8"/>
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Post 3 Ads per week</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#E7F5E8"/>
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Multiple images & videos</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#E7F5E8"/>
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Basic customer support</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#E7F5E8"/>
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Featured ads</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#E7F5E8"/>
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Special ads badge</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="box">

        </div>
      </div>
    </section>
    <!-- Pricing Section End -->
    <pricing-plan />
    <!-- <exclusive-feature-left-image />
    <exclusive-feature-right-image /> -->

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
            <img class="" src="~@/assets/images/all-img/slider1.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-60 object-cover border border-b-0 border-white p-3 pb-0"
              src="~@/assets/images/all-img/slider2.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-60 object-cover border border-b-0 border-white p-3 pb-0"
              src="~@/assets/images/all-img/slider3.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-60 object-cover border border-b-0 border-white p-3 pb-0"
              src="~@/assets/images/all-img/slider1.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-60 object-cover border border-b-0 border-white p-3 pb-0"
              src="~@/assets/images/all-img/slider2.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-60 object-cover border border-b-0 border-white p-3 pb-0"
              src="~@/assets/images/all-img/slider3.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-60 object-cover border border-b-0 border-white p-3 pb-0"
              src="~@/assets/images/all-img/slider1.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-60 object-cover border border-b-0 border-white p-3 pb-0"
              src="~@/assets/images/all-img/slider2.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-60 object-cover border border-b-0 border-white p-3 pb-0"
              src="~@/assets/images/all-img/slider3.png" alt="" />
          </swiper-slide>
          <swiper-slide class="slider-full">
            <img class="w-full h-60 object-cover border border-b-0 border-white p-3 pb-0"
              src="~@/assets/images/all-img/slider1.png" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Swiper,
    SwiperSlide
  } from "vue-awesome-swiper";
  import "swiper/css/swiper.css";
import PricingPlan from "../../components/Demo/PricingPlanSection.vue";

export default {
    layout: "empty",
    components: {
        Swiper,
        SwiperSlide,
        PricingPlan,
    },
    name: "ProductDemo",
    head: {
      title: 'Product Demo Page',
      meta: [{
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'my website description'
        }
      ],
    },
    methods: {
      openSidebar() {
        this.toggleStatus = !this.toggleStatus;
        this.sideBar = !this.sideBar;
        document.body.classList.toggle("overlay");
      },
    },
    data() {
      return {
        toggleStatus: false,
        sideBar: false,
        activetab: '1',
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
        FunItems: [{
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
    mounted(){
      // const token = 'YOUR-API-TOKEN';
      // fetch(
      //   'https://graphql.datocms.com/',
      //   {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Accept': 'application/json',
      //       'Authorization': `Bearer ce32bbd78955d348af32c5f3fb0417`,
      //     },
      //     body: JSON.stringify({
      //       query: `{
      //         global{
      //           logo {
      //             url
      //             filename
      //             title
      //           }
      //         } 
      //       }`
      //     }),
      //   }
      // ).then(res => res.json()).then((res) => {
      //   console.log(res.data)
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
    }
  };

</script>

<style lang="scss">
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
