import { combineReducers } from '@reduxjs/toolkit'
import { homeReducer } from './slices/home-slice'

export const rootReducer = combineReducers({
  homeStore: homeReducer,
})
