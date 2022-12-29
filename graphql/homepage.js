// Home Page Query
import gql from 'graphql-tag';

// export const global = gql`
export default gql`
query {
  homepage {
    heroSection {
      title
      subtitle
      description
      cssClass
      banner {
        url
      }
      actions {
        cssClass
        link {
          label
          href
          target
        }
      }
    }
    latestProduct {
      title
      description
      bgClass
      background {
        url
      }
    }
    topFeatures {
      cssClass
      info {
        title
        description
        bgClass
        background {
          url
        }
      }
      features {
        title
        description
        cssClass
        image {
          url
        }
      }
    }
    whyUsSection {
      info {
        title
        description
        bgClass
        background {
          url
        }
      }
      feature {
        title
        description
        cssClass
        image {
          url
        }
      }
      counters {
        title
        description
        cssClass
        counter
        icon {
          url
        }
      }
    }
  }
  allProducts(first: 6, orderBy: id_DESC, filter: {homepage: {eq: "true"}}) {
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
}`
