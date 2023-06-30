import dayjs from 'dayjs'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ViewMoreModal from './ViewMoreModal'

export default function Days({ day, rowIdx, events = [] }: any) {
  const dispatch = useDispatch()
  const [dayEvents, setDayEvents] = useState<any[]>([])
  const [dayEventsMore, setDayEventsMore] = useState<any[]>([])
  const [eventsMoreModel, setEventsMoreModel] = useState<boolean>(false)

  useEffect(() => {
    if (
      day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ||
      day.format('DD-MM-YY') === '20-06-23' ||
      day.format('DD-MM-YY') === '14-06-23'
    ) {
      let isEventsMore = events?.length > 5
      setDayEvents(
        isEventsMore
          ? events?.filter((evt: object, index: number) => index < 4)
          : events
      )
      if (isEventsMore) {
        setDayEventsMore(
          events?.filter((evt: object, index: number) => index >= 4)
        )
      }
    } else {
      setDayEvents([])
      setDayEventsMore([])
      setEventsMoreModel(false)
    }
  }, [day])

  function getCurrentDayClass() {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-blue-600 text-white rounded-full w-7'
      : ''
  }

  return (
    <div className='border border-blue-10 flex flex-col h-52 '>
      <header className='flex flex-col items-center my-2'>
        <p className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>
      <div className='flex-1 cursor-pointer text-blue-650'>
        {dayEvents.map((evt: any, idx) => (
          <div
            key={idx}
            className='rounded-xl pl-2 mx-2 my-1 bg-blue-10'
            onClick={() => {}}
          >
            {evt.title} - {moment(evt.start).format('HH:mm')} -{' '}
            {moment(evt.end).format('HH:mm')}
          </div>
        ))}
        {dayEventsMore?.length ? (
          <div>
            <div
              className='rounded-xl pl-2 mx-2 my-1 bg-indigo-550 text-white flex justify-center items-center'
              onClick={() => {
                setEventsMoreModel(!eventsMoreModel)
              }}
            >
              + {dayEventsMore?.length}{' '}
              <span className='material-icons text-indigo-25 text-xs mx-1 '>
                fiber_manual_record
              </span>
              View More
            </div>
            <ViewMoreModal
              isVisible={eventsMoreModel}
              dayEventsMore={dayEventsMore}
              setEventsMoreModel={setEventsMoreModel}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}
