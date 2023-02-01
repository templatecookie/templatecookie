<template>
  <div class="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24 pb-48 bg-hireus-banner bg-no-repeat bg-cover">
    <div class="relative mx-auto max-w-xl">
      <svg class="absolute left-full translate-x-1/2 transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <svg class="absolute right-full bottom-0 -translate-x-1/2 transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Us
        </h2>
        <p class="mt-4 text-lg leading-6 text-gray-500">
          Our team will reach you within 24 hours and schedule a meeting at your convenience. Simply fill out the form.
        </p>
      </div>
      <div class="mt-12">
        <div id="hireUsForm" class="pt-8 py-4 px-6 bg-white rounded-lg"></div>
        <!-- <form action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div class="sm:col-span-2">
            <label for="first-name" class="block text-sm font-medium text-gray-700">Your name</label>
            <div class="mt-1">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary focus:ring-primary">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-medium text-gray-700">Your e mail</label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary focus:ring-primary">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <div class="mt-1">
              <textarea id="message" name="message" rows="4" class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"></textarea>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="location" class="block text-sm font-medium text-gray-700">Your budget range* (Starting from 5,000 USD)</label>
            <select id="location" name="location" class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm">
              <option value="">Please select from list</option>
              <option value="Below 5,000 USD">Below 5,000 USD</option>
              <option value="5,000-10,000 USD">5,000-10,000 USD</option>
              <option value="10,000-20,000 USD">10,000-20,000 USD</option>
              <option value="20,000 USD +">20,000 USD +</option>
            </select>
          </div>
          <div class="sm:col-span-2">
            <button type="submit" class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Let's talk</button>
          </div>
        </form> -->
      </div>
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
      target: "#hireUsForm"
    })
  }
}
</script>

<style>

</style>
