import React, { useState } from 'react'

const HooksState = () => {
  /*
  useState接收一个参数，为初始化的state
  useState返回一个数组，数组第一个值为当前state, 数组第二个值为更新state的函数

  setcount 有两种写法：
  1. setXxx(newValue): 参数为非函数值, 直接指定新的状态值
  2. setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值
  */
  const [count, setcount] = useState(0)
  return (
    <div style={{width: '500px', margin: '30px auto'}}>
      <h3>Hooks特性从16.8版本开始支持，可以使函数式组件支持state和其他React特性</h3>
      <h5>当天数值为：{ count }</h5>
      <button onClick={ () => { setcount(count+1) } }>点击+1</button>
    </div>
  )
}

export {
  HooksState
}