export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Homepage | Templatecookie',
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
    // { src: '~/plugins/plugin-name', mode: 'client' },
    { src: "~/plugins/dropdown.js", mode: "client" },
    { src: "~/plugins/aos.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
  ],
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
      default: {
        // httpEndpoint: 'http://localhost:1337/graphql',
        // getAuth: () => `Bearer fa8423d78cd2ef9b0e946ca7eda3d32e900ccac15269be72fae8228bd0cfaf8ba1447f3a906d99ee764279e55ff098bd39325dbbf2638e9e40f7092e5ffd658f9337dcb5b24a90babe1abf2ecbe35b382c85ff8feea3ab95db44903767e41b6d87f1beb8fb19a979bfb2a04678e5a02a9e82e29395a7859ca84ff0e685d69661`,
        httpEndpoint: 'https://api.templatecookie.com/graphql',
        getAuth: () => `Bearer b3b23d4cb736c209cdbaa9186f82ee653734ac798cea1345cdd69c5b2bba0c0e79d87f3c80918eb3e95fe199a47d7d6e5ecfeefbf352800a654cc270face8d36a6b4f23dc74afdd28590e2a72b153d8a0a75ef73011cda4f989f4bf02a4ec96117fb6c8dcc8bd14879d877758762a23aabd0bff325e0b3ce769901c3e2f4a9a6`,
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
