<template>
  <div>
    <h2>Home</h2>
    <router-link to="/home/message">消息页面</router-link>
    <router-link to="/home/goods">商品页面</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
