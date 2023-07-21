<script setup>
const supportFeatures = [
  {
    name: "Find solution quicker by following steps below.",
    color: "blue",
    items: [
      {
        title:
          "Check our documentation online for the answer to your question.",
      },
      {
        title: "Support query need to be within Envato item support policy.",
      },
      {
        title:
          "You should maintain only one support ticket at a time. Creating multiple ticket can cause unexpected delays.",
      },
      {
        title:
          "Ticket should provide as much issue details as possible such as screenshot, video, login access, URL etc",
      },
    ],
  },
  {
    name: "Item Support Includes",
    color: "green",
    items: [
      {
        title: "Availability of the author to answer questions",
      },
      {
        title: "Answering technical questions about item’s features",
      },
      {
        title: "Assistance with reported bugs and issues",
      },
    ],
  },
  {
    name: "Does not includes",
    color: "red",
    items: [
      {
        title: "Customization services",
      },
      {
        title: "Installation services",
      },
    ],
  },
];
</script>
<template>
  <div
    class="rounded-lg mb-6 border overflow-hidden"
    :class="`bg-${section.color}-50 border-${section.color}-600`"
    v-for="(section, index) in supportFeatures"
    :key="index"
  >
    <h3
      class="py-4 px-6 text-white"
      :class="`bg-${section.color}-600`"
    >
      {{ section.name }}
    </h3>
    <hr>
    <ul class="py-4 px-6 gap-2 flex flex-col">
      <li
        class="flex gap-2"
        :class="`text-${section.color}-600`"
        v-for="(item, itemIndex) in section.items"
        :key="itemIndex"
      >
        <svg
          class="flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <rect
            width="256"
            height="256"
            fill="none"
          />
          <polyline
            points="172 104 113.3 160 84 132"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
        </svg>
        <span class="text-gray-800"> {{ item.title }} </span>
      </li>
    </ul>
  </div>
</template>

<!-- <template>
<h1>hello world</h1>
</template> -->
