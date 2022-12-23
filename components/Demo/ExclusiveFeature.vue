<template>
  <div class="py-20 lg:py-124" :class="data.cssClass">
    <div class="container">
      <div class="lg:grid grid-cols-12 gap-6">
        <div class="col-span-6" :class="data.alignment == 'left' ? 'order-1' : 'order-3'">
          <div
            class="lg:mr-20 mb-6 lg:mb-0 h-340 md:h-470"
            data-aos="fade-up-right"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-once="true"
          >
            <img
              class="w-full h-full object-cover rounded-20"
              :src="data.image.url"
              alt=""
            />
          </div>
        </div>
        <div class="col-span-6 flex items-center order-2">
          <div class="lg:max-w-536">
            <h3 class="text-primary text-base tracking-ls04 uppercase mb-4">
              {{ data.subtitle }}
            </h3>
            <h2  class="textdark text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01" >
              {{ data.title }}
            </h2>
            <div class="textdark text-base sm:text-lg mb-6 lg:mb-9 font-light markdown-body" v-html="parseMarkdown(data.description)">
            </div>
            <div v-if="data.action && data.action[0]">
              <a v-if="data.action[0].target" :href="data.action[0].href" target="_blank" class="inline-block bg-primary rounded-7 py-4 px-9 text-lg text-white duration-300 hover:bg-dark">
                {{ data.action[0].label }}
                <img
                  class="inline-block ml-2"
                  src="/icons/arrow-right.svg"
                  alt="brand-logo"/>
              </a>
              <nuxt-link v-else :to="data.action[0].href" class="inline-block bg-primary rounded-7 py-4 px-9 text-lg text-white duration-300 hover:bg-dark">
                {{ data.action[0].label }}
                <img
                  class="inline-block ml-2"
                  src="/icons/arrow-right.svg"
                  alt="brand-logo"/>
              </nuxt-link>
            </div>
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
  @import '../../assets/scss/markdown.scss';
</style>
