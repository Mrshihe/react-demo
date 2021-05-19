import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    // updatetode来自父组件，本身不用，直接传递给TodoItem组件
    // TodoItem要改变App内数据，需要一级一级向上传递
    const { todolist, updatetodo, deltodo } = this.props;
    return (
      <ul className="todo-main">
        {
          todolist.map( item => {
            // 利用解构向组件内传值
            return <TodoItem key={ item.id } {...item} updatetodo={ updatetodo } deltodo={ deltodo }/>
          })
        }
      </ul>
    )
  }
}
