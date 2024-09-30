import Logo from "@/images/logo/mero-ticket-logo.png";
import FilterDrawer from "@@/components/Drawer/FilterDrawer";
import TopDrawer from "@@/components/Drawer/TopDrawer";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaFilter, FaRegUser, FaUser } from "react-icons/fa6";
import { FiBell } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import "./globals.css";
import PageLayout from "./page.layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const handleFilterDrawer = () => {
    setIsFilterDrawerOpen((prev) => !prev);
  };

  const [isTopDrawerOpen, setIsTopDrawerOpen] = useState(false);
  const handleTopDrawer = () => {
    setIsTopDrawerOpen((prev) => !prev);
  };

  return (
    <PageLayout title="Mero Ticket" description="">
      <div className={`antialiased flex flex-col h-screen w-full bg-white`}>
        <div className="flex flex-grow">
          <div className="h-full flex flex-grow justify-center w-full bg-white">
            {/* main content area */}
            <div className="relative max-w-lg 2xl:max-w-xl h-full py-5 px-12 flex flex-grow justify-center bg-white">
              <div className="w-full bg-white">
                <div className="w-full flex items-center justify-between">
                  <Link href="/">
                    <Image src={Logo.src} alt="" width={150} height={75} />
                  </Link>
                  <button onClick={handleTopDrawer}>
                    {" "}
                    <GiHamburgerMenu />
                  </button>
                </div>
                <div className="mt-5 flex items-center justify-between gap-2">
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

                  <button
                    onClick={handleFilterDrawer}
                    className="py-2 pl-2 text-base flex items-center text-gray-800"
                  >
                    <FaFilter />
                  </button>

                  <Popover className="relative">
                    <PopoverButton className="py-2 pl-2 text-base flex items-center text-gray-800 focus:outline-none">
                      <FaUser />
                    </PopoverButton>
                    <PopoverPanel
                      anchor="bottom"
                      className="w-max text-sm font-sans flex flex-col divide-y bg-neutral-800 text-white rounded-md overflow-hidden"
                    >
                      <Link
                        href={"/profile"}
                        className="py-2 px-8 hover:bg-neutral-700 flex items-center gap-2"
                      >
                        <FaRegUser />
                        <span>Profile</span>
                      </Link>
                      <Link
                        href={"/profile/favourites"}
                        className="py-2 px-8 hover:bg-neutral-700 flex items-center gap-2"
                      >
                        <IoIosHeartEmpty />
                        <span>Favourites</span>
                      </Link>
                      <Link
                        href={"/profile/favourites"}
                        className="py-2 px-8 hover:bg-neutral-700 flex items-center gap-2"
                      >
                        <FiBell />
                        <span className="flex items-center gap-1">
                          Notifications{" "}
                          <span className="text-sm font-sans font-semibold h-4 w-4 rounded-full bg-white text-neutral-700 flex flex-col items-center justify-center">
                            2
                          </span>
                        </span>
                      </Link>
                      <button className="py-2 px-8 hover:bg-neutral-700 flex items-center gap-2">
                        <BiLogOut />
                        <span>Log Out</span>
                      </button>
                    </PopoverPanel>
                  </Popover>
                </div>
                {children}
              </div>

              {isFilterDrawerOpen && (
                <FilterDrawer
                  isFilterDrawerOpen={isFilterDrawerOpen}
                  handleFilterDrawer={handleFilterDrawer}
                />
              )}

              {isTopDrawerOpen && (
                <TopDrawer
                  isTopDrawerOpen={isTopDrawerOpen}
                  handleTopDrawer={handleTopDrawer}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
