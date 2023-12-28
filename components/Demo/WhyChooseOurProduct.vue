<template>
  <section class="py-[5rem]">
    <div class="mb-8 mx-auto max-w-7xl px-4 text-center">
      <h4
        class="mt-2 pb-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-10 after:bg-no-repeat after:w-full after:left-0 after:bottom-5 after:content-[url('~/assets/images/Underline.png')] after:absolute relative"
      >
        Why choose our product?
      </h4>
      <p class="text-xl text-gray-600">
        Experience the power of innovation, efficiency, and success with
        <b>{{ product.shortName }}</b>
      </p>
    </div>
    <div
      class="mx-auto max-w-7xl flex flex-wrap gap-[6rem] items-center pt-[2rem] pb-[3rem] px-6 lg:px-0"
    >
      <div
        class="max-w-full lg:max-w-[550px] hidden lg:inline"
        data-aos="zoom-in"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <NuxtImg
          src="/images/why-choose-us.png"
          alt="why choose us img"
          class="w-full"
        />
      </div>
      <div class="flex-1">
        <dl class="divide-y divide-y-gray-100 space-y-4">
          <div
            class="flex items-start py-3 gap-2 group"
            v-for="(item, index) in items"
            :key="index"
            data-aos="fade-down"
            :data-aos-delay="100 * index"
          >
            <div
              class="flex items-center justify-center rounded-lg bg-blue-50 h-[40px] w-[40px] font-bold group-hover:bg-primary group-hover:text-white text-primary"
              v-html="item.icon"
            />
            <div class="space-y-2">
              <h4 class="text-2xl font-medium leading-[1] text-gray-900">
                {{ item.name }}
              </h4>
              <p class="text-base text-gray-800 font-medium max-w-[500px]">
                {{ item.description }}
              </p>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      items: [
        {
          name: "Make money",
          description: `Maximize your earning potential with ${this.product.shortName}. Our innovative features and tools allow you to make money easily and efficiently`,
          icon: `<svg class="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>`,
        },
        {
          name: "Friendly support",
          description:
            "Our dedicated team is always here to help you every step of the way.",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
          </svg>`,
        },
        {
          name: "Premium Customization",
          description:
            "Personalize your experience with our advanced customization options.",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
          </svg>
          `,
        },
        {
          name: "Secure by default",
          description:
            "Your data and transactions are protected with the highest security measures.",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          `,
        },
        {
          name: "Built for speed and scalability",
          description:
            "Enjoy fast and seamless performance, even as your business grows.",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
          </svg>
          `,
        },
        {
          name: "Beautiful User Interface",
          description:
            "Effortlessly navigate our intuitive and user-friendly platform.",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
          </svg>
          `,
        },
      ],
    };
  },
};
</script>

<style></style>
