<!--
 * @Author: your name
 * @Date: 2021-04-02 14:05:48
 * @LastEditTime: 2021-07-06 13:38:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun/qiankun-base/src/App.vue
-->
<template>
  <div id="app">
    <floatBtn ref="floatBtn" :form="form">
      <menuPart @closeMenuAndFloating="closeMenuAndFloating"></menuPart>
    </floatBtn>
    <div id="vue"></div>
    <div id="vueTinkerbell"></div>
    <div id="react"></div>
    <div id="reactBlog"></div>
    <!-- 测试 -->
  </div>
</template>

<script>
import menuPart from "./components/menuPart";
import floatBtn from "./components/flotBtn.vue";
import { start } from "qiankun";
export default {
  name: "App",
  components: { floatBtn, menuPart },
  data() {
    return {
      form: {
        themeColor: {
          hsl: { h: 200, s: 0, l: 0, a: 1 },
          hex: "#000000",
          hex8: "#000000FF",
          rgba: { r: 0, g: 0, b: 0, a: 1 },
          hsv: { h: 200, s: 0, v: 0, a: 1 },
          oldHue: 200,
          source: "hex",
          a: 1,
        },
        fontSize: 28,
      },
    };
  },
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
  methods: {
    closeMenuAndFloating() {
      this.$refs.floatBtn.closeMenuAndFloating();
    },
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>
