import React from 'react';

class Weather extends React.Component {
  // 不依赖外部的变量，可以不用在构造函数中声明
  state = {
    isHot: true
  }
  constructor(props){
    super(props)
    /*
    解决事件中this指向问题
    this丢失原因：
    onClick = { this.changeStatus } 作为回调函数，只引用没有调用，使用时不算实例调用， this丢失
    因为类的方法开启了局部严格模式，所以this为undefined*/
    this.changeStatus = this.changeStatus.bind(this)
    /*将实例自身上挂载上绑定过this后的新方法 
    左侧changeStatus在实例自身上，右侧changeStatus在Weather原型上，两者不是一个*/
  }
  // 方法在Weather的原型对象上，供实例调用，默认开启局部严格模式
  changeStatus(){
    this.state.isHot ? this.setState({isHot: false}) : this.setState({isHot: true})
  }
  // 利用箭头函数的特性，解决this绑定问题
  getStatus = () => {
    return this.state.isHot
  }
  render(){
    const { isHot } = this.state
    // 绑定行内样式语法：style={{属性名：属性值}} 属性名为驼峰写法
    return<h1 style={{userSelect:'none'}} onClick={ this.changeStatus }>今天天气很{ isHot ? '炎热' : '凉爽' }</h1>
  }
}

export {
  Weather
}