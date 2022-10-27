import { GetStaticProps } from 'next';
import EventCard from '../components/cards/event/EventCard';
import PrimaryLayout from '../components/layouts/PrimaryLayout/Layout';
import EventData from '../content/events.json';

type event = {
    name: string;
    description: string;
    eventpic: string;
    locationUrl: string;
    date: string;
    eventLink: string;
    id: string;
    isCompleted: boolean;
    isActive: boolean;
    type: string;
    locationName: string;
}

type Props = {
    events: event[];
}


export const getStaticProps: GetStaticProps = async () => {

    // api call to get data for events and cache them in the build
    const res = EventData
    // console.log(res)
    return {
        props: {
            events: res.data
        }
    }
}


const About = ({ events }: Props) => {
    return (
        <div className='min-h-screen'>
            <div className=' py-20 bg-slate-300 dark:bg-[#0E1525] min-h-screen'>
                <div className="sm:px-2 lg:px-10 mb-2">
                    <h1 className='font-mono font-extrabold text-center dark:text-white text-black text-4xl underline underline-offset-8 decoration-yellow-400  '>Events</h1>
                </div>
                <div className='sm:px-20 lg:px-20 mb-2'>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-1 pt-10 gap-5 '>
                        {events.map((event: event) => {
                            return <EventCard
                                name={event.name}
                                description={event.description}
                                eventpic={event.eventpic}
                                locationUrl={event.locationUrl}
                                date={event.date}
                                eventLink={event.eventLink}
                                id={event.id}
                                isCompleted={event.isCompleted}
                                isActive={event.isActive}
                                type={event.type}
                                locationName={event.locationName}
                                key={event.id}
                            />
                        })}
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default About;

About.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};