<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative companies</h2>
      <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <img v-for="(client, index) in clients" :key="index" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" :src="client.logo" :alt="client.name" width="158" height="48" />
      </div>
    </div>
  </div>
</template>


<script setup>
  const clients = [
    {
      name: 'D Service Italia',
      logo: '/clients/d-service-italia-logo.png'
    },
    {
      name: 'Europportunity',
      logo: '/clients/europportunity-logo.png'
    },
    {
      name: 'Europportunity',
      logo: '/clients/grand-dude-studios.png'
    },
    {
      name: 'PROCESS IN',
      logo: '/clients/processin-logo.png'
    },
    {
      name: 'Relewant',
      logo: '/clients/relewant-logo.png'
    },
    {
      name: 'Reva Group',
      logo: '/clients/revagroup.io.svg'
    },
    {
      name: 'Silverline',
      logo: '/clients/Silverline-logo.png'
    },
  ]
</script>