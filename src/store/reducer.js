const defaultState = {
  inputValue: '',
  todoList: ['学习React','学习Redux']
}

// 可以接收state, 但是绝不能修改state
export default (state=defaultState, action) =>{
  if(action.type==='change_input_value'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState
  }
  if( action.type==='add_todo_item'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoList.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if( action.type==='delete_todo_item'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoList.splice(action.index,1)
    return newState
  }
  return state;
}