import gql from 'graphql-tag';

export default gql`
query product($slug: String!){
  product(filter: {slug: {eq: $slug}}) {
    id
    name
    description
    docsUrl
    previewUrl
    banner {
      url
    }
    category {
      name
    }
    demoBanner {
      url
    }
    contents {
      ... on CustomerSupportRecord {
        __typename
        description
        cssClass
        id
        title
        image {
          url
        }
      }
      ... on DisplayfeatureRecord {
        __typename
        title
        subtitle
        bgClass
        description
        features {
          createdAt
          title
          description
          cssClass
          image {
            url
          }
        }
      }
      ... on ExclusivefeatureRecord {
        __typename
        id
        title
        subtitle
        description
        cssClass
        alignment
        image {
          url
        }
        action {
          label
          target
          href
          id
        }
      }
      ... on FeaturescreenshotRecord {
        __typename
        id
        info {
          title
          updatedAt
          description
          bgClass
          background {
            url
          }
        }
        screenshots {
          url
        }
      }
      ... on TopfeatureRecord {
        __typename
        id
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
          id
          image {
            url
          }
        }
        cssClass
      }
      ... on ProductctaRecord {
        __typename
        id
        title
        description
        cssClass
        screenshots {
          url
        }
      }
      ... on ProductPageRecord {
        __typename
        id
        title
        cssClass
        pages {
          name
          url
          cssClass
          image {
            url
          }
        }
      }
      ... on PriceplanRecord {
        __typename
        id
        info {
          title
          description
          createdAt
          bgClass
        }
        plans {
          name
          description
          price
          purchaseLink
          theme
          icon {
            url
          }
          features {
            active
            feature
            id
          }
        }
      }
      ... on GroupfeaturesectionRecord {
        id
        items {
          id
          text 
          icon {
            url
          }
        }
      }
      ... on HerosectionRecord {
        __typename
        id
        title
        subtitle
        description
        cssClass
        banner {
          url
        }
        actions {
          link {
            label
            target
            href
          }
          cssClass
        }
      }
      ... on FunFactRecord {
        __typename
        id
        fact {
          title
          id
          description
          cssClass
          counter
          icon {
            url
          }
        }
      }
      ... on FolderstructureRecord {
        __typename
        id
        title
        updatedAt
        description
        cssClass
        structure {
          blocks
          links
          value
        }
      }
    }
  }
}
`
