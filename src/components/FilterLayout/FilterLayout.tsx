import React, { useState } from "react";

interface FilterLayoutProps {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const FilterLayout = ({ label, data }: FilterLayoutProps) => {
  const [items, setItems] = useState(7);

  const view_more = () => {
    setItems((prev) => prev + 7);
  };
  const view_less = () => {
    setItems((prev) => prev - 7);
  };
  return (
    <div>
      <h1 className="mt-6 text-blue font-semibold text-sm">{label}</h1>
      <div className="mt-2 h-full flex flex-col gap-2">
        {data
          .slice(0, items)
          .map((filter: { name: string | undefined }, i: number) => {
            return (
              <div
                key={i}
                className="flex items-center text-gray-500 px-3 text-sm cursor-pointer transform ease-in-out duration-150"
              >
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="mr-2" />
                  <span>{filter.name}</span>
                </label>
              </div>
            );
          })}
        <div className="flex gap-2">
          {items < data.length && (
            <button onClick={view_more} className="text-blue text-xs w-max">
              More
            </button>
          )}
          {items > 7 && (
            <button onClick={view_less} className="text-blue text-xs w-max">
              Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterLayout;
