<template>
  <div class="w-1/2 rounded-2xl overflow-hidden border-[1px] border-gray-100 bg-white">
    <div class="border-b-[1px] p-8 border-t-4 border-b-gray-200" :class="item.theme == 'pink' ? 'border-pink-600' : item.theme == 'blue' ? 'border-blue-600' : 'border-green-600'">
      <div class="mb-8 price flex justify-between items-center">
        <div class="w-20 h-20 rounded-lg flex justify-center items-center" :class="item.theme == 'pink' ? 'bg-pink-200 ' : item.theme == 'blue' ? 'bg-blue-200' : 'bg-green-200'">
          <nuxt-img :src="item.icon.url" class="w-10 h-auto" alt="" />
        </div>
        <h3 class="text-5xl font-semibold text-pink-600" :class="item.theme == 'pink' ? 'text-pink-600' : item.theme == 'blue' ? 'text-blue-600' : 'text-green-600'"> 
        ${{ item.price }} 
          <span class="text-base text-gray-700">/One Time</span>
        </h3>
      </div>
      <h3 class="text-2xl mb-2">{{ item.name }}</h3>
      <p class="font-light"> {{ item.description }} </p>
      <a :href="item.purchaseLink" to="#" class="mt-8 flex items-center transition-all w-max justify-center text-sm-17 rounded-lg overflow-hidden px-8 border-[1px] hover:text-white bg-transparent"  :class="item.theme == 'pink' ? 'border-pink-600 hover:bg-pink-600 text-pink-600' : item.theme == 'blue' ? 'border-blue-600 hover:bg-blue-600 text-blue-600' : 'border-green-600 hover:bg-green-600 text-green-600'">
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
      <li class="flex font-light mb-5" v-for="(feature, index) in item.features" :key="index">
        <img src="/icons/check.svg" alt="" class="mr-3" >
        <p v-if="feature.active" >{{ feature.feature }}</p>
        <p v-else class="line-through"> {{ feature.feature }} </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style>

</style>
