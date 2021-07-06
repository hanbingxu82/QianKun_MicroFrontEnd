/*
 * @Author: your name
 * @Date: 2021-04-02 14:05:48
 * @LastEditTime: 2021-07-06 10:35:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun/qiankun-vue/vue.config.js
 */
module.exports = {
    publicPath: '/childapps/vueApp/',
    lintOnSave: false,  // 关闭eslint检测
    devServer: {
        port: 9527,//这里的端口是必须和父应用配置的子应用端口一致
        headers: {
            //因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域
            'Access-Control-Allow-Origin': '*'
        }
    },
   
    configureWebpack: {
        output: {
            //资源打包路径
            library: 'vueApp',
            libraryTarget: 'umd',
            jsonpFunction:`webpackJsonp_vueApp`,
            globalObject :'window'
            
        }
    }
}