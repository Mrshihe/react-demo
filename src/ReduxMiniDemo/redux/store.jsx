// 引入createStore 用于创建store对象
import { createStore } from 'redux';
// 引入reducer
import countReducer from './count_reducers'

export default createStore(countReducer)