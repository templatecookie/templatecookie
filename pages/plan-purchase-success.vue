<template>
  <div>
    <section class="realtive py-12 lg:py-20 bg-no-repeat bg-center bg-cover" :style="{ backgroundImage: `url(${bannerImg})` }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="text-center">
          <h1 class="text-4xl md:text-heading-40 textdark mb-6 max-w-680 mx-auto font-semibold">
            Thank you for purchasing
          </h1>
          <p class="text-lg md:text-lg textdark mb-8 max-w-full md:max-w-536 mx-auto font-light">
            Please create a support ticket using the form below. Our team will get back to as soon as possible.
          </p>
        </div>
      </div>
    </section>
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="w-full lg:w-1/2 mx-auto py-6">
        <div class="py-4 px-8 bg-red-200 w-full text-gray-800 rounded mb-6">
          Note: Sometimes it can take longer than usual, like 1 to 3 working days, because of our higher volume of tickets.
        </div>
        <div id="hubspotForm" v-once></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Thank you for your purchase",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Thank you for purchasing our installation plans. our team will get back to you soon."
      }
    ]
  },
  data() {
    return {
      selectedProduct: null,
      bannerImg: "/images/img-five.png",
    };
  },
  mounted(){
    const script = document.createElement("script");
    script.src="https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "22174697",
          formId: "3d6aa885-36d6-4ede-99d0-d53b25f32bc2",
          target: "#hubspotForm"
        })
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.responsive-overly {
  @media (max-width: 1199px) {
    background-position: center !important;
    background-size: cover !important;
  }
}
</style>
