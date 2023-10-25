/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      datoCmsToken: process.env.DATO_CMS_TOKEN,
    },
  },
  routeRules: {
    "/blog/**": { ssr: false },
    "/installation-plans/**": { ssr: false },
    "/products/**": { ssr: false },
  },
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
          posthog.init('phc_gZ1gM5ohs92IjEQMziTLugJTGwgOVZy62QRHrgcF2G7',{api_host:'https://app.posthog.com'})`,
        },
        {
          innerHTML: `window.$crisp=[];window.CRISP_WEBSITE_ID="2b1427db-935d-4009-9088-6ae45945a27c";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
        },

        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Templatecookie",
              "url": "https://www.templatecookie.com",
              "logo": "https://www.templatecookie.com/logo.svg",
              "description": "Templatecookie is a team of developers working on building quality templates and scripts! We create high-quality products to help you manage your business.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "37/4, 3/A, Dhaka Uddan",
                "addressLocality": "Dhaka",
                "addressRegion": "Dhaka",
                "postalCode": "1207",
                "addressCountry": "Bangladesh"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Sales Inquery",
                "telephone": "+8801610774060",
                "email": "hello@templatecookie.com",
                "availableLanguage": "English",
                "sameAs": "https://api.whatsapp.com/send?phone=8801610774060"
              },
              "email": "hello@templatecookie.com",
              "telephone": "+8801610774060",
              "sameAs": [
                "https://www.facebook.com/templatecookie",
                "https://www.pinterest.com/templatecookie/",
                "https://dribbble.com/templatecookie/",
                "https://github.com/templatecookie",
                "https://www.behance.net/templatecookie",
                "https://www.figma.com/@templatecookie"
              ],
              "founder": {
                "@type": "Person",
                "name": "Zakir Hossen",
                "email": "web.zakirbd@gmail.com",
                "jobTitle": "Founder & CEO"
              },
              "product": [
                {
                  "@type": "Product",
                  "name": "Jobpilot - Job Portal Laravel Script",
                  "description": "Description of Product 1",
                  "url": "https://templatecookie.com/demo/jobpilot-job-portal-script-php-laravel"
                },
                {
                  "@type": "Product",
                  "name": "Schooling - School Management System (SPA) Laravel Script",
                  "description": "Description of Product 2",
                  "url": "https://www.templatecookie.com/demo/schooling-school-management-system-script"
                },
                {
                  "@type": "Product",
                  "name": "Adlisting - Buy Sell Classified Ads Marketplace Laravel Script",
                  "description": "Description of Product 2",
                  "url": "https://www.templatecookie.com/demo/adlisting-classified-ads-script"
                }
              ],
              "service": [
                {
                  "@type": "Service",
                  "name": "Installation Plans",
                  "description": "Streamline Your Setup with Templatecookie's Installation Plans. Effortlessly deploy software on the cloud with our tailored solutions. Choose the perfect plan for your needs.",
                  "url": "https://www.templatecookie.com/installation-plans"
                },
                {
                  "@type": "Service",
                  "name": "Elite Support",
                  "description": "Let us handle the technical parts, you focus on the business. Welcome to Templatecookie's Elite Support, where you can hire our team of expert developers at an unbelievably affordable rate.",
                  "url": "https://www.templatecookie.com/elite-support"
                }
              ]
            }
          )
        }
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
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
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
  router: {
    // https://router.vuejs.org/api/interfaces/routeroptions.html
    options: {
      // linkActiveClass: "khalil-vai",
      linkExactActiveClass: "!text-primary",
    },
  },
});
