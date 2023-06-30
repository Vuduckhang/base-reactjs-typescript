import { useEffect, useState } from 'react'

import CalendarHeader from '@/components/calendar/CalendarHeader'
import CalendarMonth from '@/components/calendar/CalendarMonth'
import { useTypedSelector } from '@/store'
import { getMonth, getWeek } from '@/utils/common-utils'
import { Card } from 'antd'
import CalendarWeek from './CalendarWeek'
import { CalenderEnum } from '@/constants'

const events = [
  {
    title: 'Name 01',
    start: '2023-06-26T01:00:00+07:00',
    end: '2023-06-26T01:30:00+07:00',
  },
  {
    title: 'Name 02',
    start: '2023-06-26T02:00:00+07:00',
    end: '2023-06-26T02:30:00+07:00',
  },
  {
    title: 'Name 03',
    start: '2023-06-26T03:00:00+07:00',
    end: '2023-06-26T03:30:00+07:00',
  },
  {
    title: 'Name 04',
    start: '2023-06-26T04:00:00+07:00',
    end: '2023-06-26T04:30:00+07:00',
  },
  {
    title: 'Name 05',
    start: '2023-06-26T05:00:00+07:00',
    end: '2023-06-26T05:30:00+07:00',
  },
  {
    title: 'Name 06',
    start: '2023-06-26T06:00:00+07:00',
    end: '2023-06-26T06:30:00+07:00',
  },
  {
    title: 'Name 07',
    start: '2023-06-26T05:00:00+07:00',
    end: '2023-06-26T05:30:00+07:00',
  },
  {
    title: 'Name 08',
    start: '2023-06-26T06:00:00+07:00',
    end: '2023-06-26T06:30:00+07:00',
  },
  {
    title: 'Name 09',
    start: '2023-06-26T05:00:00+07:00',
    end: '2023-06-26T05:30:00+07:00',
  },
  {
    title: 'Name 10',
    start: '2023-06-26T06:00:00+07:00',
    end: '2023-06-26T06:30:00+07:00',
  },
  {
    title: 'Name 11',
    start: '2023-06-26T05:00:00+07:00',
    end: '2023-06-26T05:30:00+07:00',
  },
  {
    title: 'Name 12',
    start: '2023-06-26T06:00:00+07:00',
    end: '2023-06-26T06:30:00+07:00',
  },
]

export default function CalenderComponent() {
  const [currenMonth, setCurrentMonth] = useState(getMonth())
  const [currenWeek, setCurrentWeek] = useState(getWeek())
  const { monthIndex, weekIndex, calenderType } = useTypedSelector(
    (state: any) => state.calenderStore
  )

  const calendarTab = () => {
    switch (calenderType) {
      case CalenderEnum.Month:
        return <CalendarMonth month={currenMonth} events={events} />
      case CalenderEnum.Week:
        return <CalendarWeek week={currenWeek} events={events} />
      case CalenderEnum.Day:
        return 'Day'
    }
  }

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
    setCurrentWeek(getWeek(weekIndex))
  }, [monthIndex, weekIndex])

  return (
    <Card className='m-2'>
      <CalendarHeader />
      {calendarTab()}
    </Card>
  )
}
