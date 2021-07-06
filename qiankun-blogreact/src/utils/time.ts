/*
 * @Author: your name
 * @Date: 2021-03-15 16:23:20
 * @LastEditTime: 2021-03-18 13:32:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/utils/time.ts
 */
// 转换年月日时分秒函数
export const Format = (datetime: any, fmt = "yyyy-MM-dd hh:mm:ss") => {
  if (parseInt(datetime) === datetime) {
    if (datetime.length === 10) {
      datetime = parseInt(datetime) * 1000;
    } else if (datetime.length === 13) {
      datetime = parseInt(datetime);
    }
  }
  datetime = new Date(datetime);
  let o: any = {
    "M+": datetime.getMonth() + 1, //月份
    "d+": datetime.getDate(), //日
    "h+": datetime.getHours(), //小时
    "m+": datetime.getMinutes(), //分
    "s+": datetime.getSeconds(), //秒
    "q+": Math.floor((datetime.getMonth() + 3) / 3), //季度
    S: datetime.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (datetime.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (let k in o) if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  return fmt;
};

export const Formatup = (data: any) => {
  //let str = data;
  //将字符串转换成时间格式
  let timePublish: any = new Date(data);
  let timeNow: any = new Date();
  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let month = day * 30;
  let diffValue: any = timeNow - timePublish;
  let diffMonth: any = diffValue / month;
  let diffWeek: any = diffValue / (7 * day);
  let diffDay: any = diffValue / day;
  let diffHour: any = diffValue / hour;
  let diffMinute: any = diffValue / minute;
  let result: any = "";
  if (diffValue < 0) {
    alert("错误时间");
  } else if (diffMonth > 3) {
    result = timePublish.getFullYear() + "-";
    result += timePublish.getMonth() + "-";
    result += timePublish.getDate();
  } else if (diffMonth > 1) {
    result = parseInt(diffMonth) + "月前";
  } else if (diffWeek > 1) {
    result = parseInt(diffWeek) + "周前";
  } else if (diffDay > 1) {
    result = parseInt(diffDay) + "天前";
  } else if (diffHour > 1) {
    result = parseInt(diffHour) + "小时前";
  } else if (diffMinute > 1) {
    result = parseInt(diffMinute) + "分钟前";
  } else {
    result = "刚刚";
  }
  return result;
};

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i) ? true : false;
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i) ? true : false;
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod|Mac/i) ? true : false;
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i) ? true : false;
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows();
  },
};

export const isEquipment = () => {
  if (isMobile.iOS()) {
    return "ios";
  } else if (isMobile.Android()) {
    return "android";
  } else if (isMobile.BlackBerry()) {
    return "blackberry";
  } else if (isMobile.Windows()) {
    return "windows";
  } else if (isMobile.any()) {
    return isMobile.any();
  }
};

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 返回我们要的颜色
export const getRandomColor = () => {
  var c1 = getRandom(0, 255);
  var c2 = getRandom(0, 255);
  var c3 = getRandom(0, 255);
  return "rgb(" + c1 + "," + c2 + "," + c3 + ")";
};

let time:any=""
export const tips = (msg: string) => {
  const tips: any = document.querySelector(".tips");
  const body: any = document.querySelector("body");
  if(tips){
    body.removeChild(tips);
    clearTimeout(time)
  }
  var div = document.createElement("div");
  div.className = "tips"; //添加div的class的时候注意是className
  div.innerHTML = msg;
  body.appendChild(div);
  time= setTimeout(() => {
    const tips: any = document.querySelector(".tips");
    if(tips){
    body.removeChild(tips);
  }
  }, 2000);
};
