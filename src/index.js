import React from 'react'
import ReactDOM from 'react-dom';

import { HelloReact }  from './app';
import './style.js';

ReactDOM.render(
  <HelloReact />,
  document.getElementById('root')
);
/*
1. 解析组件标签，找到组件
2. 将组件返回得虚拟DOM转换为真实DOM进行渲染
*/