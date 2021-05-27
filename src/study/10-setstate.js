import React, { Component } from 'react'

class ComponentSetstate extends Component {
  state = {
    count: 0
  }
  add = ()=>{
    const { count } = this.state
    // 对象方式接收两个参数，一个更新state的对象，一个回调函数(可选)
    // 回调函数会在状态更新完毕、render之后调用
    this.setState({
      count: count + 1
    },()=>{
      console.log( this.state.count )
    })
  }
  addFunc = () => {
    this.setState((state, props)=>{
      console.log( state, props )
      return { count: state.count + 1}
    })
    // 函数方式接收两个参数，一个更新state的函数，一个回调函数(可选)
    // 更新state的函数接收两个参数，之前的state和当前的props 返回更新state的对象
    // 回调函数会在状态更新完毕、render之后调用
  }
  render() {
    return (
      <div style={{width:'500px',margin:'30px auto'}}>
        <h4 style={{textAlign:'center'}}>关于setState的补充知识点</h4>
        <h6>新状态不依赖于原状态 -- 使用对象方式</h6>
        <h6>新状态依赖于原状态 -- 使用函数方式</h6>
        <p>当前数值为：{ this.state.count }</p>
        <button onClick={ this.add }>setState 对象写法</button>
        <button onClick={ this.addFunc }>setState 函数写法</button>
      </div>
    )
  }
}

export {
  ComponentSetstate
}
