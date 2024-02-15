<template>
  <div>
    <home-hero-section :data="homepage.heroSection" v-if="homepage && homepage?.heroSection" />

    <logo-cloud />

    <!-- Latest Product -->
    <product-section :homepage="homepage" :latestProducts="latestProducts" />

    <!-- Why Should  -->
    <home-top-features-section v-if="homepage && homepage.topFeatures" :data="homepage.topFeatures" />
    <section class="py-32 bg-gray-50">
      <div class="text-center mb-10">
        <h1 class="text-4xl md:text-heading-40 textdark mb-6 max-w-680 mx-auto font-semibold"> Browse Our Free Products
        </h1>
        <p class="text-lg md:text-lg textdark mb-8 max-w-full md:max-w-536 mx-auto font-light">
          Browse our latest products
          for your next big idea, and see
          what we have to offer. </p>
      </div>
      <free-products />
      <div class="flex items-center justify-center w-full">
        <nuxt-link href="/products"
          class="mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary">View
          All </nuxt-link>
      </div>
    </section>
    <home-why-us v-if="homepage && homepage.whyUsSection" :data="homepage.whyUsSection" />
    <div class=" bg-primary">
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
