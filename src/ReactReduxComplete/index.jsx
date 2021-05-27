import React, { Component } from 'react'
import Person from './Person'
import Count from './Count'
import { Provider } from 'react-redux'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Count />
        <Person />
      </Provider>
    )
  }
}
