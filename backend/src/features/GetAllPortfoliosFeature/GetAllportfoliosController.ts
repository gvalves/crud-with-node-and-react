import { Request, Response } from 'express';
import { GetAllPortfoliosFeature } from './GetAllPortfoliosFeature';

export class GetAllPortfoliosController {
  constructor(private getAllPortfoliosFeature: GetAllPortfoliosFeature) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const data = await this.getAllPortfoliosFeature.execute();

      return res.status(200).json({ data });
    } catch (err) {
      return res.status(400).json({
        message: err || 'Unexpected error!',
      });
    }
  }
}
