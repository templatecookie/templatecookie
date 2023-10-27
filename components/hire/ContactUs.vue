<template>
  <div id="contact"
    class="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24 pb-48 bg-hireus-banner bg-no-repeat bg-cover">
    <div class="relative mx-auto max-w-xl">
      <svg class="absolute left-full translate-x-1/2 transform" width="404" height="404" fill="none"
        viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20"
            patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <svg class="absolute right-full bottom-0 -translate-x-1/2 transform" width="404" height="404" fill="none"
        viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20"
            patternUnits="userSpaceOnUse">
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
          Our team will reach you within 24 hours and schedule a meeting at your
          convenience. Simply fill out the form.
        </p>
      </div>
      <div class="mt-12">
        <div class="w-full">
          <div
            class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7"
            data-rounded="rounded-lg" data-rounded-max="rounded-full">
            <form accept-charset="UTF-8" @submit="validateEmail"
              :action="isValidEmail ? 'https://pbj887.infusionsoft.com/app/form/process/a686c8c396862f4b1d3fd2e84ff2f89f' : ''"
              class="infusion-form" id="inf_form_a686c8c396862f4b1d3fd2e84ff2f89f" method="POST">
              <input name="inf_form_xid" type="hidden" value="a686c8c396862f4b1d3fd2e84ff2f89f" />
              <input name="inf_form_name" type="hidden" value="hire-us form submitted" />
              <input name="infusionsoft_version" type="hidden" value="1.70.0.599909" />
              <div class="flex flex-col gap-4">
                <div class="flex flex-col md:flex-row gap-5 items-center">
                  <div class="infusion-field w-full">
                    <label for="inf_field_FirstName" class="flex mb-1.5 text-sm">First Name <span
                        class="text-sm text-red-600">*</span></label>
                    <input id="inf_field_FirstName" name="inf_field_FirstName"
                      class="transition-all w-full duration-300 rounded-md hover:bg-gray-50 focus:bg-gray-50"
                      placeholder="First Name" type="text" required />
                  </div>
                  <div class="infusion-field w-full">
                    <label for="inf_field_LastName" class="flex mb-1.5 text-sm">Last Name <span
                        class="text-sm text-red-600">*</span></label>
                    <input id="inf_field_LastName" name="inf_field_LastName" placeholder="Last Name"
                      class="transition-all w-full duration-300 rounded-md hover:bg-gray-50 focus:bg-gray-50"
                      type="text" required />
                  </div>
                </div>
                <div class="flex flex-col md:flex-row gap-5 items-start">
                  <div class="infusion-field w-full">
                    <label for="inf_field_Email" class="flex mb-1.5 text-sm">Email <span
                        class="text-sm text-red-600">*</span></label>
                    <input id="inf_field_Email" name="inf_field_Email" placeholder="Email" v-model="email"

                      class="transition-all duration-300 w-full rounded-md hover-bg-gray-50 focus-bg-gray-50"
                      type="email" required />
                      <span v-if="!isValidEmail" class="text-red-500">Your email is invalid !</span>
                  </div>
                  <div class="infusion-field w-full">
                    <label for="inf_custom_Chooseyourbudget" class="flex mb-1.5 text-sm">Choose your budget <span
                        class="text-sm text-red-600">*</span></label>
                    <div class="infusion-field-input-container flex">
                      <select id="inf_custom_Chooseyourbudget"
                        class="transition-all relative duration-300 w-full rounded-md hover:bg-gray-50 focus:bg-gray-50"
                        name="inf_custom_Chooseyourbudget" required>
                        <option selected="selected" value="$2000 to $4000">$2000 to $4000</option>
                        <option value="$1000 to $2000">$1000 to $2000</option>
                        <option value="$500 to $1000">$500 to $1000</option>
                        <option value="Below $500">Below $500</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="infusion-field w-full">
                  <label for="inf_custom_Writemessage" class="flex mb-1.5 text-sm">Write message <span
                      class="text-sm text-red-600">*</span></label>
                  <textarea required id="inf_custom_Writemessage" name="inf_custom_Writemessage"
                    placeholder="Write message" rows="5"
                    class="transition-all duration-300 flex w-full rounded-md hover:bg-gray-50 focus:bg-gray-50"></textarea>
                </div>
                <div class="infusion-submit">
                  <button
                    class="infusion-recaptcha inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover-bg-secondary"
                    id="recaptcha_a686c8c396862f4b1d3fd2e84ff2f89f" type="submit"
                    :disabled="!isValidEmail">Submit</button>
                </div>
                <div class="hidden">
                  <div>&nbsp;</div>
                </div>
              </div>
            </form>
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
        email: '',
        isValidEmail: true,
      };
    },
    methods: {
      validateEmail(e) {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        this.isValidEmail = emailRegex.test(this.email);
        if(!this.isValidEmail) {
          e.preventDefault();
        }
        console.log(isValidEmail)
      },
    },
  };
</script>

<style>
  .error-message {
    color: red;
  }
</style>
