<template>
  <div>
    <div class="flex flex-col sm:flex-row items-center justify-between p-8 shadow-bs013 bg-gray-f5">
      <!-- text content -->
      <div class="mb-6 sm:mb-0">
        <p class="text-body-18 capitalize text-dark-06">
          Relik - Admin Dashboard Figma Template
        </p>
      </div>
      <!-- action  -->
      <div>
        <nuxt-link to="#"
          class="flex items-center justify-center text-white hover:text-white text-button capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded px-5 w-full whitespace-nowrap text-center">
          Buy Now
          <span class="inline-block ml-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.75 12H20.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </nuxt-link>
      </div>
    </div>
    <div id="tabs" class="lg:flex">
      <div class="tabs w-full lg:w-40 bg-gray-f5 p-3 flex-shrink-0 sticky top-0 h-900 lg:overflow-y-scroll custom-scroll">
        <p class="text-dark-06 text-opacity-60 uppercase mb-2 text-xs">
          SCREENSHOT
        </p>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab = '1'">
          <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
        </a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab = '2'">
          <img class="w-full h-full object-cover" src="~@/assets/images/all-img/2.png" alt="" />
        </a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab = '3'">
          <img class="w-full h-full object-cover" src="~@/assets/images/all-img/3.png" alt="" />
        </a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab = '4'">
          <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
        </a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab = '5'">
          <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
        </a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab = '6'">
          <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
        </a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab = '7'">
          <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
        </a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab = '8'">
          <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
        </a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab = '9'">
          <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
        </a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab = '10'">
          <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
        </a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab = '11'">
          <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
        </a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab = '12'">
          <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
        </a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab = '13'">
          <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
        </a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab = '14'">
          <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
        </a>
      </div>
      <div class="content bg-dark-06 p-6 md:p-12 w-full hidden lg:block">
        <div v-if="activetab === '1'" class="tabcontent">
          <div>
            <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
          </div>
        </div>
        <div v-if="activetab === '2'" class="tabcontent">
          <div>
            <img class="w-full h-full object-cover" src="~@/assets/images/all-img/2.png" alt="" />
          </div>
        </div>
        <div v-if="activetab === '3'" class="tabcontent">
          <div>
            <img class="w-full h-full object-cover" src="~@/assets/images/all-img/3.png" alt="" />
          </div>
        </div>
        <div v-if="activetab === '4'" class="tabcontent">
          <div>
            <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
          </div>
        </div>
        <div v-if="activetab === '5'" class="tabcontent">
          <div>
            <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
          </div>
        </div>
        <div v-if="activetab === '6'" class="tabcontent">
          <div>
            <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
          </div>
        </div>
        <div v-if="activetab === '7'" class="tabcontent">
          <div>
            <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
          </div>
        </div>
        <div v-if="activetab === '8'" class="tabcontent">
          <div>
            <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
          </div>
        </div>
        <div v-if="activetab === '9'" class="tabcontent">
          <div>
            <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
          </div>
        </div>
        <div v-if="activetab === '10'" class="tabcontent">
          <div>
            <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
          </div>
        </div>
        <div v-if="activetab === '11'" class="tabcontent">
          <div>
            <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
          </div>
        </div>
        <div v-if="activetab === '12'" class="tabcontent">
          <div>
            <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
          </div>
        </div>
        <div v-if="activetab === '13'" class="tabcontent">
          <div>
            <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
          </div>
        </div>
        <div v-if="activetab === '14'" class="tabcontent">
          <div>
            <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "empty",
  name: "Screenshort",
  head: {
    title: 'Product Screenshot Page',
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
      activetab: "1",
    };
  },
};
</script>

<style lang="scss" scoped>
.tab-left-thumb {
  @media (max-width: 1024px) {
      height: 600px;
  }
  border: 2px solid #e6e8ec;

  &.active {
    border: 2px solid #0b63e5;
    @media (max-width: 1024px) {
      border: 2px solid #e6e8ec;
    }
  }
}
</style>
