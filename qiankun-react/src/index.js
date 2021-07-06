/*
 * @Author: your name
 * @Date: 2021-04-02 14:05:48
 * @LastEditTime: 2021-07-05 10:20:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun/qiankun-react/src/index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {}
export async function mount(props) {
  render();
  console.log(props);
}
export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById("root")); // 卸载节点
}
