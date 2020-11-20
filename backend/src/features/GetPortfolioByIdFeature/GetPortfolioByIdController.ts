import { Request, Response } from 'express';
import { Portfolio } from '../../entities';
import { APIResponse } from '../../types';
import { GetPortfolioByIdFeature } from './GetPortfolioByIdFeature';

export class GetPortfolioByIdController {
  constructor(private getPortfolioByIdFeature: GetPortfolioByIdFeature) {}

  async handle(
    req: Request,
    res: Response
  ): Promise<Response<APIResponse<Portfolio>>> {
    const apiResponse: APIResponse<Portfolio> = {
      msg: 'Getted portfolio with success!',
      error: false,
      data: [],
    };

    try {
      const id = Number(req.params.id);

      apiResponse.data = [await this.getPortfolioByIdFeature.execute(id)];

      return res.status(200).json(apiResponse);
    } catch (err) {
      apiResponse.msg = err || 'Unexpected error!';
      apiResponse.error = true;

      return res.status(400).json(apiResponse);
    }
  }
}
