import React, { Component } from 'react'
import { NavLink, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'
import About from './About'
import Home from './Home'
import HomeCopy from './HomeCopy'

export default class App extends Component {
  render() {
    return (
      /*  
        BrowserRouter 利用HTML5 History API 路径中没有# localhost:3000/demo 不兼容IE9及以下版本
        HashRouter 利用url的哈希值 路径包含# localhost:3000/#/demo

        BrowserRouter下state参数刷新不丢失，HashRouter下state参数刷新会丢失
      */
      <BrowserRouter>
        <div>
          <Header />
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {
                /* 路由链接
                1. activeClassName 高亮类名指定 默认为active 
                2. Link 组件不支持高亮效果
                3. to="/test/about" 多级路由，刷新后样式丢失，css路径出错，默认把多级路由放进css请求路径里
                4. NavLink 默认为模糊匹配(输入的路径必须包含要要匹配的路径，顺序要一致) NavLink to="/home/a/b" 会匹配到Route path="/home"
                   exact属性开启精准匹配
                */
                }
                <NavLink className="list-group-item" to="/about">About</NavLink>
                <NavLink className="list-group-item" to="/home">Home</NavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 
                   注册路由
                   默认情况下如果path重复会同时展示，匹配到一个路由后，会继续向下匹配，
                   使用Switch标签阻止重复匹配, 匹配到一个路由后阻止向后继续匹配 (可以提高效率)
                  */}
                  <Switch>
                    <Route path="/about" component={ About } />
                    <Route path="/home" component={ Home } />
                    <Route path="/home" component={ HomeCopy }></Route>
                    {/* 如果路由均没匹配上，由Redire指向路径 */}
                    <Redirect to="/about"></Redirect>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
