<template>
    <div class="text-center border-r border-b border-gray-e6 px-8 py-10 fun-wrap">
        <h3 class="text-blue-0b text-3xl lg:text-heading-40 tracking-ls01 mb-2"> {{title}} </h3>
        <p class="text-dark-42 text-body-14 sm:text-base "> {{text}} </p>
    </div>
</template>
<script>
  export default{
    name: "Fun",
    props:{
      title:{
        type: String,
        reuired: true
      },
      text:{
        type: String,
        reuired: true
      }
    }
  }
</script>