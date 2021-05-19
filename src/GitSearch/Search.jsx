import React, { Component } from 'react'
import axios from 'axios';

export default class Search extends Component {
  searchUser = ()=>{
    const keyWord = this.input.value 
    // https://api.github.com/search/users?q=${keyWord} 
    axios.get(`/search/users2?q=${keyWord}`).then(res => {
      this.props.getUsers(res.data.items)
    })
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索GitHub用户</h3>
        <div>
          <input ref={ el => this.input = el } type="text" placeholder="请输入关键词" /> 
          <button onClick={ this.searchUser }>搜索</button>
        </div>
      </section>
    )
  }
}
