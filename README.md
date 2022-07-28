# State of the art: Know your state

In the last decade UIs around the planet have changed and improved a lot, and not only in how they look but also how they are internally organized, web interfaces have been using JavaScript for ages now and what it started as a stockholm syndrome situation with JavaScrit almost felt like it was force into us to been one of the most loved lenguajes on the planet partially due to Node (probably) but mostly because of all the effort that engineers have put into creating a robust, well organized and accessible environment around JavaScript, basically you can find a js library now that does exactly what you need, publish a new one you have created or participating into improving one already there, all in a matter of minutes some time.

With all this flexibility we found ourselves with the capacity of adventuring even more with stuff that wasn't though before and that's how React, graphQL, VUE, ionic and other great project were brought to life, and even new paradigms of how we can manage our data inside our app, and that is what we are talk about today, the concept of the centralize source of truth AKA "State", before this became a thing we were just you know keeping our data in arbitrary places all around our project like cavemen, but not any more, now we can create moustrosuous inmantaibale modules like the mad futuristic scientist that we are.

Or not, depending on what you are trying to achieve we decide what is a better fit for our project. A lot of state managers are out there and we are going to talk about some of them starting with the more flexible ones down to the more strict, and also talk about what are the benefits in each case.

## universal-state

[universal-state](https://github.com/universal-packages/universal-state-react) like all its counterparts assumes you want all or a big chunk of your app data, and providing predefined mutations that you use. Also it's worth mentioning that it lets you refer to sections of your state with  `string paths`, for instance you can access your state with something like `users/ordered/0/creator/id` and it will get that value deep from your state.

### Setup

Just wrap your app with the `UniversalStateProvider`, pass an optional initial state, and that is pretty much it, you don't need precreated actions nor reducers or seters of any kind you just can start using it.

```js
import React from 'react'
import { UniversalStateProvider } from '@universal-packages/state-react'

export default function App() {
  return <UniversalStateProvider initialState={{ users: [] }}>{/** Rest of your app */}</UniversalStateProvider>
}
```

### Mutating data

There are 2 ways of mutating data: first by using a single mutator or second by using the toolset mutator, either will perform the mutation and emit the changes to all listeners, but the mutator only will emit after all mutations are in place.

```js
import React from 'react'
import { useUniversalState } from '@universal-packages/state-react'

export default function UsersView() {
  const state = useUniversalState()

  const mutateState = () => {
    // single mutators
    state.concat('users/ordered', [...someOtherUsers])
    state.merge('users/ordered/0', updatedUser)
    state.remove('users/temporal')
    state.set('users/ordered/0/creator/name', 'Elvis')
    state.update('users/ordered', (users) => {
      return users.filter((user) => user.contento)
    })

    // Toolset mutator
    state.mutate((toolSet) => {
      toolSet.concat('users/ordered', [...someOtherUsers])
      toolSet.merge('users/ordered/0', updatedUser)
      toolSet.remove('users/temporal')
      toolSet.set('users/ordered/0/creator/name', 'Elvis')
      toolSet.update('users/ordered', (users) => {
        return users.filter((user) => user.contento)
      })
    })
  }

  return (
    <div>
      <button onClick={mutateState}>Mutate state</button>
    </div>
  )
}
```

### Retrieve data

You just select data using a string path, is that simple.

```js
import { useSelector } from '@universal-packages/state-react'

const HappyComponent = () => {
  const value = useSelector('users/ordered/0/comments/0/comment')

  return (
    <div>
      <p>comment: {value}</p>
    </div>
  )
}
```

### Advantages

- Just like that you can mutate and retrieve data from your state, no need for complex setups
- You refer to places on your state as string paths so it is easy to read
- predefine mutator so you don't need to figure complex setters

### Disadvantages

- Extreme flexibility can add debug complexity, so you need to know what you are doing at all times.
- No premeditated state schema so anyone can do whatever to the state and repat data. bad for big teams.

## Zustand

Just like universal-state [Zustand](https://github.com/pmndrs/zustand) not only will assume your state is a plain old javascript object it also will assume your mutators are part of your state, so it is a self contained state isn't that genius or what?, also the key feature here is that is all self contained in a single react hook `useStore` that you create dynamically.

### Setup

You just create your `useStore` hook supplying the initial state containing your mutators or setters. The special set function will merge the generated state with the main one.

```js
import create from 'zustand'

export const useStore = create((set) => ({
  users: [],
  whatever: '',
  ...allKindOfInitializers,
  setWhatever: (whatever) => {
    set((state) => ({ whatever, ...state }))
  }
}))
```

### Mutate data

you just extract your mutators from your state and call them, using the hook we dynamically create.

```js
import React from 'react'
import { useStore } from './useStore'

export default function UsersView() {
  const setJokes = useStore((state) => state.setWhatever)

  const mutateState = () => {
    setWhatever('whatever')
  }

  return (
    <div>
      <button onClick={mutateState}>Mutate state</button>
    </div>
  )
}
```

### Retrieve data

Again just using our hook as a selector to get any parts of out state.

```js
import { useStore } from './useStore'

const HappyComponent = () => {
  const whatever = useStore((state) => state.whatever)

  return (
    <div>
      <p>comment: {whatever}</p>
    </div>
  )
}
```

### Advantages

- No complex setups but be conscious with your setter living in your state
- You treat your state as a self contained state pack with a single hook

### Disadvantages

- As your app grows, your setters living in your state can become convoluted so making it difficult to follow and read.
- Only for react

## Redux

[Redux]() is basically the payoneer when it comes to state management, when the Flux paradigm also was a novelty at the time, Redux just came to define how you can manage your state in truthful way, under the premise of dispatching actions Redux become the most used one, it started a little complex to keep everything together, between keeping track of your reducers and your action creators your code base became a mess pretty fast, after some utilery and years of opinionated ways of doing it is has become in sort of something kind of enjoyable to use.

## Setup

The main thing you need is a redux `store` and in react a store provider to share your store across your app. Even with all the toolkit help it can become a little cumbersome to setup, let alone confusing.

```js
import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

export default function App() {
  return <Provider store={store}>{/** Rest of your app */}</Provider>
}
```

```js
import { configureStore, createSlice } from '@reduxjs/toolkit'

const slide = createSlice({
  name: 'users',
  initialState: {
    whatever: ''
  },
  reducers: {
    setWatever: (state, action) => {
      state.whatever = action.payload.whatever
    }
  }
})

// Action creators
export const { setWatever } = slide.actions

export default configureStore({
  reducer: slide.reducer
})
```

### Mutate state

Redux mutates the state through dispatching actions so you need to keep track of your action creators to be sent to the reducers.

```Js
import React from 'react'
import { useDispatch } from 'react-redux'
import { setWatever } from './jokesSlide'

export default function Whatever() {
  const dispatch = useDispatch()

  const mutateState = () => {
    dispatch(setWatever({whatever: 'whatever'}))
  }

  return (
    <div>
      <button onClick={mutateState}>Mutate state</button>
    </div>
  )
}
```

### Retrieve state

You just pass a selector function to the `useSelector` hook and get anything inside your state.

```js
import { useSelector } from 'react-redux'

const HappyComponent = () => {
  const whatever = useSelector((state: any) => state.whatever)

  return (
    <div>
      <p>comment: {whatever}</p>
    </div>
  )
}
```

### Advantages

- There is so much support in the Redux community that is difficult to not find the documentation you need
- The most battle tested one.

### Disadvantages

- The state schema through action creators, slides and stores can become cumbersome very fast.

## Recoil

Experimental state management library from Facebook [Recoil](https://github.com/facebookexperimental/Recoil) comes to kind of redefine Redux? (probably) now instead of reducers you use atoms and instead of raw selectors you use predefined selectors, all in the name of making sure what you're doing. Don't get me wrong I'm a fan of protocols but there is a place and time for it, anyway, with Recoil you can not fail.

## Setup

With recoil you need to have 3 things ready, your Root provider, your atoms and your selectors (In case you want complex data retrieval), the provider will make sure you get your data all across the react tree, atoms will define the way and shape data resides inside your state and selectors will set the way of retrieving that data in special ways.

```js
import React from 'react'
import { RecoilRoot } from 'recoil'

export default function App() {
  return <RecoilRoot>{/** Rest of your app */}</RecoilRoot>
}
```

```js
import { atom } from 'recoil'

export const whateverAtom = atom({
  key: 'whatever-atom',
  default: ''
})
```

```js
import { selector } from 'recoil'
import { whateverAtom } from './atoms'

export const uppercaseWhatever = selector({
  key: 'uppercase-whatever',
  get: ({ get }) => {
    return get(whateverAtom).toUpperCase()
  }
})
```

## Mutate data

The difference from Redux and Even sustand is that mutations can happen anywhere and under any context so go figure what they did not control this as well.

```js
import React from 'react'
import { useSetRecoilState } from 'recoil'
import { stateAtom } from '../atoms'

export default function Users() {
  const setState = useSetRecoilState(stateAtom)

  const mutateState = async () => {
    setState((oldState) => {
      const newState = { ...oldState }
      return newState
    })
  }

  return (
    <div>
      <button onClick={mutateState}>Mutate state</button>
    </div>
  )
}
```

### Retrieve data

You can retrieve and set data using the same hook `useRecoilState` or using a special selector to get a derived state.

```js
import { useRecoilState, useRecoilValue } from 'recoil'
import { whateverAtom } from './atoms'
import { uppercaseWathever } from './selectors'

const HappyComponent = () => {
  const [whatever, setWhatever] = useRecoilState(whateverAtom)
  const whatever = useRecoilValue(uppercaseWhatever)

  return (
    <div>
      <p>comment: {whatever}</p>
    </div>
  )
}
```

### Advantages

- The whole point is to make sure your state is always the truth and nothing but the truth, and is very good at that,
- Large teams will benefit by the clear definition of the state schema through atoms.
- Derived state by selectors is actually a very clever idea.

### Disadvantages

- The state schema through atoms can become cumbersome very fast.
- Only works in React

## Final toughs

There are probably plenty more ways of keeping track of your data, even now these state management paradigm seems to be the best for doing it, but there is always some young mind that will blow our mind in the future with a novelty idea that will contribute with the development of mankind or at least with the development of UIs.

At the end it is your call what you want to use in your projects, but it is better to always do an informed decision than you using something just because is what you are used tot, let's give opportunity to change and innovation, eyy, even, why don’t you come up with the next best thing?.
