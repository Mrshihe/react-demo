import React, { Component } from 'react'

/*
render prop 是一个用于告知组件需要渲染什么内容的 函数prop
重点在prop,而不是在render children prop也可以实现相同的功能

向组件内部动态传入带内容的结构
1. 
<A>
  <B>xxxx</B>
</A>
{this.props.children}
*/

/* render prop start
<A render={ data => <B data={data} />}></A>
A组件: {this.props.render(内部state数据)}
B组件: 读取A组件传入的数据显示 {this.props.data} 
*/

class RenderProps extends Component {
  render() {
    return (
      <div style={{width:'500px',margin:'30px auto',padding:'30px',border:'solid 1px red'}}>
        <h4>renderProps, 动态渲染组件，类似于vue的插槽</h4>
        <h4>我是parent组件</h4>
        <A render={ data => <B data={data} />} />
        {/* 
          <A><B /></A> 
        */}
      </div>
    )
  }
}

class A extends Component {
  state = {
    name: 'tom'
  }
  render(){
    return (
      <div style={{padding:'30px',border:'solid 1px green'}}>
        <h4>我是A组件</h4>
        { this.props.render(this.state.name) }
      </div>
    )
  }
}

class B extends Component {
  render(){
    return (
      <div style={{padding:'30px',border:'solid 1px blue'}}>
        <h4>我是B组件</h4>
        <h6>A组件的名字是：{this.props.data}</h6>
      </div>
    )
  }
}
// render prop end

/*
children prop start
*/
class Toggle extends Component {
  constructor(props){
    super(props)
    this.state = {
      on: this.props.inital
    }
  }
  toggle = ()=>{
    this.setState({ on: !this.state.on })
  }
  render(){
    // props.children为函数，调用时传入state和改变state的方法
    return this.props.children(this.state.on,this.toggle)
  }
}
function ChildrenProps(){
  return(
    <Toggle inital={ true }>
      { 
        /* 
        childern为函数，接收传入的状态和方法，根据状态渲染内容
        p标签根据初始传入的状态 决定是否渲染
        button根据传入的方法，改变状态
        */
        (on,toggle) => (
          <>
            <p style={{visibility:on?'visible':'hidden'}}>根据传入的状态，动态决定是否显示</p>
            <button onClick={ toggle }>显示/隐藏P标签</button>
          </>
        )
      }
    </Toggle>
  )
}
// children prop end

export {
  RenderProps,
  ChildrenProps
}