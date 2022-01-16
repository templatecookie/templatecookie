<template>
  <div>
    <!-- Banner  -->
    <section
      class="realtive overflow-hidden pb-14 lg:pb-124 pt-216 bg-no-repeat bg-center bg-cover"
      :style="{ backgroundImage: `url(${bannerImg})` }"
    >
      <div class="container">
        <!-- banner content  -->
        <div class="text-center">
          <h1
            class="text-4xl md:text-heading text-dark-06 mb-8 max-w-680 mx-auto font-semibold"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            Premium UI & Html Template.
          </h1>
          <p
            class="text-lg md:text-body-20 text-dark-06 mb-8 max-w-680 mx-auto"
          >
            Quisque sed est condimentum, placerat tellus a, dictum diam.
            Praesent volutpat nisl ac ligula lobortis imperdiet.
          </p>
          <div>
            <nuxt-link
              to="/"
              class="flex items-center bg-blue-0b hover:bg-dark-06 transition-all w-auto max-w-232 justify-center text-button-17 text-white rounded-lg overflow-hidden mx-auto"
              data-aos="zoom-out-up"
              data-aos-delay="680"
            >
              Browse Product
              <!-- arrow toggle icon -->
              <span class="inline-block ml-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 12H20.25"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5 5.25L20.25 12L13.5 18.75"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Card  -->
    <section class="featured pt-14 md:pt-124">
      <div class="container">
        <!-- section title  -->
        <div class="mb-72 text-center">
          <h2
            class="text-4xl md:text-title font-semibold capitalize"
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-easing="ease-in"
          >
            Featured Product
          </h2>
        </div>

        <!-- Features Card  -->
        <div class="grid lg:grid-cols-2 gap-6">
          <div
            v-for="(item, itemIndex) in featuredList"
            :key="itemIndex"
            class="flex items-stretch"
          >
            <ProductCard
              :img="item.img"
              :tag="item.tags"
              :title="item.title"
              :text="item.text"
              :price="item.price"
              className="h-296 "
              :data-aos="item.aos"
              data-aos-delay="160"
              data-aos-offset="260"
              ata-aos-duration="3000"
              data-aos-easing="ease-in"
              buttonClass=" text-button-17 px-9  "
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Product -->
    <section class="latest py-14 md:py-124">
      <div class="container">
        <!-- section title  -->
        <div class="mb-72 text-center">
          <h2
            class="text-4xl md:text-title font-semibold capitalize"
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-easing="ease-in"
          >
            Latest Product
          </h2>
        </div>
        <!-- Latest Product -->
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <div
            v-for="(item, itemIndex) in latestProduct"
            :key="itemIndex"
            class="flex items-stretch"
            data-aos="fade-up"
            :data-aos-delay="item.aosDelay"
          >
            <ProductCard
              :img="item.img"
              :tag="item.tags"
              :title="item.title"
              :text="item.text"
              :price="item.price"
              className="h-190 "
              buttonClass="text-button px-6"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Why Should  -->
    <section class="why-should bg-gray-f5 py-14 md:py-124">
      <div class="container">
        <!-- section title  -->
        <div class="mb-72 text-center">
          <h2
            class="text-4xl md:text-title font-semibold capitalize mb-8 max-w-md mx-auto"
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-easing="ease-in"
          >
            Why should you buy our product?
          </h2>
          <p class="text-body-16 font-light max-w-lg mx-auto text-dark-06">
            Phasellus interdum sagittis magna. Donec varius ultricies diam sed
            lacinia. Mauris porttitor. quis risus eget mattis Ut auctor.
          </p>
        </div>
        <!-- Project services -->
        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div
            v-for="(item, itemIndex) in productList"
            :key="itemIndex"
            data-aos="fade-up"
            :data-aos-delay="item.aosDelay"
          >
            <!-- Service card  -->
            <BusinessCard :title="item.title" :text="item.text" />
          </div>
        </div>
      </div>
    </section>

    <!-- Why us   -->
    <section class="relative overflow-hidden">
      <!-- content wrapper   -->
      <div class="flex flex-col lg:grid lg:grid-cols-16 px-3 lg:px-0">
        <!-- textcontent  -->
        <div
          class="lg:col-start-3 lg:col-end-9 lg:py-124 order-2 lg:order-1 pb-14 lg:pb-0"
        >
          <h1
            class="text-4xl md:text-title font-semibold capitalize mb-8"
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-easing="ease-in"
          >
            Why Tempalte Cookie is the Best in the world
          </h1>
          <p class="text-body-16 font-light text-dark-06 mb-10">
            Cras at pellentesque eros. Nullam vitae sapien et felis eleifend
            luctus. Nam ac dui cursus, efficitur ante sed, tempor sapien.
            Praesent nec mattis enim. Mauris a laoreet purus.
          </p>
          <!-- features card  -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
            <div
              v-for="(item, itemIndex) in achivementList"
              :key="itemIndex"
              :class="`flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:space-x-3 p-6 ${item.bgColor}  rounded-xl overflow-hidden`"
              :data-aos="item.aos"
              data-aos-easing="ease-in"
              data-aos-duration="3500"
            >
              <!-- icons -->
              <div>
                <span class="inline-block">
                  <img :src="item.icon" alt="" />
                </span>
              </div>
              <div class="text-center sm:text-left">
                <h2 class="text-body-24 font-medium text-dark-06 mb-2">
                  <ICountUp
                    :delay="item.delay"
                    :endVal="item.value"
                    :options="options"
                  />
                  +
                </h2>
                <p
                  class="text-body-14 text-dark-42 uppercase whitespace-nowrap overflow-ellipsis"
                >
                  {{ item.designation }}
                </p>
              </div>
            </div>
            <div class="hidden">
              <div
                class="flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:space-x-3 p-6 bg-green-e7 rounded-xl overflow-hidden"
              >
                <!-- icons -->
                <div>
                  <span class="inline-block">
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.2"
                        d="M19.2501 35C25.5324 35 30.6251 29.9072 30.6251 23.625C30.6251 17.3428 25.5324 12.25 19.2501 12.25C12.9679 12.25 7.87512 17.3428 7.87512 23.625C7.87512 29.9072 12.9679 35 19.2501 35Z"
                        fill="#0F9918"
                      />
                      <path
                        d="M19.2501 35C25.5324 35 30.6251 29.9072 30.6251 23.625C30.6251 17.3428 25.5324 12.25 19.2501 12.25C12.9679 12.25 7.87512 17.3428 7.87512 23.625C7.87512 29.9072 12.9679 35 19.2501 35Z"
                        stroke="#0F9918"
                        stroke-width="3"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M33.9964 12.6739C35.5609 12.2331 37.2018 12.1327 38.8084 12.3794C40.415 12.6261 41.9501 13.2143 43.3103 14.1042C44.6705 14.9942 45.8241 16.1653 46.6936 17.5387C47.563 18.9121 48.1281 20.4558 48.3507 22.066C48.5733 23.6761 48.4482 25.3153 47.984 26.873C47.5198 28.4308 46.7271 29.8709 45.6594 31.0966C44.5917 32.3222 43.2737 33.3047 41.7943 33.9781C40.3149 34.6515 38.7083 35 37.0829 35.0002"
                        stroke="#0F9918"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.4989 43.1805C5.27544 40.6535 7.63392 38.5911 10.3752 37.1673C13.1165 35.7435 16.1601 35.0001 19.2491 35C22.3381 34.9999 25.3817 35.743 28.1231 37.1666C30.8645 38.5902 33.2232 40.6525 34.9999 43.1793"
                        stroke="#0F9918"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M37.0829 35C40.1722 34.9978 43.2165 35.74 45.9581 37.1637C48.6997 38.5875 51.0579 40.6509 52.833 43.1793"
                        stroke="#0F9918"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div class="text-center sm:text-left">
                  <h2 class="text-body-24 font-medium text-dark-06 mb-2">
                    23+
                  </h2>
                  <p class="text-body-14 text-dark-42 uppercase">
                    Years of Experience
                  </p>
                </div>
              </div>
              <div
                class="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-x-3 p-6 bg-yellow-ff rounded-xl"
              >
                <!-- icons -->
                <div>
                  <span>
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.2"
                        d="M28 49C39.598 49 49 39.598 49 28C49 16.402 39.598 7 28 7C16.402 7 7 16.402 7 28C7 39.598 16.402 49 28 49Z"
                        fill="#FF8800"
                      />
                      <path
                        d="M28 49C39.598 49 49 39.598 49 28C49 16.402 39.598 7 28 7C16.402 7 7 16.402 7 28C7 39.598 16.402 49 28 49Z"
                        stroke="#FF8800"
                        stroke-width="3"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M37.0952 33.249C36.1727 34.8446 34.8467 36.1695 33.2502 37.0905C31.6538 38.0116 29.8431 38.4965 28 38.4965C26.157 38.4965 24.3463 38.0117 22.7498 37.0906C21.1534 36.1696 19.8273 34.8448 18.9048 33.2492"
                        stroke="#FF8800"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21.25 23.625C21.25 24.2463 20.7463 24.75 20.125 24.75C19.5037 24.75 19 24.2463 19 23.625C19 23.0037 19.5037 22.5 20.125 22.5C20.7463 22.5 21.25 23.0037 21.25 23.625Z"
                        fill="#FF8800"
                        stroke="#FF8800"
                        stroke-width="3"
                      />
                      <path
                        d="M37 23.625C37 24.2463 36.4963 24.75 35.875 24.75C35.2537 24.75 34.75 24.2463 34.75 23.625C34.75 23.0037 35.2537 22.5 35.875 22.5C36.4963 22.5 37 23.0037 37 23.625Z"
                        fill="#FF8800"
                        stroke="#FF8800"
                        stroke-width="3"
                      />
                    </svg>
                  </span>
                </div>
                <div class="text-center sm:text-left">
                  <h2 class="text-body-24 font-medium text-dark-06 mb-2">
                    183+
                  </h2>
                  <p class="text-body-14 text-dark-42 uppercase">
                    Happy Clients
                  </p>
                </div>
              </div>
              <div
                class="flex flex-col sm:flex-row justify-center sm:justify-start items-center space-x-3 p-6 bg-pink-fe rounded-xl"
              >
                <!-- icons -->
                <div>
                  <span>
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.2"
                        d="M28.0003 33.2498C20.628 33.2614 13.3837 31.3232 7.00201 27.6319V45.4998C7.00201 45.7296 7.04728 45.9571 7.13522 46.1695C7.22317 46.3818 7.35207 46.5747 7.51457 46.7372C7.67708 46.8997 7.87 47.0286 8.08232 47.1166C8.29464 47.2045 8.5222 47.2498 8.75201 47.2498H47.252C47.4818 47.2498 47.7094 47.2045 47.9217 47.1166C48.134 47.0286 48.327 46.8997 48.4895 46.7372C48.652 46.5747 48.7809 46.3818 48.8688 46.1695C48.9568 45.9571 49.002 45.7296 49.002 45.4998V27.6299C42.6196 31.3225 35.374 33.2614 28.0003 33.2498Z"
                        fill="#F249C8"
                      />
                      <path
                        d="M47.252 15.75H8.75201C7.78552 15.75 7.00201 16.5335 7.00201 17.5V45.5C7.00201 46.4665 7.78552 47.25 8.75201 47.25H47.252C48.2185 47.25 49.002 46.4665 49.002 45.5V17.5C49.002 16.5335 48.2185 15.75 47.252 15.75Z"
                        stroke="#F249C8"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M36.7488 15.75V12.25C36.7488 11.3217 36.3801 10.4315 35.7237 9.77513C35.0673 9.11875 34.1771 8.75 33.2488 8.75H22.7488C21.8206 8.75 20.9303 9.11875 20.274 9.77513C19.6176 10.4315 19.2488 11.3217 19.2488 12.25V15.75"
                        stroke="#F249C8"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M49.0023 27.6304C42.6199 31.323 35.3743 33.2618 28.0006 33.2502C20.6281 33.2618 13.3837 31.3236 7.00201 27.6322"
                        stroke="#F249C8"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25.3767 26.25H30.6267"
                        stroke="#F249C8"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div class="text-center sm:text-left">
                  <h2 class="text-body-24 font-medium text-dark-06 mb-2">
                    315+
                  </h2>
                  <p class="text-body-14 text-dark-42 uppercase">
                    Completed Project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="lg:col-start-10 lg:col-end-17  order-1 lg:order-2 mb-6 lg:mb-0 h-680 clip-thumb"
        >
          <img
            src="~assets/images/all-img/img-four.png"
            alt=""
            class="w-full h-full object-cover lg:object-fill"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import bannerImg from "~/assets/images/all-img/img-five.png";
import ProductCard from "../components/ProductCard.vue";
import ICountUp from "vue-countup-v2";

export default {
  name: "IndexPage",
  components: { ProductCard, ICountUp },
  data() {
    return {
      options: {
        useEasing: true,
        useGrouping: true,
      },

      bannerImg,
      featuredList: [
        {
          img: "https://i.imgur.com/YD6WZwi.png",
          tags: "Figma,Html",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
          price: 13,
          aos: "fade-right",
        },
        {
          img: "https://i.imgur.com/IwfwAGA.png",
          tags: "Figma",
          title: "Relik - Admin Dashboard",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
          price: 18,
          aos: "fade-left",
        },
      ],
      latestProduct: [
        {
          price: 13,
          aosDelay: 0,
          img: "https://i.imgur.com/0F0qE3V.png",
          tags: "Figma,Html",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
        },
        {
          aosDelay: 150,
          img: "https://i.imgur.com/pFuvaJH.png",
          tags: "Figma",
          title: "Relik - Admin Dashboard",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
          price: 18,
        },
        {
          aosDelay: 300,
          img: "https://i.imgur.com/76niUXz.png",
          tags: "Figma,Html",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
          price: 13,
        },
        {
          aosDelay: 450,
          img: "https://i.imgur.com/YD6WZwi.png",
          tags: "Figma",
          title: "Relik - Admin Dashboard",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
          price: 18,
        },
        {
          aosDelay: 500,
          img: "https://i.imgur.com/IwfwAGA.png",
          tags: "Figma,Html",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
          price: 13,
        },
        {
          aosDelay: 650,
          img: "https://i.imgur.com/wGOemD7.png",
          tags: "Figma",
          title: "Relik - Admin Dashboard",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
          price: 18,
        },
      ],
      productList: [
        {
          aosDelay: 0,
          title: "Project Information",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          aosDelay: 150,
          title: "User Experience Design",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          aosDelay: 300,
          title: "Project Introduction",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          aosDelay: 450,
          title: "Front-end Development",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          aosDelay: 600,
          title: "Project Information",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          aosDelay: 750,
          title: "Delivery & Client Feedback",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
      ],

      achivementList: [
        {
          value: 17,
          delay: 1000,
          aos: "fade-right",
          bgColor: "bg-pink-f1",
          designation: "Awards Rewarded",
          icon: "https://i.imgur.com/XHzKgiy.png",
        },
        {
          value: 23,
          delay: 1200,
          aos: "fade-left",
          bgColor: " bg-green-e7",
          designation: "Years of Experience",
          icon: "https://i.imgur.com/RHw1fUb.png",
        },
        {
          value: 23,
          delay: 1600,
          aos: "fade-right",
          bgColor: "bg-yellow-ff",
          designation: "Happy Clients",
          icon: "https://i.imgur.com/ddKeF4B.png",
        },
        {
          value: 315,
          delay: 2400,
          aos: "fade-left",
          bgColor: "bg-pink-fe",
          designation: "COMPLETED PROJECT",
          icon: "https://i.imgur.com/h8K5qbt.png",
        },
      ],
    };
  },
};
</script>
