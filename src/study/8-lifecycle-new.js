import React from 'react'

class ComponentLifeCycle extends React.Component {
  /*
  组件挂载时生命周期调用顺序
  constructor -> static getDerivedStateFromProps -> render -> componentDidMount
  */
  /*
  组件更新时生命周期调用顺序 setState() / forceUpdate() / new props
  getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate
  -> componentDidUpdate
  */
  constructor(props){
    super(props)
    this.state = {
      newsArray: []
    }
    this.listRef = React.createRef();
  }
  // 初次渲染，state更新
  render(){
    const styleDiv = { width:'300px', height:'150px', overflow:'auto', backgroundColor:'#2a5caa' }
    const styleIetm = { height:'30px', backgroundColor:'#b7704f' }
    return (
      <div style={ styleDiv } ref={ this.listRef }>
        {
          this.state.newsArray.map((item,i) => {
            return <div style={ styleIetm } key={i}>{ item }</div>
          })
        }
      </div>
    )
  }
  /*
  在render方法之前调用，挂载及更新都会被调用， 返回一个对象来更新state, 默认返回null
  此方法无权访问组件实例
  */
  static getDerivedStateFromProps(props, state){
    return null
  }
  // 组件挂载完成
  componentDidMount(){
    // this.timer = setInterval(()=>{
    //   const { newsArray } = this.state
    //   const news = `新闻${newsArray.length+1}`
    //   this.setState({ newsArray: [news,...newsArray] })
    // },3000)
  }

  /*
  组件更新完成之前(提交到DOM节点前),须与componentDidUpdate一起使用
  返回值将作为参数传递给 componentDidUpdate
  */
  getSnapshotBeforeUpdate(){
    // 得到未更新前的内容框高度
    return this.listRef.current.scrollHeight
  }
  // 组件更新完成之后
  componentDidUpdate(prevProps, prevState, snapshot){
    const nowHeight = this.listRef.current.scrollHeight
    this.listRef.current.scrollTop += nowHeight - snapshot
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
} 

export {
  ComponentLifeCycle
}