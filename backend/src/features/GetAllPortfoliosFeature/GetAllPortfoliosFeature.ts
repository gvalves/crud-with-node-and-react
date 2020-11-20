import { Portfolio } from '../../entities';
import { IPortfolioRepository } from '../../repositories';

export class GetAllPortfoliosFeature {
  constructor(private portfolioRepository: IPortfolioRepository) {}

  async execute(): Promise<Portfolio[]> {
    return await this.portfolioRepository.getAll();
  }
}
