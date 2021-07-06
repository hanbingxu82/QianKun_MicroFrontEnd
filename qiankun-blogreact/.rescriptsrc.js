/*
 * @Author: your name
 * @Date: 2021-07-05 11:21:58
 * @LastEditTime: 2021-07-05 17:01:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun/qiankun-blogreact/.rescriptsrc.js
 */
const { name } = require("./package");
module.exports = {
  // webpack: (config) => {
  //   config.output.library = `${name}-[name]`;
  //   config.output.libraryTarget = "umd";
  //   config.output.jsonpFunction = `webpackJsonp_${name}`;
  //   config.output.globalObject = "window";
  //   return config;
  // },

  devServer: (_) => {
    const config = _;
    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};
