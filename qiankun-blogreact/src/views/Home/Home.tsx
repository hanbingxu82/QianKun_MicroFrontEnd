/*
 * @Author: your name
 * @Date: 2021-03-05 16:38:08
 * @LastEditTime: 2021-03-17 13:06:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/component/Home/Home.tsx
 */

import React, { Component } from "react";

import styles from "./Home.module.less";

// 引入Header组件
import Header from "../../components/Header/Header";

// 引入转换年月日时分秒函数
import {Format} from "../../utils/time";

import { blogList,imgURL } from "../../utils/Api";

// 引入点击回到顶部
import Gotop from "../../components/GoTop/GoTop";

interface IdetailData{
  title:string;
  content:string;
  details:string;
  img:string;
  createTime:string;
}
class Home extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      navName: [
        {
          nav: "简历",
          href: "/Resumes",
        },
        {
          nav: "点滴",
          href: "/",
        },
        {
          nav: "留言",
          href: "/Messages",
        },
      ],
      blogListData: [],
    };
  }
  async componentDidMount() {
    // 生命周期获取数据
    const res: any = await blogList();
    if (res.code === 200) {
      res.data.forEach((item:IdetailData)=>{
        let date = new Date(item.createTime).getTime()
        item.createTime = Format(date,"yyyy-MM-dd")
      })
      this.setState({
        blogListData: res.data,
      });
    }else{
      console.log('查询失败')
    }
  }
  /**
   * @description: 跳转详情路由
   * @param {*}
   * @return {*}
   */
  goDetails = (id: string) => {
    const props: any = this.props;
    window.sessionStorage.setItem("detailsId", id);
    props.history.push({ pathname: "/Details" });
  };
  login = () => {};
  render() {
    const state: any = this.state;
    const props: any = this.props;
    return (
      <div>
        <Header active="/" {...state} {...props} />
        {state.blogListData.map((item: any) => {
          /* 内容区域 */ console.log(item);
          return (
            <div key={item.id} className={styles.box}>
              {/* 左侧线 */}
              <div className={styles.leftLine}>
                <span className={styles.circle}></span>
                <div className={styles.line}></div>
              </div>
              {/* 右侧内容区域 */}
              <div className={styles.rightContent}>
                {/* 内容显示区--日期显示标题头 */}
                <div
                  className={styles.dates}
                  onClick={() => {
                    this.goDetails(item.id);
                  }}
                >
                  <span className={styles.trig}></span>
                  <span className={styles.date}>{item.createTime}</span>
                </div>
                {/* 内容显示区--标题内容 */}
                <div className={styles.title}>
                  <p
                    className={styles.p}
                    onClick={() => {
                      this.goDetails(item.id);
                    }}
                  >
                    {item.title}
                  </p>
                </div>
                {/* 内容显示区--图片区 */}
                <div className={styles.imgs}>
                  <img src={imgURL+item.img} alt="" />
                </div>
                {/* 内容显示区--详情内容 */}
                <div className={styles.details}>
                  <p className={styles.p}>{item.details}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div>
          <p className={styles.bottomp}>
            © SmallTinkerbell | <a href="http://www.miitbeian.gov.cn">蜀ICP备200008xx号</a>
          </p>
        </div>
        <Gotop />
      </div>
    );
  }
}

export default Home;
