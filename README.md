### React特点： 
- 组件化模式、声明式编码
- 虚拟DOM + Diff算法，减少真实DOM交互

### Diff算法
同层比对，速度快， 算法简单，对比最小粒度为标签

### key的内部原理
key为虚拟DOM对象的标识，当新旧虚拟DOM进行对比时
1. 新旧虚拟DOM存在相同key值时：(1)虚拟DOM内容没变，直接使用旧虚拟DOM (2)内容改变，生成新的真实DOM替换到旧的真实DOM
2. 新旧虚拟DOM不存在相同key值时：创建新的真实DOM，放进页面渲染

### 无状态组件性能略高，适用于只有render的组件

### redux(不是Facebook维护)
##### redux专门用于做状态管理的js库,可用于React/Vue等框架
##### redux三个核心概念
1. action: 动作对象, 包含两个属性( type:标识属性,唯一性, data:数据属性,值类型任意 )
2. reducer: 用于初始化状态、加工状态；加工时根据新旧state产生新的state 为纯函数
3. store: 将state、action、reducer联系在一起的对象  
###### 中间件redux-thunk作用于action和store之间，action为函数的时候会先交给thunk进行处理

##### react-redux配合redux使用
在react-redux概念中，UI组件应该被容器组件包裹只负责页面渲染、交互，容器组件负责和redux通信，redux中的状态和操作状态方法以props传递给UI组件

### react配置代理
1. 在package.json中新增proxy字段
```
"proxy":"http://localhost:5000"
```
2. 创建代理配置文件, src目录下新建setupProxy.js
```
const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(
    proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
      target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值
      /*
      changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
      changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
      changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */
      pathRewrite: {'^/api1': ''} //重写请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
    }),
    proxy('/api2', { 
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {'^/api2': ''}
    })
  )
}
```

