import { atom } from 'recoil'

interface Joke {
  setup: string
  deliver: string
}

interface JokesState {
  Programming: Joke[]
  Christmas: Joke[]
}

export const jokesAtom = atom<JokesState>({
  key: 'jokes-atom',
  default: { Programming: [], Christmas: [] }
})
