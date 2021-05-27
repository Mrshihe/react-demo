import React, { Component } from 'react'
// 引入connect用于连接UI组件和redux
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction } from './redux/count_action'


class App extends Component {
  increment = () => {
    const { value } = this.selectEl
    this.props.increment(value*1)
  }
  decrement = () => {
    const { value } = this.selectEl
    this.props.decrement(value*1)
  }
  incrementIfOdd = () =>{
    const { value } = this.selectEl
    this.props.count % 2 !== 0 && this.props.increment(value*1)
  }
  incrementAsync = () =>{
    const { value } = this.selectEl
    setTimeout(()=>{
      this.props.increment(value*1)
    },800)
  }
  render() {
    return (
      <div style={{width:'500px',margin:'0 auto'}}>
        <h3>使用react-redux配合redux使用</h3>
        <h3>当前值为：{ this.props.count }</h3>
        <select style={{width:'120px'}} ref={ el => this.selectEl = el }>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={ this.increment }>+</button>
        <button onClick={ this.decrement }>-</button>
        <button onClick={ this.incrementIfOdd }>奇数加</button>
        <button onClick={ this.incrementAsync }>异步加</button>
      </div>
    )
  }
}


// 返回对象 用于传递state
const mapStateToProps = state => ({ count: state })

// 返回对象 用于传递操作state的方法
// 两种传参方式，可以传递函数，可以传递对象
// const mapDispatchToProps = dispatch => {
//   return {
//     increment(data){
//       dispatch(createIncrementAction(data))
//     },
//     decrement(data){
//       dispatch(createDecrementAction(data))
//     }
//   }
// }
/*
 传递对象的时候，触发dispatch自动派发action, 简写如下
 {
   increment: createIncrementAction,
   decrement: createDecrementAction
 }
*/
const mapDispatchToProps =  {
  increment: createIncrementAction,
  decrement: createDecrementAction
}



// 利用connect生成容器组件, 将容器组件暴露出去与redux交互
export default connect(mapStateToProps,mapDispatchToProps)(App)