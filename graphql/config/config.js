import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import dataTypes from './fragmentTypes.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: dataTypes
})

export default function () {
  return {
    httpEndpoint: 'https://graphql.datocms.com',
    httpLinkOptions: {
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.DATOCMS_GRAPHQL_AUTH_TOKEN}`
      }
    },
    cache: new InMemoryCache({ fragmentMatcher })
  }
}
