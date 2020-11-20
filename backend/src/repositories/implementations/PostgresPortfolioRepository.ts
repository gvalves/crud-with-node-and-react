import { Portfolio } from '../../entities';
import { IPortfolioRepository } from '../IPortfolioRepository';
import { Client } from 'pg';
import { config } from 'dotenv';

export class PostgresPortfolioRepository implements IPortfolioRepository {
  private connection: Client;

  constructor() {
    if (!process.env.DATABASE_URL) config();
    this.connection = new Client({
      connectionString: process.env.DATABASE_URL,
    });
  }

  async getAll(): Promise<Portfolio[]> {
    await this.connection.connect();

    const { rows } = await this.connection.query('SELECT * FROM portfolio');

    await this.connection.end();

    return rows;
  }

  async getById(id: number): Promise<Portfolio> {
    await this.connection.connect();

    const {
      rows,
    } = await this.connection.query('SELECT * FROM portfolio WHERE id=$1', [
      id,
    ]);

    await this.connection.end();

    return rows[0];
  }

  async save(portfolio: Portfolio): Promise<void> {
    await this.connection.connect();

    await this.connection.query(
      'INSERT TO portfolio (description, values) VALUES ($1, $2)',
      [portfolio.description, portfolio.details]
    );

    await this.connection.end();
  }

  async update(portfolio: Portfolio): Promise<void> {
    await this.connection.connect();

    await this.connection.query(
      'UPDATE portfolio SET description=$1, details=$2 WHERE id=$3',
      [portfolio.description, portfolio.details, portfolio.id]
    );

    await this.connection.end();
  }

  async delete(id: number): Promise<void> {
    await this.connection.connect();

    await this.connection.query('DELETE FROM portfolio WHERE id=$1', [id]);

    await this.connection.end();
  }
}
