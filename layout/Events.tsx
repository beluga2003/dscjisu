
import EventCard from "../components/cards/event/EventCard"

function Events({ event }) {
    return (
        <div className=' py-20 bg-slate-300 dark:bg-[#0E1525]'>
            <div className="sm:px-2 lg:px-10 mb-2">
                <h1 className='font-mono font-extrabold dark:text-white md:text-center text-center text-black text-6xl underline underline-offset-8 decoration-yellow-400  '>Events</h1>
            </div>
            <div className='sm:px-20 lg:px-20 mb-2'>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 pt-10 gap-5 '>
                    {event?.map((item) => {
                        return (
                            <EventCard
                                id={item.id}
                                key={item.id}
                                name={item.name}
                                eventpic={item.eventpic}
                                description={item.description}
                                date={item.date}
                                eventLink={item.eventLink}
                                locationUrl={item.locationUrl}
                                locationName={item.locationName}
                                type={item.type}
                                isActive={item.isActive}
                                isCompleted={item.isCompleted}
                                slug={item.slug}
                            />
                        )
                    })}
                </div>
            </div>

        </div >
    )
}

export default Events