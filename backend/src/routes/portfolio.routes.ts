import { Router as createRouter } from 'express';
import { createPortfolioController } from '../features/CreatePortfolioFeature';
import { deletePortfolioController } from '../features/DeletePortfolioFeature';
import { getAllPortfoliosController } from '../features/GetAllPortfoliosFeature';
import { getPortfolioByIdController } from '../features/GetPortfolioByIdFeature';
import { updatePortfolioController } from '../features/UpdatePortfolioFeature';

const portfolioRouter = createRouter();

portfolioRouter.get('/portfolio', (req, res) => {
  return getAllPortfoliosController.handle(req, res);
});

portfolioRouter.get('/portfolio/:id', (req, res) => {
  return getPortfolioByIdController.handle(req, res);
});

portfolioRouter.post('/portfolio', (req, res) => {
  return createPortfolioController.handle(req, res);
});

portfolioRouter.put('/portfolio', (req, res) => {
  return updatePortfolioController.handle(req, res);
});

portfolioRouter.delete('/portfolio/:id', (req, res) => {
  return deletePortfolioController.handle(req, res);
});

export { portfolioRouter };
