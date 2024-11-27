import React, { ReactNode } from "react";

const ModalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="z-[999] absolute inset-0 bg-black bg-opacity-75 h-full w-full">
      <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <div className="rounded-md w-[400px] bg-white p-5">{children}</div>
      </div>
    </div>
  );
};

export default ModalLayout;
