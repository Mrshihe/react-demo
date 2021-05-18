import React, { Component } from 'react'
import TodoHeader from './TodoHeader'
import TodoFooter from './TodoFooter'
import TodoList from './TodoList'
import './style.css'

export default class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <TodoHeader />
          <TodoList />
          <TodoFooter />
        </div>
      </div>
    )
  }
}
