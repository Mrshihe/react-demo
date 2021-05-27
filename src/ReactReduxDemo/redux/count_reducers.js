import { INCREMENT, DECREMENT } from './constant'
const initState = 0

const reducers = (prevState=initState, action) => {
  const { type, data } = action;
  // 根据type决定如何处理数据
  switch(type){
    case INCREMENT:
      return prevState + data
    case DECREMENT:
      return prevState - data
    default:
      return prevState
  }
}
export default reducers