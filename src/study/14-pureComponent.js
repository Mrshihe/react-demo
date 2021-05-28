import React, { Component } from 'react'

/*
Component的两个问题
1. this.setState({}) 没有任何数据更新时，也会触发render
2. 父组件更新，子组件也会更新即使没有用父组件任何数据 

解决方案：
1. 重写shouldComponentUpdate()，比较state/props，只有发生变化了才返回true
2. 使用PureComponent (不要直接修改state数据, 而是要产生新数据)

PureComponent 只进行浅比较，内存地址没改变的情况的情况下，不会重新渲染，不会继续对比内部属性
const obj = this.state  
obj.count=99 
this.setState(obj)
不会进行重新渲染
*/
class ClassPure extends Component {
  state = {
    count: 1
  }
  add = ()=>{
    // this.setState({}) 没有任何数据更新时，也会触发render
    this.setState((state,props)=> ({ count: state.count+1 }) )
  }
  shouldComponentUpdate(nextProps,nextState){
    // this.props 当前props  --  nextProps 即将更新的props
    // this.state 当前state  --  nextState 即将更新的state
    // state和props属性太多的情况不方便
    if(this.state.count === nextState.count){
      return false
    }else{
      return true
    }
  }
  render() {
    console.log('parent--render')
    return (
      <div style={{width:'500px',margin:'30px auto',padding:'30px',border:'solid 1px green'}}>
        <h6>我是父组件</h6>
        <h6>当前数值是：{this.state.count}</h6>
        <button onClick={ this.add }>点我+1</button>
        <Child />
      </div>
    )
  }
}

class Child extends React.PureComponent {
  render(){
    console.log('child--render')
    return (
      <div style={{border:'solid 1px red'}}>
        <h6>我是子组件</h6>
      </div>
    )
  }
}
export {
  ClassPure
}
