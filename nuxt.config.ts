/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      datoCmsToken: process.env.DATO_CMS_TOKEN,
    },
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
    },
  },

  css: [
    // SCSS file in the project
    "~/assets/scss/app.scss",
    // "aos/dist/aos.css",
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    // '@nuxtjs/sentry',
    // '@nuxtjs/apollo',
  ],

  plugins: [
    { src: "@/plugins/aos", mode: "client" },
    { src: "@/plugins/datocms.js", mode: "client" },
  ],

  //   purgeCSS: {
  //     whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  // },
  content: {
    api: {
      baseURL: "/api/_my_content",
    },
    markdown: {
      toc: { depth: 2, searchDepth: 2 },
    },
  },

  // apollo: {
  //   clients: {
  //     default: './graphql/config/config.js'
  //   }
  // }
  // sentry: {
  //   dsn: 'https://72cc635251b84e40964ee9111b009c8e@o1134535.ingest.sentry.io/6438928',
  //   // publishRelease: true,
  //   // sourceMapStyle: 'hidden-source-map',
  // }
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
