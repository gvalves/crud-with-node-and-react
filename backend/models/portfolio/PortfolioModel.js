const { query } = require('express');
const db = require('../../db/connection.js');

class PortfolioModel {
  static async readAll() {
    const { rows } = await db.query('SELECT * FROM portfolio ORDER BY id');
    return rows;
  }

  static async readById(id) {
    const query = 'SELECT * FROM portfolio WHERE id=$1';
    const { rows } = await db.query(query, [id]);
    return rows;
  }

  static async insert(portfolio) {
    const query = 'INSERT INTO portfolio (description, details) VALUES ($1, $2)';
    const { description, details } = portfolio;
    const { rowCount } = await db.query(query, [
      description, details
    ]);
    return rowCount;
  }

  static async delete(id) {
    const query = 'DELETE FROM portfolio WHERE id=$1';
    const { rowCount } = await db.query(query, [id]);
    return rowCount;
  }

  static async update(portfolio) {
    const query = 'UPDATE portfolio SET description=$1, details=$2 WHERE id=$3';
    const { description, details, id } = portfolio;
    const { rowCount } = await db.query(query, [
      description, details, id
    ]);
    return rowCount;
  }
}

module.exports = PortfolioModel;
