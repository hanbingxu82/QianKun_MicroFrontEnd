/*
 * @Author: your name
 * @Date: 2021-03-09 13:28:55
 * @LastEditTime: 2021-03-18 15:04:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/views/Messages/Messages.tsx
 */
import React, { Component } from "react";
import styles from "./Messages.module.less";
// 引入Header组件
import Header from "../../components/Header/Header";
import Music from "../../components/Music/Music";
// 引入点击回到顶部
import Gotop from "../../components/GoTop/GoTop";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import InputAdornment from "@material-ui/core/InputAdornment";
import DialogTitle from "@material-ui/core/DialogTitle";
// import Snackbar, { SnackbarOrigin } from "@material-ui/core/Snackbar";
// 引入api
import { userDetail, userLogin, msgList, addMsgList } from "../../utils/Api";
// 引入utils公有函数包
import { isEquipment, Formatup, getRandomColor,tips } from "../../utils/time";

const MaterialStyle = {
  inputWidth: {
    width: "100%",
  },
};
// 用户接口
interface Iuser {
  id: number;
  email: string;
  username: string;
  password: string;
  ip: string;
  address: string;
  istype: string | undefined | boolean;
  islogin?: boolean;
}
// 留言接口
// interface Imessage {
//   username: string;
//   parentId: number;
//   content: string;
//   psvp: string;
// }

class Messages extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      text: "", //留言内容
      open: false, //控制弹窗是否显示
      loginState: false,
      user: {
        email: "",
        username: "",
        password: "",
        ip: "",
        address: "",
        istype: "",
        islogin: false,
      },
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
      message: {
        username: "",
        parentId: 0,
        content: "",
        psvp: "",
      },
      ruleEmail: false,
      ruleUserName: false,
      rulePassword: false,
      helperEmail: " ",
      helperUsername: " ",
      helperPassword: " ",
      userInfo: {},
      msgListData: [],
      pageY: 0, // 到顶部的距离
      leftTip: "",
    };
  }
  // value留言框变更时触发事件
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    (this.state as any).message.content = event.target.value;
    this.setState({
      message: (this.state as any).message,
    });
    console.log((this.state as any).message);
  };
  /**
   * @description: 更改email  email
   * @param {React} event
   * @return {*}
   */
  handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const state: any = this.state;
    const user: Iuser = state.user;
    user.email = event.target.value;
    this.setState({
      user,
    });
  };
  handleBlurEmail = (event: any) => {
    const state: any = this.state;
    const value: string = event.target.value;
    const user: Iuser = state.user;
    // 正则校验
    if (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(value)) {
      this.setState(
        {
          ruleEmail: false,
          helperEmail: " ",
        },
        async () => {
          // 判断email是否重复
          const res: any = await userDetail({ email: state.user.email });
          if (!res.ok) {
            user.islogin = true;
            this.setState({
              user: user,
            });
          } else {
            user.islogin = false;
            this.setState({
              user: user,
            });
          }
        }
      );
    } else {
      this.setState({
        ruleEmail: true,
        helperEmail: "请填写或输入正确的邮箱！",
      });
    }
  };
  /**
   * @description: 更改账户名  username
   * @param {React} event
   * @return {*}
   */
  handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const state: any = this.state;
    const user: Iuser = state.user;
    user.username = event.target.value;
    this.setState({
      user,
    });
  };
  handleBlurUsername = (event: any) => {
    const value: string = event.target.value;
    if (value.length >= 2) {
      this.setState({
        ruleUsername: false,
        helperUsername: " ",
      });
    } else {
      this.setState({
        ruleUsername: true,
        helperUsername: "请填写超过2位的用户名！",
      });
    }
  };
  /**
   * @description: 更改密码  password
   * @param {React} event
   * @return {*}
   */
  handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const state: any = this.state;
    const user: Iuser = state.user;
    user.password = event.target.value;
    this.setState({
      user,
    });
  };
  handleBlurPassword = (event: any) => {
    const value: string = event.target.value;
    if (value.length >= 6) {
      this.setState({
        rulePassword: false,
        helperPassword: " ",
      });
    } else {
      this.setState({
        rulePassword: true,
        helperPassword: "请填写不小于6位的密码！",
      });
    }
  };

  // 弹窗关闭事件
  openClose = () => {
    this.setState({
      open: false,
    });
  };
  // 弹窗打开事件
  openOpen = () => {
    this.setState({
      open: true,
    });
  };
  /**
   * @description: 登录事件
   * @param {*}
   * @return {*}
   */
  login = async () => {

    // 获取ip  与  计算机类型
    const state: any = this.state;
    if(state.user.email&&state.user.username&&state.user.password){
      const user: Iuser = state.user;
      const userIpAd = (window as any).returnCitySN;
      const istype: boolean | "ios" | "android" | "blackberry" | "windows" | undefined = isEquipment();
      user.ip = userIpAd.cip;
      user.address = userIpAd.cname;
      user.istype = istype;
      this.setState(
        {
          user: user,
        },
        async () => {
          const res: any = await userLogin(state.user);
          if (res.ok) {
            window.localStorage.setItem("user", JSON.stringify(res.data));
            this.setState({
              loginState: true,
              userInfo: res.data,
            });
            this.openClose();
            tips('登录成功！')
          }else{
            tips('登录失败，邮箱或密码错误！')
          }
        }
      );
    }else{
      tips('请输入填写内容！')
    }

  };

  /**
   * @description: 退出事件
   * @param {*}
   * @return {*}
   */
  logoout = () => {
    window.localStorage.removeItem("user");

    this.setState({
      loginState: false,
      userInfo: {},
    });
  };
  /**
   * @description: 发表事件
   * @param {*}
   * @return {*}
   */
  enter = async () => {
    const state: any = this.state;
    // 获取当前的用户的用户名
    state.message.username = state.userInfo.username;
    this.setState({
      message: state.message,
    });
    const res: any = await addMsgList(state.message);
    if (res.ok) {
      // 发表成功后清除clear
      this.clear();
      this.getMsgList()
      document.body.scrollTop = document.documentElement.scrollTop = state.pageY;
    }else{
      tips('不支持存储表情，后续即将开放！')
    }
  };
  /**
   * @description: 清除留言框事件
   * @param {*}
   * @return {*}
   */
  clear = () => {
    const state: any = this.state;
    state.leftTip = "";
    state.message.psvp = "";
    state.message.content = "";
    state.message.parentId = 0;
    this.setState({
      leftTip: state.leftTip,
      message: state.message,
      pageY: 200,
    });
  };
  /**
   * @description: 回复函数
   * @param {*}
   * @return {*}
   */
  reply = (e: any, row: Iuser,parent?:Iuser) => {
    const state: any = this.state;
    // 获取当前也就是点击当前回复按钮人的数据
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    state.leftTip = "@" + row.username + ":";
    state.message.psvp = row.username;
    state.message.parentId = row.id;
    if(parent){
      state.message.parentId = parent.id;
    }
    this.setState({
      leftTip: state.leftTip,
      message: state.message,
      pageY: e.pageY,
    });
    // 获取当前点击的节点到顶部的距离
    // this.setState({
    //   pageY:e.pageY
    // })
  };
   componentDidMount() {
    this.getMsgList()
  }
  /**
   * @description: 获取留言数据
   * @param {*}
   * @return {*}
   */
  getMsgList = async() => {
    // const state: any = this.state;
    const res: any = await msgList();
    if (res.ok) {
      res.data.forEach((item: any) => {
        item.children = [];
        item.rgb = getRandomColor();
      });
      res.data.forEach((item: any, index: number) => {
        if (item.parentId !== 0) {
          let farr = res.data.filter((fitem: any) => {
            return fitem.id === item.parentId;
          });
          farr[0].children.push(item);
        }
      });
      // 不等于0删除
      res.data = res.data.filter((item: any) => {
        return item.parentId === 0;
      });
      this.setState({
        msgListData: res.data,
      });
    }
    const userInfo: any = window.localStorage.getItem("user");
    if (userInfo) {
      this.setState({
        loginState: true,
        userInfo: JSON.parse(userInfo),
      });
    } else {
      this.setState({
        loginState: false,
      });
    }
  };

  render() {
    const state: any = this.state;
    const props: any = this.props;
    return (
      <div>
        {/* 头部组件区 */}
        <Header active="/Messages" {...props} {...state} />
        {/* 留言板区域 */}
        <div className={styles.box}>
          <p className={styles.title}>留言板</p>
          <div className={styles.loginState}>
            {!state.loginState ? (
              <Button onClick={this.openOpen} color="primary">
                登录
              </Button>
            ) : (
              <Button onClick={this.logoout} color="secondary">
                退出
              </Button>
            )}
          </div>
          <TextField
            InputProps={{
              startAdornment: <InputAdornment position="start">{state.leftTip}</InputAdornment>,
            }}
            className={props.classes.inputWidth}
            size="small"
            value={state.message.content}
            onChange={this.handleChange}
            label={state.userInfo.username || "先登录吧！"}
            multiline
            rows={4}
            variant="outlined"
          />
          {state.loginState ? (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button onClick={this.enter} color="secondary">
                发表
              </Button>
              <Button onClick={this.clear} color="secondary">
                清空
              </Button>
            </div>
          ) : (
            ""
          )}
          {/* 留言内容区域 */}
          <div className={styles.msgBox}>
            {state.msgListData.map((item: any, index: number) => {
              return (
                <div key={item.id} className={styles.msgItem}>
                  <p>{state.msgListData.length - index}楼</p>
                  <div className={styles.msg}>
                    <div>
                      <span className={styles.name} style={{ backgroundColor: item.rgb }}>
                        {item.username.substr(0, 1)}
                      </span>
                    </div>
                    <div className={styles.right}>
                      <div>
                        <span className={styles.nameTitle}>{item.username}</span> <span className={styles.dates}>{Formatup(item.createTime)}</span>
                      </div>
                      <div className={styles.msgContent}>{item.content}</div>
                      <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span
                          onClick={(event) => {
                            this.reply(event, item);
                          }}
                          className={styles.huifu}
                        >
                          回复
                        </span>
                      </div>
                      {/* 如果有回复 */}
                      {item.children.map((itemChildren: any, indexChildren: number) => {
                        return (
                          <div key={itemChildren.id} className={styles.msg}>
                            <div>
                              <span className={styles.name} style={{ backgroundColor: itemChildren.rgb }}>
                                {itemChildren.username.substr(0, 1)}
                              </span>
                            </div>
                            <div className={styles.right}>
                              <div>
                                <span className={styles.nameTitle}>{itemChildren.username}</span> <span className={styles.dates}>{Formatup(itemChildren.createTime)}</span>
                              </div>
                              <div className={styles.msgContent}>
                                <span style={{ color: "#948c76" }}>@{itemChildren.psvp}:&nbsp;&nbsp;</span>
                                {itemChildren.content}
                              </div>
                              <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                <span
                                  className={styles.huifu}
                                  onClick={(event) => {
                                    this.reply(event, itemChildren,item);
                                  }}
                                >
                                  回复
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* 底部备案号 */}
        <div>
          <p className={styles.bottomp}>
            © SmallTinkerbell | <a href="http://www.miitbeian.gov.cn">蜀ICP备200008xx号</a>
          </p>
        </div>
        <Music />
        <Gotop />

        {/* 弹窗区域 */}
        <Dialog fullWidth={true} maxWidth={"sm"} open={state.open} keepMounted onClose={this.openClose} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
          <DialogTitle id="alert-dialog-slide-title">{"登录"}</DialogTitle>
          <DialogContent>
            <div className={styles.contentdiv}>
              <TextField error={state.ruleEmail} helperText={state.helperEmail} className={props.classes.inputWidth} size="small" required value={state.user.Email} onChange={this.handleChangeEmail} onBlur={this.handleBlurEmail} label="Email" variant="outlined" />
              <TextField error={state.ruleUsername} helperText={state.helperUsername} className={props.classes.inputWidth} size="small" required value={state.user.username} onChange={this.handleChangeUsername} onBlur={this.handleBlurUsername} label="用户名" variant="outlined" />
              <TextField type="password" error={state.rulePassword} helperText={state.helperPassword} className={props.classes.inputWidth} size="small" required value={state.user.password} onChange={this.handleChangePassword} onBlur={this.handleBlurPassword} label="密码" variant="outlined" />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.login} color="primary">
              登录
            </Button>
            <Button onClick={this.openClose} color="primary">
              取消
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(MaterialStyle)(Messages);
