/*
 * @Author: your name
 * @Date: 2021-04-02 14:05:48
 * @LastEditTime: 2021-07-06 10:45:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun/qiankun-vue/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/main/vue/'
  },
  {
    path: '/main/vue/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main/vue/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  // base: window.__POWERED_BY_QIANKUN__ ? '/' : '/childapps/vueApp/',
  routes
})

export default router