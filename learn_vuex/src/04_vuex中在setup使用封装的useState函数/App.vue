<template>
  <div id="app1">
    <div>计数器：{{ sCounter }}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ length }}</p>
    <p>{{ height }}</p>
    <p>{{ counter }}</p>
    <p>{{ sLength }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

//hook
import { useStore } from 'vuex';
import { computed } from 'vue';
import useState from './hooks/useState';

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
    // const mappedStates = useState([
    //   'counter',
    //   'name',
    //   'age',
    //   'length',
    //   'height',
    // ]);

    //传对象 写法
    const mappedStates = useState({
      sCounter: (state) => state.counter,
      sLength: (state) => state.length,
    });

    return {
      ...mappedStates,
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
