<template>
  <div id="app1">
    <div>计数器：{{ sCounter }}</div>
    <div>double counter: {{ $store.getters.doubleCounter }}</div>
    <div>double counter+n: {{ $store.getters.doubleCounterPlusN(8) }}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <p>name:{{ name }}</p>
    <p>age:{{ age }}</p>
    <p>length:{{ length }}</p>
    <p>height:{{ height }}</p>
    <p>counter:{{ counter }}</p>
    <p>sLength:{{ sLength }}</p>
    <h2>{{ counterInfo }}</h2>
  </div>
</template>

<script>
import { useState, useGetters } from './hooks';

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
  //options api 写法

  // computed: {
  //   fullName: () => 'kobe',
  //   //数组写法
  //   ...mapState(['counter', 'name', 'age', 'length', 'height']),

  //   //对象写法 可以起个别名
  //   ...mapState({
  //     sCounter: (state) => state.counter,
  //   }),
  // },

  //composition api 写法

  setup() {
    //两种写法都可以适配useState

    //传数组 写法
    const mappedStates1 = useState([
      'counter',
      'name',
      'age',
      'length',
      'height',
    ]);

    //传对象 写法
    const mappedStates2 = useState({
      sCounter: (state) => state.counter,
      sLength: (state) => state.length,
    });

    const mappedGetters = useGetters(['counterInfo']);

    return {
      ...mappedStates1,
      ...mappedStates2,
      ...mappedGetters,
    };
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
