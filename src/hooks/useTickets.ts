import { bookTickets, fetchTicketType } from "@@/apis/event";
import { useMutation, useQuery } from "@tanstack/react-query";
// import toast from "react-hot-toast";

export interface TicketParameter {
  id?: number | string | string[] | undefined;
}

const useTickets = (props: TicketParameter) =>
  // page:number,
  // limit:number,
  // filters:FilterParameter
  {
    const id = props.id;

    const fetchTicketTypeQuery = useQuery({
      queryKey: ["ticket-type", id],
      queryFn: () => fetchTicketType(id),
      staleTime: Infinity,
      enabled: !!id,
    });

    const bookTicketsMutation = useMutation({
      mutationFn: bookTickets,
      // onError: () => {
      //   toast.error("Insufficient Data to book tickets")
      // }
    });

    return {
      fetchTicketTypeQuery,
      bookTicketsMutation,
    };
  };

export default useTickets;
