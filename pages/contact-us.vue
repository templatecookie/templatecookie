<template>
  <div>
    <div class="bg-gray-f0 py-12">
      <div class="container">
        <div class="text-center max-w-4xl m-auto pt-6">
          <h1
            class="text-dark-06 text-5xl font-semibold mb-6 lg:mb-9 tracking-ls02">
            Contact Us
          </h1>
          <p class="text-dark-06 text-lg mb-6 lg:mb-9 max-w-xl m-auto font-light">
            Golio gives you everything you need to create your website in
            minutes. Bootstrap code with a well-organized Figma file to design &
            develop your next websites in minutes.
          </p>
        </div>
      </div>
    </div>
    <!-- end -->
    <div class="container py-12">
      <div class="flex justify-center">
        <div class="w-full md:w-8/12 lg:w-6/12">
          <div id="hubspotForm" v-once></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact Us - Templatecookie.com',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'description' },
        { hid: 'og:title', property: 'og:title', name: 'og:title', content: 'Contact Us - Templatecookie.com' },
        { hid: 'og:description', name: 'og:description', name: 'og:description', content: 'description' },
        { hid: 'og:type', property: 'og:type', name: 'og:type', content: "website" },
        { hid: 'og:image', property: 'og:image', name: 'og:image', content: '/social-meta.png' },
      ],
      script: [
        // {
        //   src: '//js.hsforms.net/forms/v2.js'
        // }
      ],
    }
  },
  mounted(){
    // this.$nextTick(() => {
    //   hbspt.forms.create({
    //     region: "na1",
    //     portalId: "22174697",
    //     formId: "4d82d2ef-a223-4999-b203-06d969f41c43"
    //   });
    // })
    const script = document.createElement("script");
    script.src="https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "22174697",
          formId: "4d82d2ef-a223-4999-b203-06d969f41c43",
          target: "#hubspotForm"
        })
      }
    })
  }
}
</script>

<style>

</style>
