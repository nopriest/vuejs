<template>
  <div>
    <nav-bar v-bind:additionSlotName="slotName1">
      <!-- v-slot: 可以简写为 # -->
      <template v-slot:左边><button>1</button></template>
      <template #中间><h2>标题</h2></template>
      <template #右边><span>hello</span></template>
      <!-- 动态插槽 -->
      <template v-slot:[slotName1]><div>123</div></template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      slotName1: 'why',
    };
  },
};
</script>

<style scoped></style>
