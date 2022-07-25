import gql from 'graphql-tag';

export default gql`
  query {
    allProducts (first:50) {
      id
      name
      slug
      category{
        name
        slug
      }
    }
  }
`
