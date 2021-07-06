/*
 * @Author: your name
 * @Date: 2021-04-02 14:05:48
 * @LastEditTime: 2021-07-06 11:58:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun/qiankun-base/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main';
import App from '../App.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'App',
        component: App,
        redirect:'/main/reactBlog'
    },
    {
        path: '/main',
        name: 'Main',
        component: Main,
        children: [
        ]
    },
    {
        path: '/main/*',
        name: 'main',
        component: App,
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router