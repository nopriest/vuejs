<template>
  <div class="nav-bar">
    <div class="left"><slot name="左边"></slot></div>
    <div class="center"><slot name="中间"></slot></div>
    <div class="right"><slot name="右边"></slot></div>
    <!-- 动态插槽名 -->
    <div class="addition"><slot :name="additionSlotName"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    additionSlotName: {
      type: String,
      default: 'add1',
    },
  },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
}
.left,
.right,
.center {
  height: 40px;
}
.left,
.right,
.addition {
  width: 60px;
  background-color: red;
}
.center {
  flex: 1;
  background-color: blue;
}
</style>
