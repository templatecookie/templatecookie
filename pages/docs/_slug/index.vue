<template>
  <div class="flex flex-wrap gap-4 ml-4 w-full">
    <doc-category-card-item :name="index" :items="items" v-for="(items, index) in categories" :key="index"/>
  </div>
</template>

<script>
import DocCategoryCardItem from '../../../components/Docs/DocCategoryCardItem.vue'
export default {
  components: { DocCategoryCardItem },
  props: ['categories']
}
</script>

<style>

</style>
