// Global Query
import gql from 'graphql-tag';

// export const global = gql`
export default gql`
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

    defaultFeatures{
      title
      description
      cssClass
      bgClass
      action{
        label
        href
        target
      }
      icon {
        filename
        url
      }
    }

    selectedProducts {
      name
      slug
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
`
