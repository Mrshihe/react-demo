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
			name : '学习React'
		}
		// 方法绑定
		this.handleclick = this.handleclick.bind(this)
	}
	handleclick(){
		/*
		state的更新可能是异步的,可能会把多个setState()调用合并成一个调用
		不要依赖this.state/this.props的值来更新下一个状态
		*/
		this.setState({
			name: '改变了React内容'
		})
		/*
		setState接受函数解决异步更新不准确的问题
		this.setState((state, props) => {
			// state 上一个state props 此次更新用的props
		})
		*/
	}
	// Class组件中必须实现的方法
	// render放在类的原型对象上，供类的实例使用，使用组件标签的时候，会new出一个实例
	render(){
		return (
			<div>
				<p>{ this.state.name }</p>
				<button onClick={ this.handleclick }>改变文本内容</button>
			</div>
		)	
	}
}

export { 
	HelloReact,
	ClassReact
};