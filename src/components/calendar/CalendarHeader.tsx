import { useState } from 'react'
import { useDispatch } from 'react-redux'
import dayjs from 'dayjs'
import { Select } from 'antd'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'

import ChevronDownLeftIcon from '@/assets/images/Chevron_Down_Left.png'
import ChevronDownRightIcon from '@/assets/images/Chevron_Down_Right.png'
import { CalenderEnum, CalenderOption } from '@/constants'
import { useTypedSelector } from '@/store'
import {
  setCalenderType,
  setMonthIndex,
  setWeekIndex,
} from '@/store/slices/calendar'

export default function CalendarHeader() {
  const dispatch = useDispatch()
  const [dropDown, setDropDown] = useState(true)
  const { monthIndex, weekIndex, calenderType } = useTypedSelector(
    (state: any) => state.calenderStore
  )

  const handlePrevMonth = async () => {
    switch (calenderType) {
      case CalenderEnum.Month:
        await dispatch(setMonthIndex(monthIndex - 1))
        break
      case CalenderEnum.Week:
        await dispatch(setWeekIndex(weekIndex - 1))
        break
      case CalenderEnum.Day:
        break
    }
  }

  const handleNextMonth = async () => {
    switch (calenderType) {
      case CalenderEnum.Month:
        await dispatch(setMonthIndex(monthIndex + 1))
        break
      case CalenderEnum.Week:
        await dispatch(setWeekIndex(weekIndex + 1))
        break
      case CalenderEnum.Day:
        break
    }
  }

  const handleClick = async (value: any) => {
    dispatch(setCalenderType(value))
  }

  return (
    <header className='px-4 py-2 flex items-center justify-between'>
      <h1 className='mr-10 text-xl text-black fond-bold'>Calendar</h1>

      <h2 className='ml-4 text-xl text-gray-500 font-bold items-center'>
        Today . {dayjs(new Date(dayjs().year(), monthIndex)).format('DD MMMM')}
      </h2>
      <div className='flex'>
        <Select
          className='w-32'
          size='large'
          defaultValue={calenderType}
          onChange={handleClick}
          options={CalenderOption}
          onClick={() => {
            setDropDown(!dropDown)
          }}
          suffixIcon={dropDown ? <CaretDownOutlined /> : <CaretUpOutlined />}
        />
        <div
          onClick={handlePrevMonth}
          className='border-gray-11 mx-2 flex items-center justify-center cursor-pointer rounded-lg w-10 h-10'
        >
          <img src={ChevronDownLeftIcon.src} />
        </div>
        <div
          onClick={handleNextMonth}
          className='border-gray-11 mx-2 flex items-center justify-center cursor-pointer rounded-lg w-10 h-10'
        >
          <img src={ChevronDownRightIcon.src} />
        </div>
      </div>
    </header>
  )
}
