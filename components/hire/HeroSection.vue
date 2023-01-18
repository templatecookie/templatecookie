<template>
  <div class="relative overflow-hidden bg-gray-800">
    <div class="hidden sm:absolute sm:inset-0 sm:block" aria-hidden="true">
      <svg class="absolute bottom-0 right-0 mb-48 translate-x-1/2 transform text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:translate-x-0 xl:transform-none" width="364" height="384" viewBox="0 0 364 384" fill="none">
        <defs>
          <pattern id="eab71dd9-9d7a-47bd-8044-256344ee00d0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
      </svg>
    </div>
    <div class="relative pt-6 pb-16 sm:pb-24">
      <main class="mt-16 sm:mt-24">
        <div class="mx-auto max-w-7xl">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div>
                <a href="#" class="inline-flex items-center rounded-full bg-blue-300 p-1 px-3 pr-2 text-black hover:bg-blue-500 text-sm" data-aos="fade-up" data-aos-delay="100">
                  We are here to Partner with You!
                </a>
                <h1 data-aos="fade-up" class="mt-4 text-4xl font-bold tracking-tight leading-relaxed text-white sm:text-5xl md:text-6xl" data-aos-delay="200">
                  Looking for Partner for your Next Project?
                </h1>
                <p data-aos="fade-up" data-aos-delay="300" class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">At Templatecookie we have a very talented and experienced team of designers and developers who are committed to offering the best value to your projects. </p>
              </div>
            </div>
            <div class="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
              <div id="hubspotForm" class="px-6 pb-4 pt-8 bg-white sm:mx-auto sm:w-full sm:max-w-lg sm:overflow-hidden sm:rounded-lg" data-aos="zoom-in"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.hbspt.forms.create({
      region: "na1",
      portalId: "22174697",
      formId: "55ae1706-e17a-40a0-81db-275fc2d1030a",
      target: "#hubspotForm"
    })
  }
}
</script>

<style>

</style>
