import React from 'react'
import RenderCount from '../../components/RenderCount'
import { useSelector, useDispatch } from 'react-redux'
import JokeViewer from './JokeViewer'
import { setJokes } from '../jokesSlide'
import { JokeType } from '../../state.types'

export default function TypedJokesViewer(props: { type: JokeType }) {
  const jokes = useSelector((state: any) => state[props.type])
  const dispatch = useDispatch()

  const loadJokes = async () => {
    const response = await fetch(`https://v2.jokeapi.dev/joke/${props.type}?type=twopart&amount=3`)
    const body = await response.json()

    dispatch(setJokes({ type: props.type, jokes: body.jokes }))
  }

  return (
    <div style={{ border: '1px solid red' }}>
      <RenderCount></RenderCount>
      <h1>{props.type} Jokes</h1>
      {jokes.length ? (
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
