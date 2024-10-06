import axiosClient from "@@/lib/axios";
import urls from "@@/lib/urls";
import { TicketType } from "@@/types/ticketType";

//get ticket type information  
export const fetchTicketType = async (ticketId: number | string | string[] | undefined): Promise<TicketType[]> => {
    const response = await axiosClient.get(
      `${urls.API_TICKET_TYPE}/${ticketId}`,
    );
    return response?.data;
  };