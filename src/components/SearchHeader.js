import React, { Component } from 'react'
import SVG from '../svg/index'
import SearchList from '../components/SearchList'
import '../style/SearchHeader/index.sass'

export default class SearchHeader extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id='Search-module'>
        <div id='SearchHeader'>
          <div className='search-box'>
            <div className='input-box'>
              <input placeholder='搜索' />
            </div>
            <SVG.WE_CHAT_FUNCTION_BAR_SEARCH_SVG className='search-icon' />
          </div>
          <div className='add-icon'>
            <SVG.WE_CHAT_FUNCTION_BAR_ADD_SVG />
          </div>
        </div>
        <div className='search-rulet-list'>
          2
          <SearchList />
        </div>
      </div>
    )
  }
}