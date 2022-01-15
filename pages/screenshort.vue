<template>
  <div id="tabs" class=" py-40 flex">
    <div class="tabs w-40 bg-gray-f5 p-3 flex-shrink-0">
        <p class="text-dark-06 text-opacity-60 uppercase mb-2 text-xs">SCREENSHOT</p>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]"><img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt=""></a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active' : '' ]"><img class="w-full h-full object-cover" src="~@/assets/images/all-img/2.png" alt=""></a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab='3'" v-bind:class="[ activetab === '3' ? 'active' : '' ]"><img class="w-full h-full object-cover" src="~@/assets/images/all-img/3.png" alt=""></a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab='4'" v-bind:class="[ activetab === '4' ? 'active' : '' ]"><img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt=""></a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab='5'" v-bind:class="[ activetab === '5' ? 'active' : '' ]"><img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt=""></a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab='6'" v-bind:class="[ activetab === '6' ? 'active' : '' ]"><img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt=""></a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab='7'" v-bind:class="[ activetab === '7' ? 'active' : '' ]"><img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt=""></a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab='8'" v-bind:class="[ activetab === '8' ? 'active' : '' ]"><img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt=""></a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab='9'" v-bind:class="[ activetab === '9' ? 'active' : '' ]"><img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt=""></a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab='10'" v-bind:class="[ activetab === '10' ? 'active' : '' ]"><img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt=""></a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab='11'" v-bind:class="[ activetab === '11' ? 'active' : '' ]"><img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt=""></a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab='12'" v-bind:class="[ activetab === '12' ? 'active' : '' ]"><img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt=""></a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab='13'" v-bind:class="[ activetab === '13' ? 'active' : '' ]"><img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt=""></a>
        <a class="block mb-2 tab-left-thumb cursor-pointer" v-on:click="activetab='14'" v-bind:class="[ activetab === '14' ? 'active' : '' ]"><img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt=""></a>
    </div>
    <div class="content bg-dark-06 p-6 md:p-12 w-full">
        <div v-if="activetab ==='1'" class="tabcontent">
            <div>
              <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="">
            </div>
        </div>
        <div v-if="activetab ==='2'" class="tabcontent">
            <div>
              <img class="w-full h-full object-cover" src="~@/assets/images/all-img/2.png" alt="">
            </div>
        </div>
        <div v-if="activetab ==='3'" class="tabcontent">
            <div>
              <img class="w-full h-full object-cover" src="~@/assets/images/all-img/3.png" alt="">
            </div>
        </div>
        <div v-if="activetab ==='4'" class="tabcontent">
            <div>
              <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="">
            </div>
        </div>
        <div v-if="activetab ==='5'" class="tabcontent">
            <div>
              <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="">
            </div>
        </div>
        <div v-if="activetab ==='6'" class="tabcontent">
            <div>
              <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="">
            </div>
        </div>
        <div v-if="activetab ==='7'" class="tabcontent">
            <div>
              <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="">
            </div>
        </div>
        <div v-if="activetab ==='8'" class="tabcontent">
            <div>
              <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="">
            </div>
        </div>
        <div v-if="activetab ==='9'" class="tabcontent">
            <div>
              <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="">
            </div>
        </div>
        <div v-if="activetab ==='10'" class="tabcontent">
            <div>
              <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="">
            </div>
        </div>
        <div v-if="activetab ==='11'" class="tabcontent">
            <div>
              <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="">
            </div>
        </div>
        <div v-if="activetab ==='12'" class="tabcontent">
            <div>
              <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="">
            </div>
        </div>
        <div v-if="activetab ==='13'" class="tabcontent">
            <div>
              <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="">
            </div>
        </div>
        <div v-if="activetab ==='14'" class="tabcontent">
            <div>
              <img class="w-full h-full object-cover" src="~@/assets/images/all-img/tab1.png" alt="">
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: "Screenshort",

 data() {
   return{
     activetab: '1'
   }
 }
  
  
};
</script>

<style lang="scss" scoped>
    .tab-left-thumb{
      border: 2px solid #E6E8EC;
      &.active{
        border: 2px solid #0B63E5;
      }
      
    }
</style>


