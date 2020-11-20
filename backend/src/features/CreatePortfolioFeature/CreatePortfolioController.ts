import { Request, Response } from 'express';
import { CreatePortfolioFeature } from './CreatePortfolioFeature';

export class CreatePortfolioController {
  constructor(private createPortfolioFeature: CreatePortfolioFeature) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { description, details } = req.body;

      await this.createPortfolioFeature.execute({ description, details });

      return res.status(201);
    } catch (err) {
      return res.status(400).json({
        message: err || 'Unexpected error!',
      });
    }
  }
}
