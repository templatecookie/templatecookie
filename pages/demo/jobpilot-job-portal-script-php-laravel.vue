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
const { data: productPrice } = await useProductPrice("37897822")
const product = {
  "id": "18221116",
  "name": "Job Portal Script: Maximize Your Earning Potential with Jobpilot",
  "description": "Jobpilot is a  modern and high-quality Job Portal Script that offers a wealth of features and tools to help you create a successful job portal website.",
  "docsUrl": "/docs/jobpilot/get-started/introduction",
  "previewUrl": "https://jobpilot.templatecookie.com/",
  "shortName": "Jobpilot",
  "offerRequestCustomization": true,
  "whyChooseUs": true,
  "banner": {
    "url": "https://www.datocms-assets.com/73511/1653553730-jobpilot-job-portal-1.png"
  },
  "demoBanner": {
    "url": "https://www.datocms-assets.com/73511/1691731577-detail-page_header-image.png"
  },
  "logoCloudsTitle": "9 Diffrent Payment Gateway's Integrated",
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
    "title": "Jobpilot: The Ultimate Job Portal Script ",
    "description": "Discover the Jobpilot PHP Laravel Script, a high-quality Job Portal Script designed to connect job seekers and employers.",
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
      "href": "https://jobpilot.templatecookie.com",
      "target": "_blank",
      "cssClass": "bg-dark hover:bg-secondary"
    },
    {
      "label": "Admin Login",
      "href": "https://jobpilot.templatecookie.com/admin/login",
      "target": "_blank",
      "cssClass": "bg-secondary hover:bg-dark"
    }
  ],
  "menuItems": [
    {
      "label": "Features",
      "id": "82051217",
      "href": "#features"
    },
    {
      "label": "Pricing",
      "id": "82051218",
      "href": "#pricing"
    },
    {
      "label": "Testimonials",
      "id": "82051219",
      "href": "#testimonials"
    },
    {
      "label": "Script Gallery",
      "id": "82051220",
      "href": "#screenshots"
    },
    {
      "label": "Tech Stack",
      "id": "82051221",
      "href": "#technologies"
    }
  ],
  "extraOffer": [
    {
      "title": "Buy our Figma Template",
      "description": "Create a sleek job board website with Jobpilot Figma template. It has customizable components and pre-designed pages to match your brand. Affordable and perfect for recruitment agencies and businesses. Buy now and start creating your dream job board website!\n\n\n\n",
      "state": true,
      "label": "Purchase Figma Template",
      "href": "https://templatecookie.gumroad.com/l/Jobpilot"
    }
  ],
  "contents": [
    {
      "__typename": "TopfeatureRecord",
      "id": "19323354",
      "sectionId": "features",
      "info": [
        {
          "title": "Jobpilot Core Features",
          "description": "Jobpilot is a complete job portal script built on the PHP Laravel Framework. You can create high-quality Job Portal website using this highly customizable & 100% responsive PHP script. Jobpilot is more than just php script; it's a complete solution for creating a high-quality job portal website. Let's delve into the core features that make Jobpilot a standout choice",
          "bgClass": "",
          "background": null
        }
      ],
      "features": [
        {
          "title": "Multiple Countries, States, & Cities",
          "description": "This feature allows users to search for jobs in multiple countries, states, and cities simultaneously. It makes it easy for users to find jobs in their desired locations.",
          "cssClass": "",
          "id": "19323344",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654079988-maptrifold.svg"
          }
        },
        {
          "title": "Build With PHP, MySQL, and Laravel",
          "description": "This job board script is built using PHP, MySQL, and Laravel. It has a wide range of features that make it extremely convenient for users to manage the job board.",
          "cssClass": "",
          "id": "19323345",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654080133-wrench.svg"
          }
        },
        {
          "title": "Multiple Language",
          "description": "Our job portal template provides multiple language support so that people from all over the world can access it. Users can choose to view the site in their preferred language.",
          "cssClass": "",
          "id": "19323346",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654080124-lightning.svg"
          }
        },
        {
          "title": "Social & Email Authentication",
          "description": "Websites that offer social and email authentication functionality make it easy for users to log in and access the site. This also helps reduce the chances of user data being compromised.",
          "cssClass": "",
          "id": "19323347",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654080120-globe.svg"
          }
        },
        {
          "title": "Job Alerts, Saved & Shortlisted Jobs",
          "description": "With these features, job seekers can easily keep track of their job search progress and receive updates on new job postings that match their criteria.",
          "cssClass": "",
          "id": "19323348",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654080114-briefcase.svg"
          }
        },
        {
          "title": "Shortlisted, Saved & Hired Application",
          "description": "These features make it easy for employers to keep track of their hiring process and make sure that they are not missing out on any good candidates.",
          "cssClass": "",
          "id": "19323349",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654080131-usercircle.svg"
          }
        },
        {
          "title": "Front-end & Back-end Dashboard",
          "description": "The front-end is designed to be user-friendly and easy to navigate. The backend dashboard provides administrators with a powerful tool for managing the website and its users with ease.",
          "cssClass": "",
          "id": "19323350",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654080128-stack.svg"
          }
        },
        {
          "title": "Employer & Candidate Profile",
          "description": "Our job board template has different profile options for employers & candidates so that they can easily find each other and connect for the right job opportunity.",
          "cssClass": "",
          "id": "19323351",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654080122-identificationcard.svg"
          }
        },
        {
          "title": "Company Account Setup",
          "description": "This job portal script script offers employers to create accounts easily and post job openings. The intuitive system will allow companies to create and manage their accounts easily and efficiently.",
          "cssClass": "",
          "id": "19323352",
          "image": {
            "url": "https://www.datocms-assets.com/73511/1654080118-crown.svg"
          }
        }
      ],
      "cssClass": ""
    },
    {
      "__typename": "TestimonialSectionRecord",
      "id": "81570529",
      "title": "What People Say About Our Scripts & Templates",
      "sectionId": "testimonials",
      "description": "Don't just listen to our words, see what our valued customers think about our product.",
      "testimonials": [
        {
          "id": "81570525",
          "name": "By MitchOnline ",
          "role": "From Envato Market",
          "quote": "This script is fantastic, great design, and is easy to use. Hope for more updates in the close future.",
          "image": null
        },
        {
          "id": "81570526",
          "name": "By imtyas_2104",
          "role": "From Envato Market",
          "quote": "Awesome features, beautiful design fully responsive. Nice and clean employer and candidate dashboard. Multiple social login methods. Featured and highlighted job options for the employer. Multiple payment methods. The templatecookie team is very professional and supportive. I had a great experience. whenever I had any problem their executive was always there to help. Thanks templatecookie, looking for more products from you.",
          "image": null
        },
        {
          "id": "81570527",
          "name": "by harishprabhutpr ",
          "role": "From Envato Market",
          "quote": "Happy I've gone with Jobpilot! Great support from Zakir, they've been kind enough to take my suggestions into consideration in their new updates! Great product quality!",
          "image": null
        },
        {
          "id": "81570528",
          "name": "by mltinio ",
          "role": "From Envato Market",
          "quote": "The author is very professional and responsive to all support queries. The script is well coded and easy to understand.\n\n",
          "image": null
        }
      ]
    },
    {
      "__typename": "TechnologySectionRecord",
      "id": "81570516",
      "title": "Technologies We Used To Build The Job Portal Script",
      "sectionId": "technologies",
      "description": "We used modern technologies to make the job portal template.We ensured that the product is high quality and meet the deamands of the users perfectly.",
      "technologies": [
        {
          "id": "53222576",
          "name": "Bootstrap",
          "description": "HTML5 Bootstrap Templates",
          "icon": {
            "url": "https://www.datocms-assets.com/73511/1673324460-technology-logo-bootstrap.svg"
          }
        },
        {
          "id": "17963998",
          "name": "Vue.js",
          "description": "",
          "icon": {
            "url": "https://www.datocms-assets.com/73511/1673324488-technology-logo-vuejs.svg"
          }
        },
        {
          "id": "17963997",
          "name": "Laravel",
          "description": "",
          "icon": {
            "url": "https://www.datocms-assets.com/73511/1673324472-technology-logo-laravel.svg"
          }
        },
        {
          "id": "81570512",
          "name": "Figma",
          "description": "",
          "icon": {
            "url": "https://www.datocms-assets.com/73511/1672024150-figma.svg"
          }
        },
        {
          "id": "81570513",
          "name": "MySQL",
          "description": "",
          "icon": {
            "url": "https://www.datocms-assets.com/73511/1672024161-mysql.svg"
          }
        },
        {
          "id": "81570514",
          "name": "Nuxt.js",
          "description": "",
          "icon": {
            "url": "https://www.datocms-assets.com/73511/1672024173-nuxt.svg"
          }
        },
        {
          "id": "81570515",
          "name": "Tailwind CSS",
          "description": "",
          "icon": {
            "url": "https://www.datocms-assets.com/73511/1672024196-tailwindcss.svg"
          }
        }
      ]
    },
    {
      "__typename": "PriceplanRecord",
      "id": "20799103",
      "sectionId": "pricing",
      "info": [
        {
          "id": "20799082",
          "title": "High Quality Product, Affordable Pricing",
          "description": "We develop high-quality products using modern technologies but still keep the pricing very reasonable. That way we can help more and more people create their dream projects!",
          "createdAt": "2022-06-02T11:17:24+06:00",
          "bgClass": ""
        }
      ],
      "plans": [
        {
          "name": "Extended",
          "description": "Extended license permits you to ask and make money from your users. Sourcecode included. This license permits you for 1 domain, purchase more license if you have multiple sites. ",
          "price": parseInt(productPrice?.value[1]?.price),
          "purchaseLink": "https://go.templatecookie.com/jobpilot-extended",
          "paddleProductId": "",
          "paddleCheckout": false,
          "features": []
        },
        {
          "name": "Regular",
          "description": "Regular licenses allow you to let users use the platform free of charge. Sourcecode included. This license permits you to have 1 domain; purchase more licenses if you have multiple sites.",
          "price": parseInt(productPrice.value[0]?.price),
          "purchaseLink": "https://go.templatecookie.com/jobpilot-regular",
          "paddleProductId": "",
          "paddleCheckout": false,
          "features": []
        }
      ]
    },
    {
      "__typename": "ProductctaRecord",
      "id": "19667671",
      "title": "Create Your Dream Job Portal Website Today",
      "description": "",
      "cssClass": "",
      "screenshots": [
        {
          "url": "https://www.datocms-assets.com/73511/1654146536-15.jpg",
          "alt": null
        },
        {
          "url": "https://www.datocms-assets.com/73511/1654146531-14.jpg",
          "alt": "Jop portal website payment interface at a glance"
        },
        {
          "url": "https://www.datocms-assets.com/73511/1699007441-1654146527-13-1.jpg",
          "alt": "Job portal php laravel script iconic features"
        },
        {
          "url": "https://www.datocms-assets.com/73511/1654146522-11.jpg",
          "alt": "Job portal website interface at a glance"
        },
        {
          "url": "https://www.datocms-assets.com/73511/1654146516-10.jpg",
          "alt": "A complete Job Portal script called  jobpilot"
        }
      ]
    }
  ]
};
const route = useRoute();
const { slug } = route?.params;
const title = product?.seo?.title ?? product?.name;
const description = product?.seo?.description ?? product?.description;
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
