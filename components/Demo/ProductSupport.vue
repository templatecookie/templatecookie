<template>
  <div class="py-20 lg:py-124 md:pb-0 pb-20" id="support">
    <div class="container">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 purchase-card-wrap">
          <div class="purchase-card p-10 bg-gray-f0 text-center rounded-2xl">
            <div class="icon w-84 h-84 m-auto bg-blue-0b rounded-full flex items-center justify-center mb-7">
              <img src="../../assets/images/svg/handshake.svg" alt="icon" />
            </div>
            <div>
              <h3 class="text-dark-06 text-lg mb-3 font-medium"> Life time free updates </h3>
              <p class="text-dark-06 text-sm font-light mb-7"> Cras condimentum tincidunt dolor quis imperdiet. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes. </p>
              <a href="#" class="btn inline-block bg-blue-0b rounded-5 text-sm py-2.5 px-5 text-white duration-300 hover:bg-black"> Purchase Now
                <img class="inline-block ml-2 duration-300" src="~/assets/images/svg/arrow-right.svg" alt="brand-logo" /></a>
            </div>
          </div>
        </div>
        <div class="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 purchase-card-wrap">
          <div class="purchase-card p-10 bg-purple-e3 text-center rounded-2xl">
            <div class="icon w-84 h-84 m-auto bg-purple-600 rounded-full flex items-center justify-center mb-7">
              <img src="../../assets/images/svg/notebook.svg" alt="icon" />
            </div>
            <div>
              <h3 class="text-dark-06 text-lg mb-3 font-medium"> Well-Organize Documentation </h3>
              <p class="text-dark-06 text-sm font-light mb-7"> Cras condimentum tincidunt dolor quis imperdiet. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes. </p>
              <a href="#" class="btn inline-block bg-purple-600 rounded-5 text-sm py-2.5 px-5 text-white duration-300 hover:bg-black"> Documentation
                <img class="inline-block ml-2 duration-300" src="~/assets/images/svg/arrow-right.svg" alt="brand-logo" /></a>
            </div>
          </div>
        </div>
        <div class="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 purchase-card-wrap">
          <div class="purchase-card p-10 bg-green-e7 text-center rounded-2xl">
            <div class="icon w-84 h-84 m-auto bg-green-of rounded-full flex items-center justify-center mb-7">
              <img src="../../assets/images/svg/headset.svg" alt="icon" />
            </div>
            <div>
              <h3 class="text-dark-06 text-lg mb-3 font-medium"> 24/7 Customer Support </h3>
              <p class="text-dark-06 text-sm font-light mb-7"> Cras condimentum tincidunt dolor quis imperdiet. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes. </p>
              <a href="#"
                class="btn inline-block bg-green-of rounded-5 text-sm py-2.5 px-5 text-white duration-300 hover:bg-black"> Get Support
                <img class="inline-block ml-2 duration-300" src="~/assets/images/svg/arrow-right.svg" alt="brand-logo" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
