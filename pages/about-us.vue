<template>
  <div>
    <about-hero-section />
    <about-stats-section />
    <about-our-story />

    <!-- team members  -->
    <team-section 
      title="Team Expertise"
      :members="teamMembers"
      description="Our team of highly skilled developers specializes in Custom software and website development. With years of experience, they possess in-depth knowledge of our products and are committed to delivering exceptional support."
    />

    <!-- Our values  -->
    <about-our-values />
    <about-join-us class="border-t" />
  </div>
</template>

<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'

const title = "About Us | Templatecookie - Your Digital Success Partner";
const description = "Discover Templatecookie's journey to excellence and commitment to innovation, quality, and client satisfaction. Your digital success partner.";

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

const teamMembers = [
  {
    name: 'Zafor Iqbal',
    role: "User Interface Designer",
    location: "Dhaka, Bangladesh",
    avatar: "/images/zafor-iqbal.jpg",
  },
  {
    name: 'Rakibul Islam',
    role: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    avatar: "/images/rakibul-islam.png",
  },
  {
    name: 'Suraiya Aysha',
    role: "Laravel Developer",
    location: "Khulna, Bangladesh",
    avatar: "/images/suraiya-aysha.png",
  },
  {
    name: 'Abdul Awal',
    role: "Laravel Developer",
    location: "Rajshahi, Bangladesh",
    avatar: "/images/abdul-awal.jpeg",
  },
  {
    name: 'Opu Saha',
    role: "Laravel Developer",
    location: "Narsingdi, Bangladesh",
    avatar: "/images/opu-saha.png",
  },
  {
    name: 'Khalil Uddin',
    role: "Laravel Developer",
    location: "Noakhali, Bangladesh",
    avatar: "/images/khalil-uddin.png",
  },
  {
    name: 'Ariful Islam',
    role: "Laravel Developer",
    location: "Dhaka, Bangladesh",
    avatar: "/images/ariful-islam.png",
  },
  {
    name: 'Zakir Hossen',
    role: "CEO & Founder",
    location: "Dhaka, Bangladesh",
    avatar: "/images/zakir-hossen.png",
  },
]
</script>

<style></style>
