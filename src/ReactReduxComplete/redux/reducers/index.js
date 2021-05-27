import { combineReducers } from 'redux'

import countReducer from './count'
import personRducer from './person'

// 将多个reducers合并
export default combineReducers({
  count: countReducer,
  person: personRducer
})