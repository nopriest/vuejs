<template>
  <MainBanner></MainBanner>
  <MainProductList></MainProductList>
</template>

<script>
import MainBanner from './MainBanner.vue';
import MainProductList from './MainProductList.vue';

export default {
  components: {
    MainBanner,
    MainProductList,
  },
};
</script>

<style scoped></style>
