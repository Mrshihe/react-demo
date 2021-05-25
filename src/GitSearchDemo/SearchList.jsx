import React, { Component } from 'react'
import PubSub from 'pubsub-js';

export default class SearchList extends Component {
  state = {
    usersList: [],
    isLoading: false,
    isFirst: true,
    err: ''
  }
  render() {
    const { usersList, isFirst, isLoading, err } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
          isLoading ? <h2>Loading......</h2> :
          err ? <h2 style={{color:'red'}}>{ err }</h2> :
          usersList.map( item => {
            return (
              <div className="card" key={item.id}>
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img src={item.avatar_url} style={{width: '100px'}} alt={item.login} />
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            ) 
          })
        }
      </div>
    )
  }
  componentDidMount(){
    // 订阅消息
    this.token = PubSub.subscribe('ListChange',(msg,newState)=>{
      this.setState(newState)
    })
  }
  componentWillUnmount(){
    // 解绑消息订阅
    PubSub.unsubscribe(this.token)
  }
}
