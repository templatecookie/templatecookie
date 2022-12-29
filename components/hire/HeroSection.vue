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
                <!-- <p class="mt-8 text-base font-semibold text-white sm:mt-10">Used by</p>
                <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                  <div class="flex flex-wrap items-start justify-between">
                    <div class="flex justify-center px-1">
                      <img class="h-9 sm:h-10" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple">
                    </div>
                    <div class="flex justify-center px-1">
                      <img class="h-9 sm:h-10" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation">
                    </div>
                    <div class="flex justify-center px-1">
                      <img class="h-9 sm:h-10" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit">
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
            <div class="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
              <div id="hubspotForm" class="px-6 pb-4 pt-8 bg-white sm:mx-auto sm:w-full sm:max-w-lg sm:overflow-hidden sm:rounded-lg" data-aos="zoom-in"></div>
              <!-- <div class="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg" data-aos="zoom-in">
                <div class="px-4 py-8 sm:px-10">
                  <p class="text-sm font-medium text-gray-700">Request Free Consultation</p>
                  <div class="mt-6">
                    <form action="#" method="POST" class="space-y-6">
                      <div>
                        <label for="name" class="sr-only">Your name</label>
                        <input type="text" name="name" id="name" autocomplete="name" placeholder="Full name" required class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm">
                      </div>

                      <div>
                        <label for="mobile-or-email" class="sr-only">Your email</label>
                        <input type="text" name="mobile-or-email" id="mobile-or-email" autocomplete="email" placeholder="Your email" required class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm">
                      </div>

                      <div>
                        <label for="message" class="sr-only">Message</label>
                        <textarea id="message" placeholder="Enter your message" name="message" rows="4" class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"></textarea>
                      </div>

                      <div>
                        <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Request Consultation now</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div> -->
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
