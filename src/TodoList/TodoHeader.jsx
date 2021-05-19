import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class TodoHeader extends Component {
  // 对传入props进行类型及必填限制
  static propTypes = {
    addtodo: PropTypes.func.isRequired
  }
  keyUpHandle = e => {
    const value = e.target.value
    if( e.keyCode === 13 ){
      // 子组件内调用父组件传过来的函数
      if(value.trim() === ''){
        alert('输入不能为空')
        return false
      }else{
        this.props.addtodo({id:Date.now(),name:value,done:false})
        e.target.value = ''
      }
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={ this.keyUpHandle }/>
      </div>
    )
  }
}
