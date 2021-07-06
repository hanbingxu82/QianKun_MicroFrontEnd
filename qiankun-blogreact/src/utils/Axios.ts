/*
 * @Author: your name
 * @Date: 2021-03-15 11:07:44
 * @LastEditTime: 2021-03-18 16:10:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/utils/axios.js
 */
import axios from "axios"
import qs from "qs"
// 引入element 按需引消息提示
// import { Message } from 'element-ui'
// 请求 接口地址
const baseURL = 'http://localhost:3001'
// // 请求 上传图片地址
// const upImgURL = 'https://kunliyuan.utools.club/kly/admin/uploadFile/upload'
// // 读取图片地址
const imgURL = 'http://localhost:3001'
const service = axios.create({
  baseURL,
  timeout: 30000,
  withCredentials: true,
})
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 增添token
    config.headers["Content-Type"] = "application/x-www-form-urlencoded"
    // loadingInstance = Loading.service({
    //   lock: true,
    //   text: "Loading",
    //   spinner: "el-icon-loading",
    //   background: "rgba(0, 0, 0, 0.7)",
    // })
    // config.headers.Authorization = localStorage.getItem('logintoken') || ''
    return config
  },
  (err) => {
    // loadingInstance.close()
    Promise.reject(err)
  }
)
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // else if (response.data.code !== 200) {
    //   Message.error(response.data.msg || '接口请求错误', 2000)
    // }
    // 以服务的方式调用的 Loading 需要异步关闭
    // 每次请求时-- 主要时用于判断当前共请求了多少次，如果返还的次数不等于请求的次数的话就不会进入这个条件
    // 只有当所有数据全返还时，才会关闭loading效果
    // if (requestNum <= 0) {
    //   loadingInstance.close()
    //   requestNum = 0
    // }
    // 如果正常直接返回对应data请求数据
    return response.data
  },
  (err) => {
    // 如果请求一旦出现问题 requestNum = 0 loadingInstance.close();
    // Message({
    //   message: "服务器错误，请及时联系管理员！",
    //   type: "error",
    // })
    // 如果请求一旦出现问题 requestNum = 0 loadingInstance.close();
    // loadingInstance.close()
    return Promise.reject(err)
  }
)

// 封装get请求
const get = (url:string, params:object) => {
  // service.get(url, {
  //   params: params
  // })
  return service({
    url: url,
    method: "get",
    params: params,
  })
}
// 封装post请求
const post = (url:string, data:object) => {
  return service({
    url: url,
    method: "post",
    headers: { "Content-type": "application/json" },
    data: JSON.stringify(data),
  })
}
// 封装de请求
const login = (url:string, data:object) => {
  return service({
    url: url,
    method: "post",
    headers: { "Content-type": "application/x-www-form-urlencoded" },
    data: qs.stringify(data),
  })
}
const upload = (url:string, data:object) => {
  service({
    method: "post",
    url: url,
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    data: data,
  })
}

//eslint-disable-next-line
export default {
  get,
  post,
  login,
  upload,
  imgURL,
  baseURL,
  axios
}
