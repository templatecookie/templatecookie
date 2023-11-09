<script setup >
import { computed } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  path: String,
  isBlogDetails: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "Og Image Template",
  },
  description: {
    type: String,
    default: "Set a description to change me.",
  },
  background: {
    type: String,
    default: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
  },
  color: {
    type: String,
  },
  padding: {
    type: String,
    default: "0 50px",
  },
  titleFontSize: {
    type: String,
    default: "50px",
  },
  descriptionFontSize: {
    type: String,
    default: "35px",
  },
  icon: {
    type: [String, Boolean],
    default: "logos:nuxt",
  },
  image: {
    type: String,
    required: false,
    default:
      "https://images.unsplash.com/photo-1542435503-956c469947f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  siteName: {
    type: String,
    required: false,
  },
  siteLogo: {
    type: String,
    required: false,
  },
  readingMins: {
    type: Number,
    required: false,
  },
});

const backgroundAttrs = computed(() => {
  return {
    style: {
      display: "flex",
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "rgba(5, 5, 5,1)",
    },
  };
});

const backgroundFlareAttrs = computed(() => {
  return {
    style: {
      display: "flex",
      position: "absolute",
      right: "-50%",
      top: "0%",
      width: "200%",
      height: "200%",
      backgroundImage:
        "radial-gradient(circle, rgba(0,220,130, 0.2) 0%,  rgba(5, 5, 5, 0.5) 50%, rgba(5, 5, 5,0) 70%)",
    },
  };
});

const backgroundFlareTwoAttrs = computed(() => {
  return {
    style: {
      display: "flex",
      position: "absolute",
      left: "-5%",
      width: "150%",
      height: "150%",
      backgroundImage:
        "radial-gradient(circle, rgba(0,123,220, 1) 0%,  rgba(5, 5, 5, 0.3) 50%, rgba(5, 5, 5,0) 70%)",
    },
  };
});

const titleAttrs = computed(() => {
  const classes = [];
  const styles = {
    fontWeight: "bold",
    marginBottom: "50px",
    lineHeight: "70px",
    fontSize: props.titleFontSize,
  };
  return { class: classes, style: styles };
});
</script>

<template>
  <div v-bind="backgroundAttrs" />
  <div v-bind="backgroundFlareAttrs" />
  <div v-bind="backgroundFlareTwoAttrs" />
  <div class="w-full flex flex-row z-10">
    <div class="w-1/2" style="padding: 50px">
      <div class="flex flex-col h-full justify-between text-gray-100">
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-col">
            <div v-bind="titleAttrs">
              {{ title || "Null Title" }}
            </div>
            <div v-text="description" class="text-xl" />

            <div class="text-2xl" v-if="isBlogDetails">
              {{ readingMins }} min read
            </div>
          </div>
        </div>
        <div class="text-white w-full flex flex-row">
          <NuxtImg
            v-if="siteLogo"
            :src="siteLogo"
            height="50"
            class="rounded mr-5"
          />
          <!-- <div style="font-size: 30px" class="font-bold mt-2">
            {{ siteName }}
          </div> -->
        </div>
      </div>
    </div>
    <div class="w-1/2 items-end justify-center">
      <NuxtImg
        v-if="image"
        :src="image"
        height="630"
        width="630"
        style="object-fit: cover"
        class="rounded-xl max-w-full"
      />
    </div>
  </div>
</template>
