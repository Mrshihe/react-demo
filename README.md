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

### redux中间件thunk作用于action和store之间，action为函数的时候会先交给thunk进行处理

