<template>
  <div>
      <div class="py-124 bg-dark-06 bg-content bg-right bg-no-repeat" :style="DemoHero">
        <div class="container">
        
      </div>
    </div>

    <div class="py-124">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iusto fugiat quasi eius quis facere dolore, doloribus eveniet. Voluptatum, perspiciatis.
    </div>
  </div>
  
  
</template>
<script>
export default{
  name: "ProductDemo",

data(){
  return{
      DemoHero: {
        backgroundImage: "url(https://i.imgur.com/aBzS4DP.png)",
    },
  }
}

  
}
</script>