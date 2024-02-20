<template>
  <div>
    <demo-header :product="product" v-if="product" />
    <demo-product-hero :product="product" v-if="product" />
    <demo-why-choose-our-product :product="product" v-if="product?.whyChooseUs" />
    <div v-for="(section, index) in product?.contents" :key="index">
      <div v-if="section.__typename == 'ExclusivefeatureRecord'">
        <demo-exclusive-feature :data="section" />
      </div>
      <div v-if="section.__typename == 'FeaturescreenshotRecord'">
        <demo-product-screenshots :data="section" />
      </div>
      <div v-if="section.__typename == 'TopfeatureRecord'">
        <demo-product-top-features :data="section" />
      </div>
      <div v-if="section.__typename == 'ProductctaRecord'">
        <demo-call-to-action :section="section" :product="product" />
      </div>
      <div v-if="section.__typename == 'PriceplanRecord'">
        <PricingSection :plans="section.plans" :id="section.sectionId ? section.sectionId : section.id"
          :info="section.info[0]" :extra-offer="product.extraOffer"
          :request-customization="product.offerRequestCustomization" />
      </div>
      <div v-if="section.__typename == 'TestimonialSectionRecord'">
        <demo-testimonial-section :data="section" />
      </div>
      <div v-if="section.__typename == 'TechnologySectionRecord'">
        <demo-technology-section :data="section" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  layout: "empty",
});
const { data: productPrice } = await useProductPrice("35955469")
const product = {
  "id": "128748729",
  "name": "Schooling - The Ultimate PHP Script for Efficient School Management",
  "description": "Efficiently manage your school with Schooling. The all-in-one PHP script for schools with multi-language support, payment gateway integration, and powerful academic management features. Try it now.",
  "docsUrl": "/docs/schooling/",
  "previewUrl": "https://schooling.templatecookie.com/",
  "shortName": "Schooling",
  "offerRequestCustomization": true,
  "whyChooseUs": true,
  "banner": {
    "url": "https://www.datocms-assets.com/73511/1690592181-preview-image-1.png"
  },
  "demoBanner": {
    "url": "https://www.datocms-assets.com/73511/1680017497-shikkha-1.png"
  },
  "logoCloudsTitle": "6 Different Payment Gateways Integrated",
  "logoCloudsImages": [
    {
      "url": "https://www.datocms-assets.com/73511/1673600256-midtrans.svg",
      "alt": 'midtrans'
    },
    {
      "url": "https://www.datocms-assets.com/73511/1673600260-mollie-1.svg",
      "alt": 'mollie'
    },
    {
      "url": "https://www.datocms-assets.com/73511/1673600263-paypal.svg",
      "alt": "paypal"
    },
    {
      "url": "https://www.datocms-assets.com/73511/1673600266-razorpay_logo.svg",
      "alt": "razorpay"
    },
    {
      "url": "https://www.datocms-assets.com/73511/1673600269-stripe.svg",
      "alt": "stripe"
    },
    {
      "url": "https://www.datocms-assets.com/73511/1673600364-flutterwave.png",
      "alt": "flutterwave"
    },
    {
      "url": "https://www.datocms-assets.com/73511/1673600370-instamojo.png",
      "alt": "instamojo"
    },
    {
      "url": "https://www.datocms-assets.com/73511/1673600375-sslcommerz.png",
      "alt": "sslcommerz"
    }
  ],
  "seo": {
    "title": "Schooling - The Ultimate PHP Script for Efficient School Management ",
    "description": "Schooling is an all-in-one PHP script for School Management with multi-language support, payment gateway integration, and powerful academic management features",
    "image": null
  },
  "showNotice": false,
  "noticeBar": {
    "blocks": [],
    "links": [],
    "value": {
      "schema": "dast",
      "document": {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "span",
                "value": ""
              }
            ]
          }
        ]
      }
    }
  },
  "actionButtons": [
    {
      "label": "Try Live Demo",
      "href": "https://schooling.templatecookie.com/",
      "target": "_blank",
      "cssClass": ""
    },
    {
      "label": "View Pricing",
      "href": "#pricing",
      "target": "",
      "cssClass": ""
    }
  ],
  "menuItems": [
    {
      "label": "Top Features",
      "id": "133264624",
      "href": "#features"
    },
    {
      "label": "Pricing",
      "id": "133264625",
      "href": "#pricing"
    },
    {
      "label": "Testimonials",
      "id": "147461428",
      "href": "#testimonials"
    }
  ],
  "extraOffer": [],
  "contents": [
    {
      "__typename": "TopfeatureRecord",
      "id": "133264538",
      "sectionId": "features",
      "info": [
        {
          "title": "Top Features of Schooling",
          "description": "",
          "bgClass": "",
          "background": null
        }
      ],
      "features": [
        {
          "title": "Multi Language Supported",
          "description": "Ability to switch between multiple languages for ease of use by different users.",
          "cssClass": "",
          "id": "133264573",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654049751-2-multiple-language.svg"
          }
        },
        {
          "title": "Multi Currency",
          "description": "Support for multiple currencies to facilitate payments from different regions.",
          "cssClass": "",
          "id": "133264574",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1653558189-money.svg"
          }
        },
        {
          "title": "6 Different Payment Gateways",
          "description": " Integration with six different payment gateway options for convenient transactions.",
          "cssClass": "",
          "id": "133264575",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1653534552-creditcard.svg"
          }
        },
        {
          "title": "Recurring Admission Plan",
          "description": "Option for recurring admission payment plans for parents and students.",
          "cssClass": "",
          "id": "133264576",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1653558194-updates.svg"
          }
        },
        {
          "title": "One time & Recurring Invoice",
          "description": " Creation of one-time and recurring invoices to streamline payment management.",
          "cssClass": "",
          "id": "133264577",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654049754-3-multiple-payment-gateway.svg"
          }
        },
        {
          "title": "5 User Types",
          "description": " Different user types (admin, teacher, student, parent, accountant) for distinct access and functionality.",
          "cssClass": "",
          "id": "133264578",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654065392-users.svg"
          }
        },
        {
          "title": "Full Academic Management",
          "description": "Comprehensive management of academic activities, including scheduling, grading, and attendance.",
          "cssClass": "",
          "id": "133264579",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1680059490-student-education.svg"
          }
        },
        {
          "title": "Student Result Card",
          "description": "Creation and access of student result cards for academic progress tracking.",
          "cssClass": "",
          "id": "133264580",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1680059584-certificate-card.svg"
          }
        },
        {
          "title": "Live Class Schedule",
          "description": "Display of live class schedule for students and teachers.",
          "cssClass": "",
          "id": "133264581",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654065098-calendar.svg"
          }
        },
        {
          "title": "Online Class with Zoom",
          "description": " Conducting online classes with Zoom integration for remote learning.",
          "cssClass": "",
          "id": "133264582",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1680059656-video-play.svg"
          }
        },
        {
          "title": "Student & Teacher Group Chat",
          "description": " Facilitation of group chat between students and teachers for communication and collaboration",
          "cssClass": "",
          "id": "133264583",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1680059815-group-chat.svg"
          }
        },
        {
          "title": "Assignment with File Sharing",
          "description": "Assignment submission and file sharing between teachers and students.",
          "cssClass": "",
          "id": "133264584",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1680059820-notebook-assignment.svg"
          }
        },
        {
          "title": "PDF & Excel Reports",
          "description": "Generation of reports in PDF and Excel formats for easy data analysis and record-keeping.",
          "cssClass": "",
          "id": "133264585",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1680059851-file-xls-duotone.svg"
          }
        },
        {
          "title": "Online Student Admission",
          "description": "Online admission process for new students to streamline enrollment.",
          "cssClass": "",
          "id": "133264586",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1680059954-user-circle-plus-duotone.svg"
          }
        },
        {
          "title": "Dark Mode Supported",
          "description": "Option to switch to dark mode for a more comfortable and less eye-straining user interface.",
          "cssClass": "",
          "id": "133264587",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1680059818-moon-stars-dark-mode.svg"
          }
        }
      ],
      "cssClass": ""
    },
    {
      "__typename": "TestimonialSectionRecord",
      "id": "147461427",
      "title": "Testimonials",
      "sectionId": "testimonials",
      "description": "Don't just listen to our words, see what our valued customers think about our product scripts and templates.\n",
      "testimonials": [
        {
          "id": "90914894",
          "name": "by Brandego_Media",
          "role": "From Codecanyon Market",
          "quote": "The code is well organized and the application is lightweight. Customer support is also very good. I would recommend this purchase!",
          "image": null
        },
        {
          "id": "90914909",
          "name": "by rks784262",
          "role": "From Codecanyon Market",
          "quote": "This script is a true masterpiece. Exceptionally good design and UI. Plenty of features for a reasonable price. Great value for money. The support team is also responsive. Keep improving. Thank you",
          "image": null
        },
        {
          "id": "90914865",
          "name": "by nursahal00 ",
          "role": "From Codecanyon Market",
          "quote": "templatecookie is awesome, has great customer service, is a knowledgeable and great personality. Thank you for the amazing support!",
          "image": null
        }
      ]
    },
    {
      "__typename": "PriceplanRecord",
      "id": "147461435",
      "sectionId": "pricing",
      "info": [
        {
          "id": "147461432",
          "title": "High Quality Product, Affordable Pricing",
          "description": "We develop high-quality products using modern technologies but still keep the pricing very reasonable. That way we can help more and more people create their dream projects!",
          "createdAt": "2023-04-29T08:42:35+06:00",
          "bgClass": ""
        }
      ],
      "plans": [
        {
          "name": "Extended",
          "description": "Extended license permits you to ask and make money from your users. Sourcecode included. This license permits you for 1 domain, purchase more license if you have multiple sites. ",
          "price": parseInt(productPrice?.value[1]?.price),
          "purchaseLink": "https://go.templatecookie.com/schooling-extended",
          "paddleProductId": "",
          "paddleCheckout": false,
          "features": []
        },
        {
          "name": "Regular",
          "description": "Regular licenses allow you to let users use the platform free of charge. Sourcecode included. This license permits you to have 1 domain; purchase more licenses if you have multiple sites.",
          "price": parseInt(productPrice?.value[0]?.price),
          "purchaseLink": "https://go.templatecookie.com/schooling-regular",
          "paddleProductId": "",
          "paddleCheckout": false,
          "features": []
        }
      ]
    },
    {
      "__typename": "ProductctaRecord",
      "id": "133556679",
      "title": "Build Your Awesome School Management System Today!",
      "description": "",
      "cssClass": "",
      "screenshots": []
    }
  ]
};
const route = useRoute();
const { slug } = route?.params;
const title = product?.seo?.title ?? product?.name;
const description =
  product?.seo?.description ?? product?.description;
const image = product?.banner?.url ?? data?.image;

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://www.templatecookie.com" + route.path,
    },
  ],
});

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: image,
});

defineOgImage({
  title: title,
  description: description,
  component: "Projects",
});
</script>

<style lang="scss" scoped>
/* animation */
.slider-full {
  animation: scroll 26s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-250px * 7));
  }
}

/* swiper single silder */
.single-slider {

  .swiper-button-prev,
  .swiper-button-next {
    top: calc(50% - 15px);
    transform: translateY(-50%);
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    content: none;
  }
}

.tab-content-wrap {
  &.active {
    background-color: #0b63e5;

    h3,
    p {
      color: white;
    }
  }
}
</style>
