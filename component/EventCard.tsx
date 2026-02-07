import Image from 'next/image';
import Link from 'next/link';
interface Props {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;

}
const EventCard = ({ image, title, slug, location, date, time }: Props) => {
  return (
    <Link href={`/events/${slug}`} id='event-card'>
      <Image src={image} alt={title} width={300} height={200} className='poster' />
      <h3 className='text-lg font-semibold mt-2'>{title}</h3>
      <div className='flex flex-row gap-2'>
        <Image src="/icons/pin.svg" alt="Location" width={16} height={16} />
        <p>{location}</p>
      </div>
      <div className='flex flex-row gap-2'>
        <Image src="/icons/calendar.svg" alt="Calendar" width={16} height={16} />
        <p>{date}  | </p>
        <Image src="/icons/clock.svg" alt="Clock" width={16} height={16} />
        <p>{time}</p>
      </div>
      
     
    </Link>
  )
}

export default EventCard