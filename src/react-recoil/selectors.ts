import { selector } from 'recoil'
import { jokesAtom } from './atoms'

export const programminJokesSelector = selector({
  key: 'programming-jokes-selector',
  get: ({ get }) => {
    return get(jokesAtom).Programming
  }
})

export const christmasJokesSelector = selector({
  key: 'christmas-jokes-selector',
  get: ({ get }) => {
    return get(jokesAtom).Christmas
  }
})
