import React from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, Input } from './style';
import { Redirect } from 'react-router-dom';

class Login extends React.PureComponent {
  render () {
    if(!this.props.loginStatus){
      return (
        <LoginWrapper>
          <div className="loginBox">
            <Input className="text" placeholder="手机号或邮箱" ref={(input) => {this.account = input}} />
            <Input type="password" placeholder="密码" ref={(input) => {this.password = input}} />
            <button className="loginBtn" onClick={ () => { this.props.loginSubmit(this.account, this.password)} }>登录</button>
          </div>
        </LoginWrapper>
      )
    }else{
      return <Redirect to='/'/>
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login','loginStatus'])
})

const mapDispatch = (dispatch) => ({
  loginSubmit(accountElem,passwordElem) {
    dispatch({
      type: 'login_submit',
      account: accountElem.value,
      password: passwordElem.value
    })
  }
})

export default connect(mapState, mapDispatch)(Login);