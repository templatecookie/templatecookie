<template>
  <div class="flex w-full md:flex-wrap">
    <div class="px-6 pb-0 w-8/12 h-full">
      <h2 class="text-4xl mb-10 font-semibold">Frequently Asked Questions</h2>
      <div class="mt-12 lg:col-span-2 lg:mt-0">
        <dl class="space-y-12 markdown-body">
          <div>
            <dt class="text-lg font-medium leading-6 text-gray-900">
              Emails are not sending / I have errors with my SMTP.
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              All errors related to the email sending system are caused by
              either: Incorrect SMTP credentials, not properly working SMTP
              server, or web host blocking the actual SMTP connection. For any
              of these issues, contact your SMTP or web host provider.
            </dd>
          </div>
          <div>
            <dt class="text-lg font-medium leading-6 text-gray-900">
              I lost my admin password & I can't reset it, what to do?
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              In this case, you'd need to access your database manager (such as
              phpMyAdmin), select the database of the installed product, go to
              the users table, find your admin account and set the password to
              `$2y$10$uFNO0pQKEHSFcus1zSFlveiPCB3EvG9ZlES7XKgJFTAl5JbRGFCWy`
              which equals to `admin` as the password. Now you need to find the
              `uploads/cache/` from the product installation files and delete
              the folder you see inside.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const emit = defineEmits(["onLoad"]);
const productName =
  route.params.slug.charAt(0).toUpperCase() + route.params.slug.slice(1);

const seoTitle = `Frequently Asked Questions - ${productName} Documentation`;
const description = "Find answers to your questions with ease on the Templatecookie FAQ page. Your queries addressed for a seamless experience. Explore now!";

useSeoMeta({
  title: seoTitle,
  ogTitle: seoTitle,
  description: description,
  ogDescription: description,
});

onBeforeMount(() => {
  emit("onLoad", { seoTitle, description });
});

defineOgImage({
  title: seoTitle,
  description: description,
});
</script>
