<template>
  <div
    class="bg-white shadow-sm flex gap-3 items-start hover:scale-105 p-4 border border-gray-50 rounded-lg hover:border-primary transition duration-200"
    v-for="(item, index) in backendFeatures"
    :key="item.name"
    data-aos="fade-in"
    :data-aos-delay="100 * index"
  >
    <div class="h-[50px] w-[50px] shrink-0">
      <img src="~/assets/images/icons/backend.png" class="w-full" />
    </div>
    <div class="space-y-2">
      <h5 v-text="item.name" class="text-gray-900 text-lg font-bold" />
      <p v-text="item.description" class="text-gray-700 text-md font-medium" />
    </div>
  </div>
</template>

<script setup>
const backendFeatures = [
  {
    name: "Feedback and Ratings",
    description:
      "Allow employers to provide feedback and ratings for pilots, and vice versa.",
  },
  {
    name: "Interactive Map",
    description:
      "Visual representation of job locations. Filter jobs based on geographical preferences.",
  },
  {
    name: "Application Analytics",
    description:
      "Analytics dashboard for pilots to track their application history, success rates, etc.",
  },
  {
    name: "Settings and Preferences",
    description:
      "Customizable settings for user preferences, notifications, and privacy.",
  },
  {
    name: "Help and Support",
    description:
      "Easily accessible help and support section. FAQs, tutorials, or a chat support system.",
  },
  {
    name: "Responsive Design",
    description:
      "Ensure the application is responsive and accessible across various devices.",
  },
  {
    name: "Integration with Social Media",
    description:
      "Allow users to link and share their profiles on social media platforms.",
  },
  {
    name: "Job Alerts",
    description: "Allow users to set up job alerts based on specific criteria.",
  },
  {
    name: "Document Management",
    description:
      "A secure way to upload, manage, and share important documents and certifications.",
  },
  {
    name: "Feedback Surveys",
    description:
      "Periodic surveys to gather feedback for continuous improvement.",
  },
];
</script>

<style>
</style>
