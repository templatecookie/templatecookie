<template>
  <div>
    <dt>
      <a class="flex py-2 text-dark-06 text-base font-medium" href="javascript:void(0)"
        :class="{ 'active': show }" @click="show = true">
        <svg class="mr-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z" fill="#061C3D" />
          <path d="M3 16.5L12 21.75L21 16.5" stroke="#061C3D" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M3 12L12 17.25L21 12" stroke="#061C3D" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z" stroke="#061C3D" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        {{ faq.title }}</a>
    </dt>
    <ul :class="{ 'active': show }" v-if="show" class="pl-10">
      <li v-for="(item, index) in faq.updates" :key="index" class="text-dark-42 text-sm mb-1.5">
        - {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['faq'],
  data(){
    return {
      show: false,
    }
  }
}
</script>

<style>

</style>
