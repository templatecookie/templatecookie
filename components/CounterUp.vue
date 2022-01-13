<template>
    <div class="flex">
      <div class="flex-shrink-0 mr-5">
        <img src="~@/assets/images/svg/trophy.svg" alt="">
      </div>
      <div>
        <h4 class="text-dark-06 text-2xl font-medium tracking-ls03 mb-2">
          <ICountUp
          :delay="delay"
          :endVal="endVal"
          :options="options"
        />
          +</h4>
        <p class="text-dark-42 text-sm tracking-ls04 uppercase">{{text}}</p>
      </div>
  </div>
</template>
<script>
import ICountUp from 'vue-countup-v2';
  export default{
    name: "CounterUp",
    components:{
      ICountUp
    },

    data() {
      return{
        delay: 1000,
        endVal: 17,
        options: {
          useEasing: true,
          useGrouping: true,
        },
      }
    },
    
    props: {
      title:{
        type: String,
        requied: true
      },
      text:{
        type: String,
        requied: true
      },

    },

    // methods: {
    //   onReady: function(instance, CountUp) {
    //     const that = this;
    //     instance.update(that.endVal + 0);
    //   }
    // }
  }
</script>

