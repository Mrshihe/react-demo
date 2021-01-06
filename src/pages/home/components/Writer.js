import React from 'react';
import { WriterItem } from '../style';

class Writer extends React.Component {
  render() {
    return (
      <div style={{marginTop: '60px'}}>
        {
          this.props.writerList.map(item => {
            return (
              <WriterItem key={item.get('id')}>
                <img className="img" alt="" src={ item.get('img')} />
                <p className="name">{item.get('nickName')}</p>
                <p className="follow">+关注</p>
              </WriterItem>
            )
          })
        }
      </div>
    )
  }
}

export default Writer;