import React from 'react'
import { useRecoilValue } from 'recoil'
import RenderCount from '../../components/RenderCount'
import { JokeType } from '../../state.types'
import { christmasJokesSelector, programminJokesSelector } from '../selectors'

const SELECTORS_MAP = {
  Programming: programminJokesSelector,
  Christmas: christmasJokesSelector
}

export default function JokeViewer(props: { type: JokeType; index: number }) {
  const jokes = useRecoilValue(SELECTORS_MAP[props.type])

  return (
    <div style={{ border: '1px solid blue' }}>
      <RenderCount></RenderCount>
      <h3>Joke {props.index + 1}</h3>
      <div>
        <span>{jokes[props.index].setup}</span> <br></br> <span>{jokes[props.index].delivery}</span>
      </div>
    </div>
  )
}
