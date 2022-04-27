<template>
  <!-- 通过props传递数据 -->
  <!-- $attrs 传递到子组件的根节点 -->
  <!-- 子组件是多根节点的要指定接收的根节点 -->
  <show-message
    id="123"
    class="nb"
    title="哈哈哈"
    message="信息"
    messageInfo=""
  ></show-message>
  <show-message title="哈哈哈2" message="信息2"></show-message>
  <show-message v-bind:title="title" v-bind:message="message"></show-message>

  <!-- 传的值是一个对象的各种写法 -->
  <show-message :title="obj.title" :message="obj.message"></show-message>
  <show-message v-bind="obj"></show-message>
  <show-message :="obj"></show-message>

  <multi-root-element id="456"></multi-root-element>
</template>

<script>
import ShowMessage from './ShowMessage.vue';
import MultiRootElement from './MultiRootElement.vue';
export default {
  components: {
    ShowMessage,
    MultiRootElement,
  },
  data: function () {
    return {
      title: '标题',
      message: '这是一条消息',
      obj: {
        title: 'obj中的title',
        message: 'obj中的message',
      },
    };
  },
};
</script>

<style scoped></style>
