import { TicketType } from "./ticketType";

export interface Tickets{
    readonly id?:string;
    readonly ticket_code?:string;
    readonly visiting_date?:string;
    readonly check_in_time?:string;
    readonly status?:string;
    readonly ticket_type?:TicketType;

}