import React, { Component } from 'react'
import Search from './Search'
import SearchList from './SearchList'
import './style.css'

export default class App extends Component {
  state = {
    usersList: [],
    isLoading: false
  }
  getUsers = arr => {
    this.setState({ usersList: arr })
  }
  render() {
    return (
      <div className="container">
        <Search getUsers={ this.getUsers } />
        <SearchList users={ this.state.usersList } />
      </div>
    )
  }
}
