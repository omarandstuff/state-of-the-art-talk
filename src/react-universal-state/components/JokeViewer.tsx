import React from 'react'
import { useSelector } from '@universal-packages/state-react'
import RenderCount from '../../components/RenderCount'
import { Joke, JokeType } from '../../state.types'

export default function JokeViewer(props: { type: JokeType; index: number }) {
  const joke = useSelector<Joke>(`${props.type}/${props.index}`)

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
