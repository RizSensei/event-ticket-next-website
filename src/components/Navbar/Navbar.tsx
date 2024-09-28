import { navbarItems } from '@@/utils/navbarItems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebookF, FaUser } from 'react-icons/fa6';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="">
    <div className="h-full flex gap-2 z-10">
      {/* left sidebar */}
      <div className="h-full w-full">
        <div className="h-full py-5 flex flex-col items-center justify-between  bg-white border border-gray-200">
          <div className="flex flex-col gap-2 rounded-xl py-3">
            {navbarItems.map((item, i) => {
              const isActive = item.path === pathname;
              return (
                <div
                  key={i}
                  className="relative flex items-center px-5 group"
                >
                  <Link
                    href={item.path}
                    className={`link relative p-4 text-2xl flex items-center gap-5 transform ease-in-out duration-150 text-gray-500 rounded-xl  border border-[#F9FAFB]  ${
                      isActive ? "text-white  bg-blue" : "hover:border-gray-200 hover:text-gray-800 hover:bg-[#EEF1F6]"
                    }`}
                  >
                    {item.icon}
                  </Link>
                  {/* Tooltip that appears on hover */}
                  <div className="hidden group-hover:block z-50 absolute top-1/2 left-[5.2rem] transform -translate-y-1/2 p-2 px-5 text-sm bg-gray-200 text-gray-600 border rounded-md ease-in-out duration-150">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-md text-xl flex flex-col gap-3 border border-gray-200 text-gray-500 p-2">
              <FaFacebookF />
              <FaInstagramSquare />
            </div>
            <Link
              href={"/"}
              className="p-4 text-2xl flex items-center gap-5 transform ease-in-out duration-150 rounded-full text-gray-800 bg-[#EEF1F6] border border-gray-200"
            >
              <FaUser />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar