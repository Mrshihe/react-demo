import { INCREMENT, DECREMENT } from '../constant'

export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })
export const createIncrementAsyncAction = (data,delay) => {
  return dispatch => {
    setTimeout(()=>{
      dispatch(createIncrementAction(data))
    },delay)
  }
}