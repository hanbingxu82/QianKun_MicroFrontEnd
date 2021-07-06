/*
 * @Author: your name
 * @Date: 2021-03-11 08:22:40
 * @LastEditTime: 2021-03-11 10:13:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/components/Music/Music.tsx
 */
import React, { PureComponent } from 'react';

import musicpic from './Music.png';
import './Music.less';
const bgmp3 = require('./Music.mp3');
// import bgmp3 from './Music.mp3'

export interface Props{
}
export interface State{
  play: boolean
}
class Music extends PureComponent<Props,State>{
  mybgm: any;
  constructor(props: Props){
    super(props);
    this.state = {
      play: true
    };
    this.mybgm= React.createRef()
    this.changePlay = this.changePlay.bind(this);
  }
  changePlay(){
    // const mybgm = this.refs["mybgm"] as any;
    // 如果音乐暂停就播放否则暂停
    console.log( this.mybgm)
    this.mybgm.current.paused ? this.mybgm.current.play() : this.mybgm.current.pause();
    this.setState({
      play: !this.state.play
    });
  }
  componentDidMount(){
    // setTimeout(() => {
    //   this.mybgm = this.mybgm.current
    //   console.log(this.mybgm)
    //   this.mybgm.play()
    // }, 1000);
  }
  render(){
    const {play} = this.state;
    return(
      <div 
        className={`musicPic ${ play ? "rotate" : ""}`}
        onClick={this.changePlay} 
        >
        <img src={musicpic} alt="music" />
        <audio  src={bgmp3.default} autoPlay={play} loop hidden ref={this.mybgm} />
      </div>
    )
  }
}

export default Music;
