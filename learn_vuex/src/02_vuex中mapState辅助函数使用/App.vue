<template>
  <div id="app1">
    <div>计数器：{{ counter }}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ length }}</p>
    <p>{{ height }}</p>
    <div>{{ fullName }}</div>
    <p>{{ sCounter }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
  },
  computed: {
    fullName: () => 'kobe',
    //数组写法
    ...mapState(['counter', 'name', 'age', 'length', 'height']),

    //对象写法 可以起个别名
    ...mapState({
      sCounter: (state) => state.counter,
    }),
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
