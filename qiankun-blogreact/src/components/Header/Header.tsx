/*
 * @Author: your name
 * @Date: 2021-03-07 09:55:48
 * @LastEditTime: 2021-03-15 15:59:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/components/Header/Header.tsx
 */
import React, { Component } from "react";
import author from "../../assets/images/author.jpeg";
import styles from "./Header.module.less";
interface Istate {
  nav: string;
  href: string;
}
class Header extends Component {
  constructor(props: any) {
    super(props);
    console.log(props)
  }
  goNav=(nav:string)=>{
    const props:any = this.props
    console.log(nav)
    props.history.push({pathname:nav})
  }
  render() {
    const props:any = this.props;
    return (
      <div className={styles.box}>
        {/* header头像部门 */}
        <div className={styles.header}>
          <img className={styles.img} src={author} alt="" />
        </div>
        {/* 名称部分 */}
        <div className={styles.name}>
          <p className={styles.p}>SmallTinkerbell</p>
        </div>
        {/* 简历  点滴  留言部分 */}
        <div className={styles.nav}>
          {props.navName.map((item: Istate) => {
            return <div onClick={()=>{this.goNav(item.href)}} key={item.href} style={props.active===item.href?{textDecoration:'underline'}:{}}>{item.nav}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Header;
