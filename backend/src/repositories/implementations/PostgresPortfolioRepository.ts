import { Portfolio } from '../../entities';
import { IPortfolioRepository } from '../IPortfolioRepository';
import { Pool } from 'pg';
import { config } from 'dotenv';

export class PostgresPortfolioRepository implements IPortfolioRepository {
  private static INSTANCE: IPortfolioRepository;

  private connection: Pool;

  private constructor() {
    if (!process.env.DATABASE_URL) config();
    this.connection = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }

  static getInstance(): IPortfolioRepository {
    if (!this.INSTANCE) this.INSTANCE = new PostgresPortfolioRepository();
    return this.INSTANCE;
  }

  async getAll(): Promise<Portfolio[]> {
    const { rows } = await this.connection.query('SELECT * FROM portfolio');

    return rows;
  }

  async getById(id: number): Promise<Portfolio> {
    const {
      rows,
    } = await this.connection.query('SELECT * FROM portfolio WHERE id=$1', [
      id,
    ]);

    return rows[0];
  }

  async save(portfolio: Portfolio): Promise<void> {
    const { description, details } = portfolio;

    await this.connection.query(
      'INSERT INTO portfolio (description, details) VALUES ($1, $2)',
      [description, details]
    );
  }

  async update(portfolio: Portfolio): Promise<void> {
    const { id, description, details } = portfolio;

    await this.connection.query(
      'UPDATE portfolio SET description=$1, details=$2 WHERE id=$3',
      [description, details, id]
    );
  }

  async delete(id: number): Promise<void> {
    await this.connection.query('DELETE FROM portfolio WHERE id=$1', [id]);
  }
}
