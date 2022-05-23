<template>
  <div class="wrapCollapse">
    <AccordionItem :faq="faq" v-for="(faq, i) in faqs" :key="i" />
  </div>
</template>

<script>
import AccordionItem from './Docs/AccordionItem.vue';
export default {
  name: "Accordion",
  data() {
    return {
      currentFaq: 0,
      faqs: [
        {
          title: "Version 1.3 (12th November, 2021)",
          description: "Bug resolved in email page button down",
          updates: [
            "Bug resolved in email page button down",
            "2 Bug resolved in email page button down",
          ]
        },
        {
          title: "Version 1.4 (26th October, 2021)",
          description: "Bug resolved in email page button down",
          updates: [
            "Bug resolved in email page button down",
            "2 Bug resolved in email page button down",
          ]
        },
      ],
    };
  },
  methods: {
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
