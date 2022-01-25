import gql from 'graphql-tag';

// export const global = gql`
export default gql`
# Write your query or mutation here
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
            id
            label
            href
            target
            menuSubItems {
              id
              label
              href
              target
            }
          }
          profile {
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
          id,
          logo {
            data {
              attributes {
                name,
                ext,
                formats, 
                url, 
                previewUrl
              }
            }
          }
          description,
          menuItems {
            label,
            href 
            target
            menuSubItems {
              id
              label
              href
              target
            }
          }
        }
      }
    }
  }
}
`
