<template>
  <div id="app">
    <!-- 使用router-link跳转 -->
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/user/hsu/id/2">用户</router-link>
    <br />

    <!-- 使用编程方式跳转 -->
    <button v-on:click="jumpToHome">Home</button>
    <button @click="jumpToAbout">About</button>
    <button @click="jumpToUser">用户</button>
    <router-view></router-view>
  </div>

  <!-- 以前讲过 使用用异步组件 来进行懒加载分包 -->
  <!-- 增加首页渲染速度 -->
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  //Options API写法
  // methods: {
  //   jumpToHome: function () {
  //     //传参是 字符串
  //     this.$router.push('/home');
  //     //传参是对象 可以传递query string过去
  //   },
  //   jumpToAbout() {
  //     this.$router.push('/about');
  //   },
  //   jumpToUser() {
  //     this.$router.push('/user/hsu/id/2');
  //   },
  // },
  setup() {
    //路由对象
    const router = useRouter();

    const jumpToHome = function () {
      //传参是 字符串
      //router.push('/home');
      //传参是对象 可以传递query string过去
      router.push({
        path: '/home',
        query: {
          name: 'niubi',
          age: 18,
        },
      });
    };
    const jumpToAbout = () => {
      router.push('/about');
    };
    const jumpToUser = () => {
      router.push('user/hsu/id/2');
    };

    return {
      jumpToHome,
      jumpToAbout,
      jumpToUser,
    };
  },
};
</script>

<style scoped></style>
