import { createSlice } from '@reduxjs/toolkit'

const jokesSlide = createSlice({
  name: 'jokes',
  initialState: {
    Programming: [],
    Christmas: []
  },
  reducers: {
    setJokes: (state: any, action: any): any => {
      state[action.payload.type] = action.payload.jokes
    }
  }
})

export const { setJokes } = jokesSlide.actions

export default jokesSlide.reducer
