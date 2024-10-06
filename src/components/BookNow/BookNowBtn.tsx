import React from "react";

interface BookNowBtnProps {
  handleBooking: () => void;
}

const BookNowBtn = ({ handleBooking }: BookNowBtnProps) => {
  return (
    <button
      onClick={handleBooking}
      className="px-3 py-2 text-sm bg-neutral-900 text-white rounded-md"
    >
      Book Now
    </button>
  );
};

export default BookNowBtn;
