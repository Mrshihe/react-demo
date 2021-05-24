import React from 'react'

export default function MessageDetail(props) {
  // params方式接受参数
  const {id,title,content} = props.match.params
  return (
    <ul>
      <li>ID:{ id }</li>
      <li>标题: { title }</li>
      <li>来源:{ content }</li>
    </ul>
  )
}
