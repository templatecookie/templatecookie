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

const { data: productPrice } = await useProductPrice("34961310")
const product = {
  "id": "17994908",
  "name": "Adlisting - Classified Ads PHP Script",
  "description": "Adlisting is a premium PHP script with minimal, clean, flexible, and structured code. Using the script you can create stunning ad listing websites to buy/sell classified ads and generate revenues.",
  "docsUrl": "/docs/adlisting",
  "previewUrl": "https://adlisting.templatecookie.com/",
  "shortName": "Adlisting",
  "offerRequestCustomization": null,
  "whyChooseUs": true,
  "banner": {
    "url": "https://www.datocms-assets.com/73511/1653484663-00_preview_images.avif"
  },
  "demoBanner": {
    "url": "https://www.datocms-assets.com/73511/1672808809-adlisting-classified-ads-php-script.png"
  },
  "logoCloudsTitle": "",
  "logoCloudsImages": [],
  "seo": {
    "title": "Adlisting - Best Classified Ads PHP Script",
    "description": "Adlisting is a premium classified ads PHP Script with minimal, clean, and structured code. Create your next classified ads website using this fantastic script",
    "image": null
  },
  "showNotice": null,
  "noticeBar": null,
  "actionButtons": [
    {
      "label": "Buy Now",
      "href": "#pricing",
      "target": "",
      "cssClass": ""
    },
    {
      "label": "View Live Demo",
      "href": "https://adlisting.templatecookie.com",
      "target": "_blank",
      "cssClass": "bg-dark hover:bg-secondary"
    },
    {
      "label": "Admin Login",
      "href": "https://adlisting.templatecookie.com/admin/login",
      "target": "_blank",
      "cssClass": "bg-secondary hover:bg-dark"
    }
  ],
  "menuItems": [
    {
      "label": "Features",
      "id": "83436764",
      "href": "#features"
    },
    {
      "label": "Screenshots",
      "id": "83436765",
      "href": "#screenshots"
    },
    {
      "label": "Pricing",
      "id": "84087193",
      "href": "#pricing"
    },
    {
      "label": "Technology We Use",
      "id": "84087194",
      "href": "#technologies"
    }
  ],
  "extraOffer": [],
  "contents": [
    {
      "__typename": "TopfeatureRecord",
      "id": "19299779",
      "sectionId": "features",
      "info": [
        {
          "title": "Explore Adlisting Best Features",
          "description": "Take a look at our classified ads PHP script's best features and why users love the script so much.",
          "bgClass": "",
          "background": null
        }
      ],
      "features": [
        {
          "title": "Category Custom Field",
          "description": "Create different properties for different types of listings on your website built with our Adlisting script. You can customize the properties based on your needs.",
          "cssClass": "",
          "id": "19299780",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1653558188-control.svg"
          }
        },
        {
          "title": "Multiple Language & Currency",
          "description": "Multiple Language feature helps users to transact in any language without any hassle. This feature is beneficial for businesses that operate in multiple languages and have diffrent currencies.",
          "cssClass": "",
          "id": "19299784",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654065377-globesimple.svg"
          }
        },
        {
          "title": "Monthly Subscription & Pricing Plan",
          "description": "Make money by selling subscriptions to recurring users and pricing plans for one-time users! You can easily create, change & manage subscription and pricing plans from the admin panel. ",
          "cssClass": "",
          "id": "19299785",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1653558189-money.svg"
          }
        },
        {
          "title": "Google Map/Mapbox Integration",
          "description": "Map can be extremely useful to show user/item location. Integrate the Map feature with your classified ads marketplace. You can choose map from two different providers, either Google Maps or Mapbox.",
          "cssClass": "",
          "id": "19299781",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654079988-maptrifold.svg"
          }
        },
        {
          "title": "GEO Location Search",
          "description": "Forget the hassle of managing thousands of cities and states, use the Map autocomplete feature to suggest locations when the user types and all the data will be managed by Adlisting application. ",
          "cssClass": "",
          "id": "19299782",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654049722-9-advance-search-filter.svg"
          }
        },
        {
          "title": "8+ Payment Gateway",
          "description": "This feature allows businesses to have greater flexibility when it comes to accepting payments from customers. It makes it super easy to monetize the ad listing website & run the business efficiently.",
          "cssClass": "",
          "id": "19299783",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1653534552-creditcard.svg"
          }
        },
        {
          "title": "Featured Ads",
          "description": "Featured Ads are a great way to increase the visibility of your listing. By featuring your listing in a prominent location on the site, you can ensure that potential customers will see and click",
          "cssClass": "",
          "id": "86921683",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654065593-star.svg"
          }
        },
        {
          "title": "Theme Customization",
          "description": "Tailor the user interface and functionality of a Adlisting to best suit your business. Adlisting can be customized to provide a more efficient and intuitive experience for users.",
          "cssClass": "",
          "id": "86921684",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654066038-circlesthreeplus.svg"
          }
        },
        {
          "title": "Currency Switcher",
          "description": "The Currency Switcher feature can be used to set up a default currency for your website and change the currency in the future without headache",
          "cssClass": "",
          "id": "86921685",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654065100-currencydollarsimple.svg"
          }
        },
        {
          "title": "Watermark on Listing",
          "description": "With this feature, you can add a watermark to your website that will make it harder for someone to copy or steal it. This is a great way to protect your website content.",
          "cssClass": "",
          "id": "86921686",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654049757-4-unlimited-category-sub-category.svg"
          }
        },
        {
          "title": "Customer Email Verification",
          "description": "Customer email verification is a necessary step in any software in order to ensure that a customer's email address is valid and working.",
          "cssClass": "",
          "id": "86921687",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1653557943-browsers-duotone-1.svg"
          }
        },
        {
          "title": "Dark/Light Mode",
          "description": "Dark Mode is a color scheme that uses light-colored text on a dark background. This color scheme is typically used to reduce eye strain and improve readability in low-light conditions.",
          "cssClass": "",
          "id": "86921688",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654066352-spinner.svg"
          }
        },
        {
          "title": "Maintenance Mode",
          "description": "Keep your website under maintenance mode until you are ready win the world! Manage your maintenance mode feature today!",
          "cssClass": "",
          "id": "86921689",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654066051-gearsix.svg"
          }
        },
        {
          "title": "Google ReCAPTCHA on Admin Panel",
          "description": "Use google recaptcha feature to enable bot protection on your website. Make your site sercurity stronger using Google Recaptcha!",
          "cssClass": "",
          "id": "86921690",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654052364-google-recaptcha-on-admin-panel.svg"
          }
        },
        {
          "title": "3rd Party Tool Integration",
          "description": "Do you want to install, Pinterest tag, Facebook pixel, or google analytics? Don't worry, we have just the right feature you need. Introducing Custom JS & CSS Feature",
          "cssClass": "",
          "id": "86921691",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654052349-3rd-party-tool-integration.svg"
          }
        }
      ],
      "cssClass": ""
    },
    {
      "__typename": "FeaturescreenshotRecord",
      "id": "19299802",
      "sectionId": "screenshots",
      "info": [
        {
          "title": "Script Gallery",
          "updatedAt": "2022-12-30T15:22:49+06:00",
          "description": "Take a look at some of the screenshots of our classified ads script. It will give you an idea on how it will look like when you create a website using the Adlisting PHP script.",
          "bgClass": "",
          "background": null
        }
      ],
      "screenshots": [
        {
          "url": "https://www.datocms-assets.com/73511/1658126019-adlisting-full-responsive.png",
          "alt": null
        },
        {
          "url": "https://www.datocms-assets.com/73511/1672812919-39-1.png",
          "alt": null
        },
        {
          "url": "https://www.datocms-assets.com/73511/1672812924-40-1.png",
          "alt": null
        }
      ]
    },
    {
      "__typename": "ExclusivefeatureRecord",
      "id": "40834598",
      "title": "Buyer & Seller Real Time Chat",
      "subtitle": "",
      "description": "A real time chat application feature in a website would allow users to communicate with each other in real time. It would allow the users to get immediate response to questions and concerns. At the end of the day a great way for users to connect with each other play a big impact on business.\n\n\nSome potential features of a real time chat features:\n- Connect with buyers and sellers through messaging.\n- The ability to send and receive instant messages\n- The ability to share files and media",
      "cssClass": "",
      "alignment": "right",
      "image": {
        "url": "https://www.datocms-assets.com/73511/1658295852-messaging.jpg"
      },
      "action": []
    },
    {
      "__typename": "ExclusivefeatureRecord",
      "id": "35615174",
      "title": "Multiple Social Authentication",
      "subtitle": "",
      "description": "The social media login feature allows users to log in to a software application using their social media account credentials. This eliminates the need for users to remember multiple usernames and passwords for different software applications. The social media login feature is a convenient way for users to access their account and is a secure way to login.\n\nAdlisting Supports these social media\n- Google\n- Facebook\n- Twitter\n- Linkedin\n- Github\n- Gitlab\n- Bitbucket",
      "cssClass": "bg-gray-f5",
      "alignment": "left",
      "image": {
        "url": "https://www.datocms-assets.com/73511/1657104661-social-media-log-in-1.png"
      },
      "action": []
    },
    {
      "__typename": "ExclusivefeatureRecord",
      "id": "35615175",
      "title": "Multiple Payment Gateways",
      "subtitle": "",
      "description": "\nThere are lots of payment gateways available a software developer can choose from. Each gateway has its own set of features and benefits, so it is important to select the right one for your business. Some of the most popular payment gateways include PayPal, Stripe, Mollie, Flutterwave, Paystack, Razorpay, Midtrans, Instamojo and SSL Commerz.\n\nMost software programs only offer a single payment gateway. Sometimes this can be a problem for businesses that operate in multiple countries or that need to accept multiple types of payment. Our classified ads script offers multiple payment gateways, which can be extremely helpful for your business.",
      "cssClass": "bg-blue-18",
      "alignment": "left",
      "image": {
        "url": "https://www.datocms-assets.com/73511/1698994957-1658295876-multiple-payment.jpg"
      },
      "action": []
    },
    {
      "__typename": "ExclusivefeatureRecord",
      "id": "35615173",
      "title": "Multiple Language",
      "subtitle": "",
      "description": "Most software programs are designed to function in a single language. However, Adlisting is designed to support multiple languages. This can be a useful feature for businesses that operate in multiple countries or for individuals who speak multiple languages.\n\nMultiple language functionality can be extremely helpful for businesses. It allows the business to reach a wider audience and to communicate more effectively with customers and employees who speak different languages. \n\nFor individuals, the ability to use multiple languages in a software program can be a helpful way to stay connected with friends and family who speak different languages. \n\nIt can also help the businesses and individuals to avoid potential misunderstandings or miscommunications.\n",
      "cssClass": "",
      "alignment": "right",
      "image": {
        "url": "https://www.datocms-assets.com/73511/1698995073-1654159342-multiple-language-1.jpg"
      },
      "action": []
    },
    {},
    {
      "__typename": "FeaturescreenshotRecord",
      "id": "40834623",
      "sectionId": "technologies",
      "info": [
        {
          "title": "Modern Tech Stack",
          "updatedAt": "2023-01-30T15:51:27+06:00",
          "description": "Take a look at the technology we use to build our premium scripts and templates.",
          "bgClass": "",
          "background": null
        }
      ],
      "screenshots": [
        {
          "url": "https://www.datocms-assets.com/73511/1699007350-1658318692-modern-tech-stack-1.jpg",
          "alt": "Adlisting - Classified Ads Script Technology"
        }
      ]
    },
    {
      "__typename": "TestimonialSectionRecord",
      "id": "90914994",
      "title": "Testimonial",
      "sectionId": "Testimonial",
      "description": "Don't just listen to our words, see what our valued customers think about our product.\n\n",
      "testimonials": [
        {
          "id": "90914970",
          "name": "by kytka37 ",
          "role": "From Codecanyon Market",
          "quote": "Great script! I bought it, and I have full support from the developers. The developer answers the question almost immediately. Good job! I look forward to more updates :)\n\n",
          "image": null
        },
        {
          "id": "90914986",
          "name": "by agnewprowp",
          "role": "From Codecanyon Market",
          "quote": "I like this script it's got potential and the support is excellent\n\n",
          "image": null
        }
      ]
    },
    {
      "__typename": "PriceplanRecord",
      "id": "35616351",
      "sectionId": "pricing",
      "info": [
        {
          "id": "35616332",
          "title": "High Quality Product, Affordable Pricing ",
          "description": "We develop high-quality products using modern technologies but still keep the pricing very reasonable. That way we can help more and more people create their dream projects!",
          "createdAt": "2022-07-06T16:58:38+06:00",
          "bgClass": "bg-gray-f0"
        }
      ],
      "plans": [
        {
          "name": "Extended",
          "description": "Extended license permits you to ask and make money from your users. Sourcecode included. This license permits you for 1 domain, purchase more license if you have multiple sites. ",
          "price": parseInt(productPrice?.value[1]?.price),
          "purchaseLink": "https://go.templatecookie.com/adlisting-extended",
          "paddleProductId": "",
          "paddleCheckout": false,
          "features": []
        },
        {
          "name": "Regular",
          "description": "Regular licenses allow you to let users use the platform free of charge. Sourcecode included. This license permits you to have 1 domain; purchase more licenses if you have multiple sites.",
          "price": parseInt(productPrice?.value[0]?.price),
          "purchaseLink": "https://go.templatecookie.com/adlisting-regular",
          "paddleProductId": "",
          "paddleCheckout": false,
          "features": []
        }
      ]
    },
    {
      "__typename": "ProductctaRecord",
      "id": "19299826",
      "title": "Build Your Classified Ads Website Today!",
      "description": "",
      "cssClass": "",
      "screenshots": [
        {
          "url": "https://www.datocms-assets.com/73511/1653712028-blogs.png",
          "alt": null
        },
        {
          "url": "https://www.datocms-assets.com/73511/1653712033-dashboard-ad.png",
          "alt": null
        },
        {
          "url": "https://www.datocms-assets.com/73511/1653712037-dashboard-back-ad.png",
          "alt": null
        },
        {
          "url": "https://www.datocms-assets.com/73511/1653712042-faq.png",
          "alt": null
        },
        {
          "url": "https://www.datocms-assets.com/73511/1653712046-home-ad.png",
          "alt": null
        },
        {
          "url": "https://www.datocms-assets.com/73511/1653712054-pricing.png",
          "alt": null
        }
      ]
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
      href: "https://templatecookie.com" + route.path,
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
