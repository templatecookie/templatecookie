<template>
  <div>
    <div class="bg-gray-f0 py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="text-center max-w-4xl m-auto pt-6">
          <h1
            class="text-dark text-5xl font-semibold mb-6 lg:mb-9 tracking-ls02"
          >
            Terms & Conditions
          </h1>
        </div>
      </div>
    </div>
    <!-- end -->
    <div class="py-12">
      <div class="flex justify-center">
        <div class="max-w-2xl mx-auto px-4 py-8 sm:px-6">
          <h1 class="text-2xl font-bold mb-4">
            TERMS AND CONDITIONS OF USE
          </h1>
          <p class="mb-4">
            Welcome to Templatecookie.com. These terms and conditions ("Terms")
            govern your use of our website and services. By using our website,
            you agree to be bound by these Terms. If you do not agree to these
            Terms, you may not use our website.
          </p>
          <h2 class="text-lg font-bold mb-2">
            Ownership of Content
          </h2>
          <p class="mb-4">
            All content, including but not limited to text, images, graphics,
            videos, and software, on Templatecookie.com is the property of
            Templatecookie or its licensors and is protected by copyright laws.
            You may not copy, modify, distribute, or reproduce any content on
            our website without our prior written consent.
          </p>
          <h2 class="text-lg font-bold mb-2">
            User Conduct
          </h2>
          <p class="mb-4">
            You agree to use our website and services only for lawful purposes
            and in compliance with these Terms. You may not use our website for
            any illegal or unauthorized purpose. You also agree not to interfere
            with or disrupt the operation of our website or services.
          </p>
          <h2 class="text-lg font-bold mb-2">
            Disclaimer of Warranties
          </h2>
          <p class="mb-4">
            We make no representation or warranty of any kind, whether express,
            implied, statutory, or otherwise, regarding the website or the
            services we provide. We do not guarantee that our website or
            services will be error-free or uninterrupted. We also do not
            guarantee the accuracy, reliability, or completeness of any content
            on our website.
          </p>
          <h2 class="text-lg font-bold mb-2">
            Limitation of Liability
          </h2>
          <p class="mb-4">
            To the maximum extent permitted by law, we shall not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages arising out of or related to your use of our website or
            services. In no event shall our liability exceed the amount paid by
            you, if any, for accessing our website or services.
          </p>
          <h2 class="text-lg font-bold mb-2">
            Modifications to these Terms
          </h2>
          <p class="mb-4">
            We reserve the right to modify these Terms at any time. We will
            notify you of any changes by posting the updated Terms on our
            website. Your continued use of our website after any such
            modifications will constitute your acceptance of the new Terms.
          </p>
          <h2 class="text-lg font-bold mb-2">
            Governing Law and Jurisdiction
          </h2>
          <p class="mb-4">
            These Terms shall be governed by and construed in accordance with
            the laws of [insert state/country], without regard to its conflict
            of law provisions. Any disputes arising out of or related to these
            Terms shall be resolved exclusively in the state or federal courts
            located in [insert state/country].
          </p>
          <h2 class="text-lg font-bold mb-2">
            Entire Agreement
          </h2>
          <p class="mb-4">
            These Terms constitute the entire agreement between you and
            Templatecookie and supersede all prior agreements or understandings,
            whether written or oral, regarding the website or the services we
            provide.
          </p>
          <p>
            If you have any questions about these Terms, please contact us at
            templatecookie(dot)gmail(dot)com.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title: "Terms and Conditions | Templatecookie",
      description:
        "By using Templatecookie, you agree to be bound by our Terms and Conditions. We provide high-quality templates and resources for web development, while also outlining our expectations for user conduct and ownership of content. Learn more here.",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: description },
        {
          hid: "og:title",
          property: "og:title",
          name: "og:title",
          content: title,
        },
        {
          hid: "og:description",
          name: "og:description",
          name: "og:description",
          content: description,
        },
        {
          hid: "og:type",
          property: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          hid: "og:image",
          property: "og:image",
          name: "og:image",
          content: "/social-meta.png",
        },
      ],
    });
  },
  data() {
    return {};
  },
};
</script>

<style></style>
