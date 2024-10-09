export interface Event {
  readonly id?: string;
  readonly name?: string;
  readonly description: string;
  readonly organizer: string;
  readonly start_date: string;
  readonly end_date: string;
  readonly venue_name?: string;
  readonly venue_address?: string;
  readonly venue_city?: string;
  readonly venue_municipality?: string;
  readonly venue_province?: string;
  readonly venue_country?: string;
  readonly banner_photo?: string;
  readonly status?: string;
  // readonly category?: number;
}

export interface EventCategory {
  id?: number;
  name?: string;
}
