import React from 'react'
import ReactDOM from 'react-dom';

// import { PersonDiff }  from './app';
import './style.js';

// TodoList case
// import App  from './TodoListDemo/index.jsx'

// GitSearch case
//import App from './GitSearchDemo/index'

//RouterDemo case
// import App from './RouterDemo/index'

//ReduxDemo case
// import App from './ReduxCreateActionDemo'

// React_Redux_Demo case
import App from './React_Redux_Demo'
// 引入store, 以props方式传递 <App store={ store } /> 或者使用Provider
import store from './React_Redux_Demo/redux/store'
// Provider全局传递store给容器组件
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={ store }>
    <App  />
  </Provider>,
  document.getElementById('root')
);


/*
针对函数式组件
1. 解析组件标签，找到组件
2. 将组件返回得虚拟DOM转换为真实DOM进行渲染
*/

/*
针对类组件
1. 解析组件标签，找到组件
2. new出该组件实例，并通过实例调用原型上的render方法
3. 将render返回的虚拟DOM转换为真实DOM进行渲染
 */