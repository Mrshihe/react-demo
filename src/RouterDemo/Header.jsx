import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  back = () =>{
    this.props.history.goBack()
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
            <h6>一般组件</h6>
            <button onClick={ this.back }>路由回退</button>
          </div>
        </div>
      </div>
    )
  }
}
// withRouter为一个函数，接收一个一般组件，加上路由组件上的API，返回一个新组件
export default withRouter(Header)
