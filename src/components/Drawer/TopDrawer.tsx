import Logo from "@/images/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
// import { FaLocationDot } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";

interface TopDrawerProps {
  isTopDrawerOpen?: boolean;
  handleTopDrawer: () => void;
}

const TopDrawer = ({ handleTopDrawer }: TopDrawerProps) => {
  return (
    <div className="z-20 max-w-lg 2xl:max-w-xl w-full fixed bottom-0 bg-white px-5 md:px-12  border-t border-gray-400 overflow-y-auto">
      <div className="h-screen">
        <div className="py-5">
          <div className="w-full flex items-center justify-between">
            <Image src={Logo.src} alt="" width={150} height={75} />
            <button onClick={handleTopDrawer}>
              <HiMiniXMark />
            </button>
          </div>
          <div className="mt-5">
            {/* <h2 className="text-neutral-800 font-semibold">Events Next Week</h2>
            <div className="mt-2 flex flex-col divide-y gap-2">
              <div className="pt-2 flex flex-col gap-1">
                <h1 className="z-10 font-sans text-gray-700 text-sm font-semibold leading-5 line-clamp-1">
                Mantra band live in Pokhara
                </h1>
                <div className="flex gap-1 items-center text-blue font-medium font-sans text-xs">
                  <FaLocationDot />
                  <span className="text-gray-500">
                  Paradiso Pokhara, Pokhara
                  </span>
                </div>
              </div>
              <div className="pt-2 flex flex-col gap-1">
                <h1 className="z-10 font-sans text-gray-700 text-sm font-semibold leading-5 line-clamp-1">
                Aaryan Shrestha Live at Sekuwa by kilo
                </h1>
                <div className="flex gap-1 items-center text-blue font-medium font-sans text-xs">
                  <FaLocationDot />
                  <span className="text-gray-500">
                  Sekuwa By kilo, Lalitpur
                  </span>
                </div>
              </div>
            </div> */}
            <div className="mt-12">
              <p className="text-sm text-gray-500">
                <span className="text-[#241F21] font-semibold">MeroTicket</span>{" "}
                is your go-to platform for booking tickets to a wide range of
                events, anytime, anywhere. Discover and secure your spot at
                concerts, sports, and entertainment events with just a few
                clicks!
              </p>
            </div>
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
  );
};

export default TopDrawer;
