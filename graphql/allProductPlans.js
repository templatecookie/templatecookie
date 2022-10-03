// Global Query
import gql from 'graphql-tag';

// export const global = gql`
export default gql`
  query productPlans {
    allProductplans(first: "20") {
      title
      id
      description
      createdAt
      product {
        id
        slug
        name
        banner {
          url
        }
      }
      plans {
        price
        name
        id
        icon {
          url
        }
        features {
          id
          feature
          active
        }
      }
    }
  }
`
