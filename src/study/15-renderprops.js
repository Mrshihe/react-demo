import React, { Component } from 'react'

/*
向组件内部动态传入带内容的结构
1. 
<A>
  <B>xxxx</B>
</A>
{this.props.children}
2. 
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

export {
  RenderProps
}