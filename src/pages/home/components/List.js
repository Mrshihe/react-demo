import React from 'react';
import { ListItem } from '../style';

function List(props) {
  return (
    <div>
      {
        props.articleList.map((item,index) => {
          return (
            <ListItem key={index}>
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

export default List;