/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from "@@/lib/axios";
import urls from "@@/lib/urls";
import { Event } from "@@/types/events";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchAllEvents = async (params: Record<string, any>) => {
  const response = await axiosClient.get<Event[]>(
    `${urls.API_EVENT}`,
    {
      params: { ...params },
    },
  );
  return response?.data;
};


export const fetchEventDetail = async (eventId: number | string | string[] | undefined) => {
    const response = await axiosClient.get<Event>(
      `${urls.API_EVENT}/${eventId}`,
    );
    return response?.data;
  };


export const fetchEventTicketTypes = async (eventId: number | string | string[] | undefined) => {
    const response = await axiosClient.get<Event>(
      `${urls.API_EVENT}/${eventId}/ticket-types`,
    );
    return response?.data;
  };

//get ticket type information  
export const fetchTicketType = async (ticketId: number | string | string[] | undefined) => {
  const response = await axiosClient.get<any>(
    `${urls.API_TICKET_TYPE}/${ticketId}`,
  );
  return response?.data;
};


// customer book tickets
export const bookTickets = async ({eventId,data}:{eventId: number | string | string[] | undefined,data:any}) =>
  (await axiosClient.post( `${urls.API_EVENT}/${eventId}/create-ticket`, data)).data;