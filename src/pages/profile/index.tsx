import { fetchCustomerProfile } from "@@/apis/auth";
import { logout } from "@@/redux/slice/auth";
import { useAppDispatch } from "@@/redux/store/hooks";
import { Customer } from "@@/types/customer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProfileLayout from "../../app/Layout/profile.layout";
// import withProfile from "../../hoc/withProfile";

const Profile = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [profile, setProfile] = useState<Customer | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchCustomerProfile();
      setProfile(response);
    }
    fetchData();
    return () => {
      setProfile(null);
    };
  }, []);
  // const profileData = useAppSelector((state: RootState) => state.user);
  // const { profile } = profileData;

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };
  if (profile === null) return <h1>Loading. .</h1>;
  return (
    <ProfileLayout profile={profile}>
      <div className="mt-5 flex gap-2">
        {/* <Link
          href={"/profile/favourites"}
          className="px-2 py-2 bg-neutral-800 text-white flex justify-center flex-col items-center flex-1 rounded-md"
        >
          Favourites
        </Link> */}
        <Link
          href={"/profile/myTickets"}
          className="px-2 py-2 bg-neutral-700 text-white flex justify-center flex-col items-center flex-1 rounded-md"
        >
          My Tickets
        </Link>
        <button
          onClick={handleLogout}
          className="px-2 py-2 bg-neutral-950 text-white flex-1 rounded-md"
        >
          Log Out
        </button>
      </div>
      <div className="mt-10">
        <table className="min-w-full table-auto border-collapse">
          <tbody>
            <tr className="bg-white">
              <td className="px-4 py-2">Name:</td>
              <td className="font-sans px-4 py-2">{profile?.name ?? "N/A"}</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2">Gender:</td>
              <td className="font-sans px-4 py-2">
                {profile?.gender ?? "N/A"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2">Phone No:</td>
              <td className="font-sans px-4 py-2">{profile?.phone ?? "N/A"}</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2">Email:</td>
              <td className="font-sans px-4 py-2">{profile?.email ?? "N/A"}</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2">DOB:</td>
              <td className="font-sans px-4 py-2">
                {profile?.date_of_birth ?? "N/A"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ProfileLayout>
  );
};

export default Profile;
