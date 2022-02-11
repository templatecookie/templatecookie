import gql from 'graphql-tag';

export default gql`
query category($slug: ID!){
  category(id: $slug) {
    data {
      id
      attributes {
        name
        slug
        products(sort: "publishedAt:desc") {
          data {
            id
            attributes {
              name
              slug
              publishedAt
              short_description
              price
              category {
                data {
                  attributes {
                    name
                    slug
                  }
                }
              }
              banner {
                data {
                  attributes {
                    name
                    previewUrl
                    url
                    alternativeText
                    ext
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
