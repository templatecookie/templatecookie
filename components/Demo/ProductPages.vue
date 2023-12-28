<template>
  <section class="mt-[7rem]">
    <div class="text-center">
      <h4
        class="mt-2 pb-14 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-10 after:bg-no-repeat after:w-full after:left-0 after:bottom-5 after:content-[url('~/assets/images/Underline.png')] after:absolute relative"
      >
        Most Elegent Inner & Job Pages
      </h4>
    </div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 gap-4 mt-10 space-y-12">
      <div class="min-w-full">
        <ul class="flex flex-wrap items-center justify-center gap-7">
          <li
            class="me-2 border-b border-b-transparent hover:active-tab font-bold text-gray-700 text-xl cursor-pointer"
            v-for="(page, index) in pages"
            :key="page.title"
            :class="{ 'active-tab': selectedTab === page.tab }"
            @click="selectedTab = page.tab"
          >
            <div class="inline-flex items-center justify-center gap-2">
              <div class="h-[40px] w-[40px]">
                <img
                  :src="page.icon"
                  :alt="page.title + 'icon'"
                  class="w-full"
                />
              </div>
              {{ page.title }}
            </div>
          </li>
        </ul>
      </div>
      <div class="w-full">
        <tabs-jobs-pages v-if="selectedTab === 'jobs-pages'" />
        <tabs-candidate-pages v-if="selectedTab === 'candidate-pages'" />
        <tabs-inner-pages v-if="selectedTab === 'inner-pages'" />
      </div>
    </div>
  </section>
</template>

<script setup>
import jobIcon from "~/assets/images/icons/job.png";
// import companyIcon from "~/assets/images/icons/recruiter.png";
import candidateIcon from "~/assets/images/icons/candidate.png";
import innerIcon from "~/assets/images/icons/inner.png";
import blogIcon from "~/assets/images/icons/blog.png";
import authIcon from "~/assets/images/icons/authentication.png";
const selectedTab = ref("jobs-pages");
const pages = [
  {
    title: "Jobs",
    tab: "jobs-pages",
    icon: jobIcon,
  },
  // {
  //   title: "Company",
  //   tab: "company-pages",
  //   icon: companyIcon,
  // },
  {
    title: "Candidates",
    tab: "candidate-pages",
    icon: candidateIcon,
  },
  {
    title: "Inner",
    tab: "inner-pages",
    icon: innerIcon,
  },
  {
    title: "Blog",
    tab: "blog-pages",
    icon: blogIcon,
  },
  {
    title: "Authentication",
    tab: "authentication-pages",
    icon: authIcon,
  },
];
</script>

<style></style>
