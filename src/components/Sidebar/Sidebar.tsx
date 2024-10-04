import Logo from "@/images/logo/logo.png";
import { eventCategories } from "@@/utils/eventCategories";
import Image from "next/image";
import FilterLayout from "../FilterLayout/FilterLayout";
import { venueType } from "@@/utils/venue";

const Sidebar = () => {
  return (
    <div>
      <div className="max-w-xs h-full flex flex-col gap-2 z-10">
        {/* right sidebar */}

        <div className="flex-grow h-full overflow-hidden">
          <div className="h-full bg-white border border-gray-200 shadow p-5">
            <Image src={Logo.src} alt="" width={300} height={150} />

            {/* categories filter  */}
            <FilterLayout label="Categories" data={eventCategories} />

            {/* venue type filter  */}
            <FilterLayout label="Venue Type" data={venueType} />

            {/* price filter  */}
            <div>
              <h1 className="mt-6 text-blue font-semibold text-sm">Ticket Price</h1>
              <div className="mt-2 h-full grid grid-cols-5 gap-2">
                  <input type="number" name="min-price" id="" placeholder="Min" className="col-span-2 border py-1 pl-2 text-sm focus:outline-none shadow-sm"/>
                  <input type="number" name="max-price" id="" placeholder="Max" className="col-span-2 border py-1 pl-2 text-sm focus:outline-none shadow-sm"/>
                  <button className="px-2 py-1 rounded-md bg-blue text-sm text-white">Filter</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
