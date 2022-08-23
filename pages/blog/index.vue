<template>
  <div>
    <div class="bg-blue-600">
      <div class="container">
        <div class="py-12">
          <h1 class="!text-white text-2xl lg:text-5xl mb-2">Templatecookie Blog</h1>
          <div class="text-gray-200 font-light">
            <nuxt-link to="/" class="!text-gray-200 !hover:text-gray-600">Home</nuxt-link> / <a class="!text-gray-200" href="javascript:void(0)">Blog</a>
          </div>
        </div>
      </div>
    </div>
    <section class="text-gray-600 body-font bg-white">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3" v-for="(d, i) in 8" :key="i">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img class="w-full lg:h-52 md:h-48 h-36 object-center object-cover" v-if=" i % 2 == 0" src="../../static/docs/adlisting/preview.png" alt="">
              <img class="w-full lg:h-52 md:h-48 h-36 object-center object-cover" v-else src="https://themefisher.com/_next/image?url=%2Fblog%2Fbest-tailwind-templates.png&w=1920&q=75" alt="">
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">15 Best Tailwind Templates and UI Components For 2022</h1>
                <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <div class="flex items-center flex-wrap ">
                  <a class="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                  </span>
                  <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
