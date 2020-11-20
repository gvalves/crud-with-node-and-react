import { Request, Response } from 'express';
import { Portfolio } from '../../entities';
import { APIResponse } from '../../types';
import { DeletePortfolioFeature } from './DeletePortfolioFeature';

export class DeletePortfolioController {
  constructor(private deletePortfolioFeature: DeletePortfolioFeature) {}

  async handle(
    req: Request,
    res: Response
  ): Promise<Response<APIResponse<Portfolio>>> {
    const apiResponse: APIResponse<Portfolio> = {
      msg: 'Deleted portfolio with success!',
      error: false,
      data: [],
    };

    try {
      const id = Number(req.params.id);

      await this.deletePortfolioFeature.execute(id);

      return res.status(200).json(apiResponse);
    } catch (err) {
      apiResponse.msg = err || 'Unexpected error!';
      apiResponse.error = true;

      return res.status(400).json(apiResponse);
    }
  }
}
