import React from 'react'

import  Header  from './common/header';
import { GlobalStyle } from './style'

import store from './store'
import { Provider } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <GlobalStyle />
        <Header />
      </Provider>
    )
  }
}

export default App