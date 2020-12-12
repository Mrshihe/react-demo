import React from 'react';
// 动画库
import { CSSTransition } from 'react-transition-group';
import './animation.css'

class Animation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  render(){
    return( 
      <React.Fragment>
        <CSSTransition
          in = {this.state.show}
          timeout= { 800 } //ms为单位
          classNames = 'fade' //动画前缀
          unmountOnExit //退出时移除dom
          appear = {true} // 渲染的时候执行动画
          // onEntered = { } //入场动画结束后
        >
          <div>Animation Toggle</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>Toggle</button>
      </React.Fragment>
    )
  }
  handleToggle(){
    this.setState({
      show: !this.state.show
    })
  }
}

export default Animation;