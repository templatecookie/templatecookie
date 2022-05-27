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
        Authorization: `Bearer ce32bbd78955d348af32c5f3fb0417`
      }
    },
    cache: new InMemoryCache({ fragmentMatcher })
  }
}
