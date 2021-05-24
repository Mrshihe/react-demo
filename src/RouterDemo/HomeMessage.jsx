import React from 'react'
import { Link, Route } from 'react-router-dom'
import MessageDetail from './MessageDetail'

export default class HomeMessage extends React.Component {
  state = {
    messageArr: [
      {id:1, title:'消息(message)1'},
      {id:2, title:'消息(message)2'},
      {id:3, title:'消息(message)3'}
    ]
  }
  render(){
    return (
      <div>
        <ul>
          {/* params参数传递, 参数直接显示在地址栏  */}
          <li><Link to={`/home/message/detail/1/params传递参数/消息(message)1`}>消息(message)1</Link>&nbsp;&nbsp;</li>
          <li><Link to="/home/message/detail">消息(message)2</Link>&nbsp;&nbsp;</li>
          <li><Link to="/home/message/detail">消息(message)3</Link>&nbsp;&nbsp;</li>
        </ul>
        {/* 声明接受params参数 */}
        <Route path="/home/message/detail/:id/:title/:content" component={ MessageDetail } />
      </div>
    )
  }
}
