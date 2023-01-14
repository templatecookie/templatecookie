<template>
  <div>
    <HeroSection :data="homepage.heroSection" v-if="homepage && homepage.heroSection"/>

    <!-- Latest Product -->
    <section class="latest py-14 md:py-124" v-if="homepage && homepage.latestProduct" id="products">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="mb-72 text-center">
          <h2 class="text-4xl md:text-5xl textdark font-semibold capitalize tracking-1 mb-8 max-w-lg mx-auto">
            {{ homepage.latestProduct[0].title }}
          </h2>
          <p class="text-base font-light max-w-lg mx-auto textdark" v-if="homepage.latestProduct[0].description">
            {{ homepage.latestProduct[0].description }}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div
            v-for="(item, index) in latestProducts"
            :key="index"
            class="flex items-stretch" data-aos="fade-up" :data-aos-delay="index * 100">
            <ProductCard :product="item" :large="false" />
          </div>
        </div>
      </div>
    </section>

    <!-- Why Should  -->
    <TopFeaturesSection v-if="homepage && homepage.topFeatures" :data="homepage.topFeatures" />
    <!-- <product-support /> -->
    <WhyUs v-if="homepage && homepage.whyUsSection" :data="homepage.whyUsSection" />
    <div class="bg-primary">
      <div class="mx-auto max-w-2xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span class="block"> Build Better Products </span>
          <span class="block"> Hire us today </span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-indigo-200">
          Our team composed with expert designer and developers to handle project at any size
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <nuxt-link to="/hire-us" class="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-dark hover:bg-indigo-50 sm:w-auto">
            Hire Us Now
          </nuxt-link>
          <nuxt-link to="/installation-plans" class="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-dark hover:bg-indigo-50 sm:w-auto">
            Installation Plans
          </nuxt-link>
        </div>
      </div>
    </div>

    <blog-section :data="latestPosts" />
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import HOMEPAGE_QUERY from '~/graphql/homepage'
import HeroSection from "../components/Home/HeroSection.vue";
import WhyUs from "../components/Home/WhyUs.vue";
import BlogSection from "../components/Home/BlogSection.vue";
import TopFeaturesSection from "../components/Home/TopFeaturesSection.vue";

export default {
  components: { ProductCard, BlogSection, HeroSection, WhyUs, TopFeaturesSection },
  head() {
    const ogImage = "/social-meta.png";
    const description = "Templatecookie is a team of developers working on building quality templates and scripts! We create high-quality products to help you manage your business."
    const title = "Premium Quality Scripts & HTML Templates | Templatecookie.com"
    return {
      title: title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', name: 'og:description', content: description },
        { hid: 'og:type', property: 'og:type', name: 'og:type', content: "website" },
        { hid: 'og:image', property: 'og:image', name: 'og:image', content: ogImage },
      ],
    }
  },
  async asyncData({ app, $sentry }) {
    try {
      const client = app.apolloProvider.defaultClient;

      const { data } = await client.query({
        query: HOMEPAGE_QUERY,
      })

      const homepage = data.homepage;
      const latestProducts = data.allProducts;
      const latestPosts = data.allPosts;

      return { homepage, latestProducts, latestPosts }
    } catch (error) {
      $sentry.captureException(error)
    }
  },
  data() {
    return {
      options: {
        useEasing: true,
        useGrouping: true,
      },
      bannerImg: "/images/img-five.png",
    };
  }
};
</script>
