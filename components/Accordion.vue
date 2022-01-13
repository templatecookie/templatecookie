<template>
  <div class="wrapCollapse">
    <div v-for="(faq, i) in faqs" :key="i">
      <dt>
        <a
          class="flex py-3 text-dark-06 text-base font-medium"
          href="javascript:void(0)"
          :class="{ active: currentFaq == i }"
          @click="open(i)"
        >
          <svg
            class="mr-3.5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z"
              fill="#061C3D"
            />
            <path
              d="M3 16.5L12 21.75L21 16.5"
              stroke="#061C3D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 12L12 17.25L21 12"
              stroke="#061C3D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z"
              stroke="#061C3D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          {{ faq.title }}</a
        >
      </dt>
      <ul :class="{ active: currentFaq == i }" class="pl-10">
        <li
          v-for="(item, indexIteam) in faqBody"
          :key="indexIteam"
          class="text-dark-42 text-sm mb-1.5"
        >
          {{ item.bodyText }}
        </li>
      </ul>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      currentFaq: 0,
      faqs: [
        {
          title: "Version 1.3 (12th November, 2021)",
        },
        {
          title: "Version 1.2 (8th November, 2021)",
        },
        {
          title: "Version 1.1 (9th July, 2021)",
        },
        {
          title: "Version 1.1 (9th July, 2021)",
        },
      ],

      faqBody: [
        {
          bodyText: "Bug resolved in email page button down",
        },
        {
          bodyText:
            "Bug resolved of Landing Page main banner image overlapping in Safari",
        },
        {
          bodyText:
            "Bug resolved of Landing Page main banner image overlapping in Safari",
        },
        {
          bodyText:
            "Bug resolved of Left sidebar menu (icon and text) alignment",
        },
      ],
    };
  },
  methods: {
    open(i) {
      this.currentFaq = i;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapCollapse {
  dt {
    a {
      &.active {
        color: #0b63e5;
        path {
          stroke: #0b63e5;
        }
      }
    }
  }
  ul {
    height: 0;
    transition: all 0.5s ease;
    overflow: hidden;
    opacity: 0;
    li {
      position: relative;
      padding-left: 10px;
      &:before {
        content: "";
        left: 0;
        top: 7px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        position: absolute;
        background-color: #061c3d;
      }
    }
    &.active {
      height: auto;
      opacity: 1;
    }
  }
}
</style>
