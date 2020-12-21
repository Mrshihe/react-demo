const defaultState = {
  focused: false
}

export default (state=defaultState, action) => {
  if( action.type === 'input_focus' ){
    return {
      focused: true
    }
  }else if( action.type === 'input_blur' ){
    return {
      focused: false
    }
  }
  return state;
}