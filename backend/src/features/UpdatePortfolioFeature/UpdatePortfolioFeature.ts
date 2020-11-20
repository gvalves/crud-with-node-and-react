import { Portfolio } from '../../entities';
import { IPortfolioRepository } from '../../repositories';
import { UpdatePortfolioRequestDTO } from './UpdatePortfolioDTO';

export class UpdatePortfolioFeature {
  constructor(private portfolioRepository: IPortfolioRepository) {}

  async execute(data: UpdatePortfolioRequestDTO): Promise<void> {
    const portfolio = new Portfolio(data);

    await this.portfolioRepository.update(portfolio);
  }
}
