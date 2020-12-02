import React from 'react'
// Fragment占位符, 无需向DOM里添加额外节点 简写方式: <></>
// key是唯一可以传递给<React.Fragment>得属性, 简写方式不支持

class Todolist extends React.Component{

  constructor(props) {
    super(props);
    // constructor 不声明this.state的话 
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
  
  render() {
    return (
      <React.Fragment>
        <div>
          <input type="text" 
            value={ this.state.inputValue }
            onChange={ this.changeValue }
          />
          <button onClick={ this.addlist }>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index) => { 
              return <li>{item}</li> 
            })
          }
        </ul>
      </React.Fragment>
    )
  }

  changeValue (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  addlist () {
    console.log('1')
  }
}

export default Todolist;