import { Request, Response } from 'express';
import { DeletePortfolioFeature } from './DeletePortfolioFeature';

export class DeletePortfolioController {
  constructor(private deletePortfolioFeature: DeletePortfolioFeature) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);

      await this.deletePortfolioFeature.execute(id);

      return res.status(200);
    } catch (err) {
      return res.status(400).json({
        message: err || 'Unexpected error!',
      });
    }
  }
}
