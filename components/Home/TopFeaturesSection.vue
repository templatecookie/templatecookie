<template>
  <section class="why-should bg-gray-50">
    <div class="mx-auto max-w-7xl py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <!-- section title  -->
      <div class="mb-72 text-center" v-if="section.info[0]">
        <h2 class="text-4xl md:text-5xl textdark font-semibold capitalize tracking-1 mb-8 ">
          {{ section.info[0].title }}
        </h2>
        <p class="text-lg font-light max-w-lg mx-auto text-dark">
          {{ section.info[0].description }}
        </p>
      </div>
      <!-- Project services -->
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div v-for="(item, index) in section.features" :key="index" data-aos="fade-up" :data-aos-delay="index * 100">
          <div class="bg-white rounded-lg p-8 business-card duration-300 hover:shadow-bs8 text-center">
            <div v-if="item.image" class="icon w-20 h-20 bg-gray-f0 rounded-lg flex items-center justify-center mb-7 duration-300 m-auto">
              <nuxt-img :src="item.image.url" alt="" class="max-w-[36px] max-h-[36px]" />
            </div>
            <div>
              <h3 class="textdark text-xl mb-3">{{ item.title }}</h3>
              <p class="text-dark-gray text-base font-light">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['data'],
  computed: {
    section(){
      return this.data[0];
    }
  }
}
</script>

<style>

</style>
