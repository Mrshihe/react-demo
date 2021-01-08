import React from 'react'

import  Header  from './common/header';
import { GlobalStyle } from './style'

import store from './store'
import { Provider } from 'react-redux'

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        {/* 全局样式 */}
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          {/* exact 精准匹配 */}
          <Route path="/" exact component={ Home }></Route>
          {/* <Route path="/detail/:id" component={ Detail }></Route> 动态路由方式 */}
          <Route path="/detail/:id" component={ Detail }></Route>
          <Route path="/login" component={ Login }></Route>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App