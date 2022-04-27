<template>
  <div>
    <template v-for="(item, index) in fruits" :key="item">
      <slot :item="item" :index="index"></slot>
      <slot name="why" :item="item" :index="index"></slot>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    fruits: Array,
  },
};
</script>

<style scoped></style>
