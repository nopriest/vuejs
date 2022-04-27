<template>
  <div id="app">
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/user/hsu/id/2">用户</router-link>
    <router-view></router-view>
  </div>

  <!-- 以前讲过 使用用异步组件 来进行懒加载分包 -->
  <!-- 增加首页渲染速度 -->
</template>

<script>
export default {};
</script>

<style scoped></style>
