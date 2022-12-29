<template>
  <div class="py-20 lg:py-124 md:pb-0 pb-20" id="support">
    <div class="mx-auto max-w-7xl px-4 sm:px-6" v-if="global && global.defaultFeatures">
      <div class="grid grid-cols-12 gap-6">
        <div v-for="(item, index) in global.defaultFeatures" :key="index" class="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 purchase-card-wrap h-full">
          <div :class="item.bgClass" class="purchase-card p-10 text-center rounded-2xl h-full">
            <div :class="item.cssClass" class="icon w-20 h-20 m-auto rounded-full flex items-center justify-center mb-7">
              <nuxt-img :src="item.icon.url" alt="icon" />
            </div>
            <div>
              <h3 class="textdark text-lg mb-3 font-medium"> {{ item.title }} </h3>
              <p class="textdark text-sm font-light mb-7"> {{ item.description }} </p>
              <a :href="item.action[0].href" v-if="item.action && item.action.length" :target="item.action[0].target" :class="item.cssClass" class="btn inline-block rounded-5 text-sm py-2.5 px-5 text-white duration-300 hover:bg-black"> 
                {{ item.action[0].label }}
                <img class="inline-block ml-2 duration-300" src="/icons/arrow-right.svg" alt="brand-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data () {
    return {

    }
  },
  computed: {
    global() {
      return this.$store.getters.getGlobalData;
    }
  },
  methods: {
    getThemeColor(theme) {
      switch (theme) {
        case 'purple': return 'bg-purple-600'
        case 'green': return 'bg-green'
        default: return 'bg-primary'
      }
    },
    getBgColor(theme){
      switch (theme) {
        case 'purple': return 'bg-purple-e3'
        case 'green': return 'bg-green-e7'
        default: return 'bg-gray-f0'
      }
    }
  }
}
</script>

<style>

</style>
