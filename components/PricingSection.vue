<template>
  <div class="bg-gray-900" id="pricing">
    <div class="relative overflow-hidden pt-32 pb-96 lg:pt-40">
      <div><img class="absolute bottom-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2" src="https://tailwindui.com/img/component-images/grid-blur-purple-on-black.jpg" alt="" /></div>
      <div class="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 class="text-lg font-semibold leading-8 text-indigo-400">Pricing</h2>
          <p class="mt-2 text-4xl font-bold tracking-tight text-white">{{ info.title }}</p>
          <p class="mt-6 text-lg leading-8 text-white/60"> {{ info.description }}</p>
        </div>
      </div>
    </div>
    <div class="flow-root bg-white pb-32 lg:pb-40">
      <div class="relative -mt-80">
        <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8">
            <pricing-item v-for="(tier, index) in plans" :key="index" :item="tier" :checkout="checkout"/>
          </div>
        </div>
      </div>
      <div class="relative mx-auto mt-8 max-w-7xl px-6 lg:px-8" v-if="extraOffer">
        <div class="mx-auto max-w-md lg:max-w-4xl">
          <div class="flex flex-col gap-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 lg:flex-row lg:items-center lg:gap-8">
            <div class="lg:min-w-0 lg:flex-1">
              <h3 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Discounted</h3>
              <div class="mt-2 text-base leading-7 text-gray-600">Get full access to all of standard license features for solo projects that make less than $20k gross revenue for <span class="font-semibold text-gray-900">$29</span>.</div>
            </div>
            <div>
              <a href="#" class="inline-block rounded-lg bg-indigo-50 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-indigo-700 hover:bg-indigo-100">Buy discounted license <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PricingItem from './PricingItem.vue'

export default {
  props: ['data', 'info', 'plans', 'extraOffer', 'checkout'],
  components: {
    PricingItem
  },
  data () {
    return {
      isPaddleLoaded: false
    }
  },
  head () {
    return {
      script: [
        {
          hid: 'paddle',
          src: 'https://cdn.paddle.com/paddle/paddle.js',
          defer: true,
          callback: () => { this.isPaddleLoaded = true } 
        }
      ]
    }
  },
  watch: {
    isPaddleLoaded(){
      Paddle.Environment.set('sandbox');
      Paddle.Setup({ vendor: 5864 });
      console.log('Paddle Loaded');
    }
  },
}
</script>
