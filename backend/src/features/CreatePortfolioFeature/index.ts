import { PostgresPortfolioRepository } from '../../repositories/implementations';
import { CreatePortfolioController } from './CreatePortfolioController';
import { CreatePortfolioFeature } from './CreatePortfolioFeature';

const postgresPortfolioRepository = new PostgresPortfolioRepository();

const createPortfolioFeature = new CreatePortfolioFeature(
  postgresPortfolioRepository
);

const createPortfolioController = new CreatePortfolioController(
  createPortfolioFeature
);

export { createPortfolioController };
