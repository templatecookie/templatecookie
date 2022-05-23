<template>
  <div class="py-20 lg:py-124">
    <div class="container">
      <div class="lg:grid grid-cols-12 gap-6">
        <div class="col-span-6 lg:order-2">
          <div
            class="mb-6 lg:mb-0 h-340 md:h-470" data-aos="fade-up-left" data-aos-delay="300" data-aos-duration="800" data-aos-once="true">
            <img
              class="w-full h-full object-cover rounded-20"
              src="~@/assets/images/all-img/demo-thumb.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-span-6 flex items-center">
          <div class="lg:max-w-536">
            <h3 class="text-blue-0b text-base tracking-ls04 uppercase mb-4">
              Explore our Gilio team services.
            </h3>
            <h2 class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
              Feature Name 06
            </h2>
            <p class="text-dark-06 text-base sm:text-body-18 mb-6 lg:mb-9 font-light">
              Nunc convallis semper justo quis tempor. Praesent molestie,
              lorem sed imperdiet tempor, libero urna semper urna, facilisis
              vulputate velit arcu vitae mi. Donec ac nisi ex.
            </p>
            <nuxt-link to="/" class="inline-block bg-blue-0b rounded-7 py-4 px-9 text-body-17 text-white duration-300 hover:bg-dark-06">Button Label
              <img
                class="inline-block ml-2"
                src="~/assets/images/svg/arrow-right.svg"
                alt="brand-logo"/>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
