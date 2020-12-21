import React from 'react'
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper 
} from './style'
import { CSSTransition } from 'react-transition-group'

import { connect } from 'react-redux'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={ props.focused }
            timeout={200}
            classNames="slide"
          >
            <NavSearch className={ props.focused ? 'focused' : '' } 
              placeholder="请输入"
              onFocus={ props.handleFocus }
              onBlur={ props.handleBlur }
            ></NavSearch>
          </CSSTransition>
          <i className="iconfont">&#xe614;</i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting"><i className="iconfont">&#xe615;</i>写文章</Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleFocus() {
      dispatch({
        type: 'input_focus'
      })
    },
    handleBlur() {
      dispatch({
        type: 'input_blur'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);