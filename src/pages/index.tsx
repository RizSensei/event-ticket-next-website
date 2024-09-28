// import SiteLogo from "@/images/logo/meroticket-logo.png";
import EventCard from "@@/components/Event-Card/EventCard";
import Navbar from "@@/components/Navbar/Navbar";
import Sidebar from "@@/components/Sidebar/Sidebar";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { events } from "../utils/events";

const Home = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex">
        <div className="relative h-full flex w-full">
          <div className="h-screen sticky top-0 flex shrink-0">
            {/* side area including nav */}
            <Navbar />
            {/* side area including nav and search */}
            <Sidebar />
          </div>

          {/* main content area */}
          <div className="h-full py-5 px-12 flex flex-grow justify-center">
            <div className="w-full">
              <div className="relative w-full h-max">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search events..."
                  className="py-2 2xl:py-4 pl-10 w-full bg-white text-gray-700 rounded-full border focus:ring-2 focus:ring-blue focus:outline-none"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700">
                  <IoSearchOutline />
                </div>
              </div>
              <div className="mt-10">
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
            </div>
          </div>

          <div className="h-screen sticky top-0  bg-gray-50 max-w-md w-full shrink-0">
            <div className="py-5 px-10">
              <h2 className="text-blue font-semibold">Events Next Week</h2>
              <div className="mt-2 flex flex-col divide-y gap-2">
                <div className="pt-2 flex flex-col gap-1">
                  <h1 className="z-10 font-sans text-gray-700 text-sm font-semibold leading-5 line-clamp-1">
                    Pahenlo Batti Muni Live in Butwal
                  </h1>
                  <div className="flex gap-1 items-center text-blue font-medium font-sans text-xs">
                    <FaLocationDot />
                    <span className="text-gray-500">
                      Iclick multi Venue, Lalitpur
                    </span>
                  </div>
                </div>
                <div className="pt-2 flex flex-col gap-1">
                  <h1 className="z-10 font-sans text-gray-700 text-sm font-semibold leading-5 line-clamp-1">
                    Pahenlo Batti Muni Live in Butwal
                  </h1>
                  <div className="flex gap-1 items-center text-blue font-medium font-sans text-xs">
                    <FaLocationDot />
                    <span className="text-gray-500">
                      Iclick multi Venue, Lalitpur
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm text-gray-500">
                  <span className="text-[#241F21] font-semibold">MeroTicket</span> is your go-to platform for booking tickets to a
                  wide range of events, anytime, anywhere. Discover and secure
                  your spot at concerts, sports, and entertainment events with
                  just a few clicks!
                </p>
              </div>

              <div className="mt-5">
                <div className="text-xs text-gray-500 flex flex-wrap justify-center">
                  <Link href={"/"}>Home&nbsp;.</Link>
                  <Link href={"/"}>&nbsp;Help&nbsp;.</Link>
                  <Link href={"/"}>&nbsp;Privacy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
