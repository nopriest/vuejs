<template>
  <div id="app1">
    <div>计数器：</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ length }}</p>
    <p>{{ height }}</p>
    <!-- <div>{{ fullName }}</div> -->
    <p>{{ sCounter }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

//hook
import { useStore } from 'vuex';
import { computed } from 'vue';

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
    const store = useStore();
    const sCounter = computed(() => store.state.counter);

    const mappedStateFns = mapState([
      'counter',
      'name',
      'age',
      'length',
      'height',
    ]);

    const mappedStates = {};
    Object.keys(mappedStateFns).forEach((fnKey) => {
      const fn = mappedStateFns[fnKey].bind({ $store: store });
      mappedStates[fnKey] = computed(fn);
    });

    return {
      sCounter,
      //...mappedStateFns,
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
