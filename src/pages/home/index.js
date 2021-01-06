import React from 'react';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  LoadMore,
  BackTop
} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import axios from 'axios';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showScroll: false
    }

    this.scrollToTop = this.scrollToTop.bind(this)
    this.scrollEvents = this.scrollEvents.bind(this)
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
					<img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
					<Topic topicList={ this.props.topicList } />
					<List articleList={ this.props.articleList } />
          <LoadMore onClick={ this.props.getMoreArticle }>阅读更多</LoadMore>
				</HomeLeft>
				<HomeRight>
					<Recommend recommendList={ this.props.recommendList } />
					<Writer writerList={ this.props.writerList } />
				</HomeRight>
        { this.state.showScroll ? <BackTop onClick={ this.scrollToTop }>Top</BackTop> : null }
      </HomeWrapper>
    )
  }

  scrollToTop() {
    window.scroll(0, 0)
  }

  scrollEvents() {
    const scroll_top = document.body.scrollTop || document.documentElement.scrollTop;
    if( scroll_top > 150 ){
      this.setState({
        showScroll: true
      })
    }else{
      this.setState({
        showScroll: false
      })
    }
  }

  componentDidMount() {
    this.props.getHomeData()
    window.addEventListener('scroll', this.scrollEvents )
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEvents )
  }
}

const mapState = (state) => ({
  topicList: state.get('home').get('topicList'),
  articleList: state.getIn(['home','articleList']),
  recommendList: state.getIn(['home','recommendList']),
  writerList: state.getIn(['home','writerList'])
});

const mapDispatch = (dispatch) => ({
  getHomeData() {
    axios.get('/api/home.json').then( res => {
      const result = res.data.data;
      dispatch({
        type: 'get_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
        writerList: result.writerList
      })
    })
  },
  getMoreArticle() {
    axios.get('/api/homeList.json').then( res => {
      const result = res.data.data;
      dispatch({
        type: 'get_more_article',
        list: result
      })
    })
  }
})

export default connect(mapState, mapDispatch)(Home);