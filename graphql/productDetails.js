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
        extended_price
        regular_price
        short_description
        buy_regular_license
        buy_extended_license
        preview_url
        documentation_url
        customer_support
        version
        demo_banner {
          data {
            attributes {
              name
              alternativeText
              url
              ext
            }
          }
        }
        category {
          data {
            # id
            attributes {
              name
              slug
            }
          }
        }
        gallery {
          data {
            id
            attributes {
              name
              alternativeText
              url
              ext
            }
          }
        }
        description
        highlights {
          id
          feature
        }
        customer_support
      }
    }
  }
  relatedProducts: products(pagination: { page: 1, pageSize: 3 }) {
    data {
      id
      attributes {
        name
        slug
        description
        short_description
        regular_price
        banner {
          data {
            attributes {
              name
              alternativeText
              ext
              url
            }
          }
        }
        category {
          data {
            attributes {
              name
              slug
            }
          }
        }
      }
    }
  }
}
`
