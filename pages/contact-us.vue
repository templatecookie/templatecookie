<template>
  <div>
    <contact-hero-section />
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none"
        >
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 class="text-3xl font-bold tracking-tight text-gray-900">
                Get in touch
              </h2>
              <p class="mt-4 leading-7 text-gray-600">
                Celebrate Your Digital Success with Us. Reach out for questions
                or assistance. We're here to help you thrive in the digital
                world.
              </p>
            </div>
            <div
              class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8"
            >
              <div class="rounded-2xl bg-gray-50 p-10">
                <h3 class="text-base font-semibold leading-7 text-gray-900">
                  Email
                </h3>
                <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt class="sr-only">Support</dt>
                    <dd>
                      <a
                        class="font-semibold text-primary"
                        href="mailto:support@templatecookie.com"
                        >support@templatecookie.com</a
                      >
                    </dd>
                  </div>
                  <div class="mt-1">
                    <dt class="sr-only">Phone number</dt>
                    <dd>Customer Support</dd>
                  </div>
                </dl>
              </div>
              <div class="rounded-2xl bg-gray-50 p-10">
                <h3 class="text-base font-semibold leading-7 text-gray-900">
                  Phone
                </h3>
                <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt class="sr-only">Email</dt>
                    <dd>
                      <a
                        class="font-semibold text-primary"
                        href="https://wa.me/8801625592566"
                      >
                        880 1625 592-566
                      </a>
                    </dd>
                  </div>
                  <div class="mt-1">
                    <dt class="sr-only">Phone number</dt>
                    <dd>Sales Query</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div class="!mt-16 flex pt-16">
            <div class="flex gap-x-6">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary"
              >
                <LightBulbIcon
                  class="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 class="text-base font-semibold leading-7 text-gray-900">
                  Product Roadmap
                </h3>
                <p class="mt-2 leading-7 text-gray-600">
                  Explore the future of our offerings. Check out our Product Roadmap to see what exciting features and innovations we have in store for you.
                </p>
                <p class="mt-4">
                  <a href="#"
                    class="text-sm font-semibold leading-6 text-primary">
                     View Roadmap <span aria-hidden="true">&rarr;</span>
                  </a>
                </p>
              </div>
            </div>
            <div class="flex gap-x-6">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary"
              >
                <BriefcaseIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 class="text-base font-semibold leading-7 text-gray-900">
                  Hire Us
                </h3>
                <p class="mt-2 leading-7 text-gray-600">
                  Ready to bring your ideas to life? Discover how our expert team can transform your vision into reality. Hire us for tailored solutions.
                </p>
                <p class="mt-4">
                  <a
                    href="#"
                    class="text-sm font-semibold leading-6 text-primary"
                    >
                    Get Started
                    <span aria-hidden="true">&rarr;</span>
                    </a>
                </p>
              </div>
            </div>
            <div class="flex gap-x-6">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary"
              >
                <BookOpenIcon
                  class="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 class="text-base font-semibold leading-7 text-gray-900">
                  Product Documentation
                </h3>
                <p class="mt-2 leading-7 text-gray-600">
                  Access comprehensive documentation for our products. Learn how to make the most of our offerings with detailed guides and resources.
                </p>
                <p class="mt-4">
                  <a href="#"
                    class="text-sm font-semibold leading-6 text-primary">
                      Explore Documentation
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LightBulbIcon, BriefcaseIcon, BookOpenIcon } from "@heroicons/vue/24/outline";
const title =
  "Contact Us | Templatecookie - Get in Touch with Your Digital Partner";
const description =
  "Have questions or need assistance? Contact Templatecookie, your digital partner. We're here to help you succeed. Reach out today.";

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: "/social-meta.png",
});

const route = useRoute();
useHead({
  link: [
    {
      rel: "canonical",
      href: "https://templatecookie.com" + route.path,
    },
  ],
});

defineOgImage({
  title: title,
  description: description,
});
</script>

<style></style>
