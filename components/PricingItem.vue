<template>
  <div
    class="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10"
  >
    <div class="p-8 sm:p-10">
      <h3
        class="text-lg font-semibold leading-8 tracking-tight text-primary"
        :id="item.id"
      >
        {{ item.name }}
      </h3>
      <div
        class="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900 font-lexend"
      >
        ${{ item.price }}
      </div>
      <p class="mt-6 text-base leading-7 text-gray-600">
        {{ item.description }}
      </p>
    </div>
    <div class="flex flex-1 flex-col p-2">
      <div
        class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8"
      >
        <ul role="list" class="space-y-6">
          <li
            v-for="feature in item.features"
            :key="feature.id"
            class="flex items-start"
          >
            <div class="flex-shrink-0">
              <NuxtImg src="/icons/check.svg" alt="Templatecookie Check Icon" />
            </div>
            <p class="ml-3 text-sm leading-6 text-gray-600">
              {{ feature.name }}
            </p>
          </li>
        </ul>
        <div class="mt-8">
          <a
            v-if="item.paddleCheckout"
            href="#"
            @click.prevent="openCheckout(item.paddleProductId)"
            class="inline-block w-full rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-secondary"
          >
            Get started now
          </a>
          <a
            v-else
            :href="item.purchaseLink"
            target="_blank"
            class="inline-block w-full rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-secondary"
          >
            Get started now
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    openCheckout(product) {
      Paddle.Checkout.open({ product: product });
    },
  },
};
</script>

<style></style>
