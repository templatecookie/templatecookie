<template>
  <div>
    <div class="bg-gray-f0 py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="text-center max-w-4xl m-auto pt-6">
          <h1
            class="text-dark text-5xl font-semibold mb-6 lg:mb-9 tracking-ls02"
          >
            Privacy Policy
          </h1>
        </div>
      </div>
    </div>
    <!-- end -->
    <div class="py-12">
      <div class="flex justify-center">
        <div class="max-w-2xl mx-auto px-4 py-8 sm:px-6">
          <h2 class="text-2xl font-bold mb-4">Privacy Policy</h2>
          <p class="mt-2 text-gray-600">Last updated: {{ currentDate }}</p>
          <p class="mt-4">
            Templatecookie ("us", "we", or "our") operates
            https://templatecookie.com (the "Site"). This page informs you of
            our policies regarding the collection, use and disclosure of
            Personal Information we receive from users of the Site.
          </p>
          <p class="mt-4">
            We use your Personal Information only for providing and improving
            the Site. By using the Site, you agree to the collection and use of
            information in accordance with this policy.
          </p>

          <h3 class="mt-6 text-xl font-bold leading-tight text-gray-900">
            Personal Information We Collect
          </h3>
          <p class="mt-4">
            We collect personal information that you voluntarily provide to us
            when you use our website and services. This includes:
          </p>
          <ul>
            <li>Contact information, such as your name and email address</li>
            <li>
              Purchase Information , such as your website url, purchase code etc
            </li>
            <li>
              Usage information, such as your browsing history and search
              queries
            </li>
          </ul>

          <h3 class="mt-6 text-xl font-bold leading-tight text-gray-900">
            How We Use Your Personal Information
          </h3>
          <p class="mt-4">
            We use your personal information to provide and improve our website
            and services, to communicate with you about your account and orders,
            and to personalize your experience. We also use your personal
            information for analytics and marketing purposes.
          </p>

          <h3 class="mt-6 text-xl font-bold leading-tight text-gray-900">
            How We Share Your Personal Information
          </h3>
          <p class="mt-4">
            We may share your personal information with third-party service
            providers that assist us with our business operations, such as
            payment processing, customer service, and marketing. We may also
            share your personal information in connection with a merger,
            acquisition, or other business transaction.
          </p>

          <h3 class="mt-6 text-xl font-bold leading-tight text-gray-900">
            Your Choices and Rights
          </h3>
          <p class="mt-4">
            You may opt-out of receiving marketing communications from us at any
            time by following the unsubscribe link in the communication. You may
            also request access to, correction of, or deletion of your personal
            information by contacting us at templatecookie(at)gmail(dot)com
          </p>

          <h3 class="mt-6 text-xl font-bold leading-tight text-gray-900">
            Security of Your Personal Information
          </h3>
          <p class="mt-4">
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. However, no security
            system is impenetrable, and we cannot guarantee the security of your
            personal information.
          </p>

          <h3 class="mt-6 text-xl font-bold leading-tight text-gray-900">
            Changes to this Privacy Policy
          </h3>
          <p class="mt-4">
            We reserve the right to modify this Privacy Policy at any time. Your
            continued use of our website after any such modifications will
            constitute your acceptance of the new Privacy Policy.
          </p>

          <h3 class="mt-6 text-xl font-bold leading-tight text-gray-900">
            Contact Us
          </h3>
          <p class="mt-4">
            If you have any questions about this Privacy Policy or our privacy
            practices, please contact us at templatecookie(at)gmail(dot)com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let title = "Privacy Policy | Templatecookie";
const description =
  "Discover our Privacy Policy: Your information is respected, secured, and transparently handled at Templatecookie";

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: "/social-meta.png",
});

let date = new Date("2023-03-31");
const currentDate = date.toLocaleDateString();
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
