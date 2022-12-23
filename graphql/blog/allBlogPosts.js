// All Blog Posts
import gql from 'graphql-tag';

// export const global = gql`
export default gql`
query BlogPosts {
  allPosts(orderBy: _createdAt_DESC) {
    id
    title
    slug
    updatedAt
    shortDescription
    image {
      alt
      url
    }
    tags {
      slug
      name
    }
  }
}
`
