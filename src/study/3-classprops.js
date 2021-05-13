import React from 'react';
// 使用 PropTypes 进行类型检查
import PropTypes from 'prop-types'

class ClassProps extends React.Component {
  /* 
  提案阶段，设置defaultProps为静态属性，设置默认值
  propTypes也可以设置成为静态属性，进行约束
  */
  static defaultProps = {
    age: 18
  } 

  /*
  在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 super(props)
  constructor(props){
    super(props)
  }
  */

  render(){
    /* 不能修改自身的 props */
    const { name, age, sex } = this.props
    return (
      <ul>
        <li>姓名：{ name }</li>
        <li>年龄：{ age }</li>
        <li>性别：{ sex }</li>
      </ul>
    );
  }
}

/*
15.5.xx以上分离出prop-types库
对props进行限制 
*/
ClassProps.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
}

/* 设置props默认值 */
// ClassProps.defaultProps = {
//   sex: '男'
// }


/* 
<ClassProps name="Any" sex="女" age="17" />
age="17"传入默认为string age={17}传入为number
利用Props将信息传进组件， {...Data} 分批传入形式
*/


function FuncProps(props) {
  return (
    <ul>
      <li>姓名：{ props.name }</li>
      <li>年龄：{ props.age }</li>
      <li>性别：{ props.sex }</li>
    </ul>
  )
}
/*
FuncProps.defaultProps
FuncProps.propTypes
使用方式同class组件一样
 */
export {
  ClassProps,
  FuncProps
}