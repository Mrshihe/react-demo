import React from 'react';

/*
refs常用情况：
1.管理焦点，文本选择或媒体播放
2.触发强制动画
3.集成第三方DOM库
----------
不要过度使用ref
*/

/*
字符串形式的ref, 不推荐使用
1. 存在效率问题 2. 不能组合使用
*/
// class InputComponent extends React.Component {
// 	render(){
// 		return (
// 			<div>
// 				<input type="text" placeholder="点击按钮输出数据" ref="input" />
// 				<button onClick={ this.showData }>输出input数据</button>
// 			</div>
// 		)
// 	}
// 	showData = ()=>{
// 		console.log( this.refs['input'].value )
// 	}
// }

/*
回调函数式ref
把ref当前所处的节点挂在实例自身上，并且起一个名字
ref={ el=> this.input = el }
把ref当前所处的input节点挂在实例自身，起了一个名字叫input
---------
内联函数定义的，在更新过程中被执行两次，第一次传入参数null，然后第二次会传入参数DOM元素
因为在每次渲染时会创建一个新的函数实例，所以React清空旧的ref并且设置新的
*/

// class InputComponent extends React.Component {
// 	bindRef = el => {
// 		this.input = el
// 	}
// 	render(){
// 		return (
// 			<div>
// 				{/*<input type="text" placeholder="点击按钮输出数据" ref={ el=> this.input = el } />*/}
// 				<input type="text" placeholder="点击按钮输出数据" ref={ this.bindRef } />
// 				<button onClick={ this.showData }>输出input数据</button>
// 			</div>
// 		)
// 	}
// 	showData = ()=>{
// 		console.log( this.input.value )
// 	}
// }

// createRef形式
class InputComponent extends React.Component {
	// 返回一个容器，存储被ref所标识的节点, 只能存储一个节点
	myRef = React.createRef();
	render(){
		return (
			<div>
				<input type="text" placeholder="点击按钮输出数据" ref={ this.myRef } />
				<button onClick={ this.showData }>输出input数据</button>
			</div>
		)
	}
	showData = ()=>{
		console.log( this.myRef.current.value )
	}
}

export {
	InputComponent
}