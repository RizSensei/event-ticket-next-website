// import Image from "next/image";
// import Link from "next/link";
// import { FaLocationDot } from "react-icons/fa6";
// import { HiMiniXMark } from "react-icons/hi2";
import ProfileLayout from "../../../app/Layout/profile.layout";

const Favourites = () => {
  return (
    <ProfileLayout>

      <div className="mt-10">
        <div className="flex gap-5 items-center">
          <h1 className="font-semibold text-lg text-gray-800">
            Your Favourites
          </h1>
          <hr className="flex-grow" />
        </div>

        <div className="mt-5">
          <h1 className="text-center text-neutral-700">No Favourites</h1>
          {/* <div>
            <div className="flex gap-5 items-center bg-gray-100 p-2 rounded-md">
              <Link href={'/events/1'} className="h-16 w-16 rounded-md overflow-hidden shrink-0">
                <Image
                  src={
                    "https://cdn.ticketsanjal.com/images/2024/09/27/081555-rmfcn.png"
                  }
                  alt=""
                  height={1550}
                  width={1550}
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="flex items-center flex-grow">
                <div className="flex flex-col gap-1">
                  <h1 className="z-10 font-sans text-gray-800 text-base font-semibold leading-5 line-clamp-1">
                    Pahenlo Batti Muni Live in Butwal Pahenlo Batti Muni Live in
                    Butwal
                  </h1>
                  <div className="flex gap-1 items-center text-blue font-medium font-sans text-sm">
                    <FaLocationDot />
                    <span className="text-gray-500">
                      Iclick multi Venue, Lalitpur
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <button>
                    <HiMiniXMark />
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Favourites;
