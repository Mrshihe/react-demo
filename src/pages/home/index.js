import React from 'react';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import axios from 'axios';

class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
					<img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
					<Topic topicList={ this.props.topicList } />
					<List articleList={ this.props.articleList } />
				</HomeLeft>
				<HomeRight>
					<Recommend recommendList={ this.props.recommendList } />
					<Writer writerList={ this.props.writerList } />
				</HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    axios.get('/api/home.json').then( res => {
      const result = res.data.data;
      this.props.getHomeData({
        type: 'get_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
        writerList: result.writerList
      })
    })
  }
}

const mapState = (state) => ({
  topicList: state.get('home').get('topicList'),
  articleList: state.getIn(['home','articleList']),
  recommendList: state.getIn(['home','recommendList']),
  writerList: state.getIn(['home','writerList'])
});

const mapDispatch = (dispatch) => ({
  getHomeData(action) {
    dispatch(action)
  }
})

export default connect(mapState, mapDispatch)(Home);