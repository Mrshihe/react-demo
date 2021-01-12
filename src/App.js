import React, { lazy, Suspense } from 'react';

import  Header  from './common/header';
import { GlobalStyle } from './style'

import store from './store'
import { Provider } from 'react-redux'

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
// import Detail from './pages/detail';
// react-loadable使用方法
// import Detail from './pages/detail/loadable';
// lazy 和 Suspense 实现动态引入组件，目前不支持服务端渲染
const Detail = lazy(() => import('./pages/detail')); 



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
          {/*
            <Route path="/detail/:id" component={ Detail }></Route> 动态路由方式
            Suspense 组件可以包裹多个懒加载组件
            fallback 属性接受任何在组件加载过程中你想展示的 React 元素 

            react-loadable也是实现动态加载组件 可用于服务端渲染, 路由加载方式不变
            <Route path="/detail/:id" component={ Detail }></Route>
          */}
          <Suspense fallback={ null }>
            <Route path="/detail/:id" component={ Detail }></Route>
          </Suspense>
          <Route path="/login" component={ Login }></Route>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App