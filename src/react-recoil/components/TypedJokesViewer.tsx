import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import RenderCount from '../../components/RenderCount'
import { JokeType } from '../../state.types'
import { jokesAtom } from '../atoms'
import { christmasJokesSelector, programminJokesSelector } from '../selectors'
import JokeViewer from './JokeViewer'

const SELECTORS_MAP = {
  Programming: programminJokesSelector,
  Christmas: christmasJokesSelector
}

export default function TypedJokesViewer(props: { type: JokeType }) {
  const jokes = useRecoilValue(SELECTORS_MAP[props.type])
  const setTodoList = useSetRecoilState(jokesAtom)

  const loadJokes = async () => {
    const response = await fetch(`https://v2.jokeapi.dev/joke/${props.type}?type=twopart&amount=3`)
    const body = await response.json()

    setTodoList((oldState) => {
      const newState = { ...oldState }

      newState[props.type] = body.jokes

      return newState
    })
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
