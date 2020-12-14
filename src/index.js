import React from 'react'
import ReactDOM from 'react-dom';

// 普通版
// import Todolist from './pages/todolist.js'

// antd版
import TodoList from './antd/TodoList.js';


ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);
