import gql from 'graphql-tag';
import fetch from 'node-fetch'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
  uri: 'https://graphql.datocms.com',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ce32bbd78955d348af32c5f3fb0417`
  },
  fetch: fetch
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const linkages = async () => {
  return await client.query({
    query: gql`
      query {
        allProducts (first:50) {
          id
          name
          slug
          category{
            name
            slug
          }
        }
      }
    `,
  }).then(({ data }) => {
    return data.allProducts.map(({ slug }) => ({
      url: `/demo/${slug}`,
      changefreq: 'daily',
      priority: 1,
    }));
  })
}

// const preview = false;
// const endpoint = preview ? `https://graphql.datocms.com/preview` : `https://graphql.datocms.com`;

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,

  publicRuntimeConfig: {
    datoCmsToken: process.env.DATO_CMS_TOKEN,
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
    { src: "~/plugins/datocms.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/tailwindcss",
    '@nuxtjs/google-fonts',
    '@nuxtjs/pwa',
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
      '/demo/demo',
      '/plan-purchase-success'
    ],
    routes: linkages,
    trailingSlash: true
  },

  gtm: {
    id: 'GTM-NZ5TXGP'
  },

  googleFonts: {
    display: 'swap',
    families: {
      Lexend: [300, 400, 500, 600, 700, 800],
      "Open+Sans": {
        wght: [100, 300, 400, 500, 600, 700, 800],
        ital: [100, 300, 400, 500,]
      },
    }
  },

  apollo: {
    clientConfigs: {
      default: '~/graphql/config/config.js',
      draft: '~/graphql/config/draft.js',
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
