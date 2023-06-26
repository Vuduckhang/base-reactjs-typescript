import { createSlice } from '@reduxjs/toolkit'
import { getHome } from './async-actions'

const initialState = {
  home: '',
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHome.fulfilled, (state: any, action) => {
      state.home = action.payload
    })
  },
})

const homeReducer = homeSlice.reducer

export { homeReducer, getHome }
