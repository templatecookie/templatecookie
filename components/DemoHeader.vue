<template>
  <header class="sticky top-0 w-full left-0 z-[999999]">
    <div
      v-if="product.showNotice"
      class="flex items-center justify-center gap-x-6 bg-primary px-6 py-2.5 sm:px-3.5"
    >
      <p class="text-sm leading-6 text-white">
        <structured-text :data="product.noticeBar" />
      </p>
      <!-- <div class="flex flex-1 justify-end">
        <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span class="sr-only">Dismiss</span>
          <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div> -->
    </div>

    <div class="relative bg-gray-500">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          class="flex items-center justify-between py-6 md:justify-start md:space-x-10 border-b border-b-gray-50/30"
        >
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <nuxt-link to="/">
              <span class="sr-only">Templatecookie</span>
              <NuxtImg
                class="h-8 w-auto sm:h-10"
                src="/logo-white.svg"
                alt="Premium Quality Scripts & HTML Templates | Templatecookie.com "
              />
            </nuxt-link>
          </div>
          <div class="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              @click="mobileMenu = !mobileMenu"
            >
              <span class="sr-only">Open menu</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div
            class="hidden items-center justify-end md:flex md:flex-1 lg:w-0 space-x-4"
          >
            <template v-for="(item, index) in mainMenuItems" :key="index">
              <button-element
                :label="item.name"
                :href="item.href"
                v-if="item.status"
                css-class="bg-primary hover:bg-secondary text-white"
              >
                <template #icon>
                  <span v-if="item.id === 'cart'">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </span>
                  <span v-if="item.id === 'customization'">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </span>
                </template>
              </button-element>
            </template>
          </div>
        </div>
      </div>
      <div
        class="mx-auto max-w-7xl px-4 sm:px-6"
        v-if="product.menuItems && product.menuItems.length"
      >
        <nav class="hidden md:flex md:justify-between py-3">
          <div class="flex flex-wrap gap-8">
            <a
              :href="item.href"
              v-for="(item, index) in product.menuItems"
              :key="index"
              class="text-sm text-white opacity-80 hover:opacity-100 transition duration-200 ease-linear before:content-['#'] before:pr-1 before:opacity-0 hover:before:opacity-100"
            >
              {{ item.label }}
            </a>
          </div>
          <div class="flex">
            <nuxt-link
              v-if="product.docsUrl"
              :to="product.docsUrl"
              class="text-sm text-white opacity-80 hover:opacity-100 transition duration-200 ease-linear inline-flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z"
                  clip-rule="evenodd"
                />
              </svg>

              Documentation
            </nuxt-link>
          </div>
        </nav>
      </div>

      <div
        class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-40"
        v-if="mobileMenu"
      >
        <div
          class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <nuxt-link to="/">
                <NuxtImg
                  class="h-8 w-auto"
                  src="/logo.svg"
                  alt="Templatecookie.com Premium Quality Scripts & HTML Templates"
                />
              </nuxt-link>
              <div class="-mr-2">
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                  @click="mobileMenu = !mobileMenu"
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-4 border-t-2 border-gray-100 pt-4">
              <nav class="grid gap-y-4">
                <a
                  :href="item.href"
                  class="flex items-center rounded-md hover:bg-gray-50"
                  v-for="(item, index) in product.menuItems"
                  :key="index"
                >
                  <span class="text-base font-medium text-gray-900">{{
                    item.label
                  }}</span>
                </a>
              </nav>
            </div>
          </div>
          <div class="space-y-6 py-6 px-5">
            <div>
              <nuxt-link
                v-for="(item, index) in mainMenuItems"
                :key="index"
                :to="item.href"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary mb-4"
              >
                {{ item.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import ButtonElement from "./ButtonElement.vue";

const props = defineProps({
  product: Object,
});

const mobileMenu = ref(false);

const mainMenuItems = [
  {
    id: "cart",
    name: "Buy Now",
    href: "#pricing",
    status: true,
  },
  {
    id: "customization",
    status: props.product.offerRequestCustomization,
    name: "Request Customization",
    href: "/hire-us",
  },
];
</script>
