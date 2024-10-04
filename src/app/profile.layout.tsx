import { AuthContext } from "@@/context/AuthContext";
import useProfile from "@@/hooks/useProfile";
import { setProfile } from "@@/redux/slice/auth";
import { useAppDispatch } from "@@/redux/store/hooks";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";

interface ProfileLayoutInterface {
  children: React.ReactNode;
}

const ProfileLayout = ({ children }: ProfileLayoutInterface) => {
  const router = useRouter();
  const {isAuthenticated} = useContext(AuthContext);
  const dispatch = useAppDispatch();

  const {fetchCustomerProfileQuery} = useProfile();
  const { data: profile, refetch } = fetchCustomerProfileQuery ?? {};

  useEffect(() => {
    // When logging in, if authenticated, refetch the profile
    if (isAuthenticated) {
      // Clear the profile before fetching the new one
      dispatch(setProfile(null));  // Clear profile immediately
      refetch().then((result) => {
        if (result?.data) {
          dispatch(setProfile(result.data));  // Set new profile
        }
      });
    } else {
      // When logging out, clear the profile
      dispatch(setProfile(null));
    }
  }, [isAuthenticated, refetch, dispatch]);

  return (
    <div className="relative mt-5">
      <div className="absolute top-0">
        <button onClick={() => router.back()} className="text-neutral-800">
          <FaArrowLeft />
        </button>
      </div>
      <div className="py-2">
        <div className="flex flex-col items-center">
          <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-neutral-800">
            <Image
              src={
                "https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              height={1550}
              width={1550}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 right-0">
              
            </div>
          </div>
          <h1 className="mt-2 font-sans text-xl">{profile?.name}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
