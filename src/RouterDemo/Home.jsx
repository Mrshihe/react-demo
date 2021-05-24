import React, { Component } from 'react'
import { NavLink, Route, Redirect, Switch } from 'react-router-dom'

import HomeNews from './HomeNews'
import HomeMessage from './HomeMessage'

export default class Home extends Component {
  render() {
    // 路由组件默认接收一个对象，包含路由信息 history / location / match
    // console.log(this.props)
    return (
      <div>
        <h2>我是Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink className="list-group-item" to="/home/news">News</NavLink>
            </li>
            <li>
              <NavLink className="list-group-item" to="/home/message">Message</NavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={ HomeNews } />
            <Route path="/home/message" component={ HomeMessage } />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    )
  }
}
