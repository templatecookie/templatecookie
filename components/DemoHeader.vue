<template>
<div class="relative bg-dark">
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <div class="flex items-center justify-between lg:border-b-2 border-gray-100/40 py-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <nuxt-link to="/">
          <span class="sr-only">Templatecookie</span>
          <img class="h-8 w-auto sm:h-10" src="/logo-white.svg" alt="Premium Quality Scripts & HTML Templates | Templatecookie.com ">
        </nuxt-link>
      </div>
      <div class="-my-2 -mr-2 md:hidden">
        <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary" @click="mobileMenu = !mobileMenu">
          <span class="sr-only">Open menu</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0 space-x-4">
        <button-element v-for="(item, index) in mainMenuItems" :key="index" :label="item.name" :href="item.href" cssClass="bg-primary hover:bg-secondary" />
      </div>
    </div>
  </div>
  <div class="mx-auto max-w-7xl px-4 sm:px-6" v-if="product.menuItems && product.menuItems.length">
    <nav class="hidden md:flex md:justify-between py-1 pb-4">
      <div class="flex flex-wrap">
        <a :href="item.href" v-for="(item, index) in product.menuItems" :key="index" class="text-sm text-gray-400 hover:text-gray-900 hover:bg-gray-200 rounded-xl py-2 px-4">
          {{ item.label }}
        </a>
      </div>
      <div class="flex">
        <nuxt-link to="/docs" class="text-sm text-gray-900 bg-gray-100 rounded-xl py-2 px-4">Documentation</nuxt-link>
      </div>
    </nav>
  </div>

  <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
  <div class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-40" v-if="mobileMenu">
    <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      <div class="px-5 pt-5 pb-6">
        <div class="flex items-center justify-between">
          <nuxt-link to="/">
            <img class="h-8 w-auto" src="/logo.svg" alt="Templatecookie.com Premium Quality Scripts & HTML Templates">
          </nuxt-link>
          <div class="-mr-2">
            <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary" @click="mobileMenu = !mobileMenu">
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-4 border-t-2 border-gray-100 pt-4">
          <nav class="grid gap-y-4">
            <a :href="item.href" class="flex items-center rounded-md hover:bg-gray-50" v-for="(item, index) in product.menuItems" :key="index">
              <span class="text-base font-medium text-gray-900">{{ item.label }}</span>
            </a>
          </nav>
        </div>
      </div>
      <div class="space-y-6 py-6 px-5">
        <div>
          <nuxt-link v-for="(item, index) in mainMenuItems" :key="index" :to="item.href" class="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary mb-4">
            {{ item.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import ButtonElement from './ButtonElement.vue'
export default {
  props: ['product'],
  components: { ButtonElement },
  data(){
    return {
      mobileMenu: false,
      subMenuItems: [
        {
          name: 'Features',
          href: '',
        },
        {
          name: 'Screenshots',
          href: '',
        },
        {
          name: 'Payment Methods',
          href: '',
        },
        {
          name: 'Testimonial',
          href: '',
        },
        {
          name: 'Installation Plans',
          href: '',
        },
      ],
      mainMenuItems: [
        {
          name: 'Buy Now',
          href: '#pricing',
        },
        {
          name: 'Request Customization',
          href: '/hire-us',
        },
      ]
    }
  }
}
</script>
