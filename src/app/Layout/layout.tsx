"use client";
import Logo from "@/images/logo/logo.png";
import TopDrawer from "@@/components/Drawer/TopDrawer";
import { AuthContext } from "@@/context/AuthContext";
import { logout } from "@@/redux/slice/auth";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { FaRegUser, FaUser } from "react-icons/fa6";
// import { FiBell } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
// import { IoIosHeartEmpty } from "react-icons/io";
import { TbFileInvoice } from "react-icons/tb";
import { useDispatch } from "react-redux";
// import SearchBar from "../../components/Search/SearchBar";
import "../globals.css";
import PageLayout from "./page.layout";
import SearchBarAutoComplete from "@@/components/Search/SearchBarAutoComplete";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isTopDrawerOpen, setIsTopDrawerOpen] = useState(false);

  const { isAuthenticated } = useContext(AuthContext);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    if (confirm("Are you sure want to logout ?")) {
      dispatch(logout());
      router.push("/");
    }
  };

  const handleTopDrawer = () => {
    setIsTopDrawerOpen((prev) => !prev);
  };

  return (
    <PageLayout title="Mero Ticket" description="">
      <div className={`antialiased flex flex-col h-screen w-full bg-white`}>
        <div className="flex flex-grow">
          <div className="h-full flex flex-grow justify-center w-full bg-white">
            {/* main content area */}
            <div className="relative max-w-lg 2xl:max-w-xl h-full py-5 px-5 md:px-12 flex flex-grow justify-center bg-white">
              <div className="w-full bg-white">
                <div className="w-full flex items-center justify-between">
                  <Link href="/">
                    <Image src={Logo.src} alt="" width={150} height={75} />
                  </Link>
                  <button onClick={handleTopDrawer}>
                    <GiHamburgerMenu />
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <SearchBarAutoComplete/>

                  {/* <button
                    onClick={handleFilterDrawer}
                    className="py-2 pl-2 text-base flex items-center text-gray-800"
                  >
                    <FaFilter />
                  </button> */}

                  <Popover className="relative">
                    {({ close }) => (
                      <>
                        <PopoverButton className="py-2 pl-2 text-base flex items-center text-gray-800 focus:outline-none">
                          <FaUser />
                        </PopoverButton>
                        <PopoverPanel
                          anchor="top end"
                          className="z-[99999] w-max text-sm font-sans flex flex-col divide-y bg-neutral-800 text-white rounded-md overflow-hidden"
                        >
                          {isAuthenticated ? (
                            <>
                              <Link
                                onClick={() => close()}
                                href={"/profile"}
                                className="py-2 px-8 hover:bg-neutral-700 flex items-center gap-2"
                              >
                                <FaRegUser />
                                <span>Profile</span>
                              </Link>

                              {/* <Link
                                onClick={() => close()}
                                href={"/profile/favourites"}
                                className="py-2 px-8 hover:bg-neutral-700 flex items-center gap-2"
                              >
                                <IoIosHeartEmpty />
                                <span>Favourites</span>
                              </Link> */}
                              <Link
                                onClick={() => close()}
                                href={"/profile/myTickets"}
                                className="py-2 px-8 hover:bg-neutral-700 flex items-center gap-2"
                              >
                                <TbFileInvoice />
                                <span>Tickets</span>
                              </Link>
                              {/* <Link
                                onClick={() => close()}
                                href={"/profile/notifications"}
                                className="py-2 px-8 hover:bg-neutral-700 flex items-center gap-2"
                              >
                                <FiBell />
                                <span className="flex items-center gap-1">
                                  Notifications
                                  <span className="text-sm font-sans font-semibold h-4 w-4 rounded-full bg-white text-neutral-700 flex flex-col items-center justify-center">
                                    2
                                  </span>
                                </span>
                              </Link> */}
                              <button
                                onClick={handleLogout}
                                className="py-2 px-8 hover:bg-neutral-700 flex items-center gap-2"
                              >
                                <BiLogOut />
                                <span>Log Out</span>
                              </button>
                            </>
                          ) : (
                            <>
                              <Link
                                href={"/auth/login"}
                                className="py-2 px-8 hover:bg-neutral-700 flex items-center gap-2"
                              >
                                <BiLogIn />
                                <span>Login</span>
                              </Link>
                              <Link
                                href={"/auth/register"}
                                className="py-2 px-8 hover:bg-neutral-700 flex items-center gap-2"
                              >
                                <BiLogIn />
                                <span>Register</span>
                              </Link>
                            </>
                          )}
                        </PopoverPanel>
                      </>
                    )}
                  </Popover>
                </div>
                {children}
              </div>

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
