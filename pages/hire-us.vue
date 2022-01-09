<template>
  <div class="bg-gray-f0 py-28">
    <div class="container">
      <div class="text-center max-w-4xl m-auto mb-28">
        <h1
          class="text-dark-06 text-4xl md:text-5xl lg:text-6xl xl:text-heading-80 font-semibold mb-6 lg:mb-9tracking-ls02"
        >
          The easiest way to create your website.
        </h1>
        <p class="text-dark-06 text-lg sm:text-xl mb-6 lg:mb-9 max-w-xl m-auto">
          Golio gives you everything you need to create your website in minutes.
          Bootstrap code with a well-organized Figma file to design & develop
          your next websites in minutes.
        </p>
        <nuxt-link
          to="/"
          class="inline-block bg-blue-0b rounded-7 py-4 px-9 text-body-17 text-white duration-300 hover:bg-dark-06"
          >Let’s Work together
          <img
            class="inline-block ml-2"
            src="~/assets/images/svg/arrow-right.svg"
            alt="brand-logo"
        /></nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HireUsPage",
};
</script>
