import React from 'react'
import { useSelector } from 'react-redux'
import RenderCount from '../../components/RenderCount'

export default function JokeViewer(props: { type: 'Programming' | 'Christmas'; index: number }) {
  const joke = useSelector((state: any) => state[props.type][props.index])

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
