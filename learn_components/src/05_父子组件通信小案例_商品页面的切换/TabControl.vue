<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-bind:class="{ active: currentIndex === index }"
      v-for="(title, index) in titles"
      v-bind:key="title"
      v-on:click="itemClick(index)"
    >
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('eventItemClick', index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
}

.tab-control-item {
  flex: 1;
  text-align: center;
}

.tab-control-item.active {
  color: red;
}

.tab-control-item.active span {
  border-bottom: 3px solid red;
  padding: 5px 10px;
}
</style>
