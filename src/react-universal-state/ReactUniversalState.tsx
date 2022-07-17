import React from 'react'
import UniversalStateProvider from '@universal-packages/state-react/UniversalStateProvieder'
import JokesViewer from './components/JokesViewer'

export default function ReactUniversalState() {
  return (
    <UniversalStateProvider initialState={{ Programming: [], Christmas: [] }}>
      <h1>React Universal State App</h1>
      <JokesViewer></JokesViewer>
    </UniversalStateProvider>
  )
}
