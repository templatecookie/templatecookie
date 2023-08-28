import { defineApolloClient } from "@nuxtjs/apollo";

export default defineApolloClient({
  httpEndpoint: "https://graphql.datocms.com/",
  httpLinkOptions: {
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ce32bbd78955d348af32c5f3fb0417`,
      // Authorization: `Bearer ${process.env.DATOCMS_GRAPHQL_AUTH_TOKEN}`
    },
  },
  // httpEndpoint: '',
  // browserHttpEndpoint: '',
  // wsEndpoint: '',
  // httpLinkOptions: {},
  // wsLinkOptions: {},
  // wsEndpoint: '',
  // websocketsOnly: false,
  // connectToDevTools: false,
  // defaultOptions: {},
  // inMemoryCacheOptions: {},
  // tokenName: 'apollo:<client-name>.token',
  // tokenStorage: 'cookie',
  // authType: 'Bearer',
  // authHeader: 'Authorization'
});
// import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
// import dataTypes from './fragmentTypes.json'

// const fragmentMatcher = new IntrospectionFragmentMatcher({
//   introspectionQueryResultData: dataTypes
// })

// export default function () {
//   return {
//     httpEndpoint: 'https://graphql.datocms.com',
//     httpLinkOptions: {
//       credentials: 'same-origin',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ce32bbd78955d348af32c5f3fb0417`
//         // Authorization: `Bearer ${process.env.DATOCMS_GRAPHQL_AUTH_TOKEN}`
//       }
//     },
//     cache: new InMemoryCache({ fragmentMatcher })
//   }
// }
