<template>
  <div class="py-10">
    <div class="container">
      <ul class="space-y-3">
        <li class="mb-1">
          <nuxt-link to="/" class="text-body-16 capitalize text-dark-42"
            >Home
            <span
              class="text-body-10 rounded leading-none bg-blue-500 text-white p-1"
              >rashed</span
            ></nuxt-link
          >
        </li>
        <li class="mb-1">
          <nuxt-link
            to="/product-list"
            class="text-body-16 capitalize text-dark-42"
            >Product List
            <span
              class="text-body-10 rounded leading-none bg-blue-500 text-white p-1"
              >rashed</span
            ></nuxt-link
          >
        </li>
        <li class="mb-1">
          <nuxt-link to="/faq" class="text-body-16 capitalize text-dark-42"
            >Faq
            <span
              class="text-body-10 rounded leading-none bg-blue-500 text-white p-1"
              >rashed</span
            ></nuxt-link
          >
        </li>
        <li class="mb-1">
          <nuxt-link to="/hire-us" class="text-body-16 capitalize text-dark-42"
            >Hire Us
            <span
              class="text-body-10 rounded leading-none bg-blue-500 text-white p-1"
              >jihad</span
            ></nuxt-link
          >
        </li>
        <li class="mb-1">
          <nuxt-link
            to="/product-demo"
            class="text-body-16 capitalize text-dark-42"
            >Product Demo
            <span
              class="text-body-10 rounded leading-none bg-blue-500 text-white p-1"
              >jihad</span
            ></nuxt-link
          >
        </li>
        <li class="mb-1">
          <nuxt-link
            to="/product-details"
            class="text-body-16 capitalize text-dark-42"
            >Product Details
            <span
              class="text-body-10 rounded leading-none bg-blue-500 text-white p-1"
              >jihad</span
            ></nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteMap",
};
</script>
