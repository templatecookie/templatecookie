/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      datoCmsToken: process.env.DATO_CMS_TOKEN,
    },
  },
  ssr: true,
  app: {
    head: {
      title: "Premium PHP Scripts & HTML Templates | Templatecookie.com",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "A team of talented developers working on building quality UI,HTML templates and PHP scripts! Reuseable Website Templates & PHP Scripts for your next project!",
        },
        { hid: "og:image", property: "og:image", content: "/social-meta.png" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/icon.png" }],
      script: [
        {
          innerHTML: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
          posthog.init('phc_gZ1gM5ohs92IjEQMziTLugJTGwgOVZy62QRHrgcF2G7',{api_host:'https://app.posthog.com'})`
        },
        {
          innerHTML: `window.$crisp=[];window.CRISP_WEBSITE_ID="2b1427db-935d-4009-9088-6ae45945a27c";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
        },
      ],
    },
  },

  css: [
    // SCSS file in the project
    "~/assets/scss/app.scss",
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "nuxt-phosphor-icons",
    '@nuxtjs/robots',
    'nuxt-simple-sitemap'
  ],

  // PhosphorIcon Config
  phosphor: {
    prefix: "Ph",
  },
  plugins: [
    { src: "@/plugins/aos", mode: "client" },
    { src: "@/plugins/datocms.js", mode: "client" },
  ],
  content: {
    api: {
      baseURL: "/api/_my_content",
    },
    markdown: {
      toc: { depth: 2, searchDepth: 2 },
    },
  },

  googleFonts: {
    display: "swap",
    families: {
      Lexend: [300, 400, 500, 600, 700, 800],
      "Open+Sans": {
        wght: [100, 300, 400, 500, 600, 700, 800],
        ital: [100, 300, 400, 500],
      },
    },
  },

  devtools: {
    enabled: true,
  },
});
