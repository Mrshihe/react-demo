import React from 'react'
import { Link, Route } from 'react-router-dom'
import MessageDetail from './MessageDetail'

export default class HomeMessage extends React.Component {
  render(){
    return (
      <div>
        <ul>
          {/* 
           路由存在push模式和replace模式
           push模式：将路由压入栈内，总展示最后一个入栈的
           replace模式：将栈顶路由替换为当前路由
           */}
          {/* 
            1. params参数传递, 参数直接显示在地址栏
            this.props.history.push/replace('/home/message/detail/1/params传递参数/消息(message)1')  
          */}
          <li><Link to={`/home/message/detail/1/params传递参数/消息(message)1`}>消息(message)1 params</Link></li>
          {/* 
            2. search参数传递，参数直接显示在地址栏
            this.props.history.push/replace(`/home/message/detail/?id=2&title=search传递参数&content=消息(message)2`)
          */}
          <li><Link to={`/home/message/detail/?id=2&title=search传递参数&content=消息(message)2`}>消息(message)2 search</Link></li>
          {/* 
            3. state参数传递，参数不显示在地址栏
            this.props.history.push/replace(`/home/message/detail`,{id:3,title:'state传递参数',content:'消息(message)3'})
          */}
          <li><Link replace to={{pathname:'/home/message/detail',state:{id:3,title:'state传递参数',content:'消息(message)3'}}}>消息(message)3 state</Link></li>
        </ul>
        {/* 1. 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title/:content" component={ MessageDetail } /> */}
        {/* 2. search参数无需声明接收 3. state参数无需声明接收 */}
        <Route path="/home/message/detail" component={ MessageDetail } />
      </div>
    )
  }
}
