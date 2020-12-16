import React from 'react'
import ReactDOM from 'react-dom';

// 普通版
// import Todolist from './pages/todolist.js'

// antd版
//import TodoList from './antd/TodoList.js';

// 使用React-Redux
import TodoList from './reduxTodoList/todolist';
import store from './store/index';
import { Provider } from 'react-redux'

const App = (
  // 提供器Provider里边的组件，都可以获取store
  <Provider store={ store }>
    <TodoList />
  </Provider>
)


ReactDOM.render(
  App,
  document.getElementById('root')
);
