<template>
  <h2>当前计数{{ counter }}</h2>
  <counter-operation
    v-on:add="addOne"
    v-on:sub="subOne"
    v-on:addN="addNNum"
  ></counter-operation>
</template>

<script>
import CounterOperation from './CounterOperation.vue';
export default {
  components: {
    CounterOperation,
  },
  data: function () {
    return {
      counter: 0,
    };
  },
  methods: {
    addOne() {
      this.counter++;
    },
    subOne() {
      this.counter--;
    },
    addNNum(num) {
      console.log('addNNum', num);
      this.counter += num;
    },
  },
};
</script>

<style scoped></style>
