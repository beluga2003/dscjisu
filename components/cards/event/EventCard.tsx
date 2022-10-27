import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';

export interface IEventCard {
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

const EventCard: React.FC<IEventCard> = ({ description, eventpic, name, date, locationUrl, eventLink, id, isCompleted, isActive, type, locationName }) => {
  return (
    <div className="lg:mx-2 mx-6 reveal" title={description}>
      <div className='flex  flex-col lg:flex-row justify-center bg-white h-full rounded-xl shadow-lg dark:shadow-slate-300 dark:shadow-md' key={id}>
        <div className='rounded-lg mx-auto  my-auto'>
          <Image src={eventpic} className=" w-36  rounded-lg" width={144} height={144} alt={name} />
        </div>
        <div className='flex flex-col px-5 pt-2'>
          <div className="flex gap-4 justify-between">
            <p className=' font-mono text-black text-xs rounded-md   p-2'>{type}</p>
            <p className={`font-mono text-black text-xs rounded-md   p-2 ${isActive ? "bg-green-400" : "bg-red-400"} `}>{isActive ? "Starting Soon" : "Ended"}</p>
          </div>
          <div>
            <h1 className='font-mono text-black text-lg  '>{name}</h1>

          </div>

          <div className='flex flex-row  gap-2 bg-yellow-200 p-2 rounded-lg mt-2 text-center items-center justify-center'>
            <p className='font-mono text-black text-sm font-extrabold'>{date ? date : "Dates not Decalred"}</p>
            {/* <p className='font-mono text-black text-sm font-extrabold'>{event.event.time}</p> */}
          </div>

          <div className='flex flex-row mt-2'>
            <p className='font-mono text-black text-sm cursor-pointer '>
              <a href={locationUrl} className="font-mono"><LocationOnIcon />{locationName}</a></p>
          </div>

          <div className=' p-5 rounded-sm flex flex-col text-center gap-5'>
            <a href={eventLink}>

              {isCompleted ? <p className='font-mono text-black text-sm bg-slate-100 p-2 rounded-lg hover:bg-slate-500 hover:text-white'>Check out what happened</p> : (
                <>
                  <p className='font-mono text-black text-sm bg-slate-100 rounded-lg p-2 hover:bg-slate-500 hover:text-white'>{eventLink ? "Know More" : "Coming Soon"}</p>
                </>
              )}
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventCard;
