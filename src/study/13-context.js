import React, { Component } from 'react'

// 创建context对象，createContext可以接收一个默认值
const selfContext = React.createContext()

class ContextComponent extends Component {
  state= {
    name: 'jany'
  }
  render() {
    return (
      <div style={{width:'520px',margin:'30px auto',border:'solid 1px red', padding:'25px'}}>
        <h4>一种组件间通信方式, 常用于【祖先组件】与【后代组件】间通信</h4>
        <h6>我是ContextComponent组件,我的名字是：{ this.state.name }</h6>
        {/* props必须为value */}
        <selfContext.Provider value={ this.state.name }>
          <A />
        </selfContext.Provider>
      </div>
    )
  }
}
class A extends Component {
  render(){
    return(
      <div style={{border:'solid 1px green', padding:'25px'}}>
        <h6>我是A组件</h6>
        <h6>从ContextComponent拿到的名字：</h6>
        <B />
      </div>
    )
  }
}
class B extends Component {
  // 申明接收context，只适用于class组件
  static contextType = selfContext
  render(){
    return(
      <div style={{border:'solid 1px blue', padding:'25px'}}>
        <h6>我是B组件</h6>
        {/* this.context 拿到传递的值 */}
        <h6>从ContextComponent拿到的名字：{this.context}</h6>
        <C />
      </div>
    )
  }
}
function C(){
  return(
    <div>
      <h6>我是C组件(函数式组件)</h6>
      {/* Consumer方式适用于函数组件和类组件 */}
      <h6>从ContextComponent拿到的名字：<selfContext.Consumer>{ value => value}</selfContext.Consumer></h6>
    </div>
  )
}
export {
  ContextComponent
}