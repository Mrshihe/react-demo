/*
专门为组件生成action对象
action 分为 同步和异步
同步action：值为一个对象
异步action: 值为一个函数
*/
import { INCREMENT, DECREMENT } from './constant'

// 同步 action
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })

// 异步 action
export const createIncrementAsyncAction = (data,delay) => {
  // 利用函数开启异步任务
  // 异步action由store调用，有dispatch传过来
  return dispatch => {
    setTimeout(()=>{
      dispatch(createIncrementAction(data))
    },delay)
  }
}