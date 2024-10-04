import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="relative w-full h-max">
        <input
          type="text"
          name=""
          id=""
          onChange={handleSearchChange}
          placeholder="Search events..."
          className="py-2 2xl:py-4 pl-10 w-full bg-white text-gray-700 rounded-full border focus:ring-2 focus:ring-neutral-800 focus:outline-none"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700">
          <IoSearchOutline />
        </div>

        {/* search result box */}
        {search && (
          <div className="absolute w-full bg-white z-20">
            <div className="mt-1 py-5 h-96 border border-neutral-200">
              {/* Render search suggestions or results here */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
