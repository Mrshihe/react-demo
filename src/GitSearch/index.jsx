import React, { Component } from 'react'
import Search from './Search'
import SearchList from './SearchList'
import './style.css'

/*
采用发布-订阅模式
*/
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <SearchList />
      </div>
    )
  }
}
