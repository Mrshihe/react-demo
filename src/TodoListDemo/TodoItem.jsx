import React, { Component } from 'react'

export default class TodoItem extends Component {
  state = {
    highLight: false  
  }
  mouseEnterHandle = () => {
    this.setState({ highLight: true })
  }
  mouseLeaveHandle = () => {
    this.setState({ highLight: false })
  }
  statusChange(id,event){
    this.props.updatetodo(id,event.target.checked)
  }
  deleteHandle(id){
    const res = window.confirm('确认删除该事项?')
    res && this.props.deltodo(id)
  }
  render() {
    const { id, name, done } = this.props
    const { highLight } = this.state;
    return (
      <li onMouseEnter={ this.mouseEnterHandle } onMouseLeave={ this.mouseLeaveHandle } 
      style={{backgroundColor:highLight?'#ccc':'#fff'}}>
        <label>
          <input type="checkbox" checked={ done } onChange={ this.statusChange.bind(this,id) }/>
          <span>{ name }</span>
        </label>
        <button className="btn btn-danger" style={{display:highLight?'block':'none'}} 
        onClick={ this.deleteHandle.bind(this,id) }>删除</button>
      </li>
    )
  }
}
