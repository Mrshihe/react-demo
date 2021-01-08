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
import { Link } from 'react-router-dom';

class Header extends React.Component {
  getListArea() {
    const { focused, mouseIn, hotList, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangeList } = this.props;
    const pageList = []
    const newList = hotList.toJS();
    if(newList.length){
      for(let i=(page-1)*5; i<page*5; i++){
        if(newList[i]){
          pageList.push(
            <SearchInfoItem key={ newList[i] }>{ newList[i] }</SearchInfoItem>
          )
        }
      }
    }
    if(focused || mouseIn){
      return (
        <SearchInfo
          onMouseEnter = { handleMouseEnter }
          onMouseLeave = { handleMouseLeave }
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={ () => handleChangeList(page,totalPage,this.spinIcon)}>
              <i ref={ icon => { this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null;
    }
  }
  render(){
    return (
      <HeaderWrapper>
        <Link to="/"><Logo /></Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {
            this.props.loginStatus ? <NavItem className="right" onClick={ this.props.signOut }>退出</NavItem> : <Link to="/login"><NavItem className="right">登录</NavItem></Link>
          }
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={ this.props.focused }
              timeout={200}
              classNames="slide"
            >
              <NavSearch className={ this.props.focused ? 'focused' : '' } 
                placeholder="请输入"
                onFocus={ () => this.props.handleFocus(this.props.hotList) }
                onBlur={ this.props.handleBlur }
              ></NavSearch>
            </CSSTransition>
            <i className="iconfont zoom">&#xe614;</i>
            { this.getListArea() }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting"><i className="iconfont">&#xe615;</i>写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // 将reducer拆分后 state分出不同对象
    // immutable对象访问属性需要使用get(name)方法
    // state是js对象 header是immutable对象
    // focused: state.header.get('focused')
    // 使用redux-immutable state.get('header').get('focused') 两种写法等价
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    hotList: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header','totalPage']),
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleFocus(list) {
      (list.size === 0) && dispatch( actionCreators.getList() )
      dispatch( actionCreators.searchFocus() )
    },
    handleBlur() {
      dispatch( actionCreators.searchBlur() )
    },
    handleMouseEnter() {
      dispatch( actionCreators.mouseEnter() )
    },
    handleMouseLeave() {
      dispatch( actionCreators.mouseLeave() )
    },
    handleChangeList(page,totalPage,spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
      originAngle ? originAngle = parseInt(originAngle,10) : originAngle = 0
      spin.style.transform = `rotate(${originAngle+360}deg)`;

      if(page<totalPage){
        dispatch(actionCreators.changePage(page+1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
    },
    signOut(){
      dispatch({
        type: 'sign_out'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);