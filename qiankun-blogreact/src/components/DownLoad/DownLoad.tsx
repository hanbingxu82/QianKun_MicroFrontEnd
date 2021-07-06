/*
 * @Author: your name
 * @Date: 2021-03-18 16:05:04
 * @LastEditTime: 2021-03-18 16:11:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/components/DownLoad/DownLoad.tsx
 */
import React,{ PureComponent } from 'react';
import './DownLoad.less'
import { baseURL } from "../../utils/Api";
interface Props{

}
interface State {

}
class DownLoad extends PureComponent<Props,State>{
  constructor(props: Props){
    super(props);
    this.downLoadUrl = this.downLoadUrl.bind(this);
  }
  downLoadUrl() {
   window.location.href=baseURL+'/download'
  }
  render(){
  
    return (
      <div className='download' title="下载PDF简历" onClick={this.downLoadUrl}>
        <svg viewBox="64 64 896 896" focusable="false" data-icon="download" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg>
      </div>
    )
  }
}
export default DownLoad;