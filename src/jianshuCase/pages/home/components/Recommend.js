import React from 'react';
import { RecommendItem } from '../style';

class Recommend extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.recommendList.map(item => {
            return <RecommendItem key={item.get('id')} imgUrl={`//images.weserv.nl/?url=`+item.get('imgUrl')} />
          })
        }
      </div>
    )
  }
}

export default Recommend;