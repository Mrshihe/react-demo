import React from 'react';
import Loadable from 'react-loadable';

const DetailLoadable = Loadable({
  loader: () => import('./'),
  loading() {
    // 使用了jsx语法 需要引入react
  	return <div>loading..</div>
  }
})

export default () => <DetailLoadable />;