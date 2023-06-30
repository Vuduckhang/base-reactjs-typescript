import { combineReducers } from '@reduxjs/toolkit'
import { homeReducer } from './slices/home-slice'
import { calenderReducer } from './slices/calendar'

export const rootReducer = combineReducers({
  homeStore: homeReducer,
  calenderStore: calenderReducer,
})
