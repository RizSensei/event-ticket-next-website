import { bookTickets, fetchAllEvents, fetchEventDetail, fetchEventTicketTypes, fetchTicketType } from '@@/apis/event';
import { useMutation, useQuery } from '@tanstack/react-query';

export interface EventParameter {
  id?: number | string | string[] | undefined;
}
const useEvents = (props: EventParameter) =>
  // page:number,
  // limit:number,
  // filters:FilterParameter
  {

    const id = props.id;

    // const [id, setId] = useState(0);
    const fetchEventQuery = useQuery({
      queryKey: [
        'events',
        // page,
        // limit,
        // sort,
      ],
      queryFn: () =>
        fetchAllEvents({
          params: {
            // page,
            // limit,
            // name,
          },
        }),
      staleTime: Infinity,
    });

    
    const fetchEventDetailQuery = useQuery({
      queryKey: ['event', id],
      queryFn: () => fetchEventDetail(id),
      staleTime: Infinity,
      enabled: !!id

    });
    
    const fetchEventTicketTypesQuery = useQuery({
      queryKey: ['event-ticket-types', id],
      queryFn: () => fetchEventTicketTypes(id),
      staleTime: Infinity,
      enabled: !!id

    });

    const fetchTicketTypeQuery = useQuery({
      queryKey: ['ticket-type', id],
      queryFn: () => fetchTicketType(id),
      staleTime: Infinity,
      enabled: !!id
    });

    const bookTicketsMutation = useMutation({
      mutationFn: bookTickets,
    });

    return {
      fetchEventQuery,
      fetchEventDetailQuery,
      fetchEventTicketTypesQuery,
      fetchTicketTypeQuery,
      bookTicketsMutation
    };
  };

export default useEvents;
