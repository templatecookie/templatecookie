import gql from 'graphql-tag';

// export const global = gql`
export default gql`
query product($slug: String!){
  products (filters: { slug: { eq: $slug }}){
    data {
      attributes {
        name
        slug
        short_description
        description
        buy_url
        preview_url
        technology {
          data {
            attributes {
              name
              slug
              icon {
                data {
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
        productFeatures {
          info {
            title
            subTitle
            description
            theme
            alignment
          }
          features {
            id
            title
            description
            icon {
              data {
                attributes {
                  url
                  name
                  alternativeText
                  ext
                }
              }
            }
          }
        }
        product_funfacts {
          id
          title
          number
          icon {
            data {
              attributes {
                url
                name
                alternativeText
              }
            }
          }
        }
        productPages {
          name
          url
          image {
            data {
              attributes {
                name
                alternativeText
                url
              }
            }
          }
        }
        displayFeatures {
          id
          name
          subtitle
          description
          image {
            data {
              attributes {
                name
                alternativeText
                ext
              }
            }
          }
          alignment
          action {
            id
            label
            theme
            width
            link {
              id
              label
              href
              target
            }
          }
        }
        productFeatureScreenshots {
          id
          info {
            title
            description
            subTitle
            theme
            alignment
            background {
              data {
                attributes {
                  name
                  alternativeText
                  url
                }
              }
            }
          }
          features {
            id
            title
            description
            screenshot {
              data {
                attributes {
                  name
                  alternativeText
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
`
