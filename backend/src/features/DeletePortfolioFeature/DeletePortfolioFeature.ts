import { IPortfolioRepository } from '../../repositories';

export class DeletePortfolioFeature {
  constructor(private portfolioRepository: IPortfolioRepository) {}

  async execute(id: number): Promise<void> {
    await this.portfolioRepository.delete(id);
  }
}
