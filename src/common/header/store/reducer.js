import * as actionTypes from './constants'
import { fromJS } from 'immutable';

// 将普通对象改为immutable对象
const defaultState = fromJS({
  focused: false,
  list: []
});

// 一定不能对原始state进行修改
export default (state=defaultState, action) => {
  if( action.type === actionTypes.SEARCH_FOCUS ){
    // set方法 会结合之前immutable对象的值和设置的值，返回一个全新的对象
    return state.set('focused', true)
  }else if( action.type === actionTypes.SEARCH_BLUR ){
    return state.set('focused', false)
  }
  return state;
}