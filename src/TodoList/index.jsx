import React, { Component } from 'react'
import TodoHeader from './TodoHeader'
import TodoFooter from './TodoFooter'
import TodoList from './TodoList'
import './style.css'

export default class App extends Component {
  state = {
    todoList: [
      { id: 1, name: '吃饭', done: true},
      { id: 2, name: '睡觉', done: true},
      { id: 3, name: '敲代码', done: false}
    ]
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <TodoHeader />
          <TodoList todolist={ this.state.todoList } />
          <TodoFooter />
        </div>
      </div>
    )
  }
}
