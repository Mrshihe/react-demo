import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios';

export default class Search extends Component {
  searchUser = ()=>{
    const keyWord = this.input.value 
    // https://api.github.com/search/users?q=${keyWord} 
    // 发布消息
    PubSub.publish('ListChange',{isFirst: false, isLoading: true})
    axios.get(`/search/users2?q=${keyWord}`).then(res => {
      PubSub.publish('ListChange',{isLoading: false, usersList: res.data.items})
    }).catch(err => {
      PubSub.publish('ListChange',{isLoading: false, err: err.message})
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
