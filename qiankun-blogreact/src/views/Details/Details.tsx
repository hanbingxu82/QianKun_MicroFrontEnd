/*
 * @Author: your name
 * @Date: 2021-03-08 14:09:04
 * @LastEditTime: 2021-03-18 15:03:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/views/Details/Deatils.tsx
 */
import React, { Component } from "react";
import styles from "./Details.module.less";

// 引入Header组件
import Header from "../../components/Header/Header";
import { blogDetail, } from "../../utils/Api";
// 引入转换年月日时分秒函数
import {Format} from "../../utils/time";

// 引入点击回到顶部
import Gotop from "../../components/GoTop/GoTop";

class Details extends Component {
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
      detailData: {
        title:'',
        content:'',
        details:'',
        img:'',
        createTime:''
      },
    };
  }
  async componentDidMount() {
    // 获取sessionStorage
    const detailsId: string | null = window.sessionStorage.getItem("detailsId");
    //  发请求根据id获取当前数据
    const res: any = await blogDetail({ id: detailsId });
    if (res.code === 200) {
      let date = new Date(res.data.createTime).getTime()
      res.data.createTime = Format(date)
      this.setState({
        detailData: res.data,
      });
    }
  }
  render() {
    const state: any = this.state;
    const props: any = this.props;
    return (
      <div>
        {/* 头部组件区 */}
        <Header {...props} active="/" {...state} />
        {/* 中部内容区 */}
        <div className={styles.box}>
          {/* 标题 */}
          <div className={styles.title}>{state.detailData.title}</div>
          {/* 详情 */}
          <div className={styles.details}>{state.detailData.details}</div>
          {/* 内容区 */}
          <div className={styles.content} dangerouslySetInnerHTML={{__html:state.detailData.content}}>
              {/* <p>
                <strong>服务器上线</strong>
              </p>
              <ol>
                <li>
                  下载putty&nbsp;
                  <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" rel="noopener noreferrer" target="_blank">
                    https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html
                  </a>
                </li>
                <li>输入ip登陆</li>
                <li>查看硬盘挂载 fdisk -l</li>
                <li>查看硬盘使用情况 df -h</li>
                <li>退出putty命令行 ctrl+D</li>
              </ol>
              <p>
                <strong>权限配置</strong>
              </p>
              <ol>
                <li>增加用户 adduser username</li>
                <li>给新角色赋予权限 gpasswd -a username sudo</li>
                <li>进入权限编辑页面 sudo visudo 输入 username ALL=(ALL:ALL) ALL</li>
              </ol>
              <p>
                <strong>ssh无密码登陆 在本地电脑</strong>
              </p>
              <ol>
                <li>进入本地电脑 用户盘根目录 查找.ssh文件夹</li>
                <li>
                  生成私钥(id_rsa) 公钥(id_rsa.pub) ssh-keygen -t rsa -b 4096 -C "
                  <a href="mailto:718352984@qq.com" rel="noopener noreferrer" target="_blank">
                    xxxx@xx.com
                  </a>
                  " git bash 命令行内
                </li>
                <li>开启ssh代理 输入 eval "$(ssh-agent -s)"</li>
                <li>加入代理中 ssh-add ~/.ssh/id_rsa</li>
              </ol>
              <p>
                <strong>登陆远程服务器</strong>
              </p>
              <ol>
                <li>重复 (ssh无密码登陆)</li>
                <li>创建授权文件 在.ssh目录下 vi authorized_keys</li>
                <li>生成授权文件 shift + : 输入wq! 回车,在.ssh文件下生成 authorized_keys 文件</li>
              </ol>
              <p>
                <strong>本地电脑公钥放至服务器</strong>
              </p>
              <ol>
                <li>本地电脑.ssh文件下 cat id_rsa.pub 复制文件内容</li>
              </ol>
              <p>
                <strong>在服务器</strong>
              </p>
              <ol>
                <li>vi authorized_keys 按 i 进入插入模式,粘贴刚才复制的内容,然后esc shift+: 输入wq!保存成功</li>
                <li>授权文件 chmod 600 authorized_keys</li>
                <li>重启ssh服务 sudo service ssh restart</li>
              </ol>
              <p>
                <strong>安全 bash 登陆新建的账号</strong>
              </p>
              <ol>
                <li>sudo vi /etc/ssh/sshd_config</li>
                <li>按i进入编辑模式，将port 修改</li>
                <li>加入 UseDNS no</li>
                <li>加入 AllowUsers redspite</li>
                <li>esc然后输入wq!保存</li>
                <li>sudo service ssh restart 用 ssh redspite@ip直接登陆</li>
              </ol>
              <p>
                <strong>增强安全</strong>
              </p>
              <ol>
                <li>升级 sudo apt-get update &amp;&amp; sudo apt-get upgrade</li>
                <li>删除 iptables 指令</li>
                <li>vi /etc/iptables.up.rules</li>
                <li>sudo iptables-restore &lt; /etc/iptables.up.rules [ *filter</li>
              </ol>
              <pre >#allow all connections -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT #allow out traffic -A OUTPUT -j ACCEPT #allow http https -A INPUT -p tcp --dport 443 -j ACCEPT -A INPUT -p tcp --dport 80 -j ACCEPT #allow ssh port login -A INPUT -p tcp -m state --state NEW --dport 39999 -j ACCEPT #ping -A INPUT -p icmp -m icmp --icmp-type 8 -j ACCEPT #log denied calls -A INPUT -m limit --limit 5/min -j LOG --log-prefix "iptables denied:" --log-level 7 #reject all other inbound -A INPUT -j REJECT -A FORWARD -j REJECT COMMIT ]</pre>
              <p>
                <strong>nodejs环境搭建</strong>
              </p>
              <ol>
                <li>安装 sudo apt-get install vim openssl build-essential libssl-dev wget curl git</li>
                <li>
                  安装 vim github搜nvm,执行 wget -qO-&nbsp;
                  <a href="https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh" rel="noopener noreferrer" target="_blank">
                    https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh
                  </a>
                  &nbsp;| bash
                </li>
                <li>安装nodejs nvm install 10.15.1</li>
                <li>指定版本 nvm use 10.15.1</li>
                <li>nvm alias default v10.15.1</li>
                <li>
                  设置淘宝镜像 npm --registry=
                  <a href="https://registry.npm.taobao.org/" rel="noopener noreferrer" target="_blank">
                    https://registry.npm.taobao.org
                  </a>
                  &nbsp;install -g npm
                </li>
                <li>echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf &amp;&amp; sudo sysctl -p</li>
              </ol>
              <p>
                <strong>小tips</strong>
              </p>
              <ol>
                <li>nodemon当文件内容改变时，可以热更新后端代码。PM2与nodemon效果类似，pm2更多用于生产环境，当系统崩溃时可以自动重启</li>
                <li>pm2 logs 查看日志</li>
              </ol>
              <p>
                <strong>安装nginx</strong>
              </p>
              <ol>
                <li>更新服务器软件 sudo apt-get update</li>
                <li>安装nginx代理 sudo apt-get install nginx</li>
                <li>停止apache sudo service apache stop</li>
                <li>卸载apache update-rc.d -f apache2 remove</li>
                <li>sudo apt-get remove apache2</li>
                <li>在conf.d文件夹下生产自己的 conf文件</li>
                <li>重启 nginx ： sudo nginx -s reload</li>
                <li>强行停止nginx : pkill -9 nginx</li>
                <li>因此nginx 版本 sudo vi nginx.conf http下 server_tokens off;</li>
              </ol>
              <p>
                <strong>安装mongodb</strong>
              </p>
              <ol>
                <li>
                  <a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/" rel="noopener noreferrer" target="_blank">
                    https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
                  </a>
                </li>
                <li>开启mongo服务 sudo service mongod start</li>
                <li>修改mongodb默认端口 sudo vi /etc/mongod.conf 修改port 为19999，安全组里加19999端口</li>
                <li>启动mongod服务 mongo --port 19999</li>
              </ol>
              <p>
                <strong>上传文件到服务器</strong>
              </p>
              <ol>
                <li>压缩文件夹 tar -cvf reacteg.tar.gz reactEg</li>
                <li>scp -P 39999 ./reacteg.tar.gz redspite@39.98.181.179:/home/redspite/upload/</li>
                <li>解压文件夹 tar -xvf reacteg.tar.gz -C /reactEg</li>
              </ol> */}
          </div>
          {/* 时间 */}
          <div className={styles.date}>{state.detailData.createTime}</div>
        </div>
        {/* 底部备案号 */}
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

export default Details;
