// Product Demo Page Query
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
    demoBanner {
      url
    }
    logoCloudsTitle
    logoCloudsImages {
      url
    }
    seo{
      title
      description
      image {
        url
      }
    }
    contents {
      ... on TestimonialSectionRecord {
        __typename
        id
        title
        description
        testimonials{
          id
          name
          role
          quote
          image {
            url
          }
        }
      }
      ... on TechnologySectionRecord {
        __typename
        id
        title
        description
        technologies{
          id
          name
          description
          icon {
            url
          }
        }
      }
      ... on ExclusivefeatureRecord {
        __typename
        id
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
        id
        title
        description
        cssClass
        screenshots {
          url
        }
      }
      ... on PriceplanRecord {
        __typename
        id
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
            name
            id
          }
        }
      }
      ... on HerosectionRecord {
        __typename
        id
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
    }
  }
}
`
