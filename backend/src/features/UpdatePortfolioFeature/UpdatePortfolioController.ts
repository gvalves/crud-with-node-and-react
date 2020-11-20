import { Request, Response } from 'express';
import { UpdatePortfolioFeature } from './UpdatePortfolioFeature';

export class UpdatePortfolioController {
  constructor(private updatePortfolioFeature: UpdatePortfolioFeature) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      const { description, details } = req.params;

      await this.updatePortfolioFeature.execute({
        id,
        description,
        details,
      });

      return res.status(200);
    } catch (err) {
      return res.status(400).json({
        message: err || 'Unexpected error!',
      });
    }
  }
}
