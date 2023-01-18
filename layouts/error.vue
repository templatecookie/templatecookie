<template>
  <div class="bg-white">
    <main class="mx-auto w-full max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-xl py-16 sm:py-32">
        <div v-if="error.statusCode === 404"  class="text-center">
          <p class="text-base font-semibold text-primary">404</p>
          <h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">This page does not exist.</h1>
          <p class="mt-2 text-lg text-gray-500">The page you are looking for could not be found.</p>
        </div>
        <div v-else  class="text-center">
          <p class="text-base font-semibold text-primary">500</p>
          <h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">An error occurred</h1>
          <p class="mt-2 text-lg text-gray-500">The page you are looking for could not be found.</p>
        </div>
        <div class="mt-12">
          <h2 class="text-base font-semibold text-gray-500">Popular pages</h2>
          <ul role="list" class="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
            <li class="relative flex items-start space-x-4 py-6">
              <div class="flex-shrink-0">
                <span class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                  <!-- <svg class="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                  </svg> -->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </span>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-base font-medium text-gray-900">
                  <span class="rounded-sm focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2">
                    <nuxt-link to="/products" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      Our Products
                    </nuxt-link>
                  </span>
                </h3>
                <p class="text-base text-gray-500">Browse our all products, Made with ❤️</p>
              </div>
              <div class="flex-shrink-0 self-center">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
              </div>
            </li>

            <li class="relative flex items-start space-x-4 py-6">
              <div class="flex-shrink-0">
                <span class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                  <svg class="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>

                </span>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-base font-medium text-gray-900">
                  <span class="rounded-sm focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2">
                    <nuxt-link to="/hire-us" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      Hire Us Today
                    </nuxt-link>
                  </span>
                </h3>
                <p class="text-base text-gray-500">Hire experts for your next dream project</p>
              </div>
              <div class="flex-shrink-0 self-center">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
              </div>
            </li>
            <li class="relative flex items-start space-x-4 py-6">
              <div class="flex-shrink-0">
                <span class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                  <svg class="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </span>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-base font-medium text-gray-900">
                  <span class="rounded-sm focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2">
                    <nuxt-link to="/docs" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      Documentation
                    </nuxt-link>
                  </span>
                </h3>
                <p class="text-base text-gray-500">Learn how to integrate our tools with your app</p>
              </div>
              <div class="flex-shrink-0 self-center">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
              </div>
            </li>

            <li class="relative flex items-start space-x-4 py-6">
              <div class="flex-shrink-0">
                <span class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                  <svg class="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </span>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-base font-medium text-gray-900">
                  <span class="rounded-sm focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2">
                    <nuxt-link to="/blog" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      Blog
                    </nuxt-link>
                  </span>
                </h3>
                <p class="text-base text-gray-500">Read our latest news and articles</p>
              </div>
              <div class="flex-shrink-0 self-center">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
              </div>
            </li>
          </ul>
          <div class="mt-8">
            <nuxt-link to="/" class="text-base font-medium text-primary hover:text-secondary">
              Or go back home
              <span aria-hidden="true"> &rarr;</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
