import moment from 'moment'

interface ViewMoreModalI {
  isVisible: boolean
  dayEventsMore: any[]
  setEventsMoreModel: any
}

export default function ViewMoreModal({
  isVisible,
  dayEventsMore,
  setEventsMoreModel,
}: ViewMoreModalI) {
  return isVisible ? (
    <div
      className={`rounded-lg ml-2 mr-1 mb-2 flex-1 cursor-pointer bg-white view-more-modal text-14 text-blue-650 z-10 ${
        dayEventsMore?.length > 4 ? 'overflow-y-scroll' : ''
      }`}
    >
      {dayEventsMore.map((evt: any, idx) => (
        <div
          key={idx}
          className='rounded-xl px-2 py-1 mx-1 my-1 bg-blue-10'
          onClick={() => {}}
        >
          {evt.title} - {moment(evt.start).format('HH:mm')} -{' '}
          {moment(evt.end).format('HH:mm')}
        </div>
      ))}
    </div>
  ) : null
}
