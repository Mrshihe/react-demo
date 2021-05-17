import React from 'react';

class PersonDiff extends React.Component {
  /*
  初始数据:
    {id: 1, name:'小赵', age:18},
    {id: 2, name:'小钱', age:19}
  初次渲染的虚拟DOM：
    <li key=0>小赵--18<input type="text"></li>
    <li key=1>小钱--19<input type="text"></li>

  更新后数据：
    {id: 3, name:'小孙', age:20},
    {id: 1, name:'小赵', age:18},
    {id: 2, name:'小钱', age:19}
  更新后虚拟DOM：
    <li key=0>小孙--20<input type="text"></li>
    <li key=1>小赵--18<input type="text"></li>
    <li key=2>小钱--19<input type="text"></li>

  新旧虚拟DOM进行对比：
  对比li找到相同的key值，但内容不同，生成新的真实DOM
  对比input，发现input一样，进行复用<但此时input框存在不对应的人员信息>
  (真实DOM变化3次)
  
  未能重复利用真实DOM，损耗性能，用id作为问题即可解决该问题<相同key对应相同内容，真实DOM不变>(真实DOM变化1次)
  */
 /*
 使用index作为key,可能存在的问题
 1. 数据逆序添加、逆序删除等循环操作，会产生没有必要的真实DOM更新
 2. 含输入型DOM，会产生错误的DOM更新
 如果仅用于列表顺序展示，用index作为key没有问题
 */
  state = {
    persons: [
      {id: 1, name:'小赵', age:18},
      {id: 2, name:'小钱', age:19}
    ]
  }
  add = () => {
    const { persons } = this.state
    const p = {id: persons.length+1, name:'小孙', age:20}
    this.setState({persons:[p,...persons]})
  }
  render(){
    return (
      <div>
        <h1>使用index作为索引值带来的问题</h1>
        <button onClick={ this.add }>添加小孙</button>
        <ul>
          {
            this.state.persons.map( (item,index) => {
              return <li key={ index }>{item.name}--{item.age}<input type="text" placeholder="信息复制给input后,显示错乱" /></li>
            })
          }
        </ul>
        <h1>使用id作为索引值</h1>
        <ul>
          {
            this.state.persons.map( item => {
              return <li key={ item.id }>{item.name}--{item.age}<input type="text" placeholder="信息复制给input后,正常显示" /></li>
            })
          }
        </ul>
      </div>
    )
  }
}

export {
  PersonDiff
}