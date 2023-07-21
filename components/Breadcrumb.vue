<template>
  <div
    class="py-10 bg-cover bg-center"
    :style="{ backgroundImage: 'url(' + bgimage + ')' }"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="ex-small:overflow-auto overflow-x-scroll">
        <ul class="flex text-dark-gray text-sm space-x-2 mb-3">
          <li class="leading-3 whitespace-nowrap">
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </li>
          <li class="leading-3 whitespace-nowrap">
            <img
              src="/icons/arrow-gray.svg"
              alt="Templatecookie Arrow Right Icon"
            >
          </li>
          <li class="leading-3 whitespace-nowrap">
            <nuxt-link :to="{ name: 'products' }">
              Products
            </nuxt-link>
          </li>
          <li class="leading-3 whitespace-nowrap">
            <img
              src="/icons/arrow-gray.svg"
              alt="Templatecookie Arrow Right Icon"
            >
          </li>
          <li
            class="leading-3 whitespace-nowrap"
            v-if="category && category.attributes"
          >
            <nuxt-link to="#">
              {{ category.attributes.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>

      <h2
        class="text-dark text-2xl md:text-3xl lg:text-heading-40 font-semibold tracking-01"
      >
        {{ name }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: [Object, null],
      required: true,
    },
  },
  data() {
    return {
      bgimage: require("../static/images/breadcrumb.png"),
    };
  },
};
</script>
