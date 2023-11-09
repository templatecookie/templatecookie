<template>
  <div class="overflow-hidden bg-white py-32">
    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
      >
        <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Explore Opportunities and Get in Touch
          </h2>
          <p class="mt-6 text-xl leading-8 text-gray-600">
            In this section, we invite you to take action. Whether you're
            seeking to join our team or connect with us for your project, we're
            here to make your vision a reality. Get to know us through snapshots
            of our team and the vibrant working environment we thrive in. It's
            more than a workplace; it's where your journey to success begins.
          </p>
          <div class="mt-10 flex">
            <a
              href="https://lomeyo.com/career"
              target="_blank"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary mr-4"
              >Join our team
              <span class="ml-2" aria-hidden="true">&rarr;</span></a
            >

            <nuxt-link
              to="/contact-us"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-dark px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary"
              >Contact us
              <span class="ml-2" aria-hidden="true">&rarr;</span></nuxt-link
            >
          </div>
        </div>
        <div
          class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents"
        >
          <div
            class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end"
          >
            <NuxtImg
              src="/team-env/1.png"
              alt=""
              class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
            />
          </div>
          <div
            class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8"
          >
            <div
              class="order-first flex w-64 flex-none justify-end self-end lg:w-auto"
            >
              <NuxtImg
                src="/team-env/3.png"
                alt=""
                class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
              <NuxtImg
                src="/team-env/2.png"
                alt=""
                class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div
              class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none"
            >
              <NuxtImg
                src="/team-env/4.png"
                alt=""
                class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
