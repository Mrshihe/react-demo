import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction } from './redux/actions/count'


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
        <h3>react-redux/redux完整例子</h3>
        <h3>Count组件</h3>
        <h3>当前值为：{ this.props.count }</h3>
        <h3>Peson组件当前人数为{ this.props.personLength }</h3>
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


const mapStateToProps = state => ({ count: state.count, personLength: state.person.length })
const mapDispatchToProps =  {
  increment: createIncrementAction,
  decrement: createDecrementAction
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
