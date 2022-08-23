// Global Query
import gql from 'graphql-tag';

// export const global = gql`
export default gql`
query {
  global{
    logo {
      url
      filename
      title
    }
    favicon {
      url
      filename
      title
    }
    supportUrl
    notice {
      announcement
      showNotice
      cssClass
    }
    newsletter {
      newsletterTitle
      newsletterDescription
      socialTitle
      socialDescription
      socials {
        name
        url
        icon {
          url
        }
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

    customerSupport {
      title
      description
      cssClass
      image {
        filename
        url
      }
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
