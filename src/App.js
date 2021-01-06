import React from 'react'

import  Header  from './common/header';
import { GlobalStyle } from './style'

import store from './store'
import { Provider } from 'react-redux'

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import Detail from './pages/detail';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        {/* 全局样式 */}
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          {/* exact 精准匹配 */}
          <Route path="/" exact component={ Home }></Route>
          <Route path="/detail" component={ Detail }></Route>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App