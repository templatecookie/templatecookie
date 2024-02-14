<template>
  <div>
    <hire-hero-section />
    <hire-our-services />
    <hire-working-process />
    <hire-our-experties />
    <hire-contact-us />
  </div>
</template>

<script setup>
import store from "~/store";

const title = "Hire TemplateCookie: Your experienced tech Partner";
const description =
  "Discover the power of collaboration with TemplateCookie. Our expert team specializes in SaaS and web app development, ready to turn your ideas into reality";
const route = useRoute();
const siteLogo = store.global?.logo?.url;

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: "/social-meta.png",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://www.templatecookie.com" + route.path,
    },
  ],
  script: [
    {
      type: "text/javascript",
      src: "https://pbj887.infusionsoft.app/app/webTracking/getTrackingCode",
    },
    {
      type: "text/javascript",
      src: "https://pbj887.infusionsoft.com/resources/external/recaptcha/production/recaptcha.js?b=1.70.0.599909",
    },
    {
      src: "https://www.google.com/recaptcha/api.js?onload=onloadInfusionRecaptchaCallback&render=explicit",
      async: "async",
      defer: "defer",
    },
    {
      type: "text/javascript",
      src: "https://pbj887.infusionsoft.com/app/timezone/timezoneInputJs?xid=a686c8c396862f4b1d3fd2e84ff2f89f",
    },
    {
      type: "text/javascript",
      src: "https://pbj887.infusionsoft.com/js/jquery/jquery-3.3.1.js",
    },
    {
      type: "text/javascript",
      src: "https://pbj887.infusionsoft.app/app/webform/overwriteRefererJs",
    },
  ],
});

defineOgImage({
  component: "Hireus",
  title: title,
  description: description,
  siteLogo: siteLogo,
});
</script>
