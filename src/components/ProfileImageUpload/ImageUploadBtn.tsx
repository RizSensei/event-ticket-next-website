import useProfile from "@@/hooks/useProfile";
import React, { useCallback } from "react";
import { FaCamera } from "react-icons/fa6";

const ImageUploadBtn = () => {

  const {updateProfilePictureMutation} = useProfile();

  const handleImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const photo = e.target.files?.[0];
      if (photo) {
        const formData = new FormData();
        formData.append("photo", photo);

        updateProfilePictureMutation.mutate(formData);
      }
    },
    [updateProfilePictureMutation]
  );

  return (
    <div className="z-20 absolute -bottom-2 -right-2">
      <button
        onClick={() => document.getElementById("image-file-input")?.click()}
        className="p-2 bg-white rounded-full text-sm border-2 border-neutral-700"
      >
        <FaCamera />
      </button>
      <input
        type="file"
        name="image"
        id="image-file-input"
        className="hidden"
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default ImageUploadBtn;
