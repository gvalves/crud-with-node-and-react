export interface ApiResponse<T> {
  msg: string;
  error: boolean;
  data: T[];
}

export * from './services/portfolioApi/types';
