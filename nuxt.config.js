export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "template-cookie",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    "~/assets/scss/app.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
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
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://api.templatecookie.com/graphql',
        getAuth: () => `Bearer fa8423d78cd2ef9b0e946ca7eda3d32e900ccac15269be72fae8228bd0cfaf8ba1447f3a906d99ee764279e55ff098bd39325dbbf2638e9e40f7092e5ffd658f9337dcb5b24a90babe1abf2ecbe35b382c85ff8feea3ab95db44903767e41b6d87f1beb8fb19a979bfb2a04678e5a02a9e82e29395a7859ca84ff0e685d69661`,
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
