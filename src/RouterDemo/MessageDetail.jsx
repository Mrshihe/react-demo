import React from 'react'
// import qs from 'querystring'

export default function MessageDetail(props) {
  // params方式接收参数
  // const { id, title, content } = props.match.params

  // search方式接收参数 string类型 urlencoded
  // const searchString = props.location.search
  // const { id, title, content } = qs.parse(searchString.slice(1))

  // state方式接收参数 BrowserRouter操作history，history保存了传递信息
  const { id, title, content } = props.location.state 
  return (
    <ul>
      <li>ID:{ id }</li>
      <li>标题: { title }</li>
      <li>来源: { content }</li>
    </ul>
  )
}
