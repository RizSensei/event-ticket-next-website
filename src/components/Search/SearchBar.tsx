import useEvents from "@@/hooks/useEvents";
import { Event } from "@@/types/events";
import Link from "next/link";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const { fetchEventQuery } = useEvents({ term: search });
  const { data: events } = fetchEventQuery ?? { data: [] }; // Ensure it's an empty array by default

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="relative w-full h-max">
      <input
        type="text"
        onChange={handleSearchChange}
        placeholder="Search events..."
        className="py-2 2xl:py-4 pl-10 w-full bg-white text-gray-700 rounded-full border focus:ring-2 focus:ring-neutral-800 focus:outline-none"
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700">
        <IoSearchOutline />
      </div>

      {/* Search result box */}
      {search && (
        <div className="absolute w-full bg-white z-30">
          <div className="mt-1 h-full max-h-96 border border-neutral-200 overflow-hidden overflow-y-auto">
            {/* Render search suggestions or results here */}
            <div className="flex flex-col overflow-y-auto">
              {events && events.length > 0 ? (
                events?.map((event: Event) => (
                  <Link 
                    href={`/event/${event?.id}`} 
                    key={event?.id} 
                    className="w-full px-5 py-1 border-b hover:bg-neutral-100"
                  >
                    {event?.name}
                  </Link>
                ))
              ) : (
                <div className="px-5 py-1 text-gray-500 text-center">No events found</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
