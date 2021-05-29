import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }
  // 错误边界限于生产环境
  // 错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  // 此生命周期在后代组件抛出错误后被调用
  componentDidCatch(){

  }
  render() {
    return (
      <div style={{width: '500px', margin: '30px auto'}}>
        <h4>ErrorBoundary错误边界</h4>
        <h4>我是父组件</h4>
        { this.state.hasError ? <h2>网络异常，请稍后继续</h2> : <Child /> }
      </div>
    )
  }
}

class Child extends Component {
  state = {
    //users: 'abc'
    users: [
      {id: 0, name: 'tom', age: 18},
      {id: 1, name: 'jany', age: 19},
      {id: 2, name: 'brany', age: 20},
    ]
  }
  render(){
    return (
      <>
      <h4>我是子组件</h4>
      <ol>
        {
          this.state.users.map(item => {
            return <li key={item.id}>{item.name}---{item.age}</li>
          })
        }
      </ol>
      </>
    )
  }
}
export {
  ErrorBoundary
} 