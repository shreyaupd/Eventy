import EventCard from "@/component/EventCard"
import ExploreBtn from "@/component/ExploreBtn"
import { events } from "@/lib/constants"

const page = () => {
  return (
    <section className="mt-10">
      <h1 className="text-center">The event no developers <br />should miss.</h1>
      <p className="text-center mt-3">Join for an experience in the world of technology and innovation.</p>
      <ExploreBtn />

      <div>
        <h3 className=" my-4 space-y-7">Featured Events</h3>
        <ul className="events list-none">
        {events.map((event)=>(
          <li key={event.title}>
            {/* <EventCard image={event.image} title={event.title} date={event.date} time={event.time} location={event.location} /> */}
              <EventCard {...event} />
          </li>
        ))}
      </ul>
      </div>
      
    </section>
    
  )
}

export default page