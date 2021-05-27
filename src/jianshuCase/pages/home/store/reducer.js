import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: []
})

const homeReducer = (state=defaultState, action) => {
  switch(action.type) {
    case "get_home_data":
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
      })
    case "get_more_article":
      return state.set('articleList', state.get('articleList').concat(fromJS(action.list)))
    default:
      return state;
  }
}
export default homeReducer