<template>
  <div class="bg-white">
    <header class="tc-primary-header">
      <div class="relative bg-white">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:justify-start lg:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <nuxt-link to="/">
              <span class="sr-only">Templatecookie</span>
              <NuxtImg class="h-8 w-auto sm:h-10" :src="logo?.url"
                alt="Templatecookie.com Premium Quality Scripts & HTML Templates" />
            </nuxt-link>
          </div>
          <div class="lg:hidden ml-auto">
            <div @click="mobileNav = !mobileNav" class="toggle flex flex-col gap-1" :class="{ active: mobileNav }">
              <span class="w-5 h-0.5 bg-gray-700 inline-flex" />
              <span class="w-5 h-0.5 bg-gray-700 inline-flex" />
              <span class="w-5 h-0.5 bg-gray-700 inline-flex" />
            </div>
          </div>
          <nav class="hidden space-x-6 lg:flex items-center">
            <div class="relative dropdown-btn">
              <button :class="solutionStatus ? 'text-gray-900' : 'text-gray-500'"
                class="group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 lg:focus:ring-transparent focus:ring-primary focus:ring-offset-2"
                aria-expanded="false">
                <span class="font-lexend">Our Products</span>
                <svg :class="solutionStatus ? 'text-gray-600' : 'text-gray-400'"
                  class="ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd" />
                </svg>
              </button>

              <transition name="flayout-menu">
                <div
                  class="dropdown-item absolute z-50 -ml-4 w-screen max-w-md transform lg:left-0 lg:ml-0 lg:max-w-2xl">
                  <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                      <nuxt-link :to="{
                          name: 'demo-slug',
                          params: { slug: product.slug },
                        }" v-for="(product, index) in selectedProducts" :key="index"
                        class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                        <div
                          class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary text-white sm:h-12 sm:w-12">
                          <NuxtImg class="w-full h-full object-cover rounded-md" v-if="product.thumbnail"
                            :src="product.thumbnail.url" :alt="product.name" />
                        </div>
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            {{ product.name }}
                          </p>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
            <div class="relative dropdown-btn">
              <button :class="solutionStatus ? 'text-gray-900' : 'text-gray-500'"
                class="group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 lg:focus:ring-transparent focus:ring-primary focus:ring-offset-2"
                aria-expanded="false">
                <span class="font-lexend">Our Services</span>
                <svg :class="solutionStatus ? 'text-gray-600' : 'text-gray-400'"
                  class="ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd" />
                </svg>
              </button>

              <transition name="flayout-menu">
                <div
                  class="dropdown-item absolute z-50 -ml-4 w-screen max-w-sm transform lg:left-0 lg:ml-0">
                  <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div
                      class="w-screen max-w-sm flex-auto bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                      <div v-for="item in solutions" :key="item.name" class="relative rounded-lg p-4 hover:bg-gray-50">
                        <nuxt-link :to="item.href" class="font-semibold text-gray-900">
                          {{ item.name }}
                          <span class="absolute inset-0" />
                        </nuxt-link>
                        <p class="mt-1 text-gray-600">{{ item.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
            <div class="relative dropdown-btn">
              <button
                class="inline-flex items-center gap-x-1 text-base font-medium leading-6 text-gray-500 font-lexend">
                <span>Company</span>
                <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
              </button>


              <transition name="flayout-menu">
                <div class="dropdown-item absolute left-0 z-50 transform flex w-screen max-w-min -ml-4 px-4">
                  <div
                    class="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                    <nuxt-link v-for="item in company" :key="item.name" :to="item.href"
                      class="block p-2 hover:text-primary">{{ item.name }}</nuxt-link>
                  </div>
                </div>
              </transition>
            </div>
          </nav>
          <div class="hidden items-center justify-end lg:flex md:flex-1 lg:w-0">
            <nuxt-link to="/hire-us"
              class="whitespace-nowrap lg:hidden xl:block block text-base font-medium text-gray-500 hover:text-gray-900">
              Roadmap
            </nuxt-link>
            <nuxt-link to="/elite-support"
              class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary">
              Customer Support
            </nuxt-link>
          </div>
        </div>

        <!-- Our Mobile Menu  -->
        <transition name="fade">
          <div class="absolute max-w-[90%] h-screen overflow-y-auto top-0 z-50 origin-top-right transform transition-all duration-300 lg:hidden"
            :class="mobileNav ? 'inset-x-0 mobile-menu-active':'-translate-x-full'" @click="mobileNav = false">
            <div v-if="data && logo"
              class="divide-y-2 divide-gray-50 bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div class="px-5 pt-5 pb-6">
                <div class="flex items-center justify-between">
                  <div>
                    <NuxtImg class="h-8 w-auto" :src="logo?.url"
                      alt="Templatecookie.com Premium Quality Scripts & HTML Templates" />
                  </div>
                  <div class="-mr-2">
                    <button type="button" @click="mobileNav = false"
                      class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                      <span class="sr-only">Close menu</span>
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="mt-6">
                  <nav class="grid grid-cols-1 gap-7">
                    <nuxt-link :to="{
                        name: 'demo-slug',
                        params: { slug: product.slug },
                      }" v-for="(product, index) in selectedProducts" :key="index"
                      class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                      <div
                        class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary text-white">
                        <NuxtImg class="w-full h-full object-cover rounded-md" v-if="product.thumbnail"
                          :src="product.thumbnail.url" :alt="product.name" />
                      </div>
                      <div class="ml-4 text-base font-medium text-gray-900">
                        {{ product.name }}
                      </div>
                    </nuxt-link>
                    <div v-for="item in solutions" :key="item.name" class="relative">
                      <nuxt-link :to="item.href" class="font-semibold text-gray-900">
                        {{ item.name }}
                        <span class="absolute inset-0" />
                      </nuxt-link>
                      <p class="mt-1 text-gray-600">{{ item.description }}</p>
                    </div>
                    <nuxt-link v-for="item in company" :key="item.name" :to="item.href"
                      class="block hover:text-primary">{{ item.name
                      }}</nuxt-link>
                  </nav>
                </div>
              </div>
              <div class="py-6 px-5">
                <div class="grid grid-cols-2 gap-4">
                  <nuxt-link v-for="(item, index) in menuItems" :key="index" :to="item.url"
                    class="text-base font-medium text-gray-900 hover:text-gray-700">
                    {{ item.name }}
                  </nuxt-link>
                </div>
                <div class="mt-6">
                  <nuxt-link to="/elite-support"
                    class="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary">
                    Elite Support
                  </nuxt-link>
                  <p class="mt-6 text-center text-base font-medium text-gray-500">
                    Like our works?
                    <nuxt-link to="/hire-us" class="text-gray-900">
                      Hire Us
                    </nuxt-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div class="fixed w-full h-full left-0 top-0 z-20 bg-black/50 transform transition-all duration-300 lg:hidden"
            :class="mobileNav ? 'visible':'invisible'" @click="mobileNav = false">
          </div>
        </transition>
      </div>
    </header>
  </div>
</template>

<script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'

  const company = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Our Blog', href: '/blog' },
  ]

  const solutions = [
    {
      name: 'Installation Plans',
      description: 'Learn about tips, product updates and company culture',
      href: '/installation-plans'
    },
    {
      name: 'Recurring Support',
      description: 'Get all of your questions answered in our forums of contact support',
      href: '/elite-support',
    },
    {
      name: 'Hire Us',
      description: 'Learn how to maximize our platform to get the most out of it',
      href: '/hire-us'
    },
  ]

  const { data } = defineProps(['data']);
  const { logo, selectedProducts } = toRefs(data);


  const solutionStatus = ref(false);
  const mobileNav = ref(false);

</script>

<style>
  .dropdown-item {
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease;
  }

  .dropdown-btn:hover .dropdown-item {
    visibility: visible;
    opacity: 1;
    transform: translateY(12px);
  }

  .tc-primary-header .router-link-exact-active:not(.bg-primary) {
    color: rgb(11, 99, 229) !important;
  }

  .tc-primary-footer .router-link-exact-active:not(.bg-primary) {
    color: white !important;
  }
</style>
