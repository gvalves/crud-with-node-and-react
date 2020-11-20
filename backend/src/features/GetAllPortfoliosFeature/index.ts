import { PostgresPortfolioRepository } from '../../repositories/implementations';
import { GetAllPortfoliosController } from './GetAllportfoliosController';
import { GetAllPortfoliosFeature } from './GetAllPortfoliosFeature';

const postgresPortfolioRepository = new PostgresPortfolioRepository();

const getAllPortfoliosFeature = new GetAllPortfoliosFeature(
  postgresPortfolioRepository
);

const getAllPortfoliosController = new GetAllPortfoliosController(
  getAllPortfoliosFeature
);

export { getAllPortfoliosController };
