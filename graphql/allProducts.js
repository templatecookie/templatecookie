// All Products for Products Page Query
import gql from 'graphql-tag';

export default gql`
  query {
    allProducts(first: 8, orderBy: id_DESC) {
      id
      name
      description
      slug
      banner {
        url
      }
      category {
        name
        slug
      }
    }

    _allProductsMeta{
      count
    }

    allCategories {
      id
      slug
      name
      updatedAt
    }
  }
`
