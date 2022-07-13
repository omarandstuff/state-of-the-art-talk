import React from 'react'

export const ReactContextState = React.createContext<any>({})

export default function ReactContextProvider(props: React.PropsWithChildren) {
  const [contextState, setContextState] = React.useState({ jokes: { Christmas: [], Programming: [] } })

  return <ReactContextState.Provider value={{ contextState, setContextState }}>{props.children}</ReactContextState.Provider>
}
