export type JokeType = 'Programming' | 'Christmas'

export interface Joke {
  setup: string
  delivery: string
}

export interface JokesState {
  Programming: Joke[]
  Christmas: Joke[]
}
