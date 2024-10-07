import {
  bookTickets,
  fetchAllEvents,
  fetchEventCategories,
  fetchEventDetail,
  fetchEventTicketTypes,
  // fetchTicketType,
} from "@@/apis/event";
import { useMutation, useQuery } from "@tanstack/react-query";

export interface EventParameter {
  id?: number | string | string[] | undefined;
  term?: string;
}
const useEvents = (props: EventParameter) =>
  // page:number,
  // limit:number,
  // filters:FilterParameter
  {
    const id = props.id;
    const term = props.term;

    const fetchEventQuery = useQuery({
      queryKey: [
        "events",
        { term: term },
        // page,
        // limit,
        // sort,
      ],
      queryFn: () =>
        fetchAllEvents({
          term: term || undefined,
          status: "Published",
        }),
      // enabled: !!term,
      staleTime: Infinity,
    });

    const fetchEventDetailQuery = useQuery({
      queryKey: ["event", id],
      queryFn: () => fetchEventDetail(id),
      staleTime: Infinity,
      enabled: !!id,
    });

    const fetchEventCategoiesQuery = useQuery({
      queryKey: ["event-categories"],
      queryFn: () => fetchEventCategories(),
      staleTime: Infinity,
    });

    const fetchEventTicketTypesQuery = useQuery({
      queryKey: ["event-ticket-types", id],
      queryFn: () => fetchEventTicketTypes(id),
      staleTime: Infinity,
      enabled: !!id,
    });

    // const fetchTicketTypeQuery = useQuery({
    //   queryKey: ["ticket-type", id],
    //   queryFn: () => fetchTicketType(id),
    //   staleTime: Infinity,
    //   enabled: !!id,
    // });

    const bookTicketsMutation = useMutation({
      mutationFn: bookTickets,
    });

    return {
      fetchEventQuery,
      fetchEventDetailQuery,
      fetchEventCategoiesQuery,
      fetchEventTicketTypesQuery,
      // fetchTicketTypeQuery,
      bookTicketsMutation,
    };
  };

export default useEvents;
