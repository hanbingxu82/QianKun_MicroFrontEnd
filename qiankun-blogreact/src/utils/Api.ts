/*
 * @Author: your name
 * @Date: 2021-03-15 11:07:58
 * @LastEditTime: 2021-03-18 16:09:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/utils/Api.ts
 */
import service from "./Axios";

export const imgURL: string = service.imgURL;
export const baseURL:string  = service.baseURL

// 获取首页博客数据
export const blogList = (params: object = {}) => {
  return service.get("/blogList", params);
};

// 根据博客id 获取 单挑博客数据
export const blogDetail = (params: object = {}) => {
  return service.get("/blogDetail", params);
};
// 查询是否注册接口
export const userDetail = (params: object = {}) => {
  return service.post("/userDetail", params);
};

// 登录接口
export const userLogin = (params: object = {}) => {
  return service.post("/userLogin", params);
};

// 获取留言列表接口
export const msgList = (params: object = {}) => {
  return service.get("/msgList", params);
};

// 新增留言接口
export const addMsgList = (params:object={})=>{
  return service.post('/addMsgList',params)
}
