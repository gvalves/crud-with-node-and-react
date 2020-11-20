import { PostgresPortfolioRepository } from '../../repositories/implementations';
import { UpdatePortfolioController } from './UpdatePortfolioController';
import { UpdatePortfolioFeature } from './UpdatePortfolioFeature';

const postgresPortfolioRepository = PostgresPortfolioRepository.getInstance();

const updatePortfolioFeature = new UpdatePortfolioFeature(
  postgresPortfolioRepository
);

const updatePortfolioController = new UpdatePortfolioController(
  updatePortfolioFeature
);

export { updatePortfolioController };
