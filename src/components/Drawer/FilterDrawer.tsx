import { eventCategories } from "@@/utils/eventCategories";
import { useSpring, animated } from "react-spring";
import { venueType } from "@@/utils/venue";
import { HiMiniXMark } from "react-icons/hi2";
import FilterLayout from "../FilterLayout/FilterLayout";

interface FilterDrawerProps {
  isFilterDrawerOpen: boolean;
  handleFilterDrawer: () => void;
}



const FilterDrawer = ({
  handleFilterDrawer,isFilterDrawerOpen
}: FilterDrawerProps) => {

  const filterDrawerStyles = useSpring({
    transform: isFilterDrawerOpen ? "translateY(0%)" : "translateY(100%)",
    opacity: isFilterDrawerOpen ? 1 : 0,
    config: { tension: 220, friction: 20 },
  })

  return (
    <animated.div
    style={filterDrawerStyles}
      className="z-10 max-w-lg 2xl:max-w-xl w-full fixed bottom-0 bg-white pt-3 px-12 rounded-t-3xl border-t border-gray-400 overflow-y-auto"
    >
      <div className="max-h-[575px] w-full h-full">
        <div className="sticky top-0 text-2xl flex justify-between items-center">
          <h1 className="text-bold text-xl">Filter</h1>
          <button onClick={handleFilterDrawer}>
            <HiMiniXMark />
          </button>
        </div>
        <div className="mt-5 w-full">
          {/* categories filter  */}
          <FilterLayout label="Categories" data={eventCategories} />

          {/* price filter  */}
          <div>
            <h1 className="mt-6 text-neutral-800 font-semibold text-sm">
              Ticket Price
            </h1>
            <div className="mt-2 h-full grid grid-cols-5 gap-2">
              <input
                type="number"
                name="min-price"
                id=""
                placeholder="Min"
                className="col-span-2 border py-1 pl-2 text-sm focus:outline-none shadow-sm"
              />
              <input
                type="number"
                name="max-price"
                id=""
                placeholder="Max"
                className="col-span-2 border py-1 pl-2 text-sm focus:outline-none shadow-sm"
              />
              <button className="px-2 py-1 rounded-md bg-neutral-800 text-sm text-white flex flex-col items-center">
                Filter
              </button>
            </div>
          </div>

          {/* venue type filter  */}
          <FilterLayout label="Venue Type" data={venueType} />
        </div>
      </div>
    </animated.div>
  );
};

export default FilterDrawer;
