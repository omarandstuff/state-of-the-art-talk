import { atom } from 'recoil'
import { JokesState } from '../state.types'

export const jokesAtom = atom<JokesState>({
  key: 'jokes-atom',
  default: { Programming: [], Christmas: [] }
})
