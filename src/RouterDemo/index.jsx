import React, { Component } from 'react'
import { NavLink, BrowserRouter, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'

export default class App extends Component {
  render() {
    return (
      // 利用HTML5 History API
      <BrowserRouter>
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header"><h2>React Router Demo</h2></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {
                  /* 路由链接
                  activeClassName 高亮类名指定 默认为active 
                  Link 组件不支持高亮效果
                  */
                }
                <NavLink activeClassName="active" className="list-group-item" to="/about">About</NavLink>
                <NavLink activeClassName="active" className="list-group-item" to="/home">Home</NavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
                  <Route path="/about" component={ About } />
                  <Route path="/home" component={ Home } />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
