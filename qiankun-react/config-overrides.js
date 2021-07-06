/*
 * @Author: your name
 * @Date: 2021-04-02 14:05:48
 * @LastEditTime: 2021-07-06 10:36:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun/qiankun-react/config-overrides.js
 */
module.exports = {
    webpack: (config) => {
        config.output.library = 'reactApp';
        config.output.libraryTarget = 'umd';
        config.output.publicPath= '/childapps/reactApp/';
        config.output.jsonpFunction=`webpackJsonp_reactApp`;
        config.output.globalObject = 'window';
        return config;
    },
    devServer: (configFunction) => {
        return function (proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
            config.headers = {
                "Access-Control-Allow-Origin": '*'
            }
            return config
        }
    }
}