<!--
 * @Author: your name
 * @Date: 2021-04-02 14:05:48
 * @LastEditTime: 2021-07-06 12:24:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun-tinkerbell/src/App.vue
-->
<template>
  <div id="tinkerbellapp">
    <Nav />
    <router-view />
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";
export default {
  data() {
    return {};
  },
  components: { Nav },
  created() {},
  methods: {},
};
</script>

<style lang="less">
// body{
//   overflow: hidden;
// }
#tinkerbellapp{
  height: 100vh;
}
</style>
