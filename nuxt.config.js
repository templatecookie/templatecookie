// require('dotenv').config()
// const preview = false;
// const endpoint = preview ? `https://graphql.datocms.com/preview` : `https://graphql.datocms.com`;
import linkages from './util/getSitemapProducts'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  publicRuntimeConfig: {
    dataPerPage: 6,
  },

  privateRuntimeConfig: {
    // datoCMSAuthToken: process.env.DATOCMS_GRAPHQL_AUTH_TOKEN
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Premium PHP Scripts & HTML Templates | Templatecookie.com',
    htmlAttrs: { lang: "en" },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: 'description', name: 'description', content: 'A team of talented developers working on building quality UI,HTML templates and PHP scripts! Reuseable Website Templates & PHP Scripts for your next project!' },
      { hid: 'og:image', property: 'og:image', content: "/social-meta.png" }
    ],
    link: [{ rel: "icon", type: "image/png", href: "/icon.png" }],
  },

  pwa: {
    manifest: {
      name: 'Templatecookie.com',
      lang: 'en',
      useWebmanifestExtension: false
    }
  },

  loading: {
    color: '#0B63E5',
    height: '5px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    "~/assets/scss/app.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/mixin/global.js",
    { src: "~/plugins/dropdown.js", mode: "client" },
    { src: "~/plugins/aos.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    '@nuxtjs/google-fonts',
    '@nuxtjs/pwa',
    // '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
    '@nuxt/content',
    '@nuxtjs/gtm',
    '@nuxt/image',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://templatecookie.com',
    gzip: true,
    exclude: [
      '/test',
      '/demo/demo'
    ],
    routes: linkages,
    trailingSlash: true
  },

  gtm: {
    id: 'GTM-NZ5TXGP'
  },

  // // Generate index.html files for each blog post
  // generate: {
  //   routes: linkages
  // },

  googleFonts: {
    display: 'swap',
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lexend: [300, 400, 500, 600, 700, 800],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },

  apollo: {
    clientConfigs: {
      default: '~/graphql/config/config.js',
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
