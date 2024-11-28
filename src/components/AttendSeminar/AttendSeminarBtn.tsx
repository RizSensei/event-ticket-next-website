/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthContext } from "@@/context/AuthContext";
import useEvents from "@@/hooks/useEvents";
import useProfile from "@@/hooks/useProfile";
import moment from "moment";
import { useCallback, useContext } from "react";
import toast from "react-hot-toast";
import { FaXmark } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

interface AttendSeminarBtnProps {
  id: string | string[] | undefined;
}

const AttendSeminarBtn = ({ id }: AttendSeminarBtnProps) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { respondToEventInviteMutation } = useEvents({});
  const { fetchEventDetailQuery } = useEvents({ id: id ?? "" });
  const { fetchAllEventsInvitation } = useProfile();

  const { data: event } = fetchEventDetailQuery;
  const { data: invitations } = fetchAllEventsInvitation;

  const isEventEnded = moment().isAfter(event?.end_date);
  const invitation = invitations?.data?.find((inv: any) => inv.id === id);
  const invitationStatus = invitation?.status;

  const handleRespondToEventInvite = useCallback(
    (response: string) => {
      if (!isAuthenticated) {
        toast.error("You need to log in to attend the seminar.");
        return;
      }

      respondToEventInviteMutation.mutate({
        eventId: id,
        response,
      },{
        onSuccess: () => {
          fetchAllEventsInvitation.refetch();
        }
      });
    },
    [isAuthenticated, respondToEventInviteMutation, id, fetchAllEventsInvitation]
  );

  const renderButton = () => {
    if (isEventEnded) {
      return (
        <button
          disabled
          className="px-3 py-2 text-sm bg-dark-black text-white rounded-md"
        >
          Booking closed
        </button>
      );
    }

    if (!isAuthenticated) {
      return (
        <button
          onClick={() => handleRespondToEventInvite("Accepted")}
          className="px-3 py-2 text-sm bg-dark-black text-white rounded-md"
        >
          Attend
        </button>
      );
    }

    switch (invitationStatus) {
      case "Rejected":
        return (
          <button
            onClick={() => handleRespondToEventInvite("Accepted")}
            className="px-3 py-2 text-sm bg-dark-black text-white rounded-md"
          >
            Attend
          </button>
        );

      case "Accepted":
        return (
          <div className="flex gap-1">
            <button
              disabled
              className="px-3 py-2 text-sm bg-dark-black text-white rounded-md flex items-center"
            >
              <TiTick className="mr-1" />
              Attending
            </button>
            <button
              onClick={() => handleRespondToEventInvite("Rejected")}
              className="px-3 py-2 text-sm bg-dark-black text-white rounded-md"
            >
              <FaXmark />
            </button>
          </div>
        );

      default:
        return (
          <button
            onClick={() => handleRespondToEventInvite("Accepted")}
            className="px-3 py-2 text-sm bg-dark-black text-white rounded-md"
          >
            Attend
          </button>
        );
    }
  };

  return <>{renderButton()}</>;
};

export default AttendSeminarBtn;
