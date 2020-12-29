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

class Header extends React.Component {
  getListArea() {
    const { focused, mouseIn, hotList, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangeList } = this.props;
    const pageList = []
    const newList = hotList.toJS();
    if(newList.length){
      for(let i=(page-1)*5; i<page*5; i++){
        pageList.push(
          <SearchInfoItem key={ newList[i] }>{ newList[i] }</SearchInfoItem>
        )
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
            <SearchInfoSwitch onClick={ () => handleChangeList(page,totalPage)}>
              <i className="iconfont spin">&#xe851;</i>
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
              in={ this.props.focused }
              timeout={200}
              classNames="slide"
            >
              <NavSearch className={ this.props.focused ? 'focused' : '' } 
                placeholder="请输入"
                onFocus={ this.props.handleFocus }
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
    totalPage: state.getIn(['header','totalPage'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleFocus() {
      dispatch( actionCreators.getList() )
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
    handleChangeList(page,totalPage) {
      console.log( page, totalPage )
      if(page<totalPage){
        dispatch(actionCreators.changePage(page+1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);