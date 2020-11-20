import { Request, Response } from 'express';
import { Portfolio } from '../../entities';
import { APIResponse } from '../../types';
import { CreatePortfolioFeature } from './CreatePortfolioFeature';

export class CreatePortfolioController {
  constructor(private createPortfolioFeature: CreatePortfolioFeature) {}

  async handle(
    req: Request,
    res: Response
  ): Promise<Response<APIResponse<Portfolio>>> {
    const apiResponse: APIResponse<Portfolio> = {
      msg: 'Created portfolio with success!',
      error: false,
      data: [],
    };

    try {
      const { description, details } = req.body;

      await this.createPortfolioFeature.execute({ description, details });

      return res.status(201).json(apiResponse);
    } catch (err) {
      apiResponse.msg = err || 'Unexpected error!';
      apiResponse.error = true;

      return res.status(400).json(apiResponse);
    }
  }
}
