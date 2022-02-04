<template>
  <div>
    <Breadcrumb :category="product.category.data" :name="product.name" />
    <!-- end -->
    <div class="pt-12">
      <div class="container">
        <div class="lg:grid grid-cols-12 gap-6">
          <div class="col-span-8">
            <div class="border border-gray-e6 rounded-2xl p-6">
              <div class="mb-6 overflow-hidden">
                <img class="w-full h-full duration-500" :src="fixImageUrl(product.banner)"
                  alt="" />
              </div>
              <div class="sm:flex justify-between">
                <nuxt-link to="/screenshort" _target="blank" class="block sm:mb-0 mb-3 text-center sm:inline-block bg-blue-0b rounded-5 text-sm py-2.5 px-5 text-white duration-300 hover:bg-black">
                  <img class="inline-block mr-1.5 duration-300" src="~/assets/images/svg/image-square.svg" alt="" />
                  Screenshots
                </nuxt-link>
                <div class="flex items-center justify-center sm:justify-end">
                  <p class="text-dark-06 text-base mr-4">Compatible with:</p>
                  <ul class="flex space-x-3">
                    <li data-aos="fade-up" data-aos-duration="1200">
                      <nuxt-link to="#"><img src="~@/assets/images/svg/icon2.svg" alt="" /></nuxt-link>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                      <nuxt-link to="#"><img src="~@/assets/images/svg/icon3.svg" alt="" /></nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- end -->
            <div class="pt-6">
              <div id="tabs">
                <div class="tabs border-b border-gray-e6 text-center sm:flex">
                  <div class="text-dark-42 text-base cursor-pointer py-2.5 px-4 tab-overview"
                    v-on:click="activetab = '1'" v-bind:class="[activetab === '1' ? 'active' : '']">
                    Overview
                  </div>
                  <div class="text-dark-42 text-base cursor-pointer py-2.5 px-4 tab-overview"
                    v-on:click="activetab = '2'" v-bind:class="[activetab === '2' ? 'active' : '']">
                    Folder Structure
                  </div>
                  <div class="text-dark-42 text-base cursor-pointer py-2.5 px-4 tab-overview"
                    v-on:click="activetab = '3'" v-bind:class="[activetab === '3' ? 'active' : '']">
                    Change Log
                  </div>
                </div>
                <div class="content">
                  <div v-if="activetab === '1'" class="tabcontent">
                    <div class="py-8 border-b border-gray-e6 xl:pr-24">
                      <h4 class="text-dark-06 text-xl mb-5 uppercase">
                        DESCRIPTION
                      </h4>
                      <p class="text-dark-42 text-base font-light mb-5">
                        {{ product.description }}
                      </p>
                    </div>
                    <!-- end -->
                    <div class="py-8 border-b border-gray-e6">
                      <h4 class="text-dark-06 text-xl mb-5 uppercase">
                        HIGHLIGHTS
                      </h4>
                      <div class="md:grid grid-cols-12 gap-6">
                        <div class="md:col-span-6">
                          <ul>
                            <li v-for="(item, indexItem) in product.highlights" :key="indexItem"
                              class="relative pl-8 text-dark-06 text-base font-light py-2">
                              <img class="absolute left-0" src="~@/assets/images/svg/check-circle.svg"
                                alt="" />{{ item.feature }}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- end -->
                  </div>
                  <div v-if="activetab === '2'" class="tabcontent">
                    <div class="py-8 border-b border-gray-e6">
                      <h4 class="text-dark-06 text-xl mb-5 uppercase">
                        FOLDER STRUCTURE
                      </h4>
                      <p class="text-dark-42 text-base font-light mb-5">
                        Donec volutpat risus ac turpis tempor pulvinar. Mauris viverra
                        varius felis, ut auctor sapien commodo eu. In finibus quis
                        tellus nec auctor. Morbi vehicula suscipit fringilla. Etiam
                        varius libero iaculis rutrum rutrum. Nunc augue ipsum,
                        malesuada ut erat mollis, viverra porta dolor.
                      </p>
                      <pre
                        class="p-8 rounded-lg bg-gray-f5 text-sm text-dark-06 pb-0 h-200 overflow-y-scroll custom-scroll">
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
                          </pre>
                    </div>
                    <!-- end -->
                  </div>
                  <div v-if="activetab === '3'" class="tabcontent">
                    <div class="py-8">
                      <h4 class="text-dark-06 text-xl mb-5 uppercase">
                        CHANGELOG
                      </h4>
                      <p class="text-dark-42 text-base font-light mb-5">
                        Donec volutpat risus ac turpis tempor pulvinar. Mauris viverra
                        varius felis, ut auctor sapien commodo eu. In finibus quis
                        tellus nec auctor. Morbi vehicula suscipit fringilla. Etiam
                        varius libero iaculis rutrum rutrum. Nunc augue ipsum,
                        malesuada ut erat mollis, viverra porta dolor.
                      </p>

                      <Accordion />
                    </div>
                    <!-- end -->
                  </div>
                </div>
              </div>
            </div>
            <!-- end -->

          </div>
          <div class="col-span-4">
            <div class="bg-gray-f5 rounded-xl">
              <div class="select-radio p-4">
                <div class="mb-4">
                  <input id="radio1" type="radio" name="radio" class="hidden" checked />
                  <label for="radio1"
                    class="flex items-center cursor-pointer justify-between px-4 py-3 rounded-lg border border-gray-f5 duration-300">
                    <div class="flex items-center">
                      <span
                        class="w-5 h-5 rounded-full inline-block mr-4 flex-shrink-0 border-1.5 border-gray-cd bg-white duration-300"></span>
                      <div>
                        <h4 class="text-base text-dark-06 mb-1">
                          Regular License
                        </h4>
                        <p class="text-dark-42 text-sm font-light">
                          Only for personal use
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 class="text-blue-0b font-semibold text-2xl tracking-ls03">
                        $32
                      </h3>
                    </div>
                  </label>
                </div>
                <div class="mb-2">
                  <input id="radio2" type="radio" name="radio" class="hidden" />
                  <label for="radio2"
                    class="flex items-center cursor-pointer justify-between px-4 py-3 rounded-lg border border-gray-f5 duration-300">
                    <div class="flex items-center">
                      <span
                        class="w-5 h-5 rounded-full inline-block mr-4 flex-shrink-0 border-1.5 border-gray-cd bg-white duration-300"></span>
                      <div>
                        <h4 class="text-base text-dark-06 mb-1">
                          Commercial License
                        </h4>
                        <p class="text-dark-42 text-sm font-light">
                          Personal & business purpose
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 class="text-blue-0b font-semibold text-2xl tracking-ls03">
                        $32
                      </h3>
                    </div>
                  </label>
                </div>
              </div>
              <!-- end -->
              <div class="pt-0 p-8 pb-4">
                <div class="border-b border-gray-cd pb-4">
                  <nuxt-link :to="product.buy_url" v-if="product.buy_url" class="block text-center font-medium bg-blue-0b rounded-7 py-4 px-9 text-body-17 text-white duration-300 mb-4 hover:bg-dark-06">
                    Buy now
                  </nuxt-link>
                  <nuxt-link :to="{ name: 'demo-slug', params: {slug: productId} }" v-if="product.documentation_url"
                    class="block text-center font-medium border-1.5 border-dark-06 rounded-7 py-3.5 px-9 text-body-17 text-dark-06 duration-300 mb-4">
                      <img class="inline-block mr-2" src="~/assets/images/svg/notebook.svg" alt="" />
                      View Demo
                  </nuxt-link>
                </div>
                <div class="pt-6">
                  <ul>
                    <li class="text-gray-6a text-sm mb-4">
                      <img class="inline mr-2.5" src="~@/assets/images/svg/icon/arrows-clockwise.svg" alt="" />
                      Last
                      Update
                      <span class="float-right text-dark-06">
                        1 monts ago
                      </span>
                    </li>
                    <li class="text-gray-6a text-sm mb-4">
                      <img class="inline mr-2.5" src="~@/assets/images/svg/icon/megaphone.svg" alt="" />
                      Released:
                      <span class="float-right text-dark-06">
                        2 years ago
                      </span>
                    </li>
                    <li class="text-gray-6a text-sm mb-4">
                      <img class="inline mr-2.5" src="~@/assets/images/svg/icon/diff.svg" alt="" />
                      Version:
                      <span class="float-right text-dark-06"> {{ product.version }} </span>
                    </li>
                    <li class="text-gray-6a text-sm mb-4" v-if="product.category.data && product.category.data.attributes">
                      <img class="inline mr-2.5" src="~@/assets/images/svg/icon/category.svg" alt="" />
                      Category:
                      <span class="float-right text-dark-06">
                        {{ product.category.data.attributes.name }}
                      </span>
                    </li>
                    <li class="text-gray-6a text-sm mb-4">
                      <img class="inline mr-2.5" src="~@/assets/images/svg/icon/file.svg" alt="" />
                      File Inlcude:
                      <span class="float-right text-dark-06"> Fig, Figma </span>
                    </li>
                    <li class="text-gray-6a text-sm mb-4">
                      <img class="inline mr-2.5" src="~@/assets/images/svg/icon/notebook.svg" alt="" />
                        Documentation:
                      <span class="float-right text-dark-06">
                        Well Documented
                      </span>
                    </li>
                    <li class="text-gray-6a text-sm mb-4">
                      <img class="inline mr-2.5" src="~@/assets/images/svg/icon/hand.svg" alt="" />
                      Customer Support:
                      <span class="float-right text-dark-06">
                        {{ product.customer_support }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- end -->
            </div>
          </div>
        </div>
        <!-- end -->

        <div class="bg-blue-09 xl:pl-14 xl:p-0 p-10 pb-0 rounded-2xl mt-20 lg:mt-124" v-if="global && global.customerSupport">
          <div class="xl:grid grid-cols-12">
            <div class="col-span-6 flex items-center">
              <div class="xl:max-w-536 xl:py-16 text-center xl:text-left">
                <h2 class="text-white text-3xl lg:text-heading-40 font-semibold mb-5 tracking-01">
                  {{ global.customerSupport.title }}
                </h2>
                <p class="text-white text-lg sm:text-lg mb-5 lg:mb-8 font-light">
                  {{ global.customerSupport.description }}
                </p>
                <div class="flex flex-col sm:flex-row items-center">
                  <nuxt-link target="_blank" v-if="product.buy_url" :to="product.buy_url" class="order-2 sm:order-1 w-full sm:w-auto inline-block text-center bg-white-12 rounded-7 py-4 px-9 text-body-17 text-white duration-300 mr-0 sm:mr-3 hover:bg-dark-06 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    Buy Now
                  </nuxt-link>
                  <nuxt-link target="_blank" v-if="product.support_url" :to="product.support_url" class="order-1 sm:order-2 w-full sm:w-auto inline-block text-center bg-white rounded-7 py-4 px-9 text-body-17 text-blue-0b duration-300 hover:bg-dark-06 hover:text-white mb-4 sm:mb-0 whitespace-nowrap overflow-hidden overflow-ellipsis"> 
                    Customer Support
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="col-span-6">
              <img class="w-full h-full object-cover object-center" :src="fixImageUrl(global.customerSupport.image)" alt="" />
            </div>
          </div>
        </div>

        <!-- Featured Card  -->
        <section class="featured py-14 md:pt-124 md:pb-0">
          <div class="container">
            <!-- section title  -->
            <div class="mb-72 text-center">
              <h2 class="text-body-32px md:text-4xl xl:text-title font-semibold capitalize">
                Featured Product
              </h2>
            </div>

            <!-- Features Card  -->
            <div class="relative">
              <swiper class="swiper" :options="swiperOptionThree">
                <swiper-slide>
                  <div class="relative overflow-hidden p-6 border border-gray-e6 rounded-2xl product-card">
                    <!-- Product img preview -->
                    <nuxt-link to="#"
                      class="relative inline-block overflow-hidden rounded-lg w-full product-card__img-wrapper mb-4">
                      <img class="w-full h-full object-cover" src="~@/assets/images/cards/img-six.png" alt="" />
                    </nuxt-link>
                    <!-- Product info  -->
                    <div>
                      <!-- Tags  -->
                      <h6 class="tracking-widest font-normal text-xs text-pink-75 uppercase m-0 mb-1">
                        Figma, HTML
                      </h6>
                      <h2 class="text-lg text-dark-06 mb-3 font-normal">
                        Onest - Classified Ad Listing
                      </h2>
                      <p class="text-dark-42 text-sm font-light mb-6">
                        Onest is a creatively crafted, clean, modern, and classy
                        classifieds ads listing Figma template designed for who
                        want to start selling a product online.
                      </p>
                      <!-- actions content  -->
                      <div class="flex flex-col sm:flex-row items-end sm:items-center sm:justify-between">
                        <!-- Purchase  -->
                        <div class="flex items-center justify-center w-full sm:w-auto space-x-3 order-2 sm:order-1">
                          <div>
                            <nuxt-link to="#"
                              class="flex items-center overflow-hidden px-4 py-2 rounded-5 text-sm font-medium border-1.5 border-blue-0b text-blue-0b group whitespace-nowrap">
                              Learn More
                              <span class="inline-block ml-3">
                                <img src="~/assets/images/svg/arrow.svg" alt="arrow-icon" />
                              </span>
                            </nuxt-link>
                          </div>
                          <div class="flex-shrink-0">
                            <button
                              class="inline-block overflow-hidden p-2.5 bg-gray-f5 hover:bg-gray-200 transition-all rounded-7">
                              <img src="~/assets/images/svg/cart.svg" alt="cart-icon" />
                            </button>
                          </div>
                        </div>
                        <!-- Price  -->
                        <div class="mb-4 sm:mb-0 order-1 sm:order-2">
                          <h5 class="text-xl font-medium uppercase text-pink-75">
                            $13
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div class="relative overflow-hidden p-6 border border-gray-e6 rounded-2xl product-card">
                    <!-- Product img preview -->
                    <nuxt-link to="#"
                      class="relative inline-block overflow-hidden rounded-lg w-full product-card__img-wrapper mb-4">
                      <img class="w-full h-full object-cover" src="~@/assets/images/cards/img-one.png" alt="" />
                    </nuxt-link>
                    <!-- Product info  -->
                    <div>
                      <!-- Tags  -->
                      <h6 class="tracking-widest font-normal text-xs text-pink-75 uppercase m-0 mb-1">
                        Figma, HTML
                      </h6>
                      <h2 class="text-lg text-dark-06 mb-3 font-normal">
                        Onest - Classified Ad Listing
                      </h2>
                      <p class="text-dark-42 text-sm font-light mb-6">
                        Onest is a creatively crafted, clean, modern, and classy
                        classifieds ads listing Figma template designed for who
                        want to start selling a product online.
                      </p>
                      <!-- actions content  -->
                      <div class="flex flex-col sm:flex-row items-end sm:items-center sm:justify-between">
                        <!-- Purchase  -->
                        <div class="flex items-center justify-center w-full sm:w-auto space-x-3 order-2 sm:order-1">
                          <div>
                            <nuxt-link to="#"
                              class="flex items-center overflow-hidden px-4 py-2 rounded-5 text-sm font-medium border-1.5 border-blue-0b text-blue-0b group whitespace-nowrap">
                              Learn More
                              <span class="inline-block ml-3">
                                <img src="~/assets/images/svg/arrow.svg" alt="arrow-icon" />
                              </span>
                            </nuxt-link>
                          </div>
                          <div class="flex-shrink-0">
                            <button
                              class="inline-block overflow-hidden p-2.5 bg-gray-f5 hover:bg-gray-200 transition-all rounded-7">
                              <img src="~/assets/images/svg/cart.svg" alt="cart-icon" />
                            </button>
                          </div>
                        </div>
                        <!-- Price  -->
                        <div class="mb-4 sm:mb-0 order-1 sm:order-2">
                          <h5 class="text-xl font-medium uppercase text-pink-75">
                            $13
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div class="relative overflow-hidden p-6 border border-gray-e6 rounded-2xl product-card">
                    <!-- Product img preview -->
                    <nuxt-link to="#"
                      class="relative inline-block overflow-hidden rounded-lg w-full product-card__img-wrapper mb-4">
                      <img class="w-full h-full object-cover" src="~@/assets/images/cards/img-two.png" alt="" />
                    </nuxt-link>
                    <!-- Product info  -->
                    <div>
                      <!-- Tags  -->
                      <h6 class="tracking-widest font-normal text-xs text-pink-75 uppercase m-0 mb-1">
                        Figma, HTML
                      </h6>
                      <h2 class="text-lg text-dark-06 mb-3 font-normal">
                        Onest - Classified Ad Listing
                      </h2>
                      <p class="text-dark-42 text-sm font-light mb-6">
                        Onest is a creatively crafted, clean, modern, and classy
                        classifieds ads listing Figma template designed for who
                        want to start selling a product online.
                      </p>
                      <!-- actions content  -->
                      <div class="flex flex-col sm:flex-row items-end sm:items-center sm:justify-between">
                        <!-- Purchase  -->
                        <div class="flex items-center justify-center w-full sm:w-auto space-x-3 order-2 sm:order-1">
                          <div>
                            <nuxt-link to="#"
                              class="flex items-center overflow-hidden px-4 py-2 rounded-5 text-sm font-medium border-1.5 border-blue-0b text-blue-0b group whitespace-nowrap">
                              Learn More
                              <span class="inline-block ml-3">
                                <img src="~/assets/images/svg/arrow.svg" alt="arrow-icon" />
                              </span>
                            </nuxt-link>
                          </div>
                          <div class="flex-shrink-0">
                            <button
                              class="inline-block overflow-hidden p-2.5 bg-gray-f5 hover:bg-gray-200 transition-all rounded-7">
                              <img src="~/assets/images/svg/cart.svg" alt="cart-icon" />
                            </button>
                          </div>
                        </div>
                        <!-- Price  -->
                        <div class="mb-4 sm:mb-0 order-1 sm:order-2">
                          <h5 class="text-xl font-medium uppercase text-pink-75">
                            $13
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
              <!-- end slider -->
              <div class="custom-pagination flex items-center justify-center pt-24">
                <div class="swiper-button-prev mr-8" slot="button-prev">
                  <span
                    class="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-f0 duration-300 hover:bg-blue-0b arrow-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M27 16H5" stroke="#0B63E5" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M14 7L5 16L14 25" stroke="#0B63E5" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
                <div class="swiper-button-next ml-8" slot="button-next">
                  <span
                    class="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-f0 duration-300 hover:bg-blue-0b arrow-icon">
                    <svg class="arrow-icon-right" width="32" height="32" viewBox="0 0 32 32" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M27 16H5" stroke="#0B63E5" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M14 7L5 16L14 25" stroke="#0B63E5" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
              <!-- end pagination -->
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "~/components/Breadcrumb.vue";
import Accordion from "~/components/Accordion.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import PRODUCT_DETAILS from '~/graphql/productDetails'

export default {
  name: "ProductDetails",
  components: {
    Breadcrumb,
    Accordion,
    SwiperSlide,
    Swiper,
  },
  head: {
    title: 'Product Details Page',
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
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;
    const { slug } = params;

    const { data } = await client.query({
      query: PRODUCT_DETAILS,
      variables: {
        slug
      }
    })
    
    const product = data.product.data.attributes;
    const productId = data.product.data.id;
    const relatedProducts = data.products.data;
    return { product, relatedProducts, productId }
  },
  data() {
    return {
      activetab: "1",
      highlightText: [
        {
          text: "150+ Widgets & Components.",
        },
        {
          text: "124+ UI Components & Widgets.",
        },
        {
          text: "Based on Extensive UX Research.",
        },
        {
          text: "All Layers, Groups, and Components are Logically Named Correctly.",
        },
        {
          text: "Designed for Designers & Developers.",
        },
        {
          text: "Full Width 1920px.",
        },
        {
          text: "Free Google Fonts Used. (Public Sans)",
        },
        {
          text: "Icon Provided by phosphoricons. (flat icon)",
        },
        {
          text: "Light, Dark & Navy Blue Left Side Bar.",
        },
        {
          text: "Kanban Board to Manage with Team.",
        },
        {
          text: "Post Comments on Cards.",
        },
        {
          text: "Attach/Upload File.",
        },
        {
          text: "Social Authentication.",
        },
      ],

      myItems: [
        {
          title: "How many time zones are there in all?",
          value:
            "Given a 24-hour day and 360 degrees of longitude around the Earth",
        },
        {
          title: "How long is a day and year on Venus?",
          value:
            "Venus takes 224.7 Earth days to complete one orbit around the Sun.",
        },
        {
          title: "What animal smells like popcorn?",
          value: "Binturongs smell like popcorn.",
        },
      ],

      myDocumentation: [
        {
          icon: "arrows-clockwise.svg",
          title: "Last Update:",
          text: "1 months ago",
        },
        {
          icon: "arrows-clockwise.svg",
          title: "Released:",
          text: "2 years ago ",
        },
        {
          icon: "arrows-clockwise.svg",
          title: "Version:",
          text: "v2.7.4",
        },

        {
          icon: "arrows-clockwise.svg",
          title: "Category:",
          text: "UI Template",
        },
        {
          icon: "arrows-clockwise.svg",
          title: "File Inlcude:",
          text: "Fig, Figma",
        },
        {
          icon: "arrows-clockwise.svg",
          title: "Documentation:",
          text: "Well Documented",
        },
      ],

      myContents: [
        {
          title: "How are you?",
          msg: "Test for fun!",
        },
        {
          title: "Who let the dog out?",
          msg: "I do not know, dude.",
        },
      ],
      swiperOptionThree: {
        slidesPerView: 3,
        spaceBetween: 24,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1300: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
          },
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
    };
  },
  computed: {
    global() {
      return this.$store.getters.getGlobalData;
    }
  }
};
</script>

<style lang="scss" scoped>

.tab-overview{
  &.active{
    color: #0B63E5;
    border-bottom: 1px solid #0B63E5;
  }
}
.arrow-icon {
  path {
    stroke: #0b63e5;
    transition: all 0.4s;
  }
  &:hover path {
    stroke: white;
  }
  svg.arrow-icon-right {
    transform: rotate(180deg);
  }
}
.select-radio {
  input[type="radio"]:checked + label {
    border: 1px solid #0b63e5;
    background-color: white;
  }
  input[type="radio"]:checked + span {
    border: 1px solid #0b63e5;
    background-color: red;
  }

  input[type="radio"] + label span {
    transition: background 0.2s, transform 0.2s;
  }
  input[type="radio"]:checked + label span {
    background-color: white; //bg-green-dark
    box-shadow: 0px 0px 0px 5px #0b63e5 inset;
    border: 1.5px solid transparent;
   
  }
}

// slider
.custom-pagination {
  .swiper-button-prev:after,
  .swiper-button-next:after {
    content: none;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: inherit;
  }
}
</style>
