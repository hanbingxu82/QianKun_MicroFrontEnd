/*
 * @Author: your name
 * @Date: 2021-04-02 14:05:48
 * @LastEditTime: 2021-07-06 10:53:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun/qiankun-base/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import less from "less";
import Vuex from "vuex";
// 引入乾坤
import { registerMicroApps, start, initGlobalState } from "qiankun";
import store from "./store/store";

Vue.use(ElementUI);
Vue.use(less);
Vue.use(Vuex);

let propsData = {
  sex: "男",
  age: 18,
  userName: "小东",
};
const actions = initGlobalState(propsData);
// 主项目项目监听和修改(在项目中任何需要监听的地方进行监听)
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log("改变前的值 ", prev);
  console.log("改变后的值 ", state);
  for (let key in state) {
    propsData[key] = state[key];
  }
});
// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key) => {
  // 有key，表示取globalState下的某个子级对象
  // 无key，表示取全部
  return key ? propsData[key] : propsData;
};
// 将actions对象绑到Vue原型上，为了项目中其他地方使用方便
Vue.prototype.$actions = actions;

const apps = [
  {
    name: "vueApp", // 应用的名字
    entry: "/childapps/vueApp/", // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: "#vue", // 容器名
    activeRule: "/main/vue", // 激活的路径
    props: {
      getGlobalState: propsData, // 下发getGlobalState方法
    },
  },
  {
    name: "reactApp",
    entry: "/childapps/reactApp/", // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: "#react",
    activeRule: "/main/react",
    props: {
      getGlobalState: propsData, // 下发getGlobalState方法
    },
  },
  {
    name: "reactAppBlog",
    entry: "/childapps/reactAppBlog/", // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: "#reactBlog",
    activeRule: "/main/reactBlog",
    props: {
      getGlobalState: propsData, // 下发getGlobalState方法
    },
  },
  {
    name: "vueAppTinkerbell",
    entry: "/childapps/vueAppTinkerbell/", // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: "#vueTinkerbell",
    activeRule: "/main/vueTinkerbell",
    props: {
      getGlobalState: propsData, // 下发getGlobalState方法
    },
  },
];
registerMicroApps(apps); // 注册应用
start({
  prefetch: false, // 取消预加载
}); // 开启

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
