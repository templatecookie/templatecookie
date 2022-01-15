<template>
  <div>
    <!-- Banner  -->
    <section
      class="realtive overflow-hidden pb-14 lg:pb-72 pt-156 bg-no-repeat bg-center bg-cover"
      :style="{ backgroundImage: `url(${bannerImg})` }"
    >
      <div class="container">
        <!-- banner content  -->
        <div class="text-center">
          <h1
            class="text-4xl md:text-heading-40 text-dark-06 mb-6 max-w-680 mx-auto font-semibold"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            UI, HTLM & Laravel Templates
          </h1>
          <p
            class="text-lg md:text-body-20 text-dark-06 mb-8 max-w-680 mx-auto"
          >
            Quisque sed est condimentum, placerat tellus a, dictum diam.
            Praesent volutpat nisl ac ligula lobortis imperdiet.
          </p>

          <!-- Templates Tabs Menu  -->
          <div
            class="grid grid-cols-2 lg:grid-cols-3 items-center bg-white relative rounded px-6"
          >
            <!-- Tab menu  -->
            <div class="col-span-full lg:col-span-2">
              <ul
                class="flex items-center justify-center lg:justify-start feature relative"
              >
                <li>
                  <div
                    class="flex flex-col items-center feature-box group"
                    :class="{ 'is-active': activeTab === 'bootstrapTab' }"
                    @click="activeTab = 'bootstrapTab'"
                  >
                    <!-- icon  -->
                    <span class="feature-box__icon inline-block mb-3">
                      <img
                        src="~assets/images/versions/bootstrap.png"
                        alt="version"
                      />
                    </span>
                    <h6
                      class="feature-box__title text-body-16 capitalize text-gray-61 text-gray-6a group-hover:text-dark-06"
                    >
                      Bootstrap
                    </h6>
                  </div>
                </li>
                <li>
                  <div
                    class="flex flex-col items-center feature-box group"
                    :class="{ 'is-active': activeTab === 'vuejsTab' }"
                    @click="activeTab = 'vuejsTab'"
                  >
                    <!-- icon  -->
                    <span class="feature-box__icon inline-block mb-3">
                      <img
                        src="~assets/images/versions/vue.png"
                        alt="version"
                      />
                    </span>
                    <h6
                      class="feature-box__title text-body-16 capitalize text-gray-61 text-gray-6a group-hover:text-dark-06"
                    >
                      Vue JS
                    </h6>
                  </div>
                </li>
                <li>
                  <div
                    class="flex flex-col items-center feature-box group"
                    :class="{ 'is-active': activeTab === 'htmlTab' }"
                    @click="activeTab = 'htmlTab'"
                  >
                    <!-- icon  -->
                    <span class="feature-box__icon inline-block mb-3">
                      <img
                        src="~assets/images/versions/html.png"
                        alt="version"
                      />
                    </span>
                    <h6
                      class="feature-box__title text-body-16 capitalize text-gray-61 text-gray-6a group-hover:text-dark-06"
                    >
                      Html
                    </h6>
                  </div>
                </li>
                <li>
                  <div
                    class="flex flex-col items-center feature-box group"
                    :class="{ 'is-active': activeTab === 'figmaTab' }"
                    @click="activeTab = 'figmaTab'"
                  >
                    <!-- icon  -->
                    <span class="feature-box__icon inline-block mb-3">
                      <img
                        src="~assets/images/versions/figma.png"
                        alt="version"
                      />
                    </span>
                    <h6
                      class="feature-box__title text-body-16 capitalize text-gray-61 text-gray-6a group-hover:text-dark-06"
                    >
                      Figma
                    </h6>
                  </div>
                </li>
                <li>
                  <div
                    class="flex flex-col items-center feature-box group"
                    :class="{ 'is-active': activeTab === 'adobeTab' }"
                    @click="activeTab = 'adobeTab'"
                  >
                    <!-- icon  -->
                    <span class="feature-box__icon inline-block mb-3">
                      <img src="~assets/images/versions/xd.png" alt="version" />
                    </span>
                    <h6
                      class="feature-box__title text-body-16 capitalize text-gray-61 text-gray-6a group-hover:text-dark-06"
                    >
                      Adobe XD
                    </h6>
                  </div>
                </li>
              </ul>
            </div>
            <!-- Sort List  -->
            <div class="col-span-full lg:col-span-1 py-4 lg:py-0">
              <!-- dropdown wrapper  -->
              <div
                class="flex items-center justify-center lg:justify-end space-x-3 sort-filter"
              >
                <h5 class="whitespace-nowrap text-body-14 leading-5">
                  Sort by :
                </h5>
                <div class="w-200">
                  <v-select
                    label="name"
                    :clearable="false"
                    placeholder="Select Sort"
                    :options="sortList"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Item content -->
    <section>
      <div class="container">
        <div v-if="activeTab === 'bootstrapTab'">
          <!-- filter content  -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
            <div
              v-for="(item, itemIndex) in bootstrapProduct"
              :key="itemIndex"
              class="flex items-stretch"
            >
              <ProductCard
                :img="item.img"
                :tag="item.tags"
                :title="item.title"
                :text="item.text"
                :price="item.price"
                className=" h-190 lg:h-296"
                buttonClass=" text-button-17 px-9  "
                :data-aos="item.aos"
                data-aos-duration="1200"
              />
            </div>
          </div>
        </div>
        <div v-if="activeTab === 'vuejsTab'">
          <!-- filter content  -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
            <div
              v-for="(item, itemIndex) in vueProduct"
              :key="itemIndex"
              class="flex items-stretch"
              :data-aos="item.aos"
              data-aos-duration="1200"
            >
              <ProductCard
                :img="item.img"
                :tag="item.tags"
                :title="item.title"
                :text="item.text"
                :price="item.price"
                className=" h-190  lg:h-296"
                buttonClass=" text-button-17 px-9  "
              />
            </div>
          </div>
        </div>
        <div v-if="activeTab === 'htmlTab'">
          <!-- filter content  -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
            <div
              v-for="(item, itemIndex) in htmlProduct"
              :key="itemIndex"
              class="flex items-stretch"
              :data-aos="item.aos"
              data-aos-duration="1200"
            >
              <ProductCard
                :img="item.img"
                :tag="item.tags"
                :title="item.title"
                :text="item.text"
                :price="item.price"
                className=" h-190  lg:h-296"
                buttonClass=" text-button-17 px-9  "
              />
            </div>
          </div>
        </div>
        <div v-if="activeTab === 'figmaTab'">
          <!-- filter content  -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
            <div
              v-for="(item, itemIndex) in figmaProduct"
              :key="itemIndex"
              class="flex items-stretch"
              :data-aos="item.aos"
              data-aos-duration="1200"
            >
              <ProductCard
                :img="item.img"
                :tag="item.tags"
                :title="item.title"
                :text="item.text"
                :price="item.price"
                className=" h-190  lg:h-296"
                buttonClass=" text-button-17 px-9  "
              />
            </div>
          </div>
        </div>
        <div v-if="activeTab === 'adobeTab'">
          <!-- filter content  -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
            <div
              v-for="(item, itemIndex) in adobeProduct"
              :key="itemIndex"
              class="flex items-stretch"
              :data-aos="item.aos"
              data-aos-duration="1200"
            >
              <ProductCard
                :img="item.img"
                :tag="item.tags"
                :title="item.title"
                :text="item.text"
                :price="item.price"
                className=" h-190  lg:h-296"
                buttonClass=" text-button-17 px-9  "
              />
            </div>
          </div>
        </div>

        <!-- pagination   -->
        <div class="flex items-center justify-center py-7">
          <Pagination />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import bannerImg from "~/assets/images/all-img/img-five.png";
import Pagination from "../Pagination.vue";
import ProductCard from "../ProductCard.vue";
export default {
  components: {
    Pagination,
    ProductCard,
  },
  data() {
    return {
      tabs: [],
      activeTab: "bootstrapTab",
      bannerImg,
      sortList: ["Popular", "Mosit Viewed"],
      bootstrapProduct: [
        {
          price: 13,
          tags: "Figma,Html",
          aos: "fade-left",
          img: "https://i.imgur.com/0F0qE3V.png",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
        },
        {
          price: 18,
          tags: "Figma",
          aos: "fade-right",
          img: "https://i.imgur.com/pFuvaJH.png",
          title: "Relik - Admin Dashboard",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
        },
        {
          price: 13,
          tags: "Figma,Html",
          aos: "fade-left",
          img: "https://i.imgur.com/76niUXz.png",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
        },
        {
          price: 18,
          tags: "Figma",
          aos: "fade-right",
          img: "https://i.imgur.com/YD6WZwi.png",
          title: "Relik - Admin Dashboard",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
        },
        {
          price: 13,
          aos: "fade-left",
          tags: "Figma,Html",
          img: "https://i.imgur.com/IwfwAGA.png",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
        },
        {
          price: 18,
          tags: "Figma",
          aos: "fade-right",
          img: "https://i.imgur.com/wGOemD7.png",
          title: "Relik - Admin Dashboard",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
        },
      ],
      vueProduct: [
        {
          price: 13,
          tags: "Figma,Html",
          aos: "fade-left",
          img: "https://i.imgur.com/76niUXz.png",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
        },
      ],
      htmlProduct: [
        {
          price: 13,
          tags: "Figma,Html",
          aos: "fade-left",
          img: "https://i.imgur.com/0F0qE3V.png",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
        },
        {
          price: 18,
          tags: "Figma",
          title: "Relik - Admin Dashboard",
          aos: "fade-right",
          img: "https://i.imgur.com/pFuvaJH.png",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
        },
        {
          price: 13,
          tags: "Figma,Html",
          aos: "fade-right",
          img: "https://i.imgur.com/76niUXz.png",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
        },
      ],
      figmaProduct: [
        {
          price: 18,
          tags: "Figma",
          aos: "fade-left",
          title: "Relik - Admin Dashboard",
          img: "https://i.imgur.com/pFuvaJH.png",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
        },
        {
          price: 13,
          tags: "Figma,Html",
          aos: "fade-right",
          img: "https://i.imgur.com/76niUXz.png",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
        },
        {
          price: 18,
          tags: "Figma",
          aos: "fade-left",
          img: "https://i.imgur.com/YD6WZwi.png",
          title: "Relik - Admin Dashboard",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
        },
        {
          price: 13,
          aos: "fade-right",
          tags: "Figma,Html",
          img: "https://i.imgur.com/IwfwAGA.png",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
        },
        {
          price: 18,
          tags: "Figma",
          aos: "fade-left",
          img: "https://i.imgur.com/wGOemD7.png",
          title: "Relik - Admin Dashboard",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
        },
      ],
      adobeProduct: [
        {
          price: 13,
          aos: "fade-left",
          tags: "Figma,Html",
          img: "https://i.imgur.com/0F0qE3V.png",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
        },
        {
          price: 18,
          tags: "Figma",
          aos: "fade-right",
          title: "Relik - Admin Dashboard",
          img: "https://i.imgur.com/pFuvaJH.png",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
        },
      ],
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
  created() {
    this.tabs = this.$children;
  },
};
</script>
