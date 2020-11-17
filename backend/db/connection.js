// const mysql = require('mysql');

// const connection = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'mysql'
// });

// module.exports = connection;

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Base de dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};
