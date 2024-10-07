/* eslint-disable @typescript-eslint/no-explicit-any */
import FilterDrawer from "@@/components/Drawer/FilterDrawer";
import EventCard from "@@/components/Event-Card/EventCard";
import useEvent from "@@/hooks/useEvents";
import { Event } from "@@/types/events";
import { useState } from "react";

// const ButtonLayout = ({
//   label,
//   icon,
//   onClick,
// }: {
//   label: string;
//   icon: any;
//   onClick?: () => void;
// }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="text-xs px-3 py-1 flex gap-1 items-center font-semibold text-neutral-300 bg-neutral-900 rounded-full"
//     >
//       <h1>{label}</h1>
//       <span>{icon}</span>
//     </button>
//   );
// };

const Home = () => {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const handleFilterDrawer = () => {
    setIsFilterDrawerOpen((prev) => !prev);
  };

  const { fetchEventQuery } = useEvent({});
  const { data: events } = fetchEventQuery ?? {};
  return (
    <div>
      {/* <div className="mt-1 flex justify-start gap-1">
        <ButtonLayout
          onClick={handleFilterDrawer}
          label="Apply Filter"
          icon={<MdArrowOutward />}
        />
        <ButtonLayout label="Clear Filter" icon={<HiMiniXMark />} />
      </div> */}
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

      {isFilterDrawerOpen && (
        <FilterDrawer
          isFilterDrawerOpen={isFilterDrawerOpen}
          handleFilterDrawer={handleFilterDrawer}
        />
      )}
    </div>
  );
};

export default Home;
