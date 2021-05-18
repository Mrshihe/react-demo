import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const { name, done } = this.props
    return (
      <li>
        <label>
          <input type="checkbox" checked={ done }/>
          <span>{ name }</span>
        </label>
        <button className="btn btn-danger" style={{display:'none'}}>删除</button>
      </li>
    )
  }
}