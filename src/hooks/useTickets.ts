import { bookTickets } from "@@/apis/event";
import { useMutation } from "@tanstack/react-query";

// export interface TicketParameter {
//   id?: number | string | string[] | undefined;
// }
const useTickets = () =>
  // page:number,
  // limit:number,
  // filters:FilterParameter
  {
    const bookTicketsMutation = useMutation({
      mutationFn: bookTickets,
    });

    return {
      bookTicketsMutation,
    };
  };

export default useTickets;
