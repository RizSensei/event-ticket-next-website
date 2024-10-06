import { bookTickets, fetchTicketType } from "@@/apis/event";
import { useMutation, useQuery } from "@tanstack/react-query";

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
    });

    return {
      fetchTicketTypeQuery,
      bookTicketsMutation,
    };
  };

export default useTickets;
