import gql from 'graphql-tag';

export default gql`
query categoryProducts($slug: String!, $page: Int!, $pageSize: Int!) {
  categories(filters: { slug: { eq: $slug } }) {
    data {
      attributes {
        name
        slug
      }
    }
  }

  products(
    filters: { category: { slug: { eq: $slug } } }
    sort: "publishedAt:desc",
    pagination: { page: $page, pageSize: $pageSize }
  ) {
    data {
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
      pagination{
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
`
