import React from 'react';

class ControlledFunction extends React.Component {
  state = {
    username: '',
    password: ''
  }
  

  controlledSumbit = e => {
    e.preventDefault()
    console.log( this.state )
  }
  render(){
    return (
      <form onSubmit={ this.controlledSumbit }>
        <input type="text" name="username" placeholder="请输入用户名" onChange={ this.saveData } /><br />
        <input type="password" name="password" placeholder="请输入密码" onChange={ this.saveData } /><br />
        <button>登录</button>
      </form>
    )
  }
}

export {
  ControlledFunction
}