import React from 'react'
import Days from './Days'

export default function CalendarWeek({ week = [], events }: any) {
  const getHeaderClass = (index: number) => {
    if (index === 6) {
      return 'rounded-tr-lg'
    }
    return ''
  }

  return (
    <div>
      <div className='flex border-b-0'>
        <div className={`border-blue-10 bg-gray-100 py-3 rounded-tl-lg w-24`} />
        <div className='flex-1 grid grid-cols-7 border-b-0'>
          {week.map((value: any, i: any) => (
            <div
              key={i}
              className={`border-blue-10 bg-gray-100 py-3 flex flex-col items-center text-blue-650 text-18 ${getHeaderClass(
                i
              )}`}
            >
              <p className='text-sm mt-1'>{value.format('ddd')}</p>
              <p className={`text-sm p-1 my-1 text-center `}>
                {value.format('DD/MM')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
