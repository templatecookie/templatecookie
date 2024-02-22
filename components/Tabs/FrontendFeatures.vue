<template>
  <div
    class="bg-white shadow-sm flex gap-3 items-start hover:scale-105 p-4 border border-gray-50 rounded-lg hover:border-primary transition duration-200"
    v-for="(item, index) in frontendFeatures"
    :key="item.name"
    data-aos="fade-in"
    :data-aos-delay="100 * index"
  >
    <div class="h-[50px] w-[50px] shrink-0">
      <img src="~/assets/images/icons/frontend-tab.png" class="w-full" />
    </div>
    <div class="space-y-2">
      <h5 v-text="item.name" class="text-gray-900 text-lg font-bold" />
      <p v-text="item.description" class="text-gray-700 text-md font-medium" />
    </div>
  </div>
</template>

<script setup>
const frontendFeatures = [
  {
    name: "User Authentication and Registration",
    description:
      "Secure login and registration processes for both pilots and employers.",
  },
  {
    name: "Dashboard",
    description:
      "Personalized dashboards for pilots and employers with relevant information.",
  },
  {
    name: "Profile Management",
    description:
      "Ability for pilots to create and manage their profiles. Resume upload, personal information, certifications, and experience details.",
  },
  {
    name: "Job Search and Filters",
    description:
      "Advanced search functionality to filter jobs based on criteria like location, type, experience level, etc. Real-time job notifications and updates.",
  },
  {
    name: "Job Listings",
    description:
      "Clear and detailed job listings with key information. Integration with maps for location-based jobs.",
  },
  {
    name: "Application Management",
    description:
      "Track job applications and their status. Easy application submission process.",
  },
  {
    name: "Communication Tools",
    description:
      "Messaging system for direct communication between pilots and employers. Notification system for important updates.",
  },
  {
    name: "Notification Center",
    description:
      "Alerts for new job postings, application status changes, and messages. Email and push notification options.",
  },
  {
    name: "Resume Builder",
    description:
      "Tools for pilots to build and customize their resumes within the application.",
  },
  {
    name: "Interview Scheduling",
    description:
      "Integration with calendar systems for scheduling interviews. Automated reminders for scheduled interviews.",
  },
  //
];
</script>

<style>
</style>
