import React from 'react';
import { ListItem } from '../style';
import { Link } from 'react-router-dom';

function List(props) {
  return (
    <div>
      {
        props.articleList.map((item,index) => {
          return (
            // 动态路由传参 to={`/detail/${item.get('id')}`}
            // query传参 to={{pathname:'/detail', query:{id:3}}} 刷新参数消失，参数不会显示在地址栏
            // query传参拼接字符串方式 to={`/detail?id=${item.get("id")}`} 刷新参数不消失，参数显示在地址栏上
            // state传参 to={{pathname:'/detail', state:{id:3}}} 刷新参数不消失，参数不会显示在地址栏
            
            <Link to={`/detail/${item.get('id')}`} key={index}>
              <ListItem>
                <img alt={item.get('title')} className='pic' src={`//images.weserv.nl/?url=`+item.get('imgUrl')} />
                <div className="info">
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </div>
              </ListItem>
            </Link>
          )
        })
      }
    </div>
  )
}

export default List;