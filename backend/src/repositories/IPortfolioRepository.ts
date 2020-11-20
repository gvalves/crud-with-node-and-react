import { Portfolio } from '../entities';

export interface IPortfolioRepository {
  getAll(): Promise<Portfolio[]>;
  getById(id: number): Promise<Portfolio>;
  save(portfolio: Portfolio): Promise<void>;
  update(portfolio: Portfolio): Promise<void>;
  delete(id: number): Promise<void>;
}
