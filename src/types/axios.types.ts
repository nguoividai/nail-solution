export type ResponseStructure<T> = { data: T; message: string; success: boolean };

export interface Pagination {
  skip: number;
  limit: number;
  isPagination?: boolean;
  showPagination?: boolean;
}
