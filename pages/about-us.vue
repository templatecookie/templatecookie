<template>
  <div>
    <about-hero-section />
    <about-stats-section />
    <about-our-story />

    <!-- team members  -->
    <team-section title="Team Expertise" :members="teamMembers"
      description="Our team of highly skilled developers specializes in Custom software and website development. With years of experience, they possess in-depth knowledge of our products and are committed to delivering exceptional support." />

    <!-- Our values  -->
    <about-our-values />
    <about-join-us class="border-t" />
  </div>
</template>

<script setup>
const title = "About us | Best software and web app development company";
const description =
  "Discover Templatecookie. We are more than a software and web app development company. we are your trusted partner on the journey to success.";

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
      href: "https://www.templatecookie.com" + route.path,
    },
  ],
});

const teamMembers = [
  {
    name: "Zafor Iqbal",
    role: "User Interface Designer",
    location: "Dhaka, Bangladesh",
    avatar: "/images/zafor-iqbal.jpg",
  },
  {
    name: "Rakibul Islam",
    role: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    avatar: "/images/rakibul-islam.png",
  },
  {
    name: "Suraiya Aysha",
    role: "Laravel Developer",
    location: "Khulna, Bangladesh",
    avatar: "/images/suraiya-aysha.png",
  },
  {
    name: "Abdul Awal",
    role: "Laravel Developer",
    location: "Rajshahi, Bangladesh",
    avatar: "/images/abdul-awal.jpeg",
  },
  {
    name: "Opu Saha",
    role: "Laravel Developer",
    location: "Narsingdi, Bangladesh",
    avatar: "/images/opu-saha.png",
  },
  {
    name: "Khalil Uddin",
    role: "Laravel Developer",
    location: "Noakhali, Bangladesh",
    avatar: "/images/khalil-uddin.png",
  },
  {
    name: "Ariful Islam",
    role: "Laravel Developer",
    location: "Dhaka, Bangladesh",
    avatar: "/images/ariful-islam.png",
  },
  {
    name: "Zakir Hossen",
    role: "CEO & Founder",
    location: "Dhaka, Bangladesh",
    avatar: "/images/zakir-hossen-low-res.png",
  },
];

defineOgImage({
  title: title,
  description: description,
});
</script>

<style></style>
