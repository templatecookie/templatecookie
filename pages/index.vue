<template>
  <div>
    <HeroSection :bannerImg="bannerImg" :data="homepage.heroSection" v-if="homepage && homepage.heroSection"/>
    <!-- Featured Card  -->
    <section class="featured pt-14 md:pt-124" v-if="homepage && homepage.featuredProductSection">
      <div class="container">
        <!-- section title  -->
        <div class="mb-72 text-center">
          <h2 class="text-4xl md:text-title text-dark-06 font-semibold capitalize tracking-1">
            {{ homepage.featuredProductSection.title }}
          </h2>
        </div>

        <!-- Features Card  -->
        <div class="grid lg:grid-cols-2 gap-6" v-if="homepage.featuredProductSection.products.data">
          <div v-for="(item, itemIndex) in homepage.featuredProductSection.products.data" :key="itemIndex" class="flex items-stretch">
            <ProductCard :product="item.attributes" :id="item.id" :large="true"/>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Product -->
    <section class="latest py-14 md:py-124" v-if="homepage && homepage.latestProductsSection">
      <div class="container">
        <!-- section title  -->
        <div class="mb-72 text-center">
          <h2 class="text-4xl md:text-title text-dark-06 font-semibold capitalize tracking-1">
            {{ homepage.latestProductsSection.title }}
          </h2>
        </div>
        <!-- Latest Product -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div
            v-for="(item, itemIndex) in latestProducts"
            :key="itemIndex"
            class="flex items-stretch"
          >
            <ProductCard :product="item.attributes" :id="item.id" :large="true" />
          </div>
        </div>

        <div>
          <nuxt-link :to="{ name: 'products' }"
            class="flex items-center bg-blue-0b hover:bg-dark-06 transition-all w-auto max-w-232 justify-center text-button-17 text-white rounded-lg overflow-hidden mx-auto">
            Browse Products
            <!-- arrow toggle icon -->
            <span class="inline-block ml-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </span>
          </nuxt-link>
        </div>
      </div>
    </section>

    <!-- Why Should  -->
    <section class="why-should bg-gray-f5 py-14 md:py-124">
      <div class="container">
        <!-- section title  -->
        <div class="mb-72 text-center">
          <h2
            class="text-4xl md:text-title text-dark-06 font-semibold capitalize tracking-1 mb-8 max-w-md mx-auto"
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
          >
            <!-- Service card  -->
            <BusinessCard
              className="text-center"
              classNameIcon="m-auto"
              :title="item.title"
              :text="item.text"
            />
          </div>
        </div>
      </div>
    </section>
    <WhyUs :data="homepage.whyUsSection" />
  </div>
</template>

<script>
import bannerImg from "~/assets/images/all-img/img-five.png";
import ProductCard from "../components/ProductCard.vue";
import HOMEPAGE_QUERY from '~/graphql/homepage'
import LATEST_PRODUCTS from '~/graphql/latestProducts'
import HeroSection from "../components/Home/HeroSection.vue";
import WhyUs from "../components/Home/WhyUs.vue";

export default {
  name: "IndexPage",
  components: { ProductCard, HeroSection, WhyUs },
  head: {
    title: 'Homepage | Templatecookie',
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
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;

    const { data } = await client.query({
      query: HOMEPAGE_QUERY,
    })
    let products = await client.query({
      query: LATEST_PRODUCTS,
    })
    
    const homepage = data.homepage.data.attributes;
    const latestProducts = products.data.products.data;
    
    return { homepage, latestProducts }
    // return { homepage }
  },
  data() {
    return {
      options: {
        useEasing: true,
        useGrouping: true,
      },

      bannerImg,
      latestProduct: [
        {
          price: 13,
          img: "https://i.imgur.com/0F0qE3V.png",
          tags: "Figma,Html",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
        },
        {
          img: "https://i.imgur.com/pFuvaJH.png",
          tags: "Figma",
          title: "Relik - Admin Dashboard",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
          price: 18,
        },
        {
          img: "https://i.imgur.com/76niUXz.png",
          tags: "Figma,Html",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
          price: 13,
        },
        {
          img: "https://i.imgur.com/YD6WZwi.png",
          tags: "Figma",
          title: "Relik - Admin Dashboard",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
          price: 18,
        },
        {
          img: "https://i.imgur.com/IwfwAGA.png",
          tags: "Figma,Html",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
          price: 13,
        },
        {
          img: "https://i.imgur.com/wGOemD7.png",
          tags: "Figma",
          title: "Relik - Admin Dashboard",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
          price: 18,
        },
      ],
      productList: [
        {
          title: "Project Information",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          title: "User Experience Design",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          title: "Project Introduction",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          title: "Front-end Development",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          title: "Project Information",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
        {
          title: "Delivery & Client Feedback",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.",
        },
      ],
    };
  },
};
</script>
