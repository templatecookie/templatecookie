import gql from 'graphql-tag';

// export const global = gql`
export default gql`
query {
  homepage {
    data {
      attributes {
        title,
        meta_data {
          title, 
          description
          og_image {
            data {
              attributes {
                url, 
                previewUrl, 
                ext, 
                name
              }
            }
          }
        }
        heroSection {
          id
          title
          subTitle
          description
          banner {
            data {
              attributes {
                name,
                url, 
                previewUrl, 
                ext, 
                formats
              }
            }
          }
          buttons {
            label
            theme
            width
            link {
              label
              href
              target
            }
          }
        }
        featuredProductSection {
          id
          title
          description
        }
        latestProductsSection {
          title,
          id
          description
          subTitle
          theme
          alignment
          background {
            data {
              attributes {
                name,
                url, 
                previewUrl, 
                ext, 
                formats
              }
            }
          }
        } 
        topFeaturesSection {
          id
          info {
            title
            description 
            subTitle
            theme
            alignment 
            background{
              data {
                attributes {
                  name,
                  url, 
                  previewUrl, 
                  ext, 
                  formats
                }
              }
            }
          }
        }
        whyUsSection {
          id,
          info  {
            id
            title
            description 
            subTitle
            theme 
          }
          counterNumbers {
            id
            title
            number
            theme
            icon {
              data {
                attributes {
                  name,
                  url, 
                  previewUrl, 
                  ext, 
                  formats
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