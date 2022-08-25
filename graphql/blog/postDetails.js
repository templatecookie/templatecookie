// All Blog Posts
import gql from 'graphql-tag';

// export const global = gql`
export default gql`
query PostDetails($slug: String) {
  post(filter: {slug: {eq: $slug}}) {
    slug
    title
    updatedAt
    image {
      alt
      url
    }
    description {
      blocks
      links
      value
    }
    tags {
      slug
      name
    }
  }

  allPosts(orderBy: _updatedAt_DESC, first: "3") {
    title
    slug
    shortDescription
    updatedAt
    image {
      url
    }
    tags {
      slug
      name
    }
  }
}

`
