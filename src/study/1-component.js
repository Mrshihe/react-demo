// 使用jsx 必须先导入React
import React from 'react'

// 自定义组件名开头应为大写

/*
函数式组件(适用于简单组件，无状态)
只接收一个props参数，并返回一个React元素
*/
function HelloReact() {
	return (
		<div>
			<h1>Hello React</h1>
		</div>
	)
}

/*
类组件(适用于复杂组件，存在状态<state>，状态驱动页面改变)
*/
class ClassReact extends React.Component {
	// 如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数
	// 实现构造函数时，应在其他语句之前前调用 super(props)
	// 不要调用 setState() 方法
	constructor(props){
		super(props)
		// 初始化state
		this.state = {
			name : 'tom'
		}
		// 方法绑定
		this.handleclick = this.handleclick.bind(this)
	}
	handleclick(){
		console.log(this.state.name)
	}
	// Class组件中必须实现的方法
	// render放在类的原型对象上，供类的实例使用，使用组件标签的时候，会new出一个实例
	render(){
		return (
			<div>
				<p>React from Class</p>
			</div>
		)	
	}
}

export { 
	HelloReact,
	ClassReact
};