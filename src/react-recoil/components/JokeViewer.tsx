import React from 'react'
import { useRecoilValue } from 'recoil'
import RenderCount from '../../components/RenderCount'
import { christmasJokesSelector, programminJokesSelector } from '../selectors'

const SELECTORS_MAP = {
  Programming: programminJokesSelector,
  Christmas: christmasJokesSelector
}

export default function JokeViewer(props: { type: 'Programming' | 'Christmas'; index: number }) {
  const jokes = useRecoilValue(SELECTORS_MAP[props.type])

  return (
    <div style={{ border: '1px solid blue' }}>
      <RenderCount></RenderCount>
      <h3>Joke {props.index + 1}</h3>
      <div>
        <span>{jokes[props.index].setup}</span> <br></br> <span>{jokes[props.index].deliver}</span>
      </div>
    </div>
  )
}
