/*
 * @Author: your name
 * @Date: 2021-04-02 14:05:48
 * @LastEditTime: 2021-07-05 16:27:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun/qiankun-vue/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "tinkerbell-ui/lib/tinkerbell-ui.css";
import TinkerbellUI from "tinkerbell-ui";
Vue.use(TinkerbellUI);
import Demo from "./components/Demo.vue";

Vue.component(Demo.name, Demo);
// Vue.config.productionTip = false

import "highlight.js/styles/github.css"; // 代码高亮的样式
import hljs from "highlight.js";
Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});

let instance = null;
function render(props) {
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#tinkerbellapp"); // 这里是挂载到自己的html中  基座会拿到这个挂载后的html 将其插入进去
}

if (window.__POWERED_BY_QIANKUN__) {
  // 动态添加publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
if (!window.__POWERED_BY_QIANKUN__) {
  // 默认独立运行
  render();
}

// 父应用加载子应用，子应用必须暴露三个接口：bootstrap、mount、unmount
// 子组件的协议就ok了
export async function bootstrap(props) {}

export async function mount(props) {
  // 加了true之后，会自动调取前面这个回调方法，这样可以拿到主应用(基座)修改的值
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
  }, true);

  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange;
  Vue.prototype.$setGlobalState = props.setGlobalState;

  render(props);
}

export async function unmount(props) {
  instance.$destroy();
}
