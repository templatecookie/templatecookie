<template>
  <div>
    <footer class="bg-gray-900 mt-20 tc-primary-footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto pt-12 px-4 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8 lg:pt-24" v-if="footer">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8 xl:col-span-1">
            <NuxtImg class="h-10" src="/logo-white.svg" alt="Templatecookie White Logo SVG" />
            <p class="text-base text-gray-400">
              {{ footer.description }}
            </p>
            <div class="flex space-x-6" v-if="socials">
              <a :href="item.url" target="_blank"
                class="text-gray-400 hover:text-gray-300 h-10 w-10 flex justify-center items-center"
                v-for="item in socials" :key="item.name">
                <span class="sr-only">Facebook</span>
                <img :src="item?.icon?.url" :alt="item.name" width="100" />
              </a>
            </div>
          </div>
          <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div v-for="item in footer.menuitems" :key="item.id">
              <h3 class="text-base font-medium text-gray-200">
                {{ item.label }}
              </h3>
              <ul role="list" class="mt-4 space-y-4" v-if="selectedProducts">
                <li v-for="(product, index) in selectedProducts" :key="index">
                  <nuxt-link class="text-base text-gray-400 hover:text-gray-300" :to="product.slug">
                    {{ product.name }}
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/products" class="text-base text-gray-400 group hover:text-gray-100">
                    Free HTML & Figma Templates
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-base font-medium text-gray-200">Get More Done</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li>
                  <nuxt-link to="/elite-support" class="text-base text-gray-400 group hover:text-gray-100">
                    <div>Elite Support</div>
                    <span class="text-xs text-gray-400 group-hover:text-gray-200">
                      Elevate Your Success with Premium Assistance
                    </span>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/hire-us" class="text-base text-gray-400 group hover:text-gray-100">
                    <div>Hire Development Team</div>
                    <span class="text-xs text-gray-400 group-hover:text-gray-200">Transform Your Vision into Reality
                      with Our
                      Expertise.</span>
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/installation-plans" class="text-base text-gray-400 group hover:text-gray-100">
                    <div>Installation Support</div>
                    <!-- <span class="text-xs text-gray-400 group-hover:text-gray-200">Seamless Setup for a Worry-Free Start</span> -->
                    <span class="text-xs text-gray-400 group-hover:text-gray-200">Seamlessly Launch Your Projects with
                      Professional
                      Setup.</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-12 border-t border-white/10 pt-8 sm:mt-16 lg:mt-16 lg:flex lg:items-center lg:justify-center">
          <nav class="-mb-6 columns-2 sm:flex flex-wrap xl:flex-nowrap gap-x-6 lg:gap-x-0 lg:justify-between w-full"
            aria-label="Footer">
            <div class="pb-2">
              <nuxt-link to="/get-support" class="text-sm leading-6 text-gray-400 hover:text-gray-100">
                Create Support Ticket
              </nuxt-link>
            </div>
            <div class="pb-2">
              <nuxt-link to="/docs" class="text-sm leading-6 text-gray-400 hover:text-gray-100">
                Documentation
              </nuxt-link>
            </div>
            <div class="pb-2">
              <a href="https://1.envato.market/EaNJ2X" target="_blank"
                class="text-sm leading-6 text-gray-400 hover:text-gray-100">Codecanyon Profile</a>
            </div>
            <div class="pb-2">
              <nuxt-link to="/blog" class="text-sm leading-6 text-gray-400 hover:text-gray-100">
                Read Our Blog
              </nuxt-link>
            </div>
            <div class="pb-2">
              <nuxt-link to="/privacy-policy" class="text-sm leading-6 text-gray-400 hover:text-gray-100">
                Privacy Policy
              </nuxt-link>
            </div>
            <div class="pb-2">
              <nuxt-link to="/refund-policy" class="text-sm leading-6 text-gray-400 hover:text-gray-100">
                Refund Policy
              </nuxt-link>
            </div>
            <div class="pb-2">
              <nuxt-link to="/terms" class="text-sm leading-6 text-gray-400 hover:text-gray-100">
                Terms & Condition
              </nuxt-link>
            </div>
          </nav>
        </div>
        <div class="mt-12 border-t border-white/10 py-6 md:flex md:items-center md:justify-between">
          <div class="md:order-2">
            <NuxtImg class="h-[37px] w-[390px]" src="/images/stripe-payment.svg"
              alt="Templatecookie Payment Gateway Images" />
          </div>
          <p class="mt-8 text-sm text-gray-400 md:order-3 md:mt-0">
            &copy; {{ new Date().getFullYear() }} All Rights Reserved -
            Templatecookie
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const { data, social } = defineProps(["data", "social"]);
  const footer = ref([]);
  const socials = ref([]);
  footer.value = data;
  socials.value = social;
  const selectedProducts =
    [
      {
        "name": "Job Portal Script: Maximize Your Earning Potential with Jobpilot",
        "slug": "demo/jobpilot-job-portal-script-php-laravel",
        "shortName": "Jobpilot",
        "thumbnail": {
          "url": "https://www.datocms-assets.com/73511/1669616355-jobpilot.png"
        },
        "description": "Jobpilot is a  modern and high-quality Job Portal Script that offers a wealth of features and tools to help you create a successful job portal website."
      },
      {
        "name": "Schooling - The Ultimate PHP Script for Efficient School Management",
        "slug": "demo/schooling-school-management-system-script",
        "shortName": "Schooling",
        "thumbnail": {
          "url": "https://www.datocms-assets.com/73511/1669616359-schooling.png"
        },
        "description": "Efficiently manage your school with Schooling. The all-in-one PHP script for schools with multi-language support, payment gateway integration, and powerful academic management features. Try it now."
      },
      {
        "name": "Adlisting - Classified Ads PHP Script",
        "slug": "demo/adlisting-classified-ads-script",
        "shortName": "Adlisting",
        "thumbnail": {
          "url": "https://www.datocms-assets.com/73511/1671949568-adlisting.jpg"
        },
        "description": "Adlisting is a premium PHP script with minimal, clean, flexible, and structured code. Using the script you can create stunning ad listing websites to buy/sell classified ads and generate revenues."
      }
    ]
</script>
