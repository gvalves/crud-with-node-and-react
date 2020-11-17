const express = require('express');
const PortfolioModel = require('../models/portfolio/PortfolioModel');
const Response = require('../models/Response');

const router = express.Router();

router.get('/', async (req, res, next) => {
  // PortfolioModel.readAll((error, data) => {
  //   let response = new Response();

  //   if (error) {
  //     response.error = true;
  //     response.msg = 'Ops, ocorreu um erro inesperado!';
  //     console.log('An error in: ', error);
  //   } else {
  //     response.data = data;
  //   }

  //   res.json(response);
  // });

  let response = new Response();

  try {
    response.data = await PortfolioModel.readAll();
  } catch (err) {
    response.error = true;
    response.msg = 'Ops, ocorreu um erro inesperado!';
    console.log('An error in: ' + err);
  }

  res.json(response);
});

router.get('/:id?', async (req, res, next) => {
  // PortfolioModel.readById(req.params.id, (error, data) => {
  //   let response = new Response();

  //   if (error) {
  //     response.error = true;
  //     response.msg = 'Ops, ocorreu um erro inesperado!';
  //     console.log('An error in: ', error);
  //   } else {
  //     response.data = data;
  //   }

  //   res.json(response);
  // });

  let response = new Response();

  try {
    response.data = await PortfolioModel.readById(req.params.id);
  } catch (err) {
    response.error = true;
    response.msg = 'Ops, ocorreu um erro inesperado!';
    console.log('An error in: ', err);
  }

  res.json(response);
});

router.post('/?', async (req, res, next) => {
  let response = new Response();

  try {
    if (await PortfolioModel.insert(req.body) > 0) {
      response.msg = 'Cadastro realizado com sucesso!';
    } else {
      response.error = true;
      response.msg = 'Um erro ocorreu impedindo a realização do cadastro!';
    }
  } catch (err) {
    response.error = true;
    response.msg = 'Ops, ocorreu um erro inesperado!';
    console.log('An error in: ', err);
  }

  res.json(response);
});

router.delete('/:id', async (req, res, next) => {
  let response = new Response();

  try {
    if (await PortfolioModel.delete(req.params.id) > 0) {
      response.msg = 'Registro excluído com sucesso!';
    } else {
      response = true;
      response.msg = 'Um erro ocorreu ao tentar excluir um registro!';
    }
  } catch (err) {
    response.err = true;
    response.msg = 'Ops, ocorreu um erro inesperado!';
    console.log('An error in: ' + err);
  }

  res.json(response);
});

router.put('/?', async (req, res, next) => {
  let response = new Response();

  try {
    if (await PortfolioModel.update(req.body) > 0) {
      response.msg = 'Registro atualizado com sucesso!';
    } else {
      response.err = true;
      response.msg = 'Um erro ocorreu ao tentar atualizar um registro!';
    }
  } catch (err) {
    response.err = true;
    response.msg = 'Ops, ocorreu um erro inesperado!';
    console.log('An error in: ' + err);
  }

  res.json(response);
});

module.exports = router;
