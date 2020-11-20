import { Request, Response } from 'express';
import { Portfolio } from '../../entities';
import { APIResponse } from '../../types';
import { UpdatePortfolioFeature } from './UpdatePortfolioFeature';

export class UpdatePortfolioController {
  constructor(private updatePortfolioFeature: UpdatePortfolioFeature) {}

  async handle(
    req: Request,
    res: Response
  ): Promise<Response<APIResponse<Portfolio>>> {
    const apiResponse: APIResponse<Portfolio> = {
      msg: 'Updated portfolio with success!',
      error: false,
      data: [],
    };

    try {
      const id = Number(req.params.id);
      const { description, details } = req.params;

      await this.updatePortfolioFeature.execute({
        id,
        description,
        details,
      });

      return res.status(200).json(apiResponse);
    } catch (err) {
      apiResponse.msg = err || 'Unexpected error!';
      apiResponse.error = true;

      return res.status(400).json(apiResponse);
    }
  }
}
