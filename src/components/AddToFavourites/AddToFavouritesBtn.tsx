import { AuthContext } from "@@/context/AuthContext";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { CiHeart } from "react-icons/ci";

const AddToFavouritesBtn = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const handleAddToFavourites = () => {
    if (isAuthenticated) {
      toast.success("Added to Favourites");
    } else {
      toast.error("Login to access Favourites");
    }
  };

  return (
    <button
      onClick={handleAddToFavourites}
      className="px-3 py-2 flex items-center gap-1 text-sm bg-neutral-800 text-white rounded-md"
    >
      <CiHeart />
      <span>Add to Favourites</span>
    </button>
  );
};

export default AddToFavouritesBtn;
