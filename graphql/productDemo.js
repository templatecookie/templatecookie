import gql from 'graphql-tag';

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
        demo_page_banner {
          data {
            attributes{
              url
              name
            }
          }
        }
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
          description
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
          title
          subtitle
          description
          features{
            id
            name
            description 
            image {
              data {
                attributes {
                  url
                }
              }
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
        folder_structure {
          title
          description
          structure
        }
        cta_section {
          title
          description
          screenshots {
            data {
              attributes {
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
