import React from 'react'
import RenderCount from '../../components/RenderCount'
import { ReactContextState } from '../ReactContextProvider'

export default function JokeViewer(props: { type: 'Programming' | 'Christmas'; index: number }) {
  const { contextState } = React.useContext(ReactContextState)

  return (
    <div style={{ border: '1px solid blue' }}>
      {/* <RenderCount></RenderCount> */}
      <h3>Joke {props.index + 1}</h3>
      <div>
        <span>{contextState.jokes[props.type][props.index].setup}</span> <br></br> <span>{contextState.jokes[props.type][props.index].delivery}</span>
      </div>
    </div>
  )
}
