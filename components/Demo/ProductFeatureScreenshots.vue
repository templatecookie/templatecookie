<template>
  <div class="py-16">
    <div class="container">
      <div class="lg:max-w-536 m-auto text-center mb-10 lg:mb-16">
        <h3 class="text-blue-0b text-base tracking-ls04 uppercase mb-4">
          Explore our Gilio team services.
        </h3>
        <h2 class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
          Feature Name 01
        </h2>
        <p class="text-dark-06 text-base sm:text-body-18 mb-6 lg:mb-9 font-light">
          Nunc convallis semper justo quis tempor. Praesent molestie, lorem
          sed imperdiet tempor, libero urna semper urna, facilisis vulputate
          velit arcu vitae mi. Donec ac nisi ex.
        </p>
      </div>
      <div id="tabs" class="lg:grid grid-cols-12 gap-6">
        <div class="col-span-8 order-2">
          <div class="content lg:pl-6 mb-6">
            <div v-if="activetab === '1'" class="tabcontent">
              <div class="h-340 md:h-600">
                <img class="w-full h-full object-cover rounded-20 overflow-hidden"
                  src="~@/assets/images/all-img/one.jpg" alt="" />
              </div>
            </div>
            <div v-if="activetab === '2'" class="tabcontent">
              <div class="h-340 md:h-600">
                <img class="w-full h-full object-cover rounded-20 overflow-hidden"
                  src="~@/assets/images/all-img/two.jpg" alt="" />
              </div>
            </div>
            <div v-if="activetab === '3'" class="tabcontent">
              <div class="h-340 md:h-600">
                <img class="w-full h-full object-cover rounded-20 overflow-hidden"
                  src="~@/assets/images/all-img/three.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-4">
          <div class="tabs">
            <div class="block mb-6 tab-content-wrap cursor-pointer border border-gray-e6 rounded-2xl p-8 duration-300"
              v-on:click="activetab = '1'" v-bind:class="[activetab === '1' ? 'active' : '']">
              <h3 class="text-dark-06 font-medium text-2xl mb-4 duration-300">
                Back-end Development
              </h3>
              <p class="text-dark-42 test-base font-light duration-300">
                Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Sed nec diam gravida,
                convallis lectus ut.
              </p>
            </div>
            <div class="block mb-6 tab-content-wrap cursor-pointer border border-gray-e6 rounded-2xl p-8 duration-300"
              v-on:click="activetab = '2'" v-bind:class="[activetab === '2' ? 'active' : '']">
              <h3 class="text-dark-06 font-medium text-2xl mb-4 duration-300">
                Back-end Development
              </h3>
              <p class="text-dark-42 test-base font-light duration-300">
                Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Sed nec diam gravida,
                convallis lectus ut.
              </p>
            </div>
            <div class="block tab-content-wrap cursor-pointer border border-gray-e6 rounded-2xl p-8 duration-300"
              v-on:click="activetab = '3'" v-bind:class="[activetab === '3' ? 'active' : '']">
              <h3 class="text-dark-06 font-medium text-2xl mb-4 duration-300">
                Back-end Development
              </h3>
              <p class="text-dark-42 test-base font-light duration-300">
                Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Sed nec diam gravida,
                convallis lectus ut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activetab: '1',
    };
  }
}
</script>

<style>

</style>
