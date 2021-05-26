// 引入createStore 用于创建store对象
import { createStore, applyMiddleware } from 'redux';
// 引入reducer
import countReducer from './count_reducers'
// 引入redux-thunk中间件处理异步action
import thunk from 'redux-thunk'

// export default createStore(countReducer)
// 使用中间件，使得store可以处理异步action，store调用异步action创建异步任务，而后通过dispatch派发同步action
export default createStore(countReducer,applyMiddleware(thunk))