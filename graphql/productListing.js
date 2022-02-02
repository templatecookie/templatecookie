import gql from 'graphql-tag';

// export const global = gql`
export default gql`
query {
  productListing {
    data {
      attributes {
        info {
          id
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
                ext
                url
              }
            }
          }
        }
        meta_data {
          id
          title
          description
          og_image {
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
        technologies {
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
      }
    }
  }
}
`
