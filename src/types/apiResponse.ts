export type PageMeta = {
  page: number;
  limit: number;
  totalCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};
export interface ApiResponse<T> {
  // map(
  //   arg0: (item: import('./event').EventCategory) => {
  //     value: number | undefined;
  //     label: string;
  //   },
  // ): unknown;
  data: T[];
  meta: PageMeta;
}
