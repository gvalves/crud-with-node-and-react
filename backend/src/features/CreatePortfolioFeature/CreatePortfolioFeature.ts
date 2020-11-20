import { Portfolio } from '../../entities';
import { IPortfolioRepository } from '../../repositories';
import { ICreatePortfolioRequestDTO } from './CreatePortfolioDTO';

export class CreatePortfolioFeature {
  constructor(private portfolioRepository: IPortfolioRepository) {}

  async execute(data: ICreatePortfolioRequestDTO): Promise<void> {
    const portfolio = new Portfolio(data);

    await this.portfolioRepository.save(portfolio);
  }
}
