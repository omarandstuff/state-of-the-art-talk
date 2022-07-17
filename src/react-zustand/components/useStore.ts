import create from 'zustand'
import { Joke, JokesState, JokeType } from '../../state.types'

interface ZustandState {
  jokes: JokesState
  setJokes: (type: JokeType, jokes: Joke[]) => void
}

export const useStore = create<ZustandState>((set) => ({
  jokes: { Programming: [], Christmas: [] },
  setJokes: (type: JokeType, jokes: Joke[]) =>
    set((state) => {
      const newState = { ...state }
      newState.jokes[type] = jokes
      return newState
    })
}))
