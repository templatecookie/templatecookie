<template>
  <div class="purchase-card p-10 bg-gray-f0 text-center rounded-2xl">
      <div class="icon w-84 h-84 m-auto bg-blue-0b rounded-full flex items-center justify-center mb-7">
          <img src="~@/assets/images/svg/handshake.svg" alt="">
      </div>
      <div>
        <h3 class="text-dark-06 text-lg mb-3 font-medium"> {{title}} </h3>
        <p class="text-dark-06 text-sm font-light mb-7"> {{text}} </p>
        <a :href="btnUrl" class="btn inline-block bg-blue-0b rounded-5 text-sm py-2.5 px-5 text-white duration-300 hover:bg-black">{{btnText}} <img class="inline-block ml-2 duration-300" src="~/assets/images/svg/arrow-right.svg" alt="brand-logo" /></a>
      </div>
  </div>
</template>

<script>
  export default{
    name: "PurchaseCard",
    props:{
      title:{
        type: String,
        required: true
      },
      text:{
        type: String,
        required: true
      },
      btnText:{
        type: String,
        required: true
      },
      btnUrl:{
        type: String,
        required: true
      },
    }
  }
</script>


<style lang="scss"  scoped>
  .purchase-card-wrap{
    .purchase-card{
      .btn{
        &:hover{
          background-color: #061C3D!important;
        }
      }
    }
    &:nth-child(2) .purchase-card{
      background-color: #F1EBFF;
      .icon{
        background-color: #7534FF;
      }
      .btn{
        background-color: #7534FF;
    
      }
    }
    &:nth-child(3) .purchase-card{
      background-color: #E7F5E8;
      .icon{
        background-color: #0F9918;
      }
      .btn{
        background-color: #0F9918;
      }
    }
    
  }
</style>