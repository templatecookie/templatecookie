import gql from 'graphql-tag';

// export const global = gql`
export default gql`
query products($page: Int!, $pageSize: Int!) {
  products(sort: "publishedAt:desc", pagination: { page: $page, pageSize: $pageSize }) {
    data {
      id,
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
