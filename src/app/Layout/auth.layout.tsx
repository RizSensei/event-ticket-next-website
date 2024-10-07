// import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
// import Logo from "@/images/logo/logo.png";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
}

const AuthLayout = ({ children, title }: AuthLayoutProps) => {
  return (
    <div className="h-screen flex justify-center m-4">
      <div className="flex flex-col gap-5 max-w-xs w-full">
        {/* <div className="flex justify-center">
          <Image src={Logo.src} alt="" width={200} height={125} />
        </div> */}
        <div className="mt-5 flex items-center justify-between gap-5">
          <hr className="flex-grow" />
          <h1 className="font-sans text-neutral-800 font-semibold text-xl">
            {title}
          </h1>
          <hr className="flex-grow" />
        </div>
        {children}
        <Link
          href="/"
          className="text-gray-400 hover:text-gray-600 duration-300 ease-in-out transform text-center underline text-xs"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default AuthLayout;
