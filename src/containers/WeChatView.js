import React, { Component } from 'react'
import MessageViewModule from './MessageViewModule'
import SearchHeader from '../components/SearchHeader'
import '../style/WeChatView/index.sass'

export default class WeChatView extends Component {
  constructor(o) {
    super(o)
  }

  render() {
    return (
      <div id='w-chat-view' >
        <div className='function-bar'>
          <div className='drag'></div>
          <div className='module-content'>
            <SearchHeader />
          </div>
        </div>
        <MessageViewModule />
      </div>
    );
  }
}