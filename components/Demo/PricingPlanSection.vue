<template>
  <div class="pt-20 lg:pt-124 bg-white pricing-section pb-32" id="pricing">
    <div class="pricing-section-bg !bg-gray-100"></div>
    <div class="container">
      <div class="lg:w-3/5 m-auto text-center mb-10 lg:mb-16">
        <h2 class="text-6xl font-semibold mb-8">{{ data.info[0].title }}</h2>
        <p class="text-lg font-light"> {{ data.info[0].description }} </p>
      </div>
      <div class="flex space-between gap-6 flex-wrap xl:flex-nowrap justify-center">
        <div v-for="(item, index) in data.plans" :key="index" class="w-1/2 rounded-2xl overflow-hidden border-[1px] border-gray-100 bg-white">
          <div class="border-b-[1px] p-8 border-t-4 border-b-gray-200"  :class="item.theme == 'pink' ? 'border-pink-600' : item.theme == 'blue' ? 'border-blue-600' : 'border-green-600'">
            <div class="mb-8 price flex justify-between items-center">
              <div class="w-20 h-20 rounded-lg flex justify-center items-center" :class="item.theme == 'pink' ? 'bg-pink-200 ' : item.theme == 'blue' ? 'bg-blue-200' : 'bg-green-200'">
                <img :src="item.icon.url" class="w-10 h-auto" alt="">
              </div>
              <h3 class="text-5xl font-semibold text-pink-600" :class="item.theme == 'pink' ? 'text-pink-600' : item.theme == 'blue' ? 'text-blue-600' : 'text-green-600'"> 
              ${{ item.price }} 
                <span class="text-base text-gray-700">/One Time</span>
              </h3>
            </div>
            <h3 class="text-2xl mb-2">{{ item.name }}</h3>
            <p class="font-light"> {{ item.description }} </p>
            <a :href="item.purchaseLink" to="#" class="mt-8 flex items-center transition-all w-max justify-center text-button-17 rounded-lg overflow-hidden px-8 border-[1px] hover:text-white bg-transparent"  :class="item.theme == 'pink' ? 'border-pink-600 hover:bg-pink-600 text-pink-600' : item.theme == 'blue' ? 'border-blue-600 hover:bg-blue-600 text-blue-600' : 'border-green-600 hover:bg-green-600 text-green-600'">
              Buy Now
              <span class="inline-block ml-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </span>
            </a>
          </div>
          <ul class="p-8 pb-3">
            <li class="flex font-light mb-5" v-for="(feature, index) in item.features" :key="index" 
            :class="{ 'opacity-30' : feature.active }"> 
              <img src="~/assets/images/svg/check.svg" alt="" class="mr-3" >
              <p v-if="feature.active" class="line-through"> {{ feature.feature }} </p>
              <p v-else>{{ feature.feature }}</p>
            </li>
          </ul>
        </div>
        <!-- <div class="rounded-2xl overflow-hidden border-[1px] border-gray-100 bg-white">
          <div class="border-b-[1px] p-8 border-t-4 border-blue-600 border-b-gray-200">
            <div class="mb-8 price flex justify-between items-center">
              <div class="w-20 h-20 rounded-lg bg-blue-200 flex justify-center items-center">
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" d="M5 13.3999L20 22.1499L35 13.3999L20 4.6499L5 13.3999Z" fill="#0B63E5"/>
<path d="M5 28.3999L20 37.1499L35 28.3999" stroke="#0B63E5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 20.8999L20 29.6499L35 20.8999" stroke="#0B63E5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 13.3999L20 22.1499L35 13.3999L20 4.6499L5 13.3999Z" stroke="#0B63E5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="text-5xl font-semibold text-blue-600"> $199 </h3>
            </div>
            <h3 class="text-2xl mb-2">Standard</h3>
            <p class="font-light">Upgrade your social portfolio with a stunning profile & enhanced shots.</p>
            <nuxt-link to="#" class="mt-8 flex items-center border-[1px] border-blue-600 bg-blue-600 hover:bg-dark-06 transition-all w-max justify-center text-button-17 text-white rounded-lg overflow-hidden px-8">
              Get support now
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
          <ul class="p-8 pb-3">
            <li class="flex font-light mb-5"> 
              <img src="~/assets/images/svg/check.svg" alt="" class="mr-3" >
              Configure app with admin panel
            </li>
            <li class="flex font-light mb-5"> 
              <img src="~/assets/images/svg/check.svg" alt="" class="mr-3" >
              Third party api setup (Firebase, Payment Method Configure)
            </li>
            <li class="flex font-light mb-5"> 
              <img src="~/assets/images/svg/check.svg" alt="" class="mr-3" >
              Multiple images & videos
            </li>
            <li class="flex font-light mb-5">
              <img src="~/assets/images/svg/check.svg" alt="" class="mr-3" >
              Setup payment gateways 
            </li>
            <li class="flex font-light mb-5">
              <img src="~/assets/images/svg/check.svg" alt="" class="mr-3" >
              Configure push notification 
            </li>
          </ul>
        </div>
        <div class="rounded-2xl overflow-hidden border-[1px] border-gray-100 bg-white">
          <div class="border-b-[1px] p-8 border-t-4 border-green-600 border-b-gray-200">
            <div class="mb-8 price flex justify-between items-center">
              <div class="w-20 h-20 rounded-lg bg-green-100 flex justify-center items-center text-green-600">
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2" d="M5.1731 12.5586C5.05973 12.7509 4.99996 12.97 5 13.1932V28.6061C5 28.8279 5.05902 29.0457 5.17099 29.2372C5.28296 29.4286 5.44386 29.5869 5.63717 29.6956L19.3872 37.43C19.5743 37.5352 19.7853 37.5905 20 37.5905L20.0016 37.5905L20.1483 20.8997L5.17313 12.5586L5.1731 12.5586Z" fill="currentColor"/>
                  <path d="M35 28.6062V13.1934C35 12.9716 34.941 12.7538 34.829 12.5623C34.717 12.3708 34.5561 12.2126 34.3628 12.1039L20.6128 4.36952C20.4257 4.26427 20.2147 4.20898 20 4.20898C19.7853 4.20898 19.5743 4.26427 19.3872 4.36952L5.63717 12.1039C5.44386 12.2126 5.28296 12.3708 5.17099 12.5623C5.05902 12.7538 5 12.9716 5 13.1934V28.6062C5 28.828 5.05902 29.0458 5.17099 29.2373C5.28296 29.4288 5.44386 29.587 5.63717 29.6957L19.3872 37.4301C19.5743 37.5353 19.7853 37.5906 20 37.5906C20.2147 37.5906 20.4257 37.5353 20.6128 37.4301L34.3628 29.6957C34.5561 29.587 34.717 29.4288 34.829 29.2373C34.941 29.0458 35 28.828 35 28.6062Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M27.6597 24.7297V16.6047L12.5 8.24365" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M34.8274 12.5602L20.148 20.8997L5.17285 12.5586" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.1486 20.8999L20.002 37.5907" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="text-5xl font-semibold text-green-600"> $299 </h3>
            </div>
            <h3 class="text-2xl mb-2">Special</h3>
            <p class="font-light">Upgrade your social portfolio with a stunning profile & enhanced shots.</p>
            <nuxt-link to="#" class="mt-8 flex items-center transition-all w-max justify-center text-button-17 border-[1px] border-green-600 hover:text-white hover:bg-green-600 text-green-600 bg-transparent rounded-lg overflow-hidden px-8">
              Get support now
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
          <ul class="p-8 pb-3">
            <li class="flex font-light mb-5"> 
              <img src="~/assets/images/svg/check.svg" alt="" class="mr-3" >
              All Previous plan features
            </li>
            <li class="flex font-light mb-5"> 
              <img src="~/assets/images/svg/check.svg" alt="" class="mr-3" >
              Translate all contents to your local language
            </li>
            <li class="flex font-light mb-5"> 
              <img src="~/assets/images/svg/check.svg" alt="" class="mr-3" >
              Upload Mobile Apps to Google Play
            </li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss">
</style>
