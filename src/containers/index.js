import React, { Component } from 'react'
import GlobalNavigationBar from '../components/GlobalNavigationBar'

import '../style/IndexPage/index.sass'

export default class IndexPage extends Component {
  constructor(o) {
    super(o)
  }

  render() {
    return (
      <div id='index-page'>
        <GlobalNavigationBar />
      </div>
    );
  }
}