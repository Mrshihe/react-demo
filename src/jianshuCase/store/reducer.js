// import { combineReducers } from 'redux'
// 使用redux-immutable使得导出得store也为immutable对象 
import { combineReducers } from 'redux-immutable' 

// 拆分出的reducer引入
import { reducer as headerReducer} from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import loginReducer from '../pages/login/store/reducer';

// 将分散reducer合并使用
export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  login: loginReducer
})