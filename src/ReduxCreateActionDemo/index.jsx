import React, { Component } from 'react'
// 引入store，获取redux中存储的状态
import store from './redux/store'

// 引入actionCreator，专门用于创建action对象
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from './redux/count_action'

export default class App extends Component {
  increment = () => {
    // 通知reducer更新state
    store.dispatch(createIncrementAction(this.selectEl.value*1))
  }
  decrement = () => {
    store.dispatch(createDecrementAction(this.selectEl.value*1))
  }
  incrementIfOdd = () =>{
    const { value } = this.selectEl
    const count = store.getState()
    if(count%2 !== 0){
      store.dispatch(createIncrementAction(this.selectEl.value*1))
    }
  }
  incrementAsync = () =>{
    store.dispatch(createIncrementAsyncAction(this.selectEl.value*1,1000))
  }
  render() {
    return (
      <div style={{width:'500px',margin:'0 auto'}}>
        <h3>利用了ActionCreators专门生成Action对象,Action又分为同步和异步</h3>
        <h4>同步action值为一个对象，异步action值为一个函数</h4>
        <h4>处理异步action需要使用redux-thunk中间件</h4>
        <h3>当前值为：{ store.getState() }</h3>
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
  componentDidMount(){
    // 监测redux中的状态变化
    store.subscribe(()=>{
      // 利用调用setState,触发render更新
      this.setState({})
    })
  }
}
