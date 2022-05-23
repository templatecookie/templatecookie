import gql from 'graphql-tag';

// export const global = gql`
export default gql`
query {
  products(sort: "publishedAt:desc", pagination: { page: 1, pageSize: 6 }) {
    data {
      id
      attributes {
        name
        slug
        publishedAt
        short_description
        regular_price
        category {
          data {
            attributes {
              name
              slug
            }
          }
        }
        demo_banner {
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
    meta {
      pagination {
        page
        pageSize
        pageCount
        total
      }
    }
  }
}
`
