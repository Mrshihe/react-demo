// 使用jsx 必须先导入React
import React from 'react'

/*
函数式组件
只接收一个props参数，并返回一个React元素
*/
function HelloReact () {
	return (
		<div>
			<h1>Hello React</h1>
		</div>
	)
}

export { 
	HelloReact 
};