<template>
  <div>
    <!-- [Vue warn]: Property "title" was accessed during render but is not defined on instance.   at <ChildCpn>   at <App> -->
    <!-- <child-cpn>{{ title }}</child-cpn> -->

    <!-- 自定义插入插槽的dom元素 -->
    <!-- 独占默认插槽拆开写 -->
    <show-fruits v-bind:fruits="fruits">
      <template v-slot="fruit">
        <button>{{ fruit.item }}--{{ fruit.index }}</button>
      </template>
    </show-fruits>
    <!-- 独占默认插槽简写 -->
    <show-fruits :fruits="fruits" v-slot="entry">
      <h2>{{ entry.item }}++{{ entry.index }}</h2>
    </show-fruits>

    <!-- 有其他具名插槽 必须都分开写  具名插槽v-slot:名字="xxx" 简写成 #名字="xxx" 不具名插槽就是v-slot="xxx" xxx就是指绑定的属性集名称 -->
    <show-fruits :fruits="fruits">
      <template v-slot="entry2">
        <button>{{ entry2.item }}</button>
      </template>
      <template #why="entry">
        <p>{{ entry.item }} of {{ entry.index }}</p>
      </template>
    </show-fruits>
  </div>
</template>

<script>
import ChildCpn from './ChildCpn.vue';
import ShowFruits from './ShowFruits.vue';
export default {
  components: {
    ChildCpn,
    ShowFruits,
  },
  data: function () {
    return {
      fruits: ['苹果', '橘子', '香蕉', '樱桃'],
    };
  },
};
</script>

<style scoped></style>
