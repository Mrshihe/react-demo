import React from 'react';
import { TopicWrapper } from '../style';

function Topic(props) {
  return (
    <TopicWrapper>
      {
        props.topicList.map((item) => {
          return (
            <div className="topicItem" key={ item.get('id') }>
              <img className="topic-pic" src={ item.get('imgUrl') } alt={ item.get('title') } />{ item.get('title') }
            </div>
          )
        })
      }
    </TopicWrapper>
  )
}

export default Topic;