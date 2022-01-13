<template>
  <div>
    <div
      class="py-28 lg:py-52 bg-dark-06 bg-content bg-right bg-no-repeat hero-demo"
      :style="DemoHero"
    >
      <div class="container">
        <div class="max-w-2xl relative">
          <h1
            class="tracking-ls01 font-semibold text-3xl md:text-4xl lg:text-title text-white mb-8"
          >
            Relik - Admin Dashboard Figma Template
          </h1>
          <p class="text-white font-light text-lg md:text-xl max-w-536">
            👉 Relik is a beautiful, simple, developer-friendly, highly
            customizable admin dashboard template with a 💎 high-quality UI &
            well-organized Figma file 🔥.
          </p>
          <div class="mt-8">
            <nuxt-link
              to="/"
              class="block text-center sm:inline-block border-1.5 border-blue-0b bg-blue-0b font-medium rounded-7 py-3.5 px-8 text-body-17 text-white duration-300 mb-3 sm:mb-0 sm:mr-3"
              >Buy Now
              <img
                class="inline-block ml-2"
                src="~/assets/images/svg/arrow-right.svg"
                alt=""
            /></nuxt-link>
            <nuxt-link
              to="/"
              class="block text-center sm:inline-block font-medium border-1.5 border-white rounded-7 py-3.5 px-8 text-body-17 text-white duration-300"
              >Live Preview</nuxt-link
            >
          </div>
          <div
            class="shadow-bs8 rounded-xl p-6 bg-white border border-gray-e6 flex items-center absolute -bottom-36 lg:-bottom-60 left-0"
          >
            <p class="text-dark-06 text-xs mr-4">Compatible with:</p>
            <ul class="flex space-x-3">
              <li>
                <nuxt-link to="#"
                  ><img src="~@/assets/images/svg/icon1.svg" alt=""
                /></nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"
                  ><img src="~@/assets/images/svg/icon2.svg" alt=""
                /></nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"
                  ><img src="~@/assets/images/svg/icon3.svg" alt=""
                /></nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"
                  ><img src="~@/assets/images/svg/icon4.svg" alt=""
                /></nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- end -->

    <div class="py-20 lg:py-124">
      <div class="container">
        <div class="md:grid grid-cols-12 gap-6 mb-12">
          <div class="col-span-7 mb-4 md:mb-0">
            <h2
              class="text-dark-06 text-body-32px md:text-4xl xl:text-title font-semibold tracking-01"
            >
              Explore Relik<br/> Notable Feature
            </h2>
          </div>
          <div class="col-span-5">
            <p class="text-dark-06 text-lg sm:text-xl lg:mb-9 font-light">
              You get all Bootstrap components fully customized. Besides, you
              receive numerous plugins out of the box and ready to use
            </p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-6">
          <div
            v-for="(item, itemIndex) in BusinessItems"
            :key="itemIndex"
            class="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6"
          >
            <BusinessCard
              className="shadow-bs8 border border-gray-e6"
              :title="item.title"
              :text="item.text"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- end -->

    <div>
      <div class="container">
        <div class="grid grid-cols-12">
          <div
            v-for="(item, indexItem) in FunItems"
            :key="indexItem"
            class="col-span-6 lg:col-span-3 fun-column"
          >
            <FunFact :title="item.title" :text="item.text" />
          </div>
        </div>
      </div>
    </div>
    <!-- end  -->

    <div class="py-20 lg:py-124">
      <div class="container">
        <div class="lg:grid grid-cols-12 gap-6">
          <div class="col-span-6 lg:order-2">
            <div class="mb-6 lg:mb-0">
              <img
                class="w-full h-full object-cover rounded-20"
                src="~@/assets/images/all-img/demo-thumb.png"
                alt=""
              />
            </div>
          </div>
          <div class="col-span-6 flex items-center">
            <div class="lg:max-w-536">
              <h3 class="text-blue-0b text-base tracking-ls04 uppercase mb-4">
                Explore our Gilio team services.
              </h3>
              <h2
                class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01"
              >
                Feature Name 01
              </h2>
              <p class="text-dark-06 text-base sm:text-lg mb-6 lg:mb-9">
                Nunc convallis semper justo quis tempor. Praesent molestie,
                lorem sed imperdiet tempor, libero urna semper urna, facilisis
                vulputate velit arcu vitae mi. Donec ac nisi ex.
              </p>
              <nuxt-link
                to="/"
                class="inline-block bg-blue-0b rounded-7 py-4 px-9 text-body-17 text-white duration-300 hover:bg-dark-06"
                >Button Label
                <img
                  class="inline-block ml-2"
                  src="~/assets/images/svg/arrow-right.svg"
                  alt="brand-logo"
              /></nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <!-- end -->

      <div class="py-20 lg:py-124">
        <div class="container">
          <div class="lg:max-w-536 m-auto text-center mb-10 lg:mb-16">
            <h3 class="text-blue-0b text-base tracking-ls04 uppercase mb-4">
              Explore our Gilio team services.
            </h3>
            <h2
              class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01"
            >
              Feature Name 01
            </h2>
            <p class="text-dark-06 text-base sm:text-lg mb-6 lg:mb-9">
              Nunc convallis semper justo quis tempor. Praesent molestie, lorem
              sed imperdiet tempor, libero urna semper urna, facilisis vulputate
              velit arcu vitae mi. Donec ac nisi ex.
            </p>
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              class="w-full object-cover rounded-20"
              src="~@/assets/images/all-img/demo-thumb2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <!-- end -->

      <div class="py-20 lg:py-124 bg-gray-f0">
        <div class="container">
          <div class="lg:grid grid-cols-12 gap-6">
            <div class="col-span-6">
              <div class="lg:mr-20 mb-6 lg:mb-0">
                <img
                  class="w-full h-full object-cover rounded-20"
                  src="~@/assets/images/all-img/demo-thumb.png"
                  alt=""
                />
              </div>
            </div>
            <div class="col-span-6 flex items-center">
              <div class="lg:max-w-536">
                <h3 class="text-blue-0b text-base tracking-ls04 uppercase mb-4">
                  Explore our Gilio team services.
                </h3>
                <h2
                  class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01"
                >
                  Feature Name 01
                </h2>
                <p class="text-dark-06 text-base sm:text-lg mb-6 lg:mb-9">
                  Nunc convallis semper justo quis tempor. Praesent molestie,
                  lorem sed imperdiet tempor, libero urna semper urna, facilisis
                  vulputate velit arcu vitae mi. Donec ac nisi ex.
                </p>
                <nuxt-link
                  to="/"
                  class="inline-block bg-blue-0b rounded-7 py-4 px-9 text-body-17 text-white duration-300 hover:bg-dark-06"
                  >Button Label
                  <img
                    class="inline-block ml-2"
                    src="~/assets/images/svg/arrow-right.svg"
                    alt="brand-logo"
                /></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end -->

      <div class="py-20 lg:py-124">
        <div class="container">
          <div class="lg:max-w-536 m-auto text-center mb-10 lg:mb-16">
            <h3 class="text-blue-0b text-base tracking-ls04 uppercase mb-4">
              Explore our Gilio team services.
            </h3>
            <h2
              class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01"
            >
              Feature Name 01
            </h2>
            <p class="text-dark-06 text-base sm:text-lg mb-6 lg:mb-9">
              Nunc convallis semper justo quis tempor. Praesent molestie, lorem
              sed imperdiet tempor, libero urna semper urna, facilisis vulputate
              velit arcu vitae mi. Donec ac nisi ex.
            </p>
          </div>
          <div class="lg:grid grid-cols-12 gap-6">
            <div class="lg:col-span-8 order-2 lg:ml-6">
              <div class="mb-6 lg:mb-0">
                <img
                  class="w-full object-cover rounded-20"
                  src="~@/assets/images/all-img/demo-thumb3.png"
                  alt=""
                />
              </div>
            </div>
            <div class="lg:col-span-4">
              <div
                v-for="(item, indexItem) in contentItems"
                :key="indexItem"
                class="border border-gray-e6 rounded-2xl overflow-hidden p-6 lg:p-8 mb-6 duration-300 hover:bg-blue-0b hover:border-blue-0b content-wrap"
              >
                <h3 class="text-dark-06 text-2xl font-medium mb-4 duration-300">
                  {{ item.title }}
                </h3>
                <p class="text-dark-42 text-base font-light duration-300">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end -->

      <div class="py-20 lg:py-124 bg-gray-f0">
        <div class="container">
          <div class="lg:grid grid-cols-12 gap-6">
            <div class="col-span-6">
              <div class="lg:mr-20 mb-6 lg:mb-0">
                <img
                  class="w-full h-full object-cover rounded-20"
                  src="~@/assets/images/all-img/demo-thumb.png"
                  alt=""
                />
              </div>
            </div>
            <div class="col-span-6 flex items-center">
              <div class="lg:max-w-536">
                <h3 class="text-blue-0b text-base tracking-ls04 uppercase mb-4">
                  Explore our Gilio team services.
                </h3>
                <h2
                  class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01"
                >
                  Feature Name 01
                </h2>
                <p class="text-dark-06 text-base sm:text-lg mb-6 lg:mb-9">
                  Nunc convallis semper justo quis tempor. Praesent molestie,
                  lorem sed imperdiet tempor, libero urna semper urna, facilisis
                  vulputate velit arcu vitae mi. Donec ac nisi ex.
                </p>
                <nuxt-link
                  to="/"
                  class="inline-block bg-blue-0b rounded-7 py-4 px-9 text-body-17 text-white duration-300 hover:bg-dark-06"
                  >Button Label
                  <img
                    class="inline-block ml-2"
                    src="~/assets/images/svg/arrow-right.svg"
                    alt="brand-logo"
                /></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end -->

      <div class="py-20 lg:py-124">
        <div class="container">
          <div class="text-center mb-8 lg:mb-12">
            <h2
              class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01"
            >
              45+ Beautiful hand-crafted pages
            </h2>
          </div>
          <div class="grid grid-cols-12 gap-6">
            <div
              v-for="(item, itemIndex) in linkThumb"
              :key="itemIndex"
              class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6"
            >
              <LinkThumb :img="item.img" :title="item.title" :url="item.url" />
            </div>
          </div>
        </div>
      </div>
      <!-- end -->

      <div class="pt-20 lg:pt-124 bg-dark-06">
        <div class="container">
          <div class="text-center mb-24">
            <h2
              class="text-white text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-ls01"
            >
              Let’s Get Started
            </h2>
            <p class="text-white text-base sm:text-lg mb-6 lg:mb-12 font-light">
              Pick a demo and start building your WordPress website today.
            </p>
            <nuxt-link
              to="/"
              class="inline-block bg-blue-0b rounded-7 py-4 px-9 text-body-17 text-white duration-300 hover:bg-black"
              >Purchase Now
              <img
                class="inline-block ml-2"
                src="~/assets/images/svg/arrow-right.svg"
                alt="brand-logo"
            /></nuxt-link>
          </div>
        </div>
        <div class="">
          <swiper class="swiper " :options="swiperOptionOne">
            <swiper-slide class="slider-full">
              <img
                class="w-full h-full border border-white p-3 pb-0"
                src="~@/assets/images/all-img/slider1.png"
                alt=""
            /></swiper-slide>
            <swiper-slide class="slider-full">
              <img
                class="w-full h-full border border-white p-3 pb-0"
                src="~@/assets/images/all-img/slider2.png"
                alt=""
            /></swiper-slide>
            <swiper-slide class="slider-full">
              <img
                class="w-full h-full border border-white p-3 pb-0"
                src="~@/assets/images/all-img/slider3.png"
                alt=""
            /></swiper-slide>
            <swiper-slide class="slider-full">
              <img
                class="w-full h-full border border-white p-3 pb-0"
                src="~@/assets/images/all-img/slider1.png"
                alt=""
            /></swiper-slide>
            <swiper-slide class="slider-full">
              <img
                class="w-full h-full border border-white p-3 pb-0"
                src="~@/assets/images/all-img/slider2.png"
                alt=""
            /></swiper-slide>
            <swiper-slide class="slider-full">
              <img
                class="w-full h-full border border-white p-3 pb-0"
                src="~@/assets/images/all-img/slider3.png"
                alt=""
            /></swiper-slide>
            <swiper-slide class="slider-full">
              <img
                class="w-full h-full border border-white p-3 pb-0"
                src="~@/assets/images/all-img/slider1.png"
                alt=""
            /></swiper-slide>
            <swiper-slide class="slider-full">
              <img
                class="w-full h-full border border-white p-3 pb-0"
                src="~@/assets/images/all-img/slider2.png"
                alt=""
            /></swiper-slide>
            <swiper-slide class="slider-full">
              <img
                class="w-full h-full border border-white p-3 pb-0"
                src="~@/assets/images/all-img/slider3.png"
                alt=""
            /></swiper-slide>
            <swiper-slide class="slider-full">
              <img
                class="w-full h-full border border-white p-3 pb-0"
                src="~@/assets/images/all-img/slider1.png"
                alt=""
            /></swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- end -->

      <div class="py-20 lg:py-124">
        <div class="container">
          <div class="lg:max-w-536 m-auto text-center mb-10 lg:mb-16">
            <h2
              class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01"
            >
              Folder Structure
            </h2>
            <p
              class="text-dark-06 text-base sm:text-lg mb-6 lg:mb-9 font-light"
            >
              Nunc convallis semper justo quis tempor. Praesent molestie, lorem
              sed imperdiet tempor, libero urna semper urna
            </p>
          </div>
          <div class="relative">
            <swiper class="swiper shadow-bs012 rounded-xl" :options="swiperOptionTwo">
              <swiper-slide
                ><img
                  class="w-full h-full rounded-xl"
                  src="~@/assets/images/all-img/slider4.png"
                  alt=""
              /></swiper-slide>
              <swiper-slide
                ><img
                  class="w-full h-full rounded-xl"
                  src="~@/assets/images/all-img/slider4.png"
                  alt=""
              /></swiper-slide>
              <swiper-slide
                ><img
                  class="w-full h-full rounded-xl"
                  src="~@/assets/images/all-img/slider4.png"
                  alt=""
              /></swiper-slide>
              <swiper-slide
                ><img
                  class="w-full h-full rounded-xl"
                  src="~@/assets/images/all-img/slider4.png"
                  alt=""
              /></swiper-slide>
              <swiper-slide
                ><img
                  class="w-full h-full rounded-xl"
                  src="~@/assets/images/all-img/slider4.png"
                  alt=""
              /></swiper-slide>
            </swiper>
            <div class="custom-pagination flex justify-center pt-16">
                <div class="swiper-pagination" slot="pagination"></div>
            </div>
            <div class="single-slider">
                <div class="swiper-button-prev ml-6" slot="button-prev">
                  <span
                    class="w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 bg-black bg-opacity-50 duration-300 hover:bg-blue-0b"
                  >
                    <img src="~@/assets/images/svg/caret-left.svg" alt="">
                  </span>
                </div>
                <div class="swiper-button-next mr-6" slot="button-next">
                  <span
                    class="w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 bg-black bg-opacity-50 duration-300 hover:bg-blue-0b arrow-icon"
                  >
                    <img src="~@/assets/images/svg/caret-right.svg" alt="">
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>

      <!-- end -->

      <div class="py-20 lg:py-124 bg-gray-f5">
        <div class="container">
          <div class="lg:grid grid-cols-12 gap-6">
            <div class="col-span-6 order-2 mb-6 lg:mb-0">
              <pre
                class="border border-gray-e6 p-8 rounded-2xl bg-white text-sm text-dark-06 pb-0 h-200 overflow-y-scroll custom-scroll"
              >
    ├── templatecookie
        ├── assets
          ├── css
          ├── fonts 
          ├── images
          ├── js
        ├── index.vue
        ├── hire-us.vue
        ├── product-demo.vue
        ├── product-details.vue
        ├── product-list.vue
        ├── billing.vue
                </pre
              >
            </div>
            <div class="col-span-6 flex items-center">
              <div class="lg:pr-20">
                <h2
                  class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01"
                >
                  Folder Structure
                </h2>
                <p class="text-dark-06 text-base sm:text-lg font-light">
                  Nunc convallis semper justo quis tempor. Praesent molestie,
                  lorem sed imperdiet tempor, libero urna semper urna, facilisis
                  vulputate velit arcu vitae mi. Donec ac nisi ex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end -->

      <div class="pt-20 lg:pt-124 md:pb-0 pb-20">
        <div class="container">
          <div class="grid grid-cols-12 gap-6">
            <div
              v-for="(item, itemIndex) in PurchaseItems"
              :key="itemIndex"
              class="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 purchase-card-wrap"
            >
              <PurchaseCard
                :title="item.title"
                :text="item.text"
                :btnUrl="item.url"
                :btnText="item.btnText"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- end -->
    </div>
  </div>
</template>
<script>
import BusinessCard from "../components/BusinessCard.vue";
import FunFact from "../components/Fun.vue";
import LinkThumb from "../components/LinkThumb.vue";
import PurchaseCard from "../components/PurchaseCard.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
  import 'swiper/css/swiper.css'



export default {
  layout: "demo",
  name: "ProductDemo",
  components: {
    BusinessCard,
    FunFact,
    LinkThumb,
    PurchaseCard,
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      DemoHero: {
        backgroundImage: "url(https://i.imgur.com/aBzS4DP.png)",
      },
      BusinessItems: [
        {
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
      contentItems: [
        {
          title: "Back-end Development",
          text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec diam gravida, convallis lectus ut.",
        },
        {
          title: "Back-end Development",
          text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec diam gravida, convallis lectus ut.",
        },
        {
          title: "Back-end Development",
          text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec diam gravida, convallis lectus ut.",
        },
      ],
      linkThumb: [
        {
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
      swiperOptionOne: {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        // autoplay: {
        //   delay: 1600,
        //   disableOnInteraction: false,
        // },
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
      swiperOptionTwo: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        // autoplay: {
        //   delay: 1600,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      PurchaseItems: [
        {
          url: "https://www.google.com/",
          title: "Let’s Purchase This Product",
          text: "Cras condimentum tincidunt dolor quis imperdiet. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes.",
          btnText: "Purchase Now",
        },
        {
          url: "https://www.google.com/",
          title: "Well-Organize Documentation",
          text: "Cras condimentum tincidunt dolor quis imperdiet. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes.",
          btnText: "Documentation",
        },
        {
          url: "https://www.google.com/",
          title: "24/7 Customer Support",
          text: "Cras condimentum tincidunt dolor quis imperdiet. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes.",
          btnText: "Get Support",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

  // animation
  .slider-full{
    animation: scroll 40s linear infinite;
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


  .single-slider{
    .swiper-button-prev:after, .swiper-button-next:after{
        content: none;
      }
  }
</style>
