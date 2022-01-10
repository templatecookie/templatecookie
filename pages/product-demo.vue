<template>
  <div>
      <div class="py-28 lg:py-56 bg-dark-06 bg-content bg-right bg-no-repeat hero-demo" :style="DemoHero">
        <div class="container">
          <div class="max-w-2xl">
            <h1 class="tracking-ls01 font-semibold text-3xl md:text-4xl lg:text-5xl text-white mb-8">Relik - Admin Dashboard Figma Template</h1>
            <p class="text-white font-light text-lg md:text-xl max-w-536">👉 Relik is a beautiful, simple, developer-friendly, highly customizable  admin dashboard template  with a 💎 high-quality UI & well-organized Figma file 🔥.</p>
            <div class="mt-8">
              <nuxt-link to="/" class="inline-block border-1.5 border-blue-0b bg-blue-0b font-medium rounded-7 py-3.5 px-8 text-body-17 text-white duration-300 mr-3">Buy Now <img class="inline-block ml-2" src="~/assets/images/svg/arrow-right.svg" alt="" /></nuxt-link>
              <nuxt-link to="/" class="inline-block font-medium border-1.5 border-white rounded-7 py-3.5 px-8 text-body-17 text-white duration-300 ">Live Preview</nuxt-link>
            </div>
          </div>
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