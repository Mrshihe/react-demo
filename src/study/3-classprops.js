import React from 'react';

class ClassProps extends React.Component {
  render(){
    /*
    不能修改自身的 props
    */
    return (
      <ul>
        <li>姓名：{ this.props.name }</li>
        <li>年龄：{ this.props.age }</li>
        <li>性别：{ this.props.sex }</li>
      </ul>
    );
  }
}

/* 
<ClassProps name="Any" sex="女" age="17" />
利用Props将信息传进组件
*/

export {
  ClassProps
}