import React from 'react'
import { Provider } from 'react-redux'
import JokesViewer from './components/JokesViewer'

import store from './store'

export default function ReactRedux() {
  return (
    <Provider store={store}>
      <h1>React Redux App</h1>
      <JokesViewer></JokesViewer>
    </Provider>
  )
}
