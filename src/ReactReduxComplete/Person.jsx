import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPersonAction } from './redux/actions/person'

class Person extends Component {
  addPerson = () =>{
    const name = this.nameNode.value
    const age = this.ageNode.value*1
    const obj = {id:new Date().getTime(), name, age}
    this.props.addPersonHandle(obj)
  }
  render() {
    return (
      <div style={{width:'500px',margin:'30px auto'}}>
        <h3>Person组件</h3>
        <h3>Count组件求和值：{this.props.count}</h3>
        <input type="text" placeholder="请输入姓名" ref={ el => this.nameNode = el } />
        <input type="number" placeholder="请输入年龄" ref={ el => this.ageNode = el } />
        <button onClick={ this.addPerson }>添加人员</button>
        <ul>
          {
            this.props.personlist.map(p=>{
              return <li key={p.id}>{p.name}--{p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => ({ personlist: state.person, count: state.count })
const mapDispatchToProps = {
  addPersonHandle: addPersonAction
}
export default connect(mapStateToProps,mapDispatchToProps)(Person)
