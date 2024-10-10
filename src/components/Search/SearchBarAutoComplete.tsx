/* eslint-disable @typescript-eslint/no-explicit-any */
import useEvents from "@@/hooks/useEvents";
import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useRouter } from "next/router"; // Ensure correct import
import Link from "next/link";

const SearchBarAutoComplete = () => {
  const { fetchEventQuery } = useEvents({});
  const { data: events } = fetchEventQuery ?? { data: [] };

  // Ensure items is defined and an array of objects with id and name
  const items =
    events?.map((event: any) => ({
      id: event.id,
      name: event.name,
    })) || [];

  const router = useRouter(); // Use Next.js router for redirection

  const handleOnSearch = (string: string, results: any) => {
    console.log("Search input:", string, "Results:", results);
  };

  const handleOnSelect = (item: { id: string | null | undefined }) => {
    console.log("Selected item:", item); // Log the selected item
    if (item.id) {
      router.push(`/event/${item.id}`); // Redirect to the selected event page
    } else {
      console.warn("No ID found for the selected item.");
    }
  };

  const formatResult = (item: {
    id: string | null | undefined;
    name: string | undefined;
  }) => {
    return (
      <div className="w-full">
        <Link href={`/event/${item.id}`}>{item?.name}</Link>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="w-96">
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
            className="z-[999]"
          />
        </div>
      </header>
    </div>
  );
};

export default SearchBarAutoComplete;
