import React, { Component } from 'react'
import SVG from '../svg/index'

import '../style/GlobalNavigationBar/index.sass'

export default class GlobalNavigationBar extends Component {
  constructor() {
    super()
    this.state = {
      SELECT: 'MESSAGE'
    }
  }

  render() {
    return (
      <div id='GlobalNavigationBar'>
        <div className='top'>
          <ul className='modules'>
            <li className='avatar module-item'>
              <img src={require('../assets/WechatIMG64.jpeg')} />
            </li>
            {/* 渲染对应的 SVG */}
            <li className='module-item' onClick={this.switchModule.bind(this, 'MESSAGE')}>
              {this.state.SELECT == 'MESSAGE' ? <SVG.WE_CHAT_MESSAGE_SELECTED_SVG /> : <SVG.WE_CHAT_MESSAGE_SVG />}
            </li>
            <li className='module-item' onClick={this.switchModule.bind(this, 'CONTACTS')}>
              {this.state.SELECT == 'CONTACTS' ? <SVG.WE_CHAT_CONTACTS_SELECTED_SVG /> : <SVG.WE_CHAT_CONTACTS_SVG />}
            </li>
            <li className='module-item' onClick={this.seeChatFiles.bind(this)} >
              <SVG.WE_CHAT_CHAT_FILE_SVG />
            </li>
          </ul>
        </div>
        <div className='bottom'>
          <ul className='modules'>
            <li className='module-item'>
              <SVG.WE_CHAT_IPHONE_SVG />
            </li>
            <li className='module-item'>
              <SVG.WE_CHAT_MOVE_SVG />
            </li>
          </ul>
        </div>
      </div>
    );
  }

  // 切换模块时触发
  switchModule = tag => {
    this.setState({
      SELECT: tag
    })
  }

  seeChatFiles = () => {
    alert('打开个锤子')
  }
}