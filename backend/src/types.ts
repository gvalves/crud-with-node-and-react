export interface APIResponse<T extends unknown> {
  msg: string;
  error: boolean;
  data: T[];
}
