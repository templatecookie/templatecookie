import gql from 'graphql-tag';

// export const global = gql`
export default gql`
query {
  homepage {
    data {
      attributes {
        title
        meta_data {
          title
          description
          og_image {
            data {
              attributes {
                url
                previewUrl
                ext
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
                name
                url
                previewUrl
                ext
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
          products {
            data {
              id
              attributes {
                name
                slug
                regular_price
                short_description
                banner {
                  data {
                    attributes {
                      name,
                      alternativeText,
                      previewUrl
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
        latestProductsSection {
          title
          id
          description
          subTitle
          theme
          alignment
          background {
            data {
              attributes {
                name
                url
                previewUrl
                ext
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
            background {
              data {
                attributes {
                  name
                  url
                  previewUrl
                  ext
                  formats
                }
              }
            }
          }
          features {
            id,
            title
            description
            theme
            icon {
              data {
                attributes {
                  name,
                  ext,
                  alternativeText
                  url
                }
              }
            }
          }
        }
        whyUsSection {
          id
          info {
            id
            title
            description
            subTitle
            theme,
            background{
              data {
                attributes {
                  url,
                  alternativeText
                }
              }
            }
          }
          counterNumbers {
            id
            title
            description
            theme
            icon {
              data {
                attributes {
                  name
                  url
                  previewUrl
                  ext
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
