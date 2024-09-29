import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

interface ProfileLayoutInterface {
  children: React.ReactNode;
}

const ProfileLayout = ({ children }: ProfileLayoutInterface) => {
    const router = useRouter();

  return (
    <div className="relative mt-5">
                <div className="absolute top-0">
        <button onClick={() => router.back()} className="text-neutral-800">
            <FaArrowLeft />
        </button>
        </div>
      <div className="py-2">
        <div className="flex flex-col items-center">
          <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-neutral-800">
            <Image
              src={
                "https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              height={1550}
              width={1550}
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="mt-2 font-sans text-xl">Rishav Maskey</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
