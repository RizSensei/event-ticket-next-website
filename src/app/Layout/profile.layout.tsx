import ImageUploadBtn from "@@/components/ProfileImageUpload/ImageUploadBtn";
import { Customer } from "@@/types/customer";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

interface ProfileLayoutInterface {
  children: React.ReactNode;
  profile: Customer;
}

const ProfileLayout = ({ children, profile }: ProfileLayoutInterface) => {
  const router = useRouter();
  // const { isAuthenticated } = useContext(AuthContext);
  // const dispatch = useAppDispatch();

  // const { fetchCustomerProfileQuery } = useProfile();
  // const { data: profile, refetch } = fetchCustomerProfileQuery ?? {};
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     dispatch(setProfile(null));

  //     refetch().then((result) => {
  //       if (result?.data) {
  //         dispatch(setProfile(result.data));
  //       }
  //     });
  //   } else {
  //     dispatch(setProfile(null));
  //   }
  // }, [isAuthenticated, refetch, dispatch]);

  return (
    <div className="relative mt-5">
      <div className="absolute top-0">
        <button onClick={() => router.back()} className="text-neutral-800">
          <FaArrowLeft />
        </button>
      </div>
      <div className="py-2">
        <div className="flex flex-col items-center">
          <div className="relative h-20 w-20 flex flex-col items-center justify-center rounded-full border-4 border-neutral-800">
            {profile?.profile_picture ? (
              <Image
                src={profile?.profile_picture}
                alt=""
                height={1550}
                width={1550}
                className="h-full w-full object-cover rounded-full grayscale"
              />
            ) : (
              <span className="text-3xl font-bold font-sans">
                {profile?.name?.charAt(0).toUpperCase()}
              </span>
            )}
            <ImageUploadBtn />
          </div>
          <h1 className="mt-2 font-sans text-xl">{profile?.name}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
