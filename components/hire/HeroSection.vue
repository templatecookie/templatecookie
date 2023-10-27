<template>
  <div class="relative overflow-hidden bg-gray-800">
    <div class="hidden sm:absolute sm:right-0 sm:top-12 sm:inline-block" aria-hidden="true">
      <svg
        class="absolute bottom-0 right-0 mb-48 translate-x-1/2 transform text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:translate-x-0 xl:transform-none"
        width="364" height="384" viewBox="0 0 364 384" fill="none">
        <defs>
          <pattern id="eab71dd9-9d7a-47bd-8044-256344ee00d0" x="0" y="0" width="20" height="20"
            patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
      </svg>
    </div>
    <div class="mx-auto max-w-7xl py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-6 lg:gap-8">
        <div class="px-4 mb-6 sm:px-6 sm:text-center md:mx-auto lg:col-span-6 lg:flex lg:items-center lg:text-center">
          <div>
            <a href="#"
              class="inline-flex items-center rounded-full bg-blue-300 p-1 px-3 pr-2 text-black hover:bg-blue-500 text-sm"
              data-aos="fade-up" data-aos-delay="100">
              Partner with us today!
            </a>
            <h1 data-aos="fade-up" class="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl lg:leading-snug"
              data-aos-delay="200">
              Looking for Partner <br>
              for your Next Project?
            </h1>
            <p data-aos="fade-up" data-aos-delay="300"
              class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg md:max-w-2xl mx-auto">
              Templatecookie have a talented and experienced team of designers
              and developers who are committed to offering the best value to
              your projects.
            </p>
          </div>
        </div>
        <!-- <div class="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
          <div
            id="hubspotForm"
            class="px-6 pb-4 pt-8 bg-white sm:mx-auto sm:w-full sm:max-w-lg sm:overflow-hidden sm:rounded-lg"
            data-aos="zoom-in"
          />
        </div> -->
      </div>
      <div class="w-full mt-12 mx-auto xl:w-2/5 md:w-3/5 sm:w-4/5">
        <div
          class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7"
          data-rounded="rounded-lg" data-rounded-max="rounded-full" data-aos="fade-up" data-aos-delay="400">
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
                    class="transition-all w-full duration-300 rounded-md hover:bg-gray-50 focus:bg-gray-50" type="text"
                    required />
                </div>
              </div>
              <div class="flex flex-col md:flex-row gap-5 items-start">
                <div class="infusion-field w-full">
                  <label for="inf_field_Email" class="flex mb-1.5 text-sm">Email <span
                      class="text-sm text-red-600">*</span></label>
                  <input id="inf_field_Email" name="inf_field_Email" placeholder="Email" v-model="email"
                    class="transition-all duration-300 w-full rounded-md hover-bg-gray-50 focus-bg-gray-50" type="email"
                    required />
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
        if (!this.isValidEmail) {
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