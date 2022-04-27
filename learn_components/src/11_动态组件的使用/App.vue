<template>
  <div>
    <button
      v-for="item in tabs"
      :key="item"
      @click="itemClick(item)"
      :class="{ active: currentTab === item }"
    >
      {{ item }}
    </button>

    <!-- v-if判断实现动态组件 -->
    <!-- <template v-if="currentTab === 'home'">
      <home></home>
    </template>
    <template v-if="currentTab === 'about'">
      <about></about>
    </template>
    <template v-if="currentTab === 'category'">
      <category></category>
    </template> -->

    <!-- 内置组件component实现动态组件     -->
    <component :is="currentTab"></component>
  </div>
</template>

<script>
import Home from './pages/Home.vue';
import Category from './pages/Category.vue';
import About from './pages/About.vue';
export default {
  components: {
    Home,
    Category,
    About,
  },
  data() {
    return {
      tabs: ['home', 'category', 'about'],
      currentTab: 'home',
    };
  },
  methods: {
    itemClick(item) {
      this.currentTab = item;
    },
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>
