import { createStore, combineReducers, applyMiddleware } from 'redux';
import countReducer from './reducers/count'
import personRducer from './reducers/person'
import thunk from 'redux-thunk'

// redux-tools 工具使用
import { composeWithDevTools } from 'redux-devtools-extension'

// 将多个reducers合并
const reducers = combineReducers({
  count: countReducer,
  person: personRducer
})

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))