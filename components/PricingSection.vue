<template>
  <div class="bg-gray-900" :id="id">
    <div class="relative overflow-hidden pt-32 pb-96 lg:pt-40">
      <div><img class="absolute bottom-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2" src="/images/grid-blur-purple-on-black.jpg" alt="Teplatecookie Pricing Section Background" /></div>
      <div class="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 class="text-lg font-semibold leading-8 text-primary/70">Pricing</h2>
          <p class="mt-2 text-4xl font-bold tracking-tight text-white">{{ info.title }}</p>
          <p class="mt-6 text-lg leading-8 text-white/60"> {{ info.description }}</p>
        </div>
      </div>
    </div>
    <div class="flow-root bg-white pb-32 lg:pb-40">
      <div class="relative -mt-80">
        <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8">
            <pricing-item v-for="(tier, index) in plans" :key="index" :item="tier"/>
          </div>
        </div>
      </div>
      <div class="relative mx-auto mt-8 max-w-7xl px-6 lg:px-8" v-for="(item, index) in extraOffer" :key="index">
        <div class="mx-auto max-w-md lg:max-w-4xl">
          <div class="flex flex-col gap-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 lg:flex-row lg:items-center lg:gap-8">
            <div class="lg:min-w-0 lg:flex-1">
              <h3 class="text-lg font-semibold leading-8 tracking-tight text-primary">{{ item.title }}</h3>
              <div class="mt-2 text-base leading-7 text-gray-600">
                {{ item.description }}
              </div>
            </div>
            <div>
              <a :href="item.href" target="_blank" class="inline-block rounded-lg bg-indigo-50 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-secondary hover:bg-indigo-100">
                {{ item.label }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="relative mx-auto mt-8 max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-md lg:max-w-4xl">
          <div class="flex flex-col gap-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 lg:flex-row lg:items-center lg:gap-8">
            <div class="lg:min-w-0 lg:flex-1">
              <h3 class="text-lg font-semibold leading-8 tracking-tight text-primary">Request Customization</h3>
              <div class="mt-2 text-base leading-7 text-gray-600">
                We built our product with the most flexible system and features that can be customized based on your exact business needs. Our creative and experienced developers are ready to make all the changes that you need for your business.
              </div>
            </div>
            <div>
              <a href="#" class="inline-block rounded-lg bg-indigo-50 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-secondary hover:bg-indigo-100">Request Customization Now <span aria-hidden="true">&rarr;</span></a>
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
  props: ['info', 'plans', 'extraOffer', 'id'],
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
