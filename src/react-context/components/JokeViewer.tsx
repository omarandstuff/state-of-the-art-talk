import React from 'react'
import RenderCount from '../../components/RenderCount'
import { JokeType } from '../../state.types'
import { ReactContextState } from '../ReactContextProvider'

export default function JokeViewer(props: { type: JokeType; index: number }) {
  const { contextState } = React.useContext(ReactContextState)

  return (
    <div style={{ border: '1px solid blue' }}>
      {/* <RenderCount></RenderCount> */}
      <h3>Joke {props.index + 1}</h3>
      <div>
        <span>{contextState[props.type][props.index].setup}</span> <br></br> <span>{contextState[props.type][props.index].delivery}</span>
      </div>
    </div>
  )
}
