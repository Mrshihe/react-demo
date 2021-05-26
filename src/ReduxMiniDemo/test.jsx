import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    count: 0
  }
  increment = () => {
    const { value } = this.selectEl
    const { count } = this.state
    this.setState({ count: count+value*1 })
  }
  decrement = () => {
    const { value } = this.selectEl
    const { count } = this.state
    this.setState({ count: count-value*1 })
  }
  incrementIfOdd = () =>{
    const { value } = this.selectEl
    const { count } = this.state
    if(count%2 != 0){
      this.setState({ count: count+value*1 })
    }
  }
  incrementAsync = () =>{
    const { value } = this.selectEl
    const { count } = this.state
    setTimeout(()=>{
      this.setState({ count: count+value*1 })
    },1000)
  }
  render() {
    return (
      <div style={{width:'500px',margin:'0 auto'}}>
        <h3>当前值为：{ this.state.count }</h3>
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
