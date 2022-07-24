import fetch from 'node-fetch'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'

import SITEMAP_PRODUCTS from '../graphql/allProducts'

import dataTypes from '../graphql/config/fragmentTypes.json'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: dataTypes
})

const httpLink = new HttpLink({
  uri: 'https://graphql.datocms.com',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ce32bbd78955d348af32c5f3fb0417`
    // Authorization: `Bearer ${process.env.DATOCMS_GRAPHQL_AUTH_TOKEN}`
  },
  fetch: fetch
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({ fragmentMatcher })
})

const getSitemapProducts = async () => {
  return await client.query({
    query: SITEMAP_PRODUCTS,
  }).then(({ data }) => {
    return data.allProducts.map(({ slug }) => ({
      url: `/demo/${slug}`,
      changefreq: 'daily',
      priority: 1,
    }));
  })
}

export default getSitemapProducts;
