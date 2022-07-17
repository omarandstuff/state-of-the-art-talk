import React from 'react'
import RenderCount from '../../components/RenderCount'
import { JokeType } from '../../state.types'
import { useStore } from './useStore'

export default function JokeViewer(props: { type: JokeType; index: number }) {
  const joke = useStore((state) => state.jokes[props.type][props.index])

  return (
    <div style={{ border: '1px solid blue' }}>
      <RenderCount></RenderCount>
      <h3>Joke {props.index + 1}</h3>
      <div>
        <span>{joke.setup}</span> <br></br> <span>{joke.delivery}</span>
      </div>
    </div>
  )
}
