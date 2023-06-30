import React from 'react'
import Days from './Days'

export default function CalendarMonth({ month, events }: any) {
  const Header = [
    { name: 'Mon' },
    { name: 'Tue' },
    { name: 'Web' },
    { name: 'Thu' },
    { name: 'Fri' },
    { name: 'Sat' },
    { name: 'Sun' },
  ]

  function getHeaderClass(index: number) {
    if (index === 0) {
      return 'rounded-tl-lg'
    }

    if (index === 6) {
      return 'rounded-tr-lg'
    }
    return ''
  }

  return (
    <div>
      <div className='flex-1 grid grid-cols-7 border-b-0'>
        {Header.map((value: any, i: any) => (
          <div
            key={i}
            className={`border-x-blue-10 border-t-blue-10 bg-gray-100 py-3 flex flex-col items-center text-blue-650 text-18 ${getHeaderClass(
              i
            )}`}
          >
            <p className='text-sm mt-1'>{value.name}</p>
          </div>
        ))}
      </div>
      <div className='flex-1 grid grid-cols-7 grid-rows-6 border-blue-10 overflow-hidden rounded-b-lg'>
        {month.map((row: any, i: any) => (
          <React.Fragment key={i}>
            {row.map((day: any, idx: any) => (
              <Days day={day} key={idx} rowIdx={i} events={events} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
