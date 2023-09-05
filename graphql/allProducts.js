// All Products for Products Page Query

export default `
  query {
    allProducts(first: 37, orderBy: id_DESC) {
      id
      name
      description
      slug
      shortName
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
`;
