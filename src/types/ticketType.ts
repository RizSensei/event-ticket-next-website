export interface TicketType {
  readonly id?:string;
  readonly name?: string;
  readonly capacity?: number;
  readonly price?: number;
  readonly sales_count?: number;
  readonly remaining_count?: number;
}
