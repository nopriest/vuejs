<template>
  <div>
    <button @click="increment">+1</button>
    <button v-on:click="decrement">-1</button>
    <button v-on:click="incrementN">+n</button>
    <p>要加多少：</p>
    <input type="text" v-model.number="num" />
  </div>
</template>

<script>
export default {
  //emits数组写法
  //emits: ['add', 'sub', 'addN'],
  //emits对象写法 目的是参数验证
  emits: {
    add: null,
    sub: null,
    addN: (num) => {
      if (num > 10) {
        return true; //这里不满足大于10会有黄字警告
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    increment: function () {
      console.log('increment');
      this.$emit('add');
    },
    decrement() {
      console.log('decrement');
      this.$emit('sub');
    },
    incrementN() {
      console.log('incrementN');
      this.$emit('addN', this.num);
    },
  },
};
</script>

<style scoped></style>
