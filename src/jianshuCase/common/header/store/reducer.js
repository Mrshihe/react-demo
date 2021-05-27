import * as actionTypes from './constants'
import { fromJS } from 'immutable';

// 将普通对象改为immutable对象
// fromJS会将里边的list也变成immutable对象
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

// 一定不能对原始state进行修改
const headerReducer = (state=defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      // return state.set('list', fromJS(action.data)).set('totalPage',action.totalPage);
      // 语法与链式调用一致
      return state.merge({
        list: fromJS(action.data),
        totalPage: action.totalPage
      })
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn',true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn',false)
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state;
  }
  // if( action.type === actionTypes.SEARCH_FOCUS ){
  //   // set方法 会结合之前immutable对象的值和设置的值，返回一个全新的对象
  //   return state.set('focused', true)
  // }else if( action.type === actionTypes.SEARCH_BLUR ){
  //   return state.set('focused', false)
  // }else if( action.type === actionTypes.CHANGE_LIST ){
  //   return state.set('list', fromJS(action.data) )
  // }
  // return state;
}

export default headerReducer