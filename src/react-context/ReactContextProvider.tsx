import React from 'react'
import { JokesState } from '../state.types'

export interface ContextDerivatives {
  contextState: JokesState
  setContextState: (state: JokesState) => void
}

export const ReactContextState = React.createContext<ContextDerivatives>(null as any)

export default function ReactContextProvider(props: React.PropsWithChildren) {
  const [contextState, setContextState] = React.useState<JokesState>({ Christmas: [], Programming: [] })

  return <ReactContextState.Provider value={{ contextState, setContextState }}>{props.children}</ReactContextState.Provider>
}
