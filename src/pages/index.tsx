import EventCard from "@@/components/Event-Card/EventCard";

import { events } from "../utils/events";

const Home = () => {
  return (
    <div className="mt-5">
      <div className="flex flex-col items-center gap-y-6">
        {events.map((event, i) => {
          return (
            <div key={i} className="pb-6 border-b">
              <EventCard event={event} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
