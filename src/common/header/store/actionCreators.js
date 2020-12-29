import * as actionTypes from './constants';
import axios from 'axios'

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})
export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})
export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})

// redux-thunk 可以让返回的action为一个函数
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then( res => {
      const data = res.data.data;
      dispatch({
        type: actionTypes.CHANGE_LIST,
        data,
        totalPage: Math.ceil( data.length/5 )
      })
    }).catch(err => {
      console.log('请求失败')
    })
  }
}