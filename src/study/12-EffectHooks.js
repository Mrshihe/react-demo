import React,{ useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const HooksEffect = () => {
  const [count, setcount] = useState(0)
  /*
  useEffect(() => { 
    // 执行任何带副作用操作
    return () => { // 可选参数，在组件卸载前执行
      // 比如清除定时器/取消订阅等
    }
  }, [stateValue]) 
  如果不传第二个参数，则useEffect会在第一次渲染和每次更新后都执行
  如果指定的是[], 回调函数只会在第一次render()后执行，不监听任何值
  如果指定[value,value1], 则监听value和value1，回调函数会在value和value1发生改变时执行
  */
  useEffect(() => {
    const timer = setInterval(()=>{ setcount(count+1) },9000)
    return () => {
      clearInterval(timer)
    }
  })
  function unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  return (
    <div style={{width:'500px',margin:'30px auto'}}>
      <h4>EffctHooks在函数组件中执行副作用操作，可以看做componentDidMount，componentDidUpdate，componentWillUnmount这三个函数的组合</h4>
      <h6>副操作：请求数据、操作真实DOM、发布订阅/定时器</h6>
      <p>当前数值为：{ count }</p>
      <button onClick={ unmount }>卸载组件</button>
    </div>
  )
}
export {
  HooksEffect
}