import React from 'react';

import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css';

import styles from './todolist.module.css'

import store from '../store/index';

class TodoList extends React.Component {
  constructor(props){
    super(props)
    this.state = store.getState()
    this.handleChange = this.handleChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.addItemList = this.addItemList.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.todoWrapper}>
          <Input 
            className={styles.text} 
            value={this.state.inputValue} 
            placeholder='请输入内容' 
            onChange={this.handleChange}  
          />
          <Button className={styles.btn} type='primary'
          onClick={this.addItemList}>提交</Button>
        </div>
        <List
          bordered
          dataSource={this.state.todoList}
          renderItem={(item,index) => (<List.Item onClick={this.removeItem.bind(this,index)}>{item}</List.Item>)}
        />
      </div>
    )
  }
  handleChange(e){
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }
  addItemList(){
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }
  removeItem(index){
    const action = {
      type: 'delete_todo_item',
      index: index
    }
    store.dispatch(action)
  }
  // 更新组件内数据
  handleStoreChange(){
    this.setState(store.getState())
  }
}

export default TodoList;