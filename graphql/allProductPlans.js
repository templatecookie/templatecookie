// Global Query
import gql from 'graphql-tag';

// export const global = gql`
export default gql`
  query productPlans {
    allProductplans(filter: {statusKey: {eq: "true"}}) {
      title
      updatedAt
      id
      description
      product {
        id
        name
        banner {
          url
        }
        thumbnail {
          url
        }
      }
      plans {
        id
        name
        updatedAt
        priceplan {
          name
          description
          price
          purchaseLink
          theme
          icon {
            url
          }
          features {
            active
            feature
            id
          }
        }
      }
    }
  }
`
