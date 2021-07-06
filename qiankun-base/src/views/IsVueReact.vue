<!--
 * @Author: your name
 * @Date: 2021-07-05 13:16:29
 * @LastEditTime: 2021-07-05 15:43:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun/qiankun-base/src/views/IsVueReact.vue
-->
<template>
  <div class="IsVueReact">
    <floatBtn ref="floatBtn" :form="form">
      <menuPart @closeMenuAndFloating="closeMenuAndFloating"></menuPart>
    </floatBtn>
    <div style="width:40%;height:100%;">
      <div class="App">
        <header class="App-header">
          <img src="../assets/logo.png" class="Vue-logo" alt="logo" />
          <p>Go <code>Tinkerbell-ui</code> .</p>
          <a class="App-link" href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">
            Learn Vue
          </a>
        </header>
      </div>
    </div>
    <div style="width:40%;height:100%;">
      <div class="App">
        <header class="App-header">
          <img src="../assets/logo.svg" class="App-logo" alt="logo" />
          <p>Go <code>Tinkerbell-blog</code> .</p>
          <a class="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
// import menuPart from "./components/menuPart";
// import floatBtn from "./components/flotBtn";
export default {
  name: "IsVueReact",
  components: { floatBtn, menuPart },
  data() {
    return {
      props: {
        msg: "Vue欢迎您！",
      },
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
  methods: {
    closeMenuAndFloating() {
      this.$refs.floatBtn.closeMenuAndFloating();
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.IsVueReact {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #282c34;
}
.App {
  text-align: center;
}
.Vue-logo {
  height: 32vmin;
  margin: 4vmin;
}
.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
