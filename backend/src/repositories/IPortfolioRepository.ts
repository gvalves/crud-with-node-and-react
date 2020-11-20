import { Portfolio } from '../entities';

export interface IPortfolioRepository {
  getAll(): Promise<Portfolio[]>;
  getById(): Promise<Portfolio>;
  save(portfolio: Portfolio): Promise<void>;
  update(portfolio: Portfolio): Promise<void>;
  deleteById(id: number): Promise<void>;
}