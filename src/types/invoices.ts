import { Customer } from "./customer";
import { Event } from "./events";
import { Tickets } from "./tickets";

export interface Invoices{
    readonly id?:string;
    readonly total_amount?:string;
    readonly total_quantity?:number;
    readonly purchase_type?:string;
    readonly payment_method?:string;
    readonly customer?:Customer;
    readonly event?:Event;
    readonly tickets?:Tickets[];
}