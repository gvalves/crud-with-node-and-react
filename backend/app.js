const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const portfolioRouter = require('./routes/portfolio.routes');

const api = express();
const port = 80;
const router = express.Router();

api.use(cors());

api.use(bodyparser.json());
api.use(bodyparser.urlencoded({ extended: true }));

api.get('/', (req, res) => {
  res.json({
    msg: 'API it\'s on'
  });
});

api.use('/', router);
api.use('/portfolio', portfolioRouter);

api.listen(port);
console.log('API it\'s running...');
