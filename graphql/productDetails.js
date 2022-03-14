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
        sale_price
        price
        short_description
        buy_url
        preview_url
        support_url
        documentation_url
        customer_support
        version
        banner {
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
        documentation
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
        price
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
