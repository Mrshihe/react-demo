import React from 'react';
import { ListItem } from '../style';

class List extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.articleList.map(item => {
            return (
              <ListItem key={item.get('id')}>
                <img alt={item.get('title')} className='pic' src={item.get('imgUrl')} />
                <div className="info">
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </div>
              </ListItem>
            )
          })
        }
      </div>
    )
  }
}

export default List;