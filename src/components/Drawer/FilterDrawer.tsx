import { useSpring, animated } from "react-spring";
import { HiMiniXMark } from "react-icons/hi2";
import FilterLayout from "../FilterLayout/FilterLayout";
import useEvents from "@@/hooks/useEvents";

interface FilterDrawerProps {
  isFilterDrawerOpen: boolean;
  handleFilterDrawer: () => void;
}

const FilterDrawer = ({
  handleFilterDrawer,
  isFilterDrawerOpen,
}: FilterDrawerProps) => {
  const { fetchEventCategoiesQuery } = useEvents({});
  const { data: categories } = fetchEventCategoiesQuery;

  const filterDrawerStyles = useSpring({
    transform: isFilterDrawerOpen ? "translateY(0%)" : "translateY(100%)",
    opacity: isFilterDrawerOpen ? 1 : 0,
    config: { tension: 220, friction: 20 },
  });

  return (
    <animated.div
      style={filterDrawerStyles}
      className="z-10 max-w-lg 2xl:max-w-xl w-full fixed bottom-0 bg-white pt-3 rounded-t-3xl border-t border-gray-400"
    >
      <div className="overflow-y-auto h-full px-12">
        <div className="relative h-[450px] 2xl:h-[575px] w-full flex flex-col">
          <div className="text-2xl flex justify-between items-center">
            <h1 className="text-bold text-xl">Filter</h1>
            <button onClick={handleFilterDrawer}>
              <HiMiniXMark />
            </button>
          </div>
          <div className="mt-5 w-full flex-grow"> {/* This div allows scrolling */}
            {/* Categories filter */}
            <FilterLayout label="Categories" data={categories} />
        
            {/* Add any other filters here as necessary */}
          </div>

        </div>
      </div>

      {/* Fixed button at the bottom of the screen */}
      <div className="fixed bottom-0 left-0 right-0">
        <button className="w-full bg-neutral-800 text-white text-center py-2 rounded-t-md">
          Apply Filter
        </button>
      </div>
    </animated.div>
  );
};

export default FilterDrawer;
