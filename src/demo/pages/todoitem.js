import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
  constructor(props){
    super(props)
    this.handleDel = this.handleDel.bind(this)
  }
  // 默认情况下 父组件render()触发，子组件render()也会触发
  // 但是父组件input框内容改变时，子组件不需要重新渲染，避免造成性能损耗
  shouldComponentUpdate(nextProps, nextState) {
    //如果当前需要更新的参数和上次不一样才会触发更新
    if( nextProps.content !== this.props.content ){
      return true
    }else{
      return false
    }
  }
  render() {
    return (
      <div onClick={ this.handleDel }>{this.props.content}</div>
    )
  }
  handleDel(){
    this.props.handleDel(this.props.index)
  }
}
// 对TodoItem的prop属性做校验
TodoItem.propTypes = {
  content: PropTypes.string,
  handleDel: PropTypes.func,
  index: PropTypes.number,
  // 属性为string类型且必传
  //test: PropTypes.string.isRequired
}
// 组件默认属性
TodoItem.defaultProps = {
  test: 'hello React'
}
export default TodoItem