import React from 'react';
import { DetailWrapper } from './style';
import axios from 'axios';

class Detail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      content: ''
    }
  }
  render() {
    return (
      <DetailWrapper>
        <div className="title">{this.state.title}</div>
        <div className="content" dangerouslySetInnerHTML={{__html: this.state.content}}></div>
      </DetailWrapper>
    )
  }
  componentDidMount() {
    // this.props.match.params.id    动态路由获取方式
    // this.props.location.query.id   query对象传参获取方式
    // this.props.location.search   query字符串拼接传参获取方式，需要自己拆分出参数
    // this.props.location.state.id   state传参获取方式
    axios.get('/api/detail.json').then(res => {
      const result = res.data.data;
      this.setState({
        title: result.title,
        content: result.content
      })
    })
  }
}

export default Detail;