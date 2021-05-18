import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    const { todolist } = this.props;
    return (
      <ul className="todo-main">
        {
          todolist.map( item => {
            // 利用解构向组件内传值
            return <TodoItem key={ item.id } {...item}  />
          })
        }
      </ul>
    )
  }
}
