import { PostgresPortfolioRepository } from '../../repositories/implementations';
import { GetPortfolioByIdController } from './GetPortfolioByIdController';
import { GetPortfolioByIdFeature } from './GetPortfolioByIdFeature';

const postgresPortfolioRepository = PostgresPortfolioRepository.getInstance();

const getPortfolioByIdFeature = new GetPortfolioByIdFeature(
  postgresPortfolioRepository
);

const getPortfolioByIdController = new GetPortfolioByIdController(
  getPortfolioByIdFeature
);

export { getPortfolioByIdController };
