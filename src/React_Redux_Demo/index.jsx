// 引入connect用于连接UI组件和redux
import { connect } from 'react-redux'
// 引入UI组件
import CountComponent from './components'
import { createIncrementAction, createDecrementAction } from './redux/count_action'

// 返回对象 用于传递state
const mapStateToProps = state => ({ count: state })

// 返回对象 用于传递操作state的方法
// 两种传参方式，可以传递函数，可以传递对象
/*
 传递对象的时候，触发dispatch自动派发action, 简写如下
 {
   increment: createIncrementAction,
   decrement: createDecrementAction
 }
*/
const mapDispatchToProps = dispatch => {
  return {
    increment(data){
      dispatch(createIncrementAction(data))
    },
    decrement(data){
      dispatch(createDecrementAction(data))
    }
  }
}

// 利用connect生成容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountComponent)