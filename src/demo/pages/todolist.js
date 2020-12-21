import React from 'react'
// Fragment占位符, 无需向DOM里添加额外节点 简写方式: <></>
// key是唯一可以传递给<React.Fragment>得属性, 简写方式不支持
import './todolist.css'
import TodoItem from './todoitem.js'

import Animation from './animation'

class Todolist extends React.Component{

  constructor(props) {
    super(props);
    // constructor 只有super(props)存在 
    // ESlint 提示 Useless constructor no-useless-constructor
    this.state = {
      inputValue: '',
      list: ['学习英语','Learning React']
    }
    // 解决this指向问题, 有多种解决方式
    // onChange={ this.changeValue.bind(this) }
    // onChange={() => this.changeValue()}
    // 声明函数的时候用箭头函数（实验性质不推荐）
    this.changeValue = this.changeValue.bind(this) //推荐
    this.addlist = this.addlist.bind(this)
  }

  // 组件即将被挂载到页面得时候执行
  componentWillMount(){}
  
  render() {
    return (
      <React.Fragment>
        {/*第一种注释写法*/}
        {
          // 第二种注释写法，换行是为了避免将后一个 } 也当成注释
        }
        <div>
           {/* for 应该写为 htmlFor */}
          <label htmlFor="insertArea">输入内容</label>
          <input type="text" className="input" id="insertArea"
            value={ this.state.inputValue }
            onChange={ this.changeValue }
          />
          <button onClick={ this.addlist }>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index) => { 
              // 不建议用index做key值
              // return( 
                // <li key={index} onClick={ this.deleteItem.bind(this,index) } 
                  // 不进行转义 直接是html标签形式 存在xss攻击风险
                  // dangerouslySetInnerHTML={{__html: item}}
                //>
                  //{ item }
                //</li>
              //) 
              // 元素的key就近原则放在数组循环中
              return ( <TodoItem content={item} index={index} handleDel={this.deleteItem.bind(this)} key={index} /> )
            })
          }
        </ul>
        <Animation />
      </React.Fragment>
    )
  }

  // 组件被挂载到页面之后执行
  componentDidMount(){
    //数据请求
  }

  // 组件被更新（state或props改变）之前执行,需要返回一个布尔值
  shouldComponentUpdate(){
    // return false  组件不需要更新
    // return true   组件需要更新
  }

  //组件被更新之前执行，在shouldComponentUpdate执行之后
  //且shouldComponentUpdate返回true才会执行
  componentWillUpdate(){}

  //组件更新之后执行
  componentDidUpdate(){}

  // Props被改变的时候才会触发
  // 父组件的render()被重新执行，就会触发该函数执行
  // 组件第一次存在于父组件中不会执行，已经存在于父组件中才会执行
  componentWillReceiveProps(){}

  //组件即将被卸载的时候执行
  componentWillUnmount(){}

  changeValue (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  addlist () {
    if(!this.state.inputValue) return
    // this.state this.props可能异步更新,不要依赖他们的值来更新下一个状态
    // 使用函数形式,该函数接受两个参数
    // 1.更新前的state 2.更新时使用的props
    this.setState((prevState) =>({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))

    // this.setState({
    //   list: [...this.state.list,this.state.inputValue],
    //   inputValue: ''
    // })
  }
  deleteItem (index) {
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list
    })
  }
  
}

export default Todolist;