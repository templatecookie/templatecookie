<template>
  <div>
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <!-- Gradients -->
      <div
        aria-hidden="true"
        class="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div
          class="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"
        ></div>
        <div
          class="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"
        ></div>
      </div>
      <!-- End Gradients -->

      <div class="relative z-10">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div class="max-w-2xl text-center mx-auto">
            <p
              class="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400"
            >
              Templatecookie: A vision for 2023
            </p>

            <!-- Title -->
            <div class="mt-5 max-w-2xl">
              <h1
                class="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200"
              >
                Custom Web Development Services
              </h1>
            </div>
            <!-- End Title -->

            <div class="mt-5 max-w-3xl">
              <p class="text-lg text-gray-600 dark:text-gray-400">
                At our core, we're all about developing unique, responsive web
                development solutions– no cookie-cutter projects. Each website
                we create is unique, finely tailored to meet your users' exact
                needs. Forget templates and plugins; our custom builds are all
                about delivering a website that's uniquely yours—user-friendly,
                stable, reliable- and stands out from the crowd.
              </p>
            </div>

            <!-- Buttons -->
            <div class="mt-8 gap-3 flex justify-center">
              <a
                class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Get started
                <svg
                  class="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
            <!-- End Buttons -->
          </div>
        </div>
      </div>
      <div class="bg-white">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div
            class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
          >
            <img
              class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width="158"
              height="48"
            />
            <img
              class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width="158"
              height="48"
            />
            <img
              class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width="158"
              height="48"
            />
            <img
              class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width="158"
              height="48"
            />
            <img
              class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width="158"
              height="48"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- End Hero -->
  </div>
</template>

<script  setup>
import useGraphqlQuery from "~/composables/useGraphqlQuery";
import HOMEPAGE_QUERY from "../graphql/homepage";

const title = "Premium Quality Scripts & HTML Templates | Templatecookie.com";
const description =
  "Templatecookie is a team of developers working on building quality templates and scripts! We create high-quality products to help you manage your business.";

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
