import React, { Component } from 'react'

export default class TodoFooter extends Component {
  checkAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }
  clearDone = () => {
    this.props.clearDoneAll()
  }
  render() {
    const { doneCount, totalCount } = this.props
    // defaultChecked 只在第一次渲染的时候起作用，不能动态更新
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={ doneCount === totalCount && totalCount !== 0 } onChange={ this.checkAll } />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{totalCount}
        </span>
        <button className="btn btn-danger" onClick={ this.clearDone }>清除已完成任务</button>
      </div>
    )
  }
}
