import React, { Component } from 'react'
import SVG from '../svg/index'
import '../style/EmptyView/index.sass'

export default class EmptyView extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div id='EmptyView'>
        <SVG.EMPTY_VIEW_WE_CHAT_ICON_SVG />
      </div>
    )
  }
}