import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    // 路由组件默认接收一个对象，包含路由信息 history / location / match
    console.log(this.props)
    return (
      <div>
        我是Home组件内容
      </div>
    )
  }
}
