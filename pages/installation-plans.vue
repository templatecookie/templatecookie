<template>
  <div>
    <section class="realtive py-12 lg:py-20 bg-no-repeat bg-center bg-cover"
      :style="{ backgroundImage: `url(${bannerImg})` }">
      <div class="container">
        <div class="text-center">
          <h1 class="text-4xl md:text-heading-40 text-dark-06 mb-6 max-w-680 mx-auto font-semibold">
            Installation Plans
          </h1>
          <p class="text-lg md:text-body-18 text-dark-06 mb-8 max-w-full md:max-w-536 mx-auto font-light">
            You must have to purchase license first from Themeforest & codecanyon to buy these installation plans
          </p>
        </div>
      </div>
    </section>
    <!-- end -->

    <section>
      <div class="container py-[124px]">
        <h2 class="mb-6 text-2xl font-medium">Chose your purchased product</h2>
        <div class="grid grid-cols-4 gap-6">
          <div class="" v-for="i in 8" :key="i">
            <input class="hidden" type="checkbox" name="" :id="'first'+i" :value="i" v-model="isChecked">
            <label :for="'first'+i">
              <div class="flex items-center gap-3 rounded-xl p-5"
                :class="isChecked.includes(i) ? 'border-2 border-[#0B63E5] bg-white': 'bg-[#F5F6F7] border-2 border-transparent'">
                <div class="">
                  <img class="" src="../assets/images/all-img/clickon.png" alt="">
                </div>
                <h2 class="text-base text-[#061C3D]">Clicon - eCommerce Laravel Script (Single Vendor)</h2>
              </div>
            </label>
          </div>

        </div>
      </div>
    </section>
    <!-- end -->
    <section class="pricing-section bg-white">
      <div class="container">
        <div class="text-center">
          <h2 class="text-dark-06  md:text-4xl lg:text-5xl lg:leading-[56px] font-semibold mb-6 tracking-01">
            Jobpilot Installation Pricing Plan
          </h2>
          <p class="text-dark-06 lg:w-3/5 m-auto  text-base sm:text-body-18 mb-8 lg:mb-20 font-light">
            Donec ligula ligula, porta at urna non, faucibus congue urna. Nullam nulla purus, facilisis vitae odio ac,
            tempus aliquet dolor.
          </p>
        </div>
        <div class="card-area m-auto justify-center lg:flex-row flex-col flex lg:gap-6">
          <div
            class="card bg-white p-8 rounded-2xl border border-gray-100 border-t-4 border-t-[#FF8800] min-w-96 w-4/12">
            <div class="top-area flex justify-between items-center mb-8">
              <div class="card-icon inline-block p-5 rounded-lg bg-[#FFF9EE]">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2"
                    d="M5.1731 11.6589C5.05973 11.8512 4.99996 12.0704 5 12.2936V27.7065C5 27.9283 5.05902 28.1461 5.17099 28.3375C5.28296 28.529 5.44386 28.6872 5.63717 28.7959L19.3872 36.5303C19.5743 36.6356 19.7853 36.6909 20 36.6908L20.0016 36.6909L20.1483 20L5.17313 11.659L5.1731 11.6589Z"
                    fill="#FF8800" />
                  <path
                    d="M35 27.7065V12.2936C35 12.0718 34.941 11.854 34.829 11.6625C34.717 11.4711 34.5561 11.3128 34.3628 11.2041L20.6128 3.46973C20.4257 3.36449 20.2147 3.3092 20 3.3092C19.7853 3.3092 19.5743 3.36449 19.3872 3.46973L5.63717 11.2041C5.44386 11.3128 5.28296 11.4711 5.17099 11.6625C5.05902 11.854 5 12.0718 5 12.2936V27.7065C5 27.9283 5.05902 28.1461 5.17099 28.3375C5.28296 28.529 5.44386 28.6872 5.63717 28.7959L19.3872 36.5303C19.5743 36.6355 19.7853 36.6908 20 36.6908C20.2147 36.6908 20.4257 36.6355 20.6128 36.5303L34.3628 28.7959C34.5561 28.6872 34.717 28.529 34.829 28.3375C34.941 28.1461 35 27.9283 35 27.7065Z"
                    stroke="#FF8800" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M27.6597 23.8298V15.7048L12.5 7.34375" stroke="#FF8800" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M34.8274 11.6605L20.148 20L5.17285 11.6589" stroke="#FF8800" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20.1486 20L20.002 36.6908" stroke="#FF8800" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>

              </div>
              <div class="price">
                <h2 class="text-5xl text-[#FF8800]">Free
                  <span class="text-base text-gray-700"></span>
                </h2>
              </div>
            </div>
            <div class="details-area">
              <h2 class="mb-2 text-gray-900 text-2xl">Free Access</h2>
              <p class="mb-8 text-base text-gray-700">Etiam venenatis condimentum elit at semper. Ut commodo consectetur
                nulla.
              </p>
              <a href="#"
                class="btn inline-block bg-transparent border-[1.5px] border-[#FF8800] rounded-7 px-8 duration-300">
                <div class="flex gap-4 items-center">
                  <span class="text-[17px] leading-[56px] text-[#FF8800] font-medium">Get Demo</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 12H20.25" stroke="#FF8800" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#FF8800" stroke-width="1.5" stroke-linecap="round"
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
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Global Style Guide</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Simple & Clean Icon Library</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">8+ UI Blocks</p>
                </li>
                <li class="flex gap-3 mb-5 opacity-30">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="line-through font-light">4+ Premade Templates</p>
                </li>
                <li class="flex gap-3 mb-5 opacity-30">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="line-through font-light">Free UI Assets</p>
                </li>
                <li class="flex gap-3 mb-5 opacity-30">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="line-through font-light">Design Principle Guidelines</p>
                </li>
                <li class="flex gap-3 mb-5 opacity-30">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="line-through font-light">Well-Organized Documentation</p>
                </li>
                <li class="flex gap-3 mb-5 opacity-30">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="line-through font-light">Life-time Customer Support</p>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="card bg-white p-8 rounded-2xl border border-gray-100 border-t-4 border-t-[#0B63E5] min-w-96 w-4/12">
            <div class="top-area flex justify-between items-center mb-8">
              <div class="card-icon inline-block p-5 rounded-lg bg-[#F0F5FF]">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2"
                    d="M5.1731 11.6589C5.05973 11.8512 4.99996 12.0704 5 12.2936V27.7065C5 27.9283 5.05902 28.1461 5.17099 28.3375C5.28296 28.529 5.44386 28.6872 5.63717 28.7959L19.3872 36.5303C19.5743 36.6356 19.7853 36.6909 20 36.6908L20.0016 36.6909L20.1483 20L5.17313 11.659L5.1731 11.6589Z"
                    fill="#0B63E5" />
                  <path
                    d="M35 27.7065V12.2936C35 12.0718 34.941 11.854 34.829 11.6625C34.717 11.4711 34.5561 11.3128 34.3628 11.2041L20.6128 3.46973C20.4257 3.36449 20.2147 3.3092 20 3.3092C19.7853 3.3092 19.5743 3.36449 19.3872 3.46973L5.63717 11.2041C5.44386 11.3128 5.28296 11.4711 5.17099 11.6625C5.05902 11.854 5 12.0718 5 12.2936V27.7065C5 27.9283 5.05902 28.1461 5.17099 28.3375C5.28296 28.529 5.44386 28.6872 5.63717 28.7959L19.3872 36.5303C19.5743 36.6355 19.7853 36.6908 20 36.6908C20.2147 36.6908 20.4257 36.6355 20.6128 36.5303L34.3628 28.7959C34.5561 28.6872 34.717 28.529 34.829 28.3375C34.941 28.1461 35 27.9283 35 27.7065Z"
                    stroke="#0B63E5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M27.6597 23.8298V15.7048L12.5 7.34375" stroke="#0B63E5" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M34.8274 11.6605L20.148 20L5.17285 11.6589" stroke="#0B63E5" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20.1486 20L20.002 36.6908" stroke="#0B63E5" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </div>
              <div class="price">
                <h2 class="text-5xl text-[#0B63E5]">$21<span class="text-base text-gray-700">/Per-Month</span>
                </h2>
              </div>
            </div>
            <div class="details-area">
              <h2 class="mb-2 text-gray-900 text-2xl">Free Access</h2>
              <p class="mb-8 text-base text-gray-700">Etiam venenatis condimentum elit at semper. Ut commodo consectetur
                nulla.
              </p>
              <a href="#"
                class="btn inline-block bg-transparent border-[1.5px] border-[#0B63E5] rounded-7 px-8 duration-300">
                <div class="flex gap-4 items-center">
                  <span class="text-[17px] leading-[56px] text-[#0B63E5] font-medium">Purchase now</span>
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
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Global Style Guide</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Simple & Clean Icon Library</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">8+ UI Blocks</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">4+ Premade Templates</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Free UI Assets</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Design Principle Guidelines</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Well-Organized Documentation</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Life-time Customer Support</p>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="card bg-white p-8 rounded-2xl border border-gray-100 border-t-4 border-t-[#0F9918] min-w-96 w-4/12">
            <div class="top-area flex justify-between items-center mb-8">
              <div class="card-icon inline-block p-5 rounded-lg bg-[#E7F5E8]">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2"
                    d="M5.1731 11.6589C5.05973 11.8512 4.99996 12.0704 5 12.2936V27.7065C5 27.9283 5.05902 28.1461 5.17099 28.3375C5.28296 28.529 5.44386 28.6872 5.63717 28.7959L19.3872 36.5303C19.5743 36.6356 19.7853 36.6909 20 36.6908L20.0016 36.6909L20.1483 20L5.17313 11.659L5.1731 11.6589Z"
                    fill="#0F9918" />
                  <path
                    d="M35 27.7065V12.2936C35 12.0718 34.941 11.854 34.829 11.6625C34.717 11.4711 34.5561 11.3128 34.3628 11.2041L20.6128 3.46973C20.4257 3.36449 20.2147 3.3092 20 3.3092C19.7853 3.3092 19.5743 3.36449 19.3872 3.46973L5.63717 11.2041C5.44386 11.3128 5.28296 11.4711 5.17099 11.6625C5.05902 11.854 5 12.0718 5 12.2936V27.7065C5 27.9283 5.05902 28.1461 5.17099 28.3375C5.28296 28.529 5.44386 28.6872 5.63717 28.7959L19.3872 36.5303C19.5743 36.6355 19.7853 36.6908 20 36.6908C20.2147 36.6908 20.4257 36.6355 20.6128 36.5303L34.3628 28.7959C34.5561 28.6872 34.717 28.529 34.829 28.3375C34.941 28.1461 35 27.9283 35 27.7065Z"
                    stroke="#0F9918" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M27.6597 23.8298V15.7048L12.5 7.34375" stroke="#0F9918" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M34.8274 11.6605L20.148 20L5.17285 11.6589" stroke="#0F9918" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20.1486 20L20.002 36.6908" stroke="#0F9918" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </div>
              <div class="price">
                <h2 class="text-5xl text-[#0F9918]">$21<span class="text-base text-gray-700">/Per Month</span>
                </h2>
              </div>
            </div>
            <div class="details-area">
              <h2 class="mb-2 text-gray-900 text-2xl">Life-time Access</h2>
              <p class="mb-8 text-base text-gray-700">Etiam venenatis condimentum elit at semper. Ut commodo consectetur
                nulla.
              </p>
              <a href="#"
                class="btn inline-block bg-transparent border-[1.5px] border-[#0F9918] rounded-7 px-8 duration-300">
                <div class="flex gap-4 items-center">
                  <span class="text-[17px] leading-[56px] text-[#0F9918] font-medium">Purchase Now</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 12H20.25" stroke="#0F9918" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#0F9918" stroke-width="1.5" stroke-linecap="round"
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
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Global Style Guide</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Simple & Clean Icon Library</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">8+ UI Blocks</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">4+ Premade Templates</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Free UI Assets</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Design Principle Guidelines</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Well-Organized Documentation</p>
                </li>
                <li class="flex gap-3 mb-5">
                  <div class="list-icon inline-block rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                        fill="#E7F5E8" />
                      <path d="M16.8125 8.9375L10.6875 15.0622L7.625 12" stroke="#0F9918" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <p class="text-gray-700 font-light">Life-time Customer Support</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>
<script>
import bannerImg from "~/assets/images/all-img/img-five.png";

export default {
  head: {
    title: 'Installation Plans',
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
      bannerImg,
      isChecked: [],
    };
  },

};
</script>

<style lang="scss" scoped>
.responsive-overly {
  @media (max-width: 1199px) {
    background-position: center !important;
    background-size: cover !important;
  }
}
</style>
