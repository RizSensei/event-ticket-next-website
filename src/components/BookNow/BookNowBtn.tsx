import useEvents from "@@/hooks/useEvents";
import React from "react";
import BookingCard from "../BookingCard/BookingCard";
import moment from "moment";

interface BookNowBtnProps {
  handleBooking: () => void;
  id: string | string[] | undefined;
  isBookingOpen: boolean;
  setIsBookingOpen: (isOpen: boolean) => void;
}

const BookNowBtn = (props: BookNowBtnProps) => {
  const { fetchEventDetailQuery, fetchEventTicketTypesQuery } = useEvents({
    id: props.id,
  });
  const { data: event } = fetchEventDetailQuery;
  const { data: ticketType } = fetchEventTicketTypesQuery;

  const isBookingDatePassed = moment().isAfter(event?.end_date);

  return (
    <>
      <button
        disabled={isBookingDatePassed}
        onClick={props.handleBooking}
        className="px-3 py-2 text-sm bg-neutral-900 text-white rounded-md"
      >
        {isBookingDatePassed ? "The booking window is closed" : "Book Now"}
      </button>

      {props.isBookingOpen && (
        <BookingCard
          event={event}
          ticketType={ticketType}
          handleBooking={props.handleBooking}
          setIsBookingOpen={props.setIsBookingOpen}
        />
      )}
    </>
  );
};

export default BookNowBtn;
