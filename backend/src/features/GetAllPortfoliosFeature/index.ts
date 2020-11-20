import { PostgresPortfolioRepository } from '../../repositories/implementations';
import { GetAllPortfoliosController } from './GetAllportfoliosController';
import { GetAllPortfoliosFeature } from './GetAllPortfoliosFeature';

const postgresPortfolioRepository = PostgresPortfolioRepository.getInstance();

const getAllPortfoliosFeature = new GetAllPortfoliosFeature(
  postgresPortfolioRepository
);

const getAllPortfoliosController = new GetAllPortfoliosController(
  getAllPortfoliosFeature
);

export { getAllPortfoliosController };
