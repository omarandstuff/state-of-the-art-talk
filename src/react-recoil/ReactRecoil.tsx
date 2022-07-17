import React from 'react'
import { RecoilRoot } from 'recoil'
import JokesViewer from './components/JokesViewer'

export default function ReactRecoil() {
  return (
    <RecoilRoot>
      <h1>React Recoil App</h1>
      <JokesViewer></JokesViewer>
    </RecoilRoot>
  )
}
