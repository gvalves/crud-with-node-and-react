import { Portfolio } from '../../entities';
import { IPortfolioRepository } from '../../repositories';

export class GetPortfolioByIdFeature {
  constructor(private portfolioRepository: IPortfolioRepository) {}

  async execute(id: number): Promise<Portfolio> {
    return await this.portfolioRepository.getById(id);
  }
}
