// Global Query
// import gql from 'graphql-tag';

// export const global = gql`
export default `
query {
  global{
    logo {
      url
      title
    }
    notice {
      announcement
      showNotice
      cssClass
    }
    socialMedias {
      name
      url
      icon {
        url
      }
    }

    selectedProducts {
      name
      slug
      shortName
      thumbnail {
        url
      }
      description
    }

    footer {
      logo {
        url
        filename
      }
      description
      menuitems {
        label
        products {
          id
          slug
          name
        }
      }
    }
  }
}
`;
