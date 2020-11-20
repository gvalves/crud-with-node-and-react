import { PostgresPortfolioRepository } from '../../repositories/implementations';
import { DeletePortfolioController } from './DeletePortfolioController';
import { DeletePortfolioFeature } from './DeletePortfolioFeature';

const postgresPortfolioRepository = new PostgresPortfolioRepository();

const deletePortfolioFeature = new DeletePortfolioFeature(
  postgresPortfolioRepository
);

const deletePortfolioController = new DeletePortfolioController(
  deletePortfolioFeature
);

export { deletePortfolioController };
