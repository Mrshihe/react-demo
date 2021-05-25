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
  addTodo = todoItem =>{
    const { todoList } = this.state
    const newTodoList = [todoItem,...todoList]
    this.setState({ todoList:newTodoList})
  }
  changeTodo = (id,done) => {
    const { todoList } = this.state
    const newList = todoList.map( item => {
      if(item.id===id){ 
        return {...item,done}
      }else{
        return item
      } 
    })
    this.setState({ todoList: newList })
  }
  deleteTodo = id => {
    const { todoList } = this.state
    const newList = todoList.filter(item => item.id !== id)
    this.setState({ todoList: newList })
  }
  // 实现全选和反选
  checkAllTodo = (done) => {
    const { todoList } = this.state
    const newList = todoList.map( item => ({...item,done}) )
    this.setState({ todoList: newList })
  }
  clearDoneAll = () => {
    const { todoList } = this.state
    const newList = todoList.filter( item => !item.done )
    this.setState({ todoList: newList })
  }
  render() {
    const totalCount = this.state.todoList.length;
    const doneCount = this.state.todoList.reduce((prev,curr)=>{
      return prev + (curr.done ? 1 : 0)
    },0)
    return (
      <div className="todo-container">
        <div className="todo-wrap"> 
          <TodoHeader addtodo={ this.addTodo } />
          <TodoList todolist={ this.state.todoList } updatetodo= { this.changeTodo } deltodo={ this.deleteTodo }/>
          <TodoFooter totalCount = { totalCount } doneCount = { doneCount } checkAllTodo = { this.checkAllTodo }
          clearDoneAll = { this.clearDoneAll } />
        </div>
      </div>
    )
  }
}
