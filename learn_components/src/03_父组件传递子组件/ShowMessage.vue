<template>
  <div>
    <h2 v-bind:id="$attrs.id">{{ title }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  // 数组写法
  //props: ['title', 'message'],

  // 对象写法 作限制用
  props: {
    title: String,
    message: {
      type: String,
      required: true,
      default: 'default val',
    },
    counter: {
      type: Number,
    },
    info: {
      type: Object,
      default() {
        return { name: 'hsu' };
      },
    },
    messageInfo: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
