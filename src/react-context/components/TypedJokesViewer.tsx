import React from 'react'
import RenderCount from '../../components/RenderCount'
import { JokeType } from '../../state.types'
import { ReactContextState } from '../ReactContextProvider'
import JokeViewer from './JokeViewer'

export default function TypedJokesViewer(props: { type: JokeType }) {
  const { contextState, setContextState } = React.useContext(ReactContextState)

  const loadJokes = async () => {
    const response = await fetch(`https://v2.jokeapi.dev/joke/${props.type}?type=twopart&amount=3`)
    const body = await response.json()

    const newState = { ...contextState }

    newState[props.type] = body.jokes

    setContextState(newState)
  }

  return (
    <div style={{ border: '1px solid red' }}>
      <RenderCount></RenderCount>
      <h1>{props.type} Jokes</h1>
      {contextState[props.type].length ? (
        <div>
          <JokeViewer type={props.type} index={0}></JokeViewer>
          <JokeViewer type={props.type} index={1}></JokeViewer>
          <JokeViewer type={props.type} index={2}></JokeViewer>
        </div>
      ) : (
        <div>No jokes loaded</div>
      )}
      <div>
        <button onClick={loadJokes}>Load jokes</button>
      </div>
    </div>
  )
}
