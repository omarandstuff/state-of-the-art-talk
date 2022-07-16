import { configureStore } from '@reduxjs/toolkit'
import jokesReducer from './jokesSlide'

export default configureStore({
  reducer: jokesReducer
})
