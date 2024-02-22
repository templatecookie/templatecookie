<template>
  <div>
    <div class="bg-gray-f0 py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="text-center max-w-4xl m-auto pt-6">
          <h1 class="text-dark text-5xl font-semibold mb-6 lg:mb-9 tracking-ls02">
            We're here to help!
          </h1>
          <p class="text-dark text-lg mb-6 lg:mb-9 max-w-xl m-auto font-light">
            Our customer support team is available to answer your questions and
            help you with whatever you need.
          </p>
        </div>
      </div>
    </div>
    <!-- end -->
    <div class="py-12">
      <div class="flex justify-center">
        <div class="mx-auto max-w-7xl px-4 sm:px-6">
          <div class="flex gap-8 flex-wrap lg:flex-nowrap mb-8">
            <div class="flex-grow-0 w-full lg:w-1/2 lg:pr-10">
              <div class="rounded-lg mb-6 border overflow-hidden" :class="section.color == 'red'
                  ? 'bg-warn1ng border-red-600'
                  : `bg-${section.color}-50 border-${section.color}-600`
                " v-for="(section, index) in supportFeatures" :key="index">
                <h3 v-if="section.color == 'red'" class="py-4 px-6 text-white bg-red-600 border-red-600"
                  :class="`bg-${section.color}-600`">
                  {{ section.name }}
                </h3>
                <h3 v-else class="py-4 px-6 text-white" :class="`bg-${section.color}-600`">
                  {{ section.name }}
                </h3>
                <hr />
                <ul class="py-4 px-6 gap-2 flex flex-col">
                  <li class="flex gap-2" :class="`text-${section.color}-600`" v-for="(item, itemIndex) in section.items"
                    :key="itemIndex">
                    <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      fill="currentColor" viewBox="0 0 256 256">
                      <rect width="256" height="256" fill="none" />
                      <polyline points="172 104 113.3 160 84 132" fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="16" />
                      <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="16" />
                    </svg>
                    <span class="text-gray-800"> {{ item.title }} </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full lg:w-1/2">
              <div class="py-4 px-8 bg-red-200 w-full text-center text-gray-800 rounded mb-6">
                We are available from Monday to Friday
                <strong>9 AM to 5 PM (GMT +6)</strong>
              </div>
              <div id="hubspotForm" v-once />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const title = "Get Customer Support - Templatecookie.com";
const description =
  "Having trouble with our products? Get in touch and create a support ticket";
const supportFeatures = [
  {
    name: "Find solution quicker by following steps below.",
    color: "blue",
    items: [
      {
        title:
          "Check our documentation online for the answer to your question.",
      },
      {
        title: "Support query need to be within Envato item support policy.",
      },
      {
        title:
          "You should maintain only one support ticket at a time. Creating multiple ticket can cause unexpected delays.",
      },
      {
        title:
          "Ticket should provide as much issue details as possible such as screenshot, video, login access, URL etc",
      },
    ],
  },
  {
    name: "Item Support Includes",
    color: "green",
    items: [
      {
        title: "Availability of the author to answer questions",
      },
      {
        title: "Answering technical questions about item’s features",
      },
      {
        title: "Assistance with reported bugs and issues",
      },
    ],
  },
  {
    name: "Does not includes",
    color: "red",
    items: [
      {
        title: "Customization services",
      },
      {
        title: "Installation services",
      },
    ],
  },
];
const route = useRoute();

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://js.hsforms.net/forms/v2.js";
  document.body.appendChild(script);
  script.addEventListener("load", () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "22174697",
        formId: "3d6aa885-36d6-4ede-99d0-d53b25f32bc2",
        target: "#hubspotForm",
      });
    }
  });
});
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
  ogImage: "/social-meta.png",
});

defineOgImage({
  title: title,
  description: description,
});
</script>
