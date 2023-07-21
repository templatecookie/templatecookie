export default `
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
        priceplan {
          name
          description
          price
          purchaseLink
          paddleProductId
          paddleCheckout
          theme
          features {
            name
            id
          }
        }
      }
    }
  }
`;
