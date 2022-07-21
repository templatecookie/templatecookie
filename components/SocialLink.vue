<template>
  <div>
    <ul class="flex items-center space-x-3" v-if="social && social">
      <li v-for="item in social" :key="item.name">
        <a :href="item.url"
          class="flex items-center justify-center p-3 duration-300 rounded-md bg-blue-18 group">
          <nuxt-img :src="item.icon.url" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SocialLink",
  props: ['social'],
  methods: {
    setThemeColor(theme){
      switch (theme) {
        case "red":
          return 'hover:bg-dribble'
        case "blue": 
          return 'hover:bg-facebook'
        default:
          return 'hover:bg-black'
      }
    }
  }
};
</script>
