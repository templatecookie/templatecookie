<template>
  <div>
    <home-hero-section :data="homepage.heroSection" v-if="homepage && homepage?.heroSection" />

    <logo-cloud />

    <!-- Latest Product -->
    <section class="latest" v-if="homepage && homepage?.latestProduct" id="products">
      <div class="mx-auto max-w-7xl py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div class="mb-[72px] text-center">
          <h2 class="text-4xl md:text-5xl text-dark font-semibold capitalize tracking-1 mb-8">
            {{ homepage.latestProduct[0].title }}
          </h2>
          <p class="text-lg font-light max-w-lg mx-auto text-dark" v-if="homepage?.latestProduct[0].description">
            {{ homepage.latestProduct[0].description }}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div v-for="(item, index) in latestProducts" :key="index" class="flex items-stretch aos" data-aos="fade-up"
            :data-aos-delay="index * 100">
            <ProductCard :product="item" :large="false" />
          </div>
        </div>
      </div>
    </section>

    <!-- Why Should  -->
    <home-top-features-section v-if="homepage && homepage.topFeatures" :data="homepage.topFeatures" />
    <home-why-us v-if="homepage && homepage.whyUsSection" :data="homepage.whyUsSection" />
    <div class="bg-primary">
      <div class="mx-auto max-w-2xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span class="block"> Launch your Website faster </span>
          <span class="block"> Hire us today </span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-white">
          Our team composed with expert designer and developers to handle
          project at any size
        </p>
        <div class="flex justify-center gap-4 mt-8">
          <button-element label="Hire Us Now" href="/hire-us" css-class="bg-white hover:bg-dark text-primary" />

          <button-element label="Schedule a call" href="https://tidycal.com/devzakir"
            css-class="bg-secondary text-white hover:bg-dark" />
        </div>
        <!-- <div class="flex flex-wrap gap-4 justify-center mt-4">
          <nuxt-link
            to="/hire-us"
            class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-dark hover:text-white hover:bg-dark sm:w-auto"
          >
            Hire Us Now
          </nuxt-link>
          <nuxt-link
            to="/installation-plans"
            class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-dark hover:text-white hover:bg-dark sm:w-auto"
          >
          </nuxt-link>
        </div> -->
      </div>
    </div>
    <home-blog-section :data="latestPosts" />
  </div>
</template>

<script setup>
import useGraphqlQuery from "~/composables/useGraphqlQuery";
import HOMEPAGE_QUERY from "../graphql/homepage";

const title = "Custom software & SAAS development services | TemplateCookie";
const description =
  "Elevate your business with top-notch SAAS development and custom software solutions. Transform your ideas into powerful digital realities with our expert team";

const mobileMenuOpen = ref(false);
const { data, error } = await useGraphqlQuery({ query: HOMEPAGE_QUERY });
const homepage = data._rawValue.homepage;
const latestProducts = data._rawValue.allProducts;
const latestPosts = data._rawValue.allPosts;
const route = useRoute();

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://templatecookie.com" + route.path,
    },
  ],
});

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: "/social-meta.png",
});

defineOgImage({
  title: title,
  description: description,
});
</script>
