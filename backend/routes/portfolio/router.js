import { Router } from 'express';
import { PortfolioModel } from '../../model/PortfolioModel.js';
import { Response } from '../../model/Response.js';

const router = Router();

const getAllPortfolios = async (req, res, next) => {
  const response = new Response();

  try {
    response.data = await PortfolioModel.getAllPortfolios();
    response.msg = 'Todos os portfolios foram recuperados com sucesso.';
  } catch (error) {
    response.error = true;
    response.msg = 'Ocorreu um erro ao tentar recuperar todos os portfolios.';
    console.log('An error in: ' + error);
  } finally {
    res.json(response);
  }
};

const getPortfolioById = async (req, res, next) => {
  const response = new Response();

  try {
    response.data = await PortfolioModel.getPortfolioById(req.params.id);
    response.msg = 'O portfolio requisitado foi recuperado com sucesso.';
  } catch (error) {
    response.error = true;
    response.msg = 'Ocorreu um erro ao tentar um portfolio por id.';
    console.log('An error in: ' + error);
  } finally {
    res.json(response);
  }
};

const addPortfolio = async (req, res, next) => {
  const response = new Response();

  try {
    if (await PortfolioModel.addPortfolio(req.body) > 0) {
      response.msg = 'Portfolio adicionado ao banco de dados com sucesso.';
    } else {
      throw new Error('O portfolio não foi adicionado ao banco de dados.');
    }
  } catch (error) {
    response.error = true;
    response.msg = 'Ocorreu um erro ao tentar adicionar um portfolio no banco de dados.';
    console.log('An error in: ' + error);
  } finally {
    res.json(response);
  }
};

const updatePortfolio = async (req, res, next) => {
  const response = new Response();

  try {
    if (await PortfolioModel.updatePortfolio(req.body) > 0) {
      response.msg = 'Portfolio atualizado no banco de dados com sucesso.';
    } else {
      throw new Error('O portfolio não foi atualizado no banco de dados.');
    }
  } catch (error) {
    response.error = true;
    response.msg = 'Ocorreu um erro ao tentar adicionar um portfolio no banco de dados.';
    console.log('An error in: ' + error);
  } finally {
    res.json(response);
  }
};

const deletePortfolio = async (req, res, next) => {
  const response = new Response();

  try {
    if (await PortfolioModel.deletePortfolio(req.params.id) > 0) {
      response.msg = 'Portfolio excluído do banco de dados com sucesso.';
    } else {
      throw new Error('O portfolio não foi excluído do banco de dados.');
    }
  } catch (error) {
    response.error = true;
    response.msg = 'Ocorreu um erro ao tentar adicionar um portfolio no banco de dados.';
    console.log('An error in: ' + error);
  } finally {
    res.json(response);
  }
};

router.get('/', getAllPortfolios);
router.get('/:id', getPortfolioById);
router.post('/', addPortfolio);
router.put('/', updatePortfolio);
router.delete('/:id', deletePortfolio);

export default router;
