/*
 * @Author: your name
 * @Date: 2021-03-05 15:39:30
 * @LastEditTime: 2021-07-06 13:38:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/index.tsx
 */
// import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
// 测试提交   111132
import { HashRouter, Switch, Route } from "react-router-dom";
import routers from './router';
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   // <React.StrictMode> 关闭严格模式
//     <HashRouter>
//       <Switch>
//         {routers.map((v) => (
//           <Route key={v.path} path={v.path} exact={v.exact} component={v.component} />
//         ))}
//       </Switch>
//     </HashRouter>
//   // </React.StrictMode>
//   ,
//   document.getElementById("root")
// );

function render() {
  ReactDOM.render(
    // <React.StrictMode> 关闭严格模式
      <HashRouter>
        <Switch>
          {routers.map((v) => (
            <Route key={v.path} path={v.path} exact={v.exact} component={v.component} />
          ))}
        </Switch>
      </HashRouter>
    // </React.StrictMode>
    ,
    document.getElementById("root")
  );
}
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() { } 
export async function mount(props: any) {
  render();
  console.log(props);
}
export async function unmount() {
  ReactDOM.unmountComponentAtNode((document.getElementById("root") as any)); // 卸载节点
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


reportWebVitals();
