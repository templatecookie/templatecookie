import gql from 'graphql-tag';

// export const global = gql`
export default gql`
query product($slug: String!){
  products (filters: { slug: { eq: $slug }}){
    data {
      id
      attributes {
        name
        slug
        short_description
        description
        buy_url
        preview_url
        gallery {
          data {
            id
            attributes {
              name
              alternativeText
              ext
              url
            }
          }
        }
      }
    }
  }
}
`

