import React from 'react';

class MyEvent extends React.Component {
  /*
    React事件的命名采用小驼峰式(onClick),且均为合成事件
    必须显式的使用preventDefault阻止默认行为
    event.target得到发生事件的DOM元素
   */

  /*
  解决事件中this指向问题有三种解决方案
  (1) <button onClick={this.deleteRow.bind(this, id)}>点击</button> 利用bind绑定事件
  (2) this.handleClick = this.handleClick.bind(this) 在 constructor 中利用bind 显示绑定 实验性质语法
  (3) handleClick = () => { console.log('this is:', this)} 利用箭头函数
  (4) <button onClick={() => this.handleClick()}>点击</button> 每次渲染创建不同的回调, 存在性能问题
   */

  render(){
    return (
      <div>
        <input onBlur={ this.showData } type="text" placeholder="失去焦点提示输入" />
      </div>
    )
  }
  showData = event => {
    console.log( event.target.value )
  }
}

export {
  MyEvent
}