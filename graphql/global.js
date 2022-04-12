import gql from 'graphql-tag';

// export const global = gql`
export default gql`
query {
  global {
    data {
      attributes {
        header {
          id
          logo {
            data {
              attributes {
                name
                url
                previewUrl
                formats
              }
            }
          }
          menuItems {
            label
            category {
              data{
                id
                attributes {
                  name
                  slug
                }
              }
            }
          }
          profile {
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
        newsletter {
          id
          newsletter_title
          newsletter_description
          social_title
          social_description
          social_medias {
            data {
              attributes {
                name
                url
                theme
                icon {
                  data {
                    attributes {
                      name
                      url
                      previewUrl
                      formats
                    }
                  }
                }
              }
            }
          }
        }
        footer {
          id
          logo {
            data {
              attributes {
                name
                ext
                formats
                url
                previewUrl
              }
            }
          }
          description
          menuItems {
            name 
            products {
              data {
                attributes {
                  slug
                  name
                }
              }
            }
          }
        }
        website_notice {
          id
          notice_text
          bg
          notice_link {
            id
            label
            href
            target
          }
        }
        productDefaultFeatures{
          id
          title
          description
          icon {
            data {
              id
              attributes {
                name
                alternativeText
                url
              }
            }
          }
          theme
          button {
            id
            label
            href
            target
          }
        }
        customerSupport {
          id
          title
          description
          theme
          image {
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
`
