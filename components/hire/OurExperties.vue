<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div class="">
        <div class="mb-8 text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technology We Use
          </h2>
          <p class="mt-3 mx-auto max-w-3xl text-lg text-gray-500">
            At Templatecookie, we keep ourselves up to date on the latest technologies and tools. By using innovative technologies, we aim to create high-quality projects for our clients.
          </p>
        </div>

        <div class="mt-8 grid grid-cols-3 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-4">
          <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8" v-for="(item, index) in technologies" :key="index">
            <div class="sr-only">{{ item.name }}</div>
            <img class="max-h-12" :src="item.logo" :alt="item.name" data-aos="flip-up" :data-aos-delay="100 * index">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      technologies: [
        {
          name: 'Figma',
          logo: '/icons/figma.svg'
        },
        {
          name: 'Tailwind CSS',
          logo: '/icons/tailwindcss.svg'
        },
        {
          name: 'Laravel',
          logo: '/icons/laravel.svg'
        },
        {
          name: 'Vuejs',
          logo: '/icons/vue.svg'
        },
        {
          name: 'Nuxtjs',
          logo: '/icons/nuxt.svg'
        },
        {
          name: 'MySQL',
          logo: '/icons/mysql.svg'
        },
        {
          name: 'Digitalocean',
          logo: '/icons/digitalocean.svg'
        },
        {
          name: 'Vercel',
          logo: '/icons/vercel.svg'
        },
      ]
    }
  }
}
</script>
