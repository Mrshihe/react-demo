import React from 'react';
import { connect } from 'react-redux'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from '../store/actionTypes.js'; 

// 只有render可以改为无状态组件
// class TodoList extends Component {
//   render() {
//     const { inputValue, todoList, handleInputchange, handleSumbit, handleDelete } = this.props;
//     return (
//       <div>
//         <div>
//           <input value = { inputValue } onChange={ handleInputchange } />
//           <button onClick={ handleSumbit }>提交</button>
//         </div>
//         <ul>
//           {
//             todoList.map((item,index) => {
//               return (<li onClick={ () => { handleDelete(index) } } key={index}>{item}</li>)
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
// }

function TodoList(props) {
  const { inputValue, todoList, handleInputchange, handleSumbit, handleDelete } = props;
  return (
    <div>
      <div>
        <input value = { inputValue } onChange={ handleInputchange } />
        <button onClick={ handleSumbit }>提交</button>
      </div>
      <ul>
        {
          todoList.map((item,index) => {
            return (<li onClick={ () => { handleDelete(index) } } key={index}>{item}</li>)
          })
        }
      </ul>
    </div>
  )
}

// 将store里的数据映射给props
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    todoList: state.todoList
  }
}

// 将dispatch方法映射给 props
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputchange(e){
      dispatch({
        type: CHANGE_INPUT_VALUE,
        value: e.target.value
      })
    },
    handleSumbit() {
      dispatch({type: ADD_TODO_ITEM})
    },
    handleDelete(index) {
      dispatch({
        type: DELETE_TODO_ITEM,
        index
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);