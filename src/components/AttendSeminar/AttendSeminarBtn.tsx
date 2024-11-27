import { AuthContext } from "@@/context/AuthContext";
import useEvents from "@@/hooks/useEvents";
import moment from "moment";
import React, { useCallback, useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaXmark } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

interface AttendSeminarBtnProps {
  id: string | string[] | undefined;
}

const AttendSeminarBtn = (props: AttendSeminarBtnProps) => {
  const [activeEvent, setActiveEvent] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);
  const { respondToEventInviteMutation } = useEvents({});

  const { fetchEventDetailQuery } = useEvents({
    id: props.id,
  });
  const { data: event } = fetchEventDetailQuery;

  const isAttendingDatePassed = moment().isAfter(event?.end_date);

  const handleRespondToEventInvite = useCallback(
    (response?: string) => {
      if (!isAuthenticated) {
        toast.error("You need to log in to attend the seminar.");
        return;
      }

      if (response === "Accepted") {
        setActiveEvent(true);
      } else if (response === "Rejected") {
        setActiveEvent(false);
      }

      respondToEventInviteMutation.mutate({
        eventId: props.id,
        response: response,
      });
    },
    [isAuthenticated, props.id, respondToEventInviteMutation]
  );

  return (
    <>
      {isAttendingDatePassed ? (
        <button
          disabled
          className="px-3 py-2 text-sm bg-neutral-900 text-white rounded-md"
        >
          Booking closed
        </button>
      ) : !activeEvent ? (
        <button
          onClick={() => handleRespondToEventInvite("Accepted")}
          className="px-3 py-2 text-sm bg-neutral-900 text-white rounded-md"
        >
          Attend
        </button>
      ) : (
        <div className="flex gap-1">
          <button
            disabled
            className="px-3 py-2 text-sm bg-neutral-900 text-white rounded-md flex items-center"
          >
            <TiTick />
            Attending
          </button>
          <button
            onClick={() => handleRespondToEventInvite("Rejected")}
            className="px-3 py-2 text-sm bg-neutral-900 text-white rounded-md"
          >
            <FaXmark />
          </button>
        </div>
      )}
    </>
  );
};

export default AttendSeminarBtn;
