import React from 'react';

/* 受控组件 
1. 实时验证 2.有条件的禁用按钮 3.强制输入指定格式
*/
class Controlled extends React.Component {
  // state成为表单数据源
  state = {
    username: '',
    password: ''
  }
  saveData = e => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }
  controlledSumbit = e => {
    e.preventDefault()
    console.log( this.state )
  }
  render(){
    return (
      <div>
        <h1>受控组件</h1>
        <form onSubmit={ this.controlledSumbit }>
          <input type="text" name="username" placeholder="请输入用户名" onChange={ this.saveData } /><br />
          <input type="password" name="password" placeholder="请输入密码" onChange={ this.saveData } /><br />
          <button>登录</button>
        </form>
      </div>
    )
  }
}

// 非受控组件
// 使用ref从DOM节点中获取表单数据
class UnControlled extends React.Component {
  handleSumbit = e =>{
    e.preventDefault();
    const { username, password } = this
    console.log( `用户名为:${username.value}-密码为:${password.value}` )
  }
  render(){
    return (
      <div>
        <h1>非受控组件</h1>
        <form onSubmit={ this.handleSumbit }>
          <input type="text" ref={ el => this.username = el } placeholder="请输入用户名" /><br />
          <input type="password" ref={ el => this.password = el } placeholder="请输入密码" /><br />
          <button>登录</button>
        </form>
      </div>
    )
  }
}

export {
  Controlled,
  UnControlled
}