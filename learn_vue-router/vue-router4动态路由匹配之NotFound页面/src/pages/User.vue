<template>
  <div>
    <h2>用户名: {{ $route.params.username }}</h2>
    <h3>ID: {{ $route.params.id }}</h3>
  </div>
</template>

<script>
export default {
  //写个声明周期 创建时 测试一下
  created() {
    console.log(this.$route.params.username);
  },
};
</script>

<style scoped></style>
