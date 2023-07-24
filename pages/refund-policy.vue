<template>
  <div>
    <div class="bg-gray-f0 py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="text-center max-w-4xl m-auto pt-6">
          <h1
            class="text-dark text-5xl font-semibold mb-6 lg:mb-9 tracking-ls02"
          >
            Refund Policy
          </h1>
        </div>
      </div>
    </div>
    <!-- end -->
    <div class="py-12">
      <div class="flex justify-center">
        <div class="max-w-2xl mx-auto px-4 py-8 sm:px-6">
          <h1 class="text-2xl font-bold mb-4">
            Refund Policy
          </h1>
          <p class="mt-2 text-gray-600">
            Last updated: {{ currentDate }}
          </p>
          <p class="mt-4">
            At Templatecookie, we are committed to providing high-quality
            products and services to our customers. We understand that sometimes
            you may need to request a refund, and we have outlined our refund
            policy below.
          </p>

          <h3 class="mt-6 text-xl font-bold leading-tight text-gray-900">
            Refund Eligibility
          </h3>
          <p class="mt-4">
            We offer a refund within 7 days from the day of your first payment.
            To be eligible for a refund, you must meet the following criteria:
          </p>
          <ul class="list-disc pl-6 flex flex-col gap-2">
            <li>
              You have contacted our support team at
              templatecookie(at)gmail(dot)com and allowed us to attempt to
              resolve any issues you are experiencing.
            </li>
            <li>
              The product purchased has stopped functioning or displaying that
              we described to its details, or broken after the installation.
            </li>
            <li>
              Item has a security vulnerability and support can not resolve it.
            </li>
            <li>Item support is promised but not provided.</li>
            <li>Our support team is unable to fix the problem.</li>
          </ul>

          <h3 class="mt-6 text-xl font-bold leading-tight text-gray-900">
            Refund Ineligibility
          </h3>
          <p class="mt-4">
            We are unable to issue a refund under the following circumstances:
          </p>
          <ul class="list-disc pl-6 flex flex-col gap-2">
            <li>
              Your host does not meet the requirement of Laravel or denies
              updating the PHP, MySQL version.
            </li>
            <li>You changed your mind or decided not to use our product.</li>
            <li>
              You found that our product does not suit your needs (our live demo
              site is very explanatory of our script/templates).
            </li>
            <li>You don't want it after you've downloaded it</li>
            <li>
              The item did not meet your expectations or you feel the item is of
              low quality
            </li>
            <li>You bought an item by mistake</li>
            <li>You do not have sufficient expertise to use the item</li>
            <li>
              You claim that you are entitled to a refund but do not provide
              sufficient information as to why you are entitled to a refund
            </li>
            <li>
              You can no longer access the item because it has been removed or
              the author who previously provided the item is no longer active on
              our platform (we advise you to download items as soon as you have
              purchased them to avoid this situation).
            </li>
          </ul>

          <h3 class="mt-6 text-xl font-bold leading-tight text-gray-900">
            Refund Processing and T&C
          </h3>
          <p class="mt-4">
            Refunds will be processed as soon as possible, and we will make
            every effort to resolve your issue before issuing a refund. However,
            no refunds will be processed after 7 days post-purchase. By
            requesting and receiving a refund, you relinquish all ownership of
            your license and agree to cease the use of the product immediately.
          </p>

          <p class="mt-4">
            We reserve the right to reject a refund request if it is necessary.
            To submit a refund request, please fill out this form. If you have
            any questions or concerns about our refund policy, please contact us
            at templatecookie(at)gmail(dot)com.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const title = "Refund Policy | Our commitment to customer satisfaction";
  const description = "Our refund policy ensures that our customers receive a satisfactory experience. If you're unhappy with your purchase or encounter issues, we're here to help. Learn more about our refund policy and eligibility criteria.";

  useHead({
    title: title,
    meta: [
      { name: 'description', content: description, },
      { property: 'og:title', name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { property: 'og:type', name: 'og:type', content: "website" },
      { property: 'og:image', name: 'og:image', content: '/social-meta.png' },
    ],
  });

  const date = new Date("2023-03-31");
  let currentDate = date.toLocaleDateString();
</script>