import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from '../store/actionTypes.js'; 

const defaultState = {
  inputValue: '',
  todoList: ['学习React','学习Redux']
}

// 可以接收state, 但是绝不能修改state
export default (state=defaultState, action) =>{
  if(action.type=== CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState
  }
  if( action.type=== ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoList.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if( action.type=== DELETE_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoList.splice(action.index,1)
    return newState
  }
  return state;
}