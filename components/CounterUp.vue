<template>
    <div class="flex">
      <div class="flex-shrink-0 mr-5">
        <img src="~@/assets/images/svg/trophy.svg" alt="">
      </div>
      <div>
        <h4 class="text-dark-06 text-2xl font-medium tracking-ls03 mb-2">{{title}}</h4>
        <p class="text-dark-42 text-sm tracking-ls04 uppercase">{{text}}</p>
      </div>
  </div>
</template>
<script>
  export default{
    name: "CounterUp",
    props: {
      title:{
        type: String,
        requied: true
      },
      text:{
        type: String,
        requied: true
      },

    }
  }
</script>