/*
接收两个参数 previousState(之前状态) / action(动作状态) 返回一个新 state
必须为一个纯函数，纯函数需要满足的条件：
1. 不能修改参数，相同的参数应始终返回相同的值
2. 不能产生任何副作用
3. 不依赖任何外部变量
第一次调用由store自动触发，传递的prevState为undefined
*/

// 定义一个初始化的state
const initState = 0

export default (prevState=initState, action) => {
  const { type, data } = action;
  // 根据type决定如何处理数据
  switch(type){
    case 'increment':
      return prevState + data
    case 'decrement':
      return prevState - data
    default:
      return prevState
  }
}