import { PostgresPortfolioRepository } from '../../repositories/implementations';
import { CreatePortfolioController } from './CreatePortfolioController';
import { CreatePortfolioFeature } from './CreatePortfolioFeature';

const postgresPortfolioRepository = PostgresPortfolioRepository.getInstance();

const createPortfolioFeature = new CreatePortfolioFeature(
  postgresPortfolioRepository
);

const createPortfolioController = new CreatePortfolioController(
  createPortfolioFeature
);

export { createPortfolioController };
