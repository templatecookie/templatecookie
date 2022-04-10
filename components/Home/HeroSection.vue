<template>
  <!-- Banner  -->
  <section class="realtive overflow-hidden py-20 lg:py-28 md:py-24 bg-no-repeat bg-center bg-cover"
    :style="{ backgroundImage: `url(${bannerImg})` }">
    <div class="container">
      <!-- banner content  -->
      <div class="text-center">
        <h1 class="text-4xl md:text-heading text-dark-06 mb-8 max-w-680 mx-auto font-semibold">
          {{ data.title }}
        </h1>
        <p class="text-lg md:text-body-20 text-dark-06 mb-8 max-w-680 mx-auto">
          {{ data.description }}
        </p>
        <div>
          <nuxt-link :to="item.link.href" v-for="(item, index ) in data.buttons" :key="index"
            class="flex items-center bg-blue-0b hover:bg-dark-06 transition-all w-auto max-w-232 justify-center text-button-17 text-white rounded-lg overflow-hidden mx-auto">
            {{ item.label }}
            <!-- arrow toggle icon -->
            <span class="inline-block ml-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['data', 'bannerImg']
}
</script>

<style>

</style>
