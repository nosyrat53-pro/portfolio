import { configureStore } from '@reduxjs/toolkit'
import animationReducer from '../features/animation/animationSlice';

export default configureStore({
  reducer: {
      animation: animationReducer,
  }
})