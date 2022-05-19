import { createSlice } from '@reduxjs/toolkit'

export const animationSlice = createSlice({
  name: 'animation',
  initialState: {
    sidebaropened: false,
    loading: true,
  },
  reducers: {
    open: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.sidebaropened = true
    },
    close: state => {
      state.sidebaropened = false
    },
    toggle: state => {
        state.sidebaropened = !state.sidebaropened;
    },
    hideLoading: state => {
      state.loading = false;
    }
  }
})

// Action creators are generated for each case reducer function
export const { open, close, toggle, hideLoading } = animationSlice.actions

export default animationSlice.reducer