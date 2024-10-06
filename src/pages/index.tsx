import EventCard from "@@/components/Event-Card/EventCard";
import useEvent from "@@/hooks/useEvents";
import { Event } from "@@/types/events";

const Home = () => {
  const { fetchEventQuery } = useEvent({});
  const { data: events } = fetchEventQuery ?? {};
  console.log(events)
  return (
    <div className="mt-5 w-full">
      <div className="flex flex-col w-full gap-y-6">
        {events && events?.length > 0 ? (
          events?.map((event: Event, i: number) => {
            return (
              <div key={i} className="pb-6 border-b">
                <EventCard event={event} index={i} />
              </div>
            );
          })
        ) : (
          <h1 className="text-center text-neutral-700">
            Currently No Events Organized
          </h1>
        )}
      </div>
    </div>
  );
};

export default Home;
