<template>
  <div>
    <hire-hero-section />
    <hire-our-services />
    <hire-working-process />
    <hire-our-experties />
    <hire-contact-us v-if="hubspotLoaded" />
  </div>
</template>

<script>
  export default {
    setup() {
      const title = "Hire Expert Designer & Developers | Templatecookie";
      const description =
        "We have expert developers and designers to help you build your next dream project. Our team composed with experts in various industry";

      useSeoMeta({
        title: title,
        ogTitle: title,
        description: description,
        ogDescription: description,
        ogImage: "/social-meta.png",
      });
      const route = useRoute()
      useHead({
        link: [
          {
            rel: 'canonical',
            href: 'https://www.templatecookie.com' + route.path,
          },
        ],
        script: [
          { type:"text/javascript", src: "https://pbj887.infusionsoft.app/app/webTracking/getTrackingCode" },
          { type:"text/javascript", src: "https://pbj887.infusionsoft.com/resources/external/recaptcha/production/recaptcha.js?b=1.70.0.599909" },
          { src: "https://www.google.com/recaptcha/api.js?onload=onloadInfusionRecaptchaCallback&render=explicit", async:"async", defer:'defer' },
          { type:"text/javascript", src: "https://pbj887.infusionsoft.com/app/timezone/timezoneInputJs?xid=a686c8c396862f4b1d3fd2e84ff2f89f" },
          { type:"text/javascript", src: "https://pbj887.infusionsoft.com/js/jquery/jquery-3.3.1.js" },
          { type:"text/javascript", src: "https://pbj887.infusionsoft.app/app/webform/overwriteRefererJs" },
        ],
      })
    },
    data() {
      return {
        hubspotLoaded: false,
      };
    },
    mounted() {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/v2.js";
      document.body.appendChild(script);
      script.addEventListener("load", () => {
        this.hubspotLoaded = true;
      });
    },
  };
</script>
