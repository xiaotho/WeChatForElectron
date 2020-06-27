import React, { Component } from 'react'
import GlobalNavigationBar from '../components/GlobalNavigationBar'
import WeChatView from './WeChatView'

import '../style/IndexPage/index.sass'

export default class IndexPage extends Component {
  constructor(o) {
    super(o)
    this.state = {
      selectedView: ''
    }
  }

  render() {
    return (
      <div id='index-page'>
        <GlobalNavigationBar />
        <WeChatView />
      </div>
    );
  }

  changeView = () => {
    switch (this.state.selectedView) {
      default : 
    }
  }
}