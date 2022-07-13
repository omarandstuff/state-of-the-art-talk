import React from 'react'
import JokesViewer from './components/JokesViewer'
import ReactContextProvider from './ReactContextProvider'

export default function ReactContext() {
  return (
    <ReactContextProvider>
      <h1>ContextApp</h1>
      <JokesViewer></JokesViewer>
    </ReactContextProvider>
  )
}
