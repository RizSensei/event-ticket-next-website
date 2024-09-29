import React from "react";
import ProfileLayout from "../../app/profile.layout";
import Link from "next/link";

const index = () => {
  return (
    <ProfileLayout>
      <div className="mt-10">
        <table className="min-w-full table-auto border-collapse">
          <tbody>
            <tr className="bg-white">
              <td className="px-4 py-2">Name:</td>
              <td className="font-sans px-4 py-2">Rishav Maskey</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2">Gender:</td>
              <td className="font-sans px-4 py-2">Male</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2">Phone No:</td>
              <td className="font-sans px-4 py-2">9812545685</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2">Email:</td>
              <td className="font-sans px-4 py-2">maskeymero@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-5 flex gap-2">
        <Link href={'/profile/favourites'} className="px-2 py-2 bg-neutral-800 text-white flex justify-center flex-col items-center flex-1 rounded-md">
          Go to Favourites
        </Link>
        <button className="px-2 py-2 bg-red-500 text-white flex-1 rounded-md">
          Log Out
        </button>
      </div>
    </ProfileLayout>
  );
};

export default index;
