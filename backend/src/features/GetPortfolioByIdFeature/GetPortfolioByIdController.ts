import { Request, Response } from 'express';
import { GetPortfolioByIdFeature } from './GetPortfolioByIdFeature';

export class GetPortfolioByIdController {
  constructor(private getPortfolioByIdFeature: GetPortfolioByIdFeature) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);

      const data = await this.getPortfolioByIdFeature.execute(id);

      return res.status(200).json({ data });
    } catch (err) {
      return res.status(400).json({
        message: err || 'Unexpected error!',
      });
    }
  }
}
