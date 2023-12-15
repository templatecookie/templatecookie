<template>
  <div class="bg-gray-900 py-16 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Proven Success Metrics
          </h2>
          <p class="mt-4 text-lg leading-8 text-gray-300">
            These figures demonstrate our commitment and experience.
          </p>
        </div>
        <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.id" class="flex flex-col bg-white/5 p-8">
            <dt class="text-sm font-semibold leading-6 text-gray-300">{{ stat.name }}</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-white">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { id: 1, name: 'Successful Projects', value: '500+' },
  { id: 2, name: 'Client Satisfaction', value: '98%' },
  { id: 3, name: 'Years of Experience', value: '8+' },
  { id: 4, name: 'Countries Served', value: '25+' },
]
</script>
