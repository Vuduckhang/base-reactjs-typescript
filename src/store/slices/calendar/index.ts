import { CalenderEnum } from '@/constants'
import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

const initialState = {
  monthIndex: dayjs().month(),
  weekIndex: dayjs().week(),
  calenderType: CalenderEnum.Month,
}

export const calenderSlice = createSlice({
  name: 'calender',
  initialState,
  reducers: {
    setMonthIndex: (state, action) => {
      state.monthIndex = action.payload
    },
    setWeekIndex: (state, action) => {
      state.weekIndex = action.payload
    },
    setCalenderType: (state, action) => {
      state.calenderType = action.payload
    },
  },
})

export const { setMonthIndex, setWeekIndex, setCalenderType } =
  calenderSlice.actions

const calenderReducer = calenderSlice.reducer

export { calenderReducer }
