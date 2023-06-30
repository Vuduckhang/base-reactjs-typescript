import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)

const checkClientSide = () => {
  return typeof window !== 'undefined'
}

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month)
  const year = dayjs().year()
  const firstDayOfTheMonth = dayjs(new Date(year, month, 0)).day()
  let currentMonthCount = 0 - firstDayOfTheMonth

  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++
      return dayjs(new Date(year, month, currentMonthCount))
    })
  })
  return daysMatrix
}

export function getWeek(week = dayjs().week()) {
  week = Math.floor(week)

  const year = dayjs().year()
  const day = 1 + (week - 1) * 7
  let currentMonthCount = 0

  const daysMatrix = new Array(7).fill(null).map(() => {
    currentMonthCount++
    return dayjs(new Date(year, 0, day + currentMonthCount))
  })
  return daysMatrix
}

export { checkClientSide }
