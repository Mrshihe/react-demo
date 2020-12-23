import React from 'react'
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem, 
} from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store';

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
          <i className="iconfont zoom">&#xe614;</i>
          <SearchInfo>
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch>
                <i className="iconfont spin">&#xe851;</i>
                换一批
              </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              <SearchInfoItem>教育</SearchInfoItem>
            </SearchInfoList>
          </SearchInfo>
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
    // 将reducer拆分后 state分出不同对象
    // immutable对象访问属性需要使用get(name)方法
    // state是js对象 header是immutable对象
    // focused: state.header.get('focused')
    // 使用redux-immutable state.get('header').get('focused') 两种写法等价
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleFocus() {
      dispatch( actionCreators.searchFocus() )
    },
    handleBlur() {
      dispatch( actionCreators.searchBlur() )
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);