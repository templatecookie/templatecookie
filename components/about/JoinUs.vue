<template>
  <div class="overflow-hidden bg-white lg:py-32 md:py-16 py-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex flex-col gap-6 lg:flex-row">
        <div class="w-full lg:w-1/2">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Opportunities and Get in Touch
          </h2>
          <p class="mt-6 text-xl leading-8 text-gray-600">
            In this section, we invite you to take action. Whether you're
            seeking to join our team or connect with us for your project, we're
            here to make your vision a reality. Get to know us through snapshots
            of our team and the vibrant working environment we thrive in. It's
            more than a workplace; it's where your journey to success begins.
          </p>
          <div class="mt-10 flex flex-wrap gap-4">
            <a href="https://lomeyo.com/career" target="_blank"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary mr-4">Join
              our team
              <span class="ml-2" aria-hidden="true">&rarr;</span></a>

            <nuxt-link to="/contact-us"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-dark px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary">Contact
              us
              <span class="ml-2" aria-hidden="true">&rarr;</span></nuxt-link>
          </div>
        </div>
        <div class="w-full lg:w-1/2">
          <NuxtImg src="/team-env/1.png" alt=""
            class="aspect-[7/5] 2xl:w-[37rem] w-full rounded-2xl bg-gray-50 object-cover" />
        </div>
      </div>
      <div class="flex flex-col overflow-hidden 2xl:overflow-visible lg:flex-row lg:items-end gap-8 mt-8 2xl:-ml-52">

        <NuxtImg src="/team-env/3.png" alt=""
          class="aspect-[4/3] lg:w-[24rem] w-full flex-none rounded-2xl bg-gray-50 object-cover" />

        <NuxtImg src="/team-env/2.png" alt=""
          class="aspect-[7/5] lg:w-[37rem] w-full flex-none rounded-2xl bg-gray-50 object-cover" />

        <NuxtImg src="/team-env/4.png" alt=""
          class="aspect-[4/3] 2xl:w-[24rem] lg:hidden 2xl:block self-start w-full rounded-2xl bg-gray-50 object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
</style>
