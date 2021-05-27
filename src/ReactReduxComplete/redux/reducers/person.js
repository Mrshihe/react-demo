import { ADD_PERSON } from '../constant'

const initState = [
  {id: 1, name: 'tom', age: 18}
]
const personReducer = (prevState=initState, action) => {
  switch(action.type){
    case ADD_PERSON:
      /*
       prevState.unshift(action.data)
       return prevState
       这种写法不起作用，因为redux进行浅比较，发现prevState地址并没有变，所以不进行更新
       reduce每次需要返回新的state！！！
      */
      return [action.data, ...prevState]
    default:
      return prevState
  }
}
export default personReducer