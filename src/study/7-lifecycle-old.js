import React from 'react';
import ReactDom from 'react-dom';

class LifeCycle extends React.Component {
  /*
  组件挂载顺序：
  constructor -> componentWillMount -> render -> componentDidMount -> componentWillUnmount
  */

  /*
  组件本身：setState()更新过程
  1. shouldComponentUpdate 必须返回布尔值 true 更新 false 不更新且不触发后续钩子
  2. componentWillUpdate
  3. render
  4. componentDidUpdate
  */

  /*
  组件本身：forceUpdate()更新过程/强制更新
  1. componentWillUpdate
  2. render
  3. componentDidUpdate
  */
  
  /*
  父组件render,子组件更新过程
  1. componentWillReceiveProps
  2. shouldComponentUpdate
  3. componentWillUpdate
  4. render
  5. componentDidUpdate
  */

  constructor(props){
    console.log('Parent-constructor')
    super(props)
    this.state = { count: 0 }
  }

  countAdd = () => {
    let { count } = this.state
    this.setState({ count: count+1 })
  }
  unload = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('root'))
  }
  force = () => {
    this.forceUpdate()
  }

  // 初始化渲染、状态更新之后
  render(){
    console.log('Parent-render')
    return (
      <div>
        <div>当前数值为：{ this.state.count }</div>
        <ChildLift count={ this.state.count } />
        <button onClick={ this.countAdd }>数字累加</button>
        <button onClick={ this.unload }>卸载组件</button>
        <button onClick={ this.force }>不更改状态，只更新</button>
      </div>
    )
  }
  
  /*
  组件即将挂载 
  16.3 引入别名 UNSAFE_componentWillMount
  16.x 开启废弃警告
  */
  componentWillMount(){
    console.log('Parent-componentWillMount')
  }
  // 组件挂载完毕
  componentDidMount(){
    console.log('Parent-componentDidMount')
  }
  // 组件卸载之前
  componentWillUnmount(){
    console.log('Parent-componentWillUnmount')
  }

  // 组件是否应该被更新, 调用setState触发
  shouldComponentUpdate(){
    // 返回true更新 返回false不更新
    console.log('Parent-shouldComponentUpdate')
    return true
  }
  /* 组件即将更新
  16.3 引入别名 UNSAFE_componentWillUpdate
  16.x 开启废弃警告
  */
  componentWillUpdate(){
    console.log('Parent-componentWillUpdate')
  }
  // 组件更新完毕
  componentDidUpdate(){
    console.log('Parent-componentDidUpdate')
  }
}

class ChildLift extends React.Component {
  render(){
    return (
      <div>我是一个子组件, 当前父组件数字为{ this.props.count }</div>
    )
  }
  /* 
  组件将要接受Props, 为子组件时才会触发
  第一次传入props不触发
  16.3 引入别名 UNSAFE_componentWillReceiveProps
  16.x 开启废弃警告
  */
  componentWillReceiveProps(){
    console.log('Child-componentWillReceiveProps')
  }
}

export {
  LifeCycle
}