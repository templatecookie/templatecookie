import gql from 'graphql-tag';

// export const global = gql`
export default gql`
query products($page: Int!, $pageSize: Int!, $technology: String!, $category: String! ) {
  products(
      sort: "publishedAt:desc",
      pagination: { page: $page, pageSize: $pageSize }
      filters: {
        technology: { slug: { contains: $technology } }
        category: { slug: { contains: $category } }
      }
    ) {
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
