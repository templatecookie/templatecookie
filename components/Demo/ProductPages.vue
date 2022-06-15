<template>
  <div class="py-20 lg:py-124" id="pages" :class="data.cssClass">
    <div class="container">
      <div class="text-center mb-8 lg:mb-12">
        <h2 class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
          {{ data.title }}
        </h2>
      </div>
      <div class="grid grid-cols-12 gap-6">
        <div v-for="(item, itemIndex) in data.pages" :key="itemIndex"
          class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
          <div class="thumb-link">
            <a :href="item.image" target="_blank">
              <nuxt-img :src="item.image.url" v-if="item.image && item.image.url" alt="product-img" class="w-full h-250 object-cover overflow-hidden shadow-bs12" />
              <h3 class="text-white text-base font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-300 flex w-full justify-center opacity-0">
                {{ item.name }} <img class="ml-2" src="~assets/images/svg/ArrowSquareOut.svg" alt="">
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss">
.thumb-link a{
    position: relative;
    z-index: 0;
    display: block;
    &:before{
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all 0.4s;
      position: absolute;
      background: linear-gradient(0deg, rgba(6, 28, 61, 0.7), rgba(6, 28, 61, 0.7));
    }
    &:hover:before{
      opacity: 1;
    }
    &:hover h3{
      opacity: 1;
    }
  }
</style>
