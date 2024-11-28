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
    <div className="z-[999] max-w-lg 2xl:max-w-xl w-full fixed top-0 bg-white py-5 px-5 md:px-12  border-t border-paragraph overflow-y-auto">
      <div className="h-screen">
          <div className="w-full flex items-center justify-between">
            <Image src={Logo.src} alt="" width={150} height={75} />
            <button onClick={handleTopDrawer}>
              <HiMiniXMark />
            </button>
          </div>
          <div className="mt-5">
            <div className="mt-12">
              <p className="text-sm text-paragraph">
                <span className="text-[#241F21] font-semibold">MeroTicket</span>{" "}
                is your go-to platform for booking tickets to a wide range of
                events, anytime, anywhere. Discover and secure your spot at
                concerts, sports, and entertainment events with just a few
                clicks!
              </p>
            </div>
          </div>

          <div className="mt-5">
            <div className="text-xs text-paragraph flex flex-wrap justify-center">
              <Link href={"/"}>Home&nbsp;.</Link>
              <Link href={"/"}>&nbsp;Help&nbsp;.</Link>
              <Link href={"/"}>&nbsp;Privacy</Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default TopDrawer;
